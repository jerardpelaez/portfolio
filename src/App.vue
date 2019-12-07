<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
      <Footer />
    </v-content>
  
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",

  components: {
    Navbar,Footer
  },

  data: () => ({
    //
  })
};
</script>