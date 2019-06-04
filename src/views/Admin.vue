<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserData></UserData>
      </v-flex>
      <v-flex xs12 sm6>
        <AllUsers></AllUsers>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserData from '@/components/user/UserData'
import AllUsers from '@/components/user/AllUsers'

export default {
  name: 'Admin',
  components: {
    UserData,
    AllUsers
  }
}
</script>

<style></style>
