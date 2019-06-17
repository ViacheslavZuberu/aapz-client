<template>
  <v-card height="100%">
    <v-card-title>
      <h2>{{ title }}</h2>
    </v-card-title>
    <v-card-text v-show="error">{{ error }}</v-card-text>
    <v-card-text v-if="!loading">
      <v-data-table :headers="headers" :items="events" class="elevation-1">
        <template v-slot:items="props">
          <td>{{ props.item.type }}</td>
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.place }}</td>
          <td>{{ formatDateTime(props.item.datetime, $i18n.locale) }}</td>
          <td v-show="attendance">
            <v-checkbox
              disabled
              class="justify-center mt-3"
              :input-value="props.item.attended"
            ></v-checkbox>
          </td>
          <td class="justify-center layout px-0">
            <v-icon small @click="goToInfoPage(props.item)">info</v-icon>
          </td>
        </template>
        <template v-slot:no-data>
          <v-alert :value="true" type="info">{{ $t('user.noData') }}</v-alert>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-text v-else>
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script>
import { formatDateTime } from '@/services/custom/dates'

export default {
  props: ['title', 'events', 'attendance'],
  data() {
    return {
      loading: false,
      error: null
    }
  },
  methods: {
    formatDateTime,
    goToInfoPage(event) {
      this.$router.push(`/event/${event._id}`)
    }
  },
  computed: {
    headers() {
      let heads = [
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
        }
      ]

      if (this.attendance) {
        heads.push({
          text: this.$t('events.attended'),
          sortable: true,
          value: 'attended'
        })
      }

      heads.push({
        text: this.$t('user.actions'),
        sortable: false
      })

      return heads
    }
  }
}
</script>
