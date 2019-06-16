<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-toolbar card color="grey lighten-5">
            <v-btn icon @click="$router.go(-1)">
              <v-icon>arrow_back</v-icon>
            </v-btn>

            <v-toolbar-title>{{ $t('events.info') }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <event :data="event"></event>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <event-users @update="load" :users="subscribedUsers"></event-users>
        <v-progress-linear
          v-show="loading"
          :indeterminate="true"
        ></v-progress-linear>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Event from '@/components/events/Event'
import EventUsers from '@/components/user/EventUsers'
import api from '@/services/api-service'

export default {
  props: ['id'],
  components: {
    Event,
    EventUsers
  },
  created() {
    this.load()
  },
  data() {
    return {
      event: {},
      subscribedUsers: [],
      loading: false
    }
  },
  methods: {
    load() {
      this.loading = true
      api
        .getManagerEvent(this.$store.getters.TOKEN, this.id)
        .then(response => {
          const { subscribedUsers, ...event } = response.data
          this.subscribedUsers = subscribedUsers
          this.event = event
          this.event.subscribers = subscribedUsers.length
        })
        .catch(error => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
