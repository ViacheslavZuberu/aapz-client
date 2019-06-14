<template>
  <v-card>
    <v-card-title primary-title>
      <h2>{{ $t('user.title') }}</h2>
    </v-card-title>
    <v-card-text>
      <v-list two-line>
        <!-- Id -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>perm_identity</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ID</v-list-tile-title>
            <v-list-tile-sub-title>{{ userData._id }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Username -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>assignment_ind</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('user.username') }}</v-list-tile-title>
            <v-list-tile-sub-title>
              {{ userData.username }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Role -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>vpn_key</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('user.role') }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ userData.role }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- First Name -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('user.firstname') }}</v-list-tile-title>
            <v-list-tile-sub-title>
              {{ userData.firstname }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Last Name -->
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('user.lastname') }}</v-list-tile-title>
            <v-list-tile-sub-title>
              {{ userData.lastname }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
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
