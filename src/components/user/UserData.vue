<template>
  <v-card>
    <v-card-title primary-title>
      <h2>{{ $t('user.title') }}</h2>
    </v-card-title>
    <v-card-text>
      <table class="table">
        <tr>
          <td>ID</td>
          <td>{{ userData._id }}</td>
        </tr>
        <tr>
          <td>{{ $t('user.username') }}</td>
          <td>{{ userData.username }}</td>
        </tr>
        <tr>
          <td>{{ $t('user.role') }}</td>
          <td>{{ userData.role }}</td>
        </tr>
        <tr>
          <td>{{ $t('user.firstname') }}</td>
          <td>{{ userData.firstname }}</td>
        </tr>
        <tr>
          <td>{{ $t('user.lastname') }}</td>
          <td>{{ userData.lastname }}</td>
        </tr>
      </table>
    </v-card-text>
  </v-card>
</template>

<script>
import api from '@/services/api-service'

export default {
  name: 'UserData',
  mounted() {
    this.load()
  },
  computed: {
    userData() {
      return this.$store.getters.USER || {}
    }
  },
  methods: {
    load() {
      if (this.$store.getters.TOKEN) {
        return
      }

      api
        .authenticate(
          this.$store.getters.USERNAME,
          this.$store.getters.PASSWORD
        )
        .then(res => {
          this.$store.commit('SET_USER', res.data)
        })
        .catch(err => console.dir(err))
    }
  }
}
</script>

<style></style>
