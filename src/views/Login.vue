<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ $t('login.sign_in') }}</h3>
            </div>
          </v-card-title>
          <v-card-text v-if="!loading">
            <v-form>
              <v-text-field
                v-model="username"
                :label="$t('login.username')"
                placeholder="Username"
                required
              />

              <v-text-field
                v-model="password"
                :label="$t('login.password')"
                :append-icon="showPass ? 'visibility' : 'visibility_off'"
                :type="showPass ? 'text' : 'password'"
                @click:append="showPass = !showPass"
                placeholder="Password"
                required
              />
              <div v-if="errors">{{ errors }}</div>
              <v-btn @click="signIn">{{ $t('login.btn') }}</v-btn>
            </v-form>
          </v-card-text>
          <v-card-text v-else>{{ $t('other.loading') }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '@/services/api-service'

export default {
  name: 'Login',
  data() {
    return {
      showPass: false,
      username: null,
      password: null,
      errors: null,
      loading: false
    }
  },
  methods: {
    signIn() {
      this.loading = true
      api
        .authenticate(this.username, this.password)
        .then(res => {
          this.$store.commit('SET_USER', res.data)
          this.$store.commit('SET_CREDENTIALS', {
            username: this.username,
            password: this.password
          })
          this.$router.push('/')
        })
        .catch(err => (this.errors = err.response.data.message))
        .finally(() => {
          this.loading = true
        })
    }
  }
}
</script>
