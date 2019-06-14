<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">Welcome to VService</h1>
        <p class="subheading font-weight-regular">
          This service was created in order to make visiting easier and more
          flexible!
        </p>
        <p class="subheading font-weight-regular">
          You can eather become a visitor or the event host.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>
