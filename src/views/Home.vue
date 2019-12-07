<template>
  <div class="home">
    <v-container>
      <div class="head">
        <h1 class="text-center display-3 my-4" style="color: #673939">Front End Web Developer</h1>
        <p
          class="text-center title font-weight-light"
        >Hi! Super excited you dropped by! I’m here to help your vision come to life. Whether, it’s starting your own website, launching your creative business, or helping your employees in maintaining / updating code. I'm your guy!</p>
      </div>

      <v-layout row class="body">
        <v-flex xs12 md5>
          <hr />
          <h1>As a student</h1>
          <p class="title font-weight-light">
            I graduated in
            <a
              href="https://www.sanbeda-alabang.edu.ph/bede/"
              target="_blank"
              class="link font-weight-bold"
            >San Beda College Alabang</a> with a bachelor's degree in Information Technology. In here I learned how to value my time and to respect everyone always. The benedictine values really helped me become a better person in general. This is where I discovered how fun web development really is!
          </p>
          <a href="https://jerardpelaez.jobs180.com/" target="_blank" style="text-decoration:none;">
            <v-btn>Preview my resume</v-btn>
          </a>
        </v-flex>

        <v-flex xs12 md5 offset-md2>
          <hr />
          <h1>As a trainee</h1>
          <p class="title font-weight-light">
            For my internship, I was a desktop support engineer for 7 months in
            <a
              href="https://allvalue.com.ph/"
              target="_blank"
              class="link1 font-weight-bold"
            >All Value Corp</a>. After graduating I took
            <a
              href="http://www.tesda.gov.ph/"
              class="link2 font-weight-bold"
            >TESDA</a> certifications specifically for web development and creative web design. In this bootcamps where I became a trainee I learned a lot about Vanilla JavaScript and Materialize CSS
          </p>

          <a href="https://github.com/jerardpelaez" target="_blank" style="text-decoration:none;">
            <v-btn>Check out my Github</v-btn>
          </a>
        </v-flex>
        <v-flex xs12 class="works">
          <p class="display-2 text-center font-weight-light">My Portfolio</p>
        </v-flex>
      </v-layout>
      <v-layout row class="portfolio">
        <v-flex xs12 md4>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto ma-3" color="grey lighten-4" max-width="350">
              <v-img :aspect-ratio="16/9" src="@/assets/one.png">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Chat App</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">
                <a href="https://chat-app-475cd.firebaseapp.com/" target="_blank">
                  <v-btn absolute color="#CAA173" class="white--text" fab large right top>
                    <v-icon>mdi-link-variant</v-icon>
                  </v-btn>
                </a>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 md4>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto ma-3" color="grey lighten-4" max-width="350">
              <v-img :aspect-ratio="16/9" src="@/assets/two.png">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Master Smoothies</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">
                <a href="https://master-smoothies.firebaseapp.com/#/" target="_blank">
                  <v-btn absolute color="#CAA173" class="white--text" fab large right top>
                    <v-icon>mdi-link-variant</v-icon>
                  </v-btn>
                </a>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md4>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto ma-3" color="grey lighten-4" max-width="350">
              <v-img :aspect-ratio="16/9" src="@/assets/three.png">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Quazzo Theme UI</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">
                <a href="https://quazzo-project.netlify.com/" target="_blank">
                  <v-btn absolute color="#CAA173" class="white--text" fab large right top>
                    <v-icon>mdi-link-variant</v-icon>
                  </v-btn>
                </a>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md4>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto ma-3" color="grey lighten-4" max-width="350">
              <v-img :aspect-ratio="16/9" src="@/assets/four.png">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Sass Project</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">
                <a href="https://sass-project-full.netlify.com/" target="_blank">
                  <v-btn absolute color="#CAA173" class="white--text" fab large right top>
                    <v-icon>mdi-link-variant</v-icon>
                  </v-btn>
                </a>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md4>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto ma-3" color="grey lighten-4" max-width="350">
              <v-img :aspect-ratio="16/9" src="@/assets/five.png">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Madmin Theme UI</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">
                <a href="https://madmin-design.netlify.com/" target="_blank">
                  <v-btn absolute color="#CAA173" class="white--text" fab large right top>
                    <v-icon>mdi-link-variant</v-icon>
                  </v-btn>
                </a>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md4>
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto ma-3" color="grey lighten-4" max-width="350">
              <v-img :aspect-ratio="16/9" src="@/assets/six.png">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >Weather App</div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative;">
                <a href="https://github.com/jerardpelaez/weather_app" target="_blank">
                  <v-btn absolute color="#CAA173" class="white--text" fab large right top>
                    <v-icon>mdi-link-variant</v-icon>
                  </v-btn>
                </a>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  }
};
</script>

<style>
.home {
  background: #faf3eb;
}
.home .head {
  margin-top: 100px;
}
.home .body {
  margin-top: 100px;
}
.body .link {
  color: red;
  text-decoration: none;
}
.body .link1 {
  color: green;
  text-decoration: none;
}
.body .link2 {
  color: blue;
  text-decoration: none;
}
.body hr {
  max-width: 350px;
  border: 1px solid grey;
}
.body h1 {
  color: #685d5d;
}
.body .works {
  margin-top: 100px;
}
.body p {
  text-align: justify;
}
.portfolio .image {
  border: 2px solid grey;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>