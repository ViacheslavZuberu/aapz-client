<template>
  <div id="events">
    <div class="card">
      <div class="card-header">{{ $t('events.all') }}</div>
      <div class="card-body">
        <table class="table">
          <tr v-for="event in events" :key="event._id">
            <td>{{ event.title }}</td>
            <td>{{ event.type }}</td>
            <td>{{ event.place }}</td>
            <td>{{ event.datetime }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api-service'

export default {
  name: 'AllEvents',
  computed: {
    events() {
      return this.$store.getters.EVENTS
    }
  },
  created() {
    api
      .getAllEvents(this.$store.getters.TOKEN)
      .then(res => this.$store.commit('SET_EVENTS', res.data))
      .catch(err => console.dir(err))
  }
}
</script>

<style></style>
