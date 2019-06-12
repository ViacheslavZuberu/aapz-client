<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm82>
        <v-card>
          <v-card-title>Events</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="events"
              class="elevation-1"
            >
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
                <p v-if="loading">{{ $t('other.loading') }}</p>
                <v-btn v-else color="primary" @click="load">Reload</v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/services/api-service'

export default {
  data() {
    return {
      events: null,
      error: null,
      loading: false
    }
  },
  created() {},
  methods: {
    load() {
      this.loading = true
      api
        .getAllEvents()
        .then(result => {
          this.events = result.data
        })
        .catch(error => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  computed: {
    headers() {
      return []
    }
  }
}
</script>
