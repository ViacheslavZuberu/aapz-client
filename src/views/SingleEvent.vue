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
            <v-list two-line>
              <!-- Title -->
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>title</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ $t('events.title') }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ event.title }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!-- Type -->
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>event</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('events.type') }}</v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ event.type }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!-- Place -->
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>place</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ $t('events.place') }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ event.place }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!-- Last Name -->
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>date_range</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $t('events.date') }}</v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ formatDate(event.datetime) }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>
          <v-card-text v-else>{{ $t('other.loading') }}</v-card-text>
          <v-card-text v-show="error">
            <v-alert :value="true" type="error">{{
              $t('other.error')
            }}</v-alert>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/services/api-service'
import { formatDate } from '@/services/custom/dates'

export default {
  props: ['id'],
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
    formatDate,
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
