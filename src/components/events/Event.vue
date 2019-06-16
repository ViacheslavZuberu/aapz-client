<template>
  <v-list two-line>
    <!-- Title -->
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>title</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t('events.title') }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ data.title }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <!-- Type -->
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>event</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t('events.type') }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ data.type }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <!-- Place -->
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>place</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t('events.place') }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ data.place }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <!-- Last Name -->
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>date_range</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t('events.date') }}</v-list-tile-title>
        <v-list-tile-sub-title>{{
          formatDateTime(data.datetime, $i18n.locale)
        }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <!-- Sunscribers Count -->
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>people</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t('events.subscribed') }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ data.subscribers }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <!-- Status -->
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>info</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t('events.status') }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ data.status }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { formatDateTime } from '@/services/custom/dates'

export default {
  name: 'SingleEvent',
  props: ['data'],
  methods: {
    formatDateTime
  }
}
</script>
