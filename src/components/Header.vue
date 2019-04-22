<template>
  <v-toolbar app>
    <v-menu bottom offset-y>
      <template v-slot:activator="{ on }">
        <div v-if="!isAuthenticated">
          <v-btn flat class="font-weight-light" v-on="on">sign in / join us</v-btn>
        </div>
        <div v-else>
        <v-btn flat class="font-weight-light" @click='logout'>logout</v-btn>
        </div>
      </template>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index">
          <v-btn flat class="font-weight-light" :to="item.view">{{ item.title }}</v-btn>
        </v-list-tile>
      </v-list>
    </v-menu>
    <router-link to="/">
      <v-toolbar-title to="/">fabble</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>search</v-btn>
      <v-btn flat>basket</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    items: [
      { title: "sign in", view: "sign-in" },
      { title: "join us", view: "join-us" }
    ]
  }),
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("userLogout");
    }
  }
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
