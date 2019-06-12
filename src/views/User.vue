<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <UserData></UserData>
      </v-flex>
      <v-flex xs12 sm8 v-show="role === 'Admin'">
        <AllUsers></AllUsers>
      </v-flex>
      <v-flex xs12 sm4>
        <UserStats></UserStats>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserData from '@/components/user/UserData'
import AllUsers from '@/components/user/AllUsers'
import UserStats from '@/components/user/UserStats'

export default {
  name: 'User',
  components: {
    UserData,
    AllUsers,
    UserStats
  },
  computed: {
    role() {
      return this.$store.getters.ROLE
    }
  }
}
</script>

<style></style>
