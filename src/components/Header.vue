<template>
  <v-toolbar app>
    <v-menu bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn flat class="font-weight-light" v-on="on">sign in / join us</v-btn>
      </template>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index">
          <v-btn flat class="font-weight-light" :to="item.view">{{ item.title }}</v-btn>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-toolbar-title>
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
  name: "Header",
  data: () => ({
      items: [
        { title: 'sign in',
        view: 'signin' },
        { title: 'join us',
        view: 'joinus' }
      ]
    })
};
</script>
