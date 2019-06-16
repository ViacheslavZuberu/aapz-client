<template>
  <v-card height="100%">
    <v-card-title>
      <h2>{{ $t('user.stats') }}</h2>
    </v-card-title>
    <v-card-text v-show="error">{{ error }}</v-card-text>
    <v-card-text v-if="!loading">
      <stats-chart v-if="data" :chart-data="data"></stats-chart>
      <v-alert v-else :value="true" type="info">
        {{ $t('user.noData') }}
      </v-alert>
    </v-card-text>
    <v-card-text v-else>
      <v-progress-linear :indeterminate="true"></v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script>
import api from '@/services/api-service'
import StatsChart from '@/components/charts/UserStats'

export default {
  components: { StatsChart },
  data() {
    return {
      loading: false,
      error: null,
      data: null
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      api
        .getStats(this.$store.getters.TOKEN)
        .then(result => {
          this.prepareData(result.data)
        })
        .catch(error => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    },
    prepareData(data) {
      this.data = data.eventsCount
        ? {
            datasets: [
              {
                backgroundColor: [
                  '#29cc55',
                  '#3498db',
                  '#95a5a6',
                  '#9b59b6',
                  '#f1c40f',
                  '#e74c3c',
                  '#34495e'
                ],
                data: data.stats.map(value => value.percentage)
              }
            ],

            labels: data.stats.map(value => value.type)
          }
        : null
    }
  }
}
</script>
