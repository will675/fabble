<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <v-btn flat class="font-weight-light">sign in / register</v-btn>
        <span>fabble</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>search</v-btn>
      <v-btn flat>basket</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloFabble from './components/HelloFabble'

export default {
  name: 'App',
  // components: {
  //   HelloFabble
  // },
  data () {
    return {
      //
    }
  }
}
</script>
