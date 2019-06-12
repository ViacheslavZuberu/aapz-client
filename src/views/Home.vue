<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  components: {
    HelloWorld
  },
  created() {
    if (this.$store.getters.LOGGED_IN) {
      this.$router.push({ name: 'user' })
    }
  }
}
</script>
