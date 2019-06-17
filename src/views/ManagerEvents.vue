<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-toolbar card color="grey lighten-5">
            <v-btn icon @click="$router.go(-1)">
              <v-icon>arrow_back</v-icon>
            </v-btn>

            <v-toolbar-title>{{ $t('manager.eventsTitle') }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <new-event-dialog @update="load"></new-event-dialog>
            <v-btn flat fab color="primary" @click="load">
              <v-icon>refresh</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text v-show="error">{{ error }}</v-card-text>
          <v-card-text v-if="!loading">
            <v-data-table
              :headers="headers"
              :items="events"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.type }}</td>
                <td>{{ props.item.title }}</td>
                <td>{{ props.item.place }}</td>
                <td>{{ formatDateTime(props.item.datetime, $i18n.locale) }}</td>
                <td>{{ props.item.subscribers }}</td>
                <td class="justify-center layout px-0">
                  <v-icon small @click="goToInfoPage(props.item)">info</v-icon>
                </td>
              </template>
              <template v-slot:no-data>
                <v-alert :value="true" type="info">{{
                  $t('user.noData')
                }}</v-alert>
              </template>
            </v-data-table>
          </v-card-text>
          <v-card-text v-else>
            <v-progress-linear :indeterminate="true"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/services/api-service'
import { formatDateTime } from '@/services/custom/dates'
import NewEventDialog from '@/components/events/NewEventDialog'

export default {
  data() {
    return {
      loading: false,
      events: [],
      error: null,
      dialog: false
    }
  },
  components: {
    NewEventDialog
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      api
        .getManagerEvents(this.$store.getters.TOKEN)
        .then(result => {
          this.events = result.data
        })
        .catch(error => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    },
    formatDateTime,
    goToInfoPage(event) {
      this.$router.push(`/manager/events/${event._id}`)
    }
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('events.type'),
          sortable: true,
          value: 'type'
        },
        {
          text: this.$t('events.title'),
          sortable: true,
          value: 'title'
        },
        {
          text: this.$t('events.place'),
          sortable: true,
          value: 'place'
        },
        {
          text: this.$t('events.date'),
          sortable: true,
          value: 'datetime'
        },
        {
          text: this.$t('events.subscribed'),
          sortable: true,
          value: 'subscribers'
        },
        {
          text: this.$t('user.actions'),
          sortable: false
        }
      ]
    }
  }
}
</script>
