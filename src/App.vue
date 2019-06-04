<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile :to="{ path: '/' }">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Account -->
        <v-list-group
          prepend-icon="account_circle"
          value="true"
          v-show="!isLogged"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Account</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile :to="{ path: '/login' }">
            <v-list-tile-action>
              <v-icon>assignment_ind</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile :to="{ path: '/register' }">
            <v-list-tile-action>
              <v-icon>assignment_ind</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Register</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-for="(lang, i) in langs"
          :key="`Lang${i}`"
          @click="$i18n.locale = lang"
        >
          <v-list-tile-action>
            <v-icon>language</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ lang }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $t('visit_service') }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <v-flex class="white--text text-xs-center">&copy; {{ year }}</v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      langs: ['en', 'ukr'],
      year: new Date().getFullYear(),
      drawer: false
    }
  },
  computed: {
    isLogged() {
      return this.$store.getters.LOGGED_IN
    }
  }
}
</script>
