<template>
  <div id="navbar">
    <nav class="navbar navbar-light bg-light">
      <a @click="home" class="navbar-brand" href="#">VService</a>
      <ul class="nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/hello">Hello</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test">Test</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item ml-auto">
          <select class="form-control" v-model="$i18n.locale">
            <option
              v-for="(lang, i) in langs"
              :key="`Lang${i}`"
              :value="lang"
              >{{ lang }}</option
            >
          </select>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      langs: ['en', 'ukr']
    }
  },
  methods: {
    home() {
      switch (this.$store.getters.ROLE) {
        case 'Admin':
          this.$router.push('admin')
          break
      }
    }
  }
}
</script>
