<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="brown lighten-1">
        <strong class="subheading">Get connected with me on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="(footer_link, index) in footer_links" :key="index" class="mx-4" dark icon>
          <a :href="footer_link.link" target="_blank" style="text-decoration:none">
            <v-icon size="40px" color="grey darken-3">{{ footer_link.icon }}</v-icon>
          </a>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      icons: ["mdi-facebook-box", "mdi-linkedin-box"],
      footer_links: [
        {
          link: "https://www.linkedin.com/in/jerard-pelaez-770a46198/",
          icon: "mdi-linkedin-box"
        },
        {
          link: "https://www.facebook.com/jerard.pelaez",
          icon: "mdi-facebook-box"
        }
      ]
    };
  }
};
</script>
<style>

<style>
