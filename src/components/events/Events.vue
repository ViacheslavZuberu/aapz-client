<template>
  <v-card>
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
          <td>{{ toDisplayTime(props.item.datetime) }}</td>
          <td class="justify-center layout px-0">
            <v-icon small @click="goToInfoPage(props.item)">info</v-icon>
          </td>
        </template>
        <template v-slot:no-data>
          <p v-if="loading">{{ $t('other.loading') }}</p>
          <p v-else>{{ $t('user.noData') }}</p>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-text v-else>{{ $t('other.loading') }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'events'],
  data() {
    return {
      loading: false,
      error: null
    }
  },
  methods: {
    toDisplayTime(dateTime) {
      let date = new Date(dateTime)

      return date.toLocaleDateString()
    },
    goToInfoPage(event) {
      this.$router.push(`/event/${event._id}`)
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
          text: this.$t('user.actions'),
          sortable: false
        }
      ]
    }
  }
}
</script>
