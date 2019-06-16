<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <h2>{{ $t('login.registration') }}</h2>
          </v-card-title>
          <v-card-text v-if="!loading">
            <v-form>
              <v-text-field
                v-model="username"
                :label="$t('login.username')"
                placeholder="JoDoe2019"
                required
              />

              <v-text-field
                v-model="password"
                :label="$t('login.password')"
                :append-icon="showPass ? 'visibility' : 'visibility_off'"
                :type="showPass ? 'text' : 'password'"
                @click:append="showPass = !showPass"
                placeholder="********"
                required
              />

              <v-text-field
                v-model="firstName"
                :label="$t('login.firstname')"
                placeholder="John"
              />

              <v-text-field
                v-model="lastName"
                :label="$t('login.lastname')"
                placeholder="Doe"
              />

              <v-text-field
                v-model="email"
                :label="$t('login.email')"
                type="email"
                placeholder="test@example.com"
              />

              <div v-if="errors">{{ errors }}</div>
              <v-btn @click="register">{{ $t('login.registerBtn') }}</v-btn>
            </v-form>
          </v-card-text>
          <v-card-text v-else>
            <v-progress-linear :indeterminate="true"></v-progress-linear>
          </v-card-text>
          <v-card-text v-show="error">{{ error }}</v-card-text>
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
      showPass: false,
      username: null,
      password: null,
      firstName: null,
      lastName: null,
      email: null,
      loading: false,
      error: null
    }
  },
  methods: {
    register() {
      this.loading = true
      api
        .register({
          username: this.username,
          password: this.password,
          firstname: this.firstName,
          lastname: this.lastName,
          email: this.email
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => {
          this.error = err
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style></style>
