<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-toolbar card color="grey lighten-5">
            <v-btn icon @click="back()">
              <v-icon>arrow_back</v-icon>
            </v-btn>

            <v-toolbar-title>{{ $t('events.info') }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              flat
              color="success"
              v-show="!event.isSubscribed"
              @click="subscribe"
              >{{ $t('events.subscribe') }}</v-btn
            >
            <v-btn
              flat
              color="warning"
              v-show="event.isSubscribed"
              @click="unsubscribe"
              >{{ $t('events.unsubscribe') }}</v-btn
            >
          </v-toolbar>

          <v-card-text v-if="!loading && !error">
            <event :data="event"></event>
          </v-card-text>
          <v-card-text v-else>
            <v-progress-linear :indeterminate="true"></v-progress-linear>
          </v-card-text>
          <v-card-text v-show="error">
            <v-alert :value="true" type="error">
              {{ $t('other.error') }}
            </v-alert>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/services/api-service'
import Event from '@/components/events/Event'

export default {
  props: ['id'],
  components: {
    Event
  },
  data() {
    return {
      loading: false,
      event: {},
      error: null
    }
  },
  created() {
    this.load()
  },
  methods: {
    subscribe() {
      this.loading = true
      api
        .subscribe(this.$store.getters.TOKEN, this.id)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
          this.load()
        })
    },
    unsubscribe() {
      this.loading = true
      api
        .unsubscribe(this.$store.getters.TOKEN, this.id)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
          this.load()
        })
    },
    load() {
      this.loading = true
      api
        .getEvent(this.$store.getters.TOKEN, this.id)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
