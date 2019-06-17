<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile :to="{ path: '/' }">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('menu.home') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Account -->
        <v-list-group prepend-icon="account_circle" value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>{{ $t('menu.account') }}</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile :to="{ path: '/login' }" v-show="!isLogged">
            <v-list-tile-action>
              <v-icon>assignment_ind</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('menu.login') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile :to="{ path: '/register' }" v-show="!isLogged">
            <v-list-tile-action>
              <v-icon>assignment_ind</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('menu.register') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile :to="{ path: '/events' }" v-show="isLogged">
            <v-list-tile-action>
              <v-icon>event</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('menu.events') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            :to="{ path: '/manager/events' }"
            v-show="hasManagerPerms"
          >
            <v-list-tile-action>
              <v-icon>event</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ $t('menu.managerEvents') }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-for="(item, i) in langs"
          :key="`Lang${i}`"
          @click="changeLang(item.code)"
        >
          <v-list-tile-action>
            <v-icon>language</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.lang }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-show="isLogged" @click="exit">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('login.exit') }}</v-list-tile-title>
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
      <v-flex class="white--text text-xs-center"
        >&copy; Viacheslav Sheviakov - {{ year }}</v-flex
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      langs: [
        { code: 'en', lang: 'English' },
        { code: 'ukr', lang: 'Українська' }
      ],
      year: new Date().getFullYear(),
      drawer: false
    }
  },
  computed: {
    isLogged() {
      return this.$store.getters.LOGGED_IN
    },
    hasManagerPerms() {
      return (
        this.$store.getters.ROLE === 'Admin' ||
        this.$store.getters.ROLE === 'Meetup Manager'
      )
    }
  },
  methods: {
    exit() {
      this.$store.dispatch('logout')
      this.$router.replace('/')
    },
    changeLang(code) {
      this.$i18n.locale = code
      this.$vuetify.lang.current = code
    }
  }
}
</script>
