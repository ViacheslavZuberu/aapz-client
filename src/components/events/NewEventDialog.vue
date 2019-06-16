<template>
  <v-dialog persistent max-width="600px" v-model="dialog">
    <v-btn flat fab color="success" slot="activator">
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-card-title primary-title>
        <h2>{{ $t('events.new') }}</h2>
      </v-card-title>
      <v-progress-linear
        :indeterminate="true"
        v-show="loading"
      ></v-progress-linear>
      <v-card-text>
        <v-form ref="eventForm">
          <v-text-field
            :label="$t('events.title')"
            :rules="rules"
            prepend-icon="title"
            v-model="title"
          ></v-text-field>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-menu
                v-model="dateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :value="formattedDate()"
                    :label="$t('events.date')"
                    :rules="filledRule"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  :locale="$i18n.locale"
                  @input="dateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex xs12 sm6 class="pl-3">
              <v-menu
                ref="menu"
                v-model="timeMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="time"
                    :rules="filledRule"
                    :label="$t('events.time')"
                    prepend-icon="access_time"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="timeMenu"
                  v-model="time"
                  :locale="$i18n.locale"
                  @click:minute="$refs.menu.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-flex>
          </v-layout>
          <v-select
            prepend-icon="business"
            v-model="type"
            :rules="filledRule"
            :items="types"
            :label="$t('events.type')"
          ></v-select>
          <v-text-field
            v-model="place"
            :rules="rules"
            prepend-icon="place"
            :label="$t('events.place')"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-flex xs12 text-xs-right mt-3>
            <v-btn color="primary" :disabled="loading" round @click="submit">{{
              $t('actions.create')
            }}</v-btn>
            <v-btn color="error" round @click="dialog = false">{{
              $t('actions.close')
            }}</v-btn>
          </v-flex>
        </v-form>
      </v-card-text>
      <v-card-text v-show="error">{{ error }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { formatDate } from '@/services/custom/dates'
import api from '@/services/api-service'

export default {
  data() {
    return {
      dialog: false,
      title: '',
      place: '',
      type: '',
      types: ['Meeting', 'Competition', 'Concert', 'Flashmob', 'Conference'],
      time: null,
      date: null,
      dateMenu: false,
      timeMenu: false,
      rules: [v => v.length >= 3 || this.$t('rules.min3')],
      filledRule: [v => !!v || this.$t('rules.empty')],
      loading: false,
      error: null
    }
  },
  methods: {
    formattedDate() {
      return this.date ? formatDate(this.date, this.$i18n.locale) : ''
    },
    submit() {
      if (this.$refs.eventForm.validate()) {
        let date = new Date(this.date)
        date.setHours(this.time.split(':')[0])
        date.setMinutes(this.time.split(':')[1])

        let data = {
          title: this.title,
          type: this.type,
          datetime: date,
          place: this.place
        }

        this.loading = true

        api
          .createEvent(this.$store.getters.TOKEN, data)
          .then(() => {
            this.$emit('update')
            this.$refs.eventForm.reset()
            this.dialog = false
          })
          .catch(err => {
            this.error = err
          })
          .finally(() => {
            this.loading = false
          })
      }
    }
  }
}
</script>
