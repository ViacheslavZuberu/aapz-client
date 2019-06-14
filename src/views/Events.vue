<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <Events :title="$t('events.all')" :events="events"></Events>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/services/api-service'
import Events from '@/components/events/Events'
import { formatDate } from '@/services/custom/dates'

export default {
  components: {
    Events
  },
  data() {
    return {
      events: [],
      error: null,
      loading: false
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      api
        .getAllEvents(this.$store.getters.TOKEN)
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
    toDisplayTime(dateTime) {
      return formatDate(dateTime)
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
        }
      ]
    }
  }
}
</script>
