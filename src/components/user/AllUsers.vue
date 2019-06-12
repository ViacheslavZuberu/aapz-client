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
          <td class="text-xs-right">{{ props.item.username }}</td>
          <td class="text-xs-right">{{ props.item.firstname }}</td>
          <td class="text-xs-right">{{ props.item.lastname }}</td>
          <td class="justify-center align-center layout px-0">
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="load">Reload</v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-text v-else>{{ $t('other.loading') }}</v-card-text>
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
    }
  }
}
</script>

<style></style>
