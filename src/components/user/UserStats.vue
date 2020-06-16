<template>
  <v-card height="100%">
    <v-container fill-height justify-center align-center>
      <v-flex v-if="!loading">
        <stats-chart v-if="data" :chart-data="data"></stats-chart>
        <v-alert v-else :value="true" type="info">
          {{ $t('user.noData') }}
        </v-alert>
      </v-flex>
      <v-flex v-else d-flex justify-center align-center>
        <v-progress-circular
          :indeterminate="true"
          color="primary">
        </v-progress-circular>
      </v-flex>
    </v-container>
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

//
<v-card height="100%">
//     

//   </v-card>
