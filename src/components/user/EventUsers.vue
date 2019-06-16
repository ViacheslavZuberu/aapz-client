<template>
  <v-card>
    <v-toolbar card color="grey lighten-5">
      <v-toolbar-title>{{ $t('events.subscribedUsers') }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-data-table :headers="headers" :items="users" class="elevation-1">
        <template v-slot:items="props">
          <td>{{ props.item.user.username }}</td>
          <td>{{ props.item.user.firstname }}</td>
          <td>{{ props.item.user.lastname }}</td>
          <td>{{ props.item.user.role }}</td>
          <td>
            <v-switch
              class="mt-4"
              v-model="props.item.attended"
              @click.stop="updateState(props.item)"
            ></v-switch>
          </td>
        </template>
        <template v-slot:no-data>
          <v-alert :value="error" type="error">{{ error }}</v-alert>
          <v-alert :value="!error" type="info">{{ $t('user.noData') }}</v-alert>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import api from '@/services/api-service'

export default {
  props: ['users'],
  data() {
    return {
      error: null
    }
  },
  methods: {
    updateState(item) {
      api
        .changeAttendance(this.$store.getters.TOKEN, item._id, !item.attended)
        .then(() => {
          this.$emit('update')
        })
        .catch(err => {
          this.error = err
        })
    }
  },
  computed: {
    headers() {
      return [
        {
          text: this.$t('login.username'),
          value: 'users.username'
        },
        {
          text: this.$t('user.firstname'),
          value: 'users.firstname'
        },
        {
          text: this.$t('user.lastname'),
          value: 'users.lastname'
        },
        {
          text: this.$t('user.role'),
          value: 'users.role'
        },
        {
          text: this.$t('events.attended'),
          value: 'attended'
        }
      ]
    }
  }
}
</script>
