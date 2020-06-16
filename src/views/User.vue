<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex sm6 xl3>
        <UserData></UserData>
      </v-flex>
      <v-flex sm6 xl3>
        <UserStats></UserStats>
      </v-flex>
      <v-flex sm12 xl6>
        <Events
          :attendance="true"
          :title="$t('user.subEvents')"
          :events="events"
        ></Events>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-show="$store.getters.ROLE === 'Admin'">
      <v-flex xs12>
        <all-users></all-users>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/services/api-service'
import UserData from '@/components/user/UserData'
import AllUsers from '@/components/user/AllUsers'
import UserStats from '@/components/user/UserStats'
import Events from '@/components/events/Events'

export default {
  name: 'User',
  components: {
    UserData,
    AllUsers,
    UserStats,
    Events
  },
  data() {
    return {
      loadingEvents: false,
      eventsError: null,
      events: []
    }
  },
  created() {
    this.loadEvents()
  },
  computed: {
    role() {
      return this.$store.getters.ROLE
    }
  },
  methods: {
    userDataSize() {
      switch (this.$store.getters.ROLE) {
        case 'User':
          return 'sm6'
        default:
          return 'sm4'
      }
    },
    subEventsSize() {
      switch (this.$store.getters.ROLE) {
        case 'User':
          return 'sm12'
        case 'Admin':
          return 'sm8'
        default:
          return 'sm6'
      }
    },
    chartSize() {
      switch (this.$store.getters.ROLE) {
        case 'User':
          return 'sm6'
        case 'Admin':
          return 'sm4'
        default:
          return 'sm6'
      }
    },
    loadEvents() {
      this.loadingEvents = true
      api
        .getSubEvents(this.$store.getters.TOKEN)
        .then(result => {
          this.events = result.data
        })
        .catch(error => {
          this.eventsError = error
        })
        .finally(() => {
          this.loadingEvents = false
        })
    }
  }
}
</script>
