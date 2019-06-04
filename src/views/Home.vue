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
    switch (this.$store.getters.ROLE) {
      case 'Admin':
        this.$router.push('/admin')
        break
      case 'Meetup Manager':
        console.log('Event Manager not emplemented yet!')
        break
      case 'User':
        console.log('User is not emplemented yet!')
        break
    }
  }
}
</script>
