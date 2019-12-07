<template>
  <div class="navbar">
    <v-app-bar app>
      <router-link to="/" class="title">
        <v-toolbar-title class="ml-5 display-2 font-weight-bold hidden-sm-and-down">Jerard Pelaez</v-toolbar-title>
        <v-toolbar-title class="ml-5 headline font-weight-bold hidden-md-and-up">Jerard Pelaez</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-for="(item, index) in  items" :key="index">
        <v-btn text :to="item.route" class="mr-1">
          <span class="mr-4">
            <v-icon>{{ item.icon }}</v-icon>
          </span>
          <span class="hidden-md-and-down">{{item.text}}</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      items: [
        { text: "Home", route: "/", icon: "mdi-home" },
        { text: "About", route: "about", icon: "mdi-information" }
      ]
    };
  }
};
</script>

<style>
.navbar .title {
  text-decoration: none;
  color: #cdb293;
}
.navbar .title :hover {
  text-shadow: 0 0 4px #cdb293;
}
</style>