const _ = require('lodash');
const pkg = require("./package");
const bodyParser = require("body-parser");
const axios = require("axios");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "WD Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My cool Web Development Blog"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: "stylesheet", href: "https://unpkg.com/vuetify/dist/vuetify.min.css" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fa923f", height: "4px", duration: 5000 },
  loadingIndicator: {
    name: "circle",
    color: "#fa923f"
  },

  /*
  ** Global CSS
  */
  css: ["~assets/styles/main.css", "~/assets/styles/app.styl"],
// ~/assets/style/app.styl
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/core-components.js",
    "~plugins/date-filter.js",
    '~/plugins/vuetify.js',
    { src: '~/plugins/vue2-editor.js', ssr: false },
    { src: '~/plugins/mavon-editor.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: process.env.BASE_URL || "https://nuxtfireapi.firebaseio.com",
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL || "https://nuxtfireapi.firebaseio.com",
    fbAPIKey: "AIzaSyDi-EfdKQoaQ1klE4dhv87TzHEC_3NvnsM"
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },
  router: {
    // middleware: 'router-meta'
  },
  // serverMiddleware: [bodyParser.json(), "~/api"],
  generate: {
    routes: function() {
      return axios.get('https://nuxtfireapi.firebaseio.com/posts.json')
      .then((res) => {
        return _.map(res.data, function(post, key) {
          return `/fire/${post.slug}`
        })

      })
    }
    // routes: function() {
    //   return axios
    //     .get('https://nuxtfireapi.firebaseio.com/posts.json')
    //     .then(res => {
    //       const routes = [];
    //       for (const slug in res.data) {
    //         routes.push({
    //           route: "/posts/" + slug,
    //           payload: {postData: res.data[slug]}
    //         });
    //       }
    //       return routes;
    //     });
    //   }
    //     // return _.map(res.data, function(post, key) {
    //     //   return `/fire/${post.slug}`
    //     // })
    //

    // routes: function() {
    //   return axios
    //     .get("https://nuxtfireapi.firebaseio.com/posts.json")
    //     .then(res => {
    //       const routes = [];
    //       for (const key in res.data) {
    //         routes.push({
    //           route: "/posts/" + key,
    //           payload: {postData: res.data[key]}
    //         });
    //       }
    //       return routes;
    //     });
    // }
  }
};
