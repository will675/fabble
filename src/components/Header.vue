<template>
  <v-toolbar app>
    <v-btn flat class="font-weight-light">sign in / register</v-btn>
    <v-toolbar-title class="headline">
      <span>fabble</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>search</v-btn>
      <v-btn flat>basket</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>
