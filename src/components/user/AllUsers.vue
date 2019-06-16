<template>
  <v-card>
    <v-card-title primary-title>
      <h2>{{ $t('user.all') }}</h2>
    </v-card-title>
    <v-card-text v-show="error">{{ error }}</v-card-text>
    <v-card-text v-if="!loading">
      <v-data-table :headers="headers" :items="users" class="elevation-1">
        <template v-slot:items="props">
          <td>{{ props.item._id }}</td>
          <td>{{ props.item.username }}</td>
          <td>{{ props.item.firstname }}</td>
          <td>{{ props.item.lastname }}</td>
          <td>{{ props.item.role }}</td>
          <td class="justify-center align-center px-0">
            <v-icon
              v-show="props.item.role !== 'Admin'"
              small
              @click="deleteItem(props.item)"
              >delete</v-icon
            >
            <v-icon
              v-show="props.item.role === 'User'"
              small
              @click="upgradeUser(props.item)"
              >arrow_upward</v-icon
            >
            <v-icon
              v-show="props.item.role === 'Meetup Manager'"
              small
              @click="downgradeUser(props.item)"
              >arrow_downward</v-icon
            >
          </td>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="load">Reload</v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-text v-else>
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script>
import api from '@/services/api-service'

export default {
  name: 'AllUsers',
  data() {
    return {
      users: [],
      error: null,
      loading: true
    }
  },
  created() {
    this.load()
  },
  computed: {
    headers() {
      return [
        {
          text: 'ID',
          sortable: false,
          value: '_id'
        },
        {
          text: this.$t('login.username'),
          value: 'username'
        },
        {
          text: this.$t('user.firstname'),
          value: 'firstname'
        },
        {
          text: this.$t('user.lastname'),
          value: 'lastname'
        },
        {
          text: this.$t('user.role'),
          value: 'role'
        },
        {
          text: this.$t('user.actions'),
          sortable: false
        }
      ]
    }
  },
  methods: {
    load() {
      api
        .getAllUsers(this.$store.getters.TOKEN)
        .then(res => (this.users = res.data))
        .catch(err => (this.error = err))
        .finally(() => (this.loading = false))
    },
    deleteItem(item) {
      let isSure = confirm('Are you sure?')

      if (isSure) {
        this.loading = true
        api
          .deleteUser(this.$store.getters.TOKEN, item._id)
          .then(() => {
            this.load()
          })
          .catch(err => (this.error = err))
          .finally(() => (this.loading = false))
      }
    },
    upgradeUser(item) {
      this.loading = true
      api
        .upgradeUser(this.$store.getters.TOKEN, item._id)
        .then(() => {
          this.load()
        })
        .catch(err => (this.error = err))
        .finally(() => (this.loading = false))
    },
    downgradeUser(item) {
      this.loading = true
      api
        .downgradeUser(this.$store.getters.TOKEN, item._id)
        .then(() => {
          this.load()
        })
        .catch(err => (this.error = err))
        .finally(() => (this.loading = false))
    }
  }
}
</script>
