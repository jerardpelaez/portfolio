<template>
  <div class="about">
    <v-container>
      <div class="head">
        <h1 class="text-center display-2 my-4" style="color: #673939">About Jedd</h1>
        <p
          class="text-center title font-weight-light"
        >Producing quality websites and a user friendly experience</p>
        <hr />
      </div>
      <div class="body">
        <v-layout row>
          <v-flex xs12 md5>
            <v-img src="@/assets/me.png" class="image"></v-img>
          </v-flex>
          <v-flex xs12 md6 offset-1>
            <h1 class="text-center display-2 font-weight-bold ma-3">Good Day!</h1>
            <p
              class="ma-5 title font-weight-light"
            >I am a graduate of Information Technology and an aspiring Web Developer. My passion is in coding and I really love to discover and learn new things always!</p>
            <p
              class="ma-3 title font-weight-light"
            >Let me know if you need a developer who has some skills in:</p>
            <ul class="list text-center">
              <li class="ma-1 title font-weight-light">Responsive Web Design</li>
              <li class="ma-1 title font-weight-light">Vanilla JavaScript</li>
              <li class="ma-1 title font-weight-light">Vue.js</li>
              <li class="ma-1 title font-weight-light">Vuetify</li>
              <li class="ma-1 title font-weight-light">Firebase</li>
              <li class="ma-1 title font-weight-light">HTML5/CSS</li>
              <li class="ma-1 title font-weight-light">DOM Manipulation</li>
            </ul>
            <p class="ma-5 title font-weight-light">
              If you would like to find out more I suggest you go to the
              homepage and view my resume or my projects! You can also contact me through email or my phone number
            </p>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>


<script>
export default {};
</script>

<style>
.about {
  background: #faf3eb;
}
.about .head {
  margin-top: 100px;
}
.about .head hr {
  border: 1px solid #d5bda2;
}
.about .body {
  margin-top: 100px;
}
.about .body .image {
  border: 5px solid #d5bda2;
}
.about .body h1 {
  color: grey;
}
.list {
  list-style-type: none;
}
</style>