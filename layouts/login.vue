<template>
  <v-app id="inspire">

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Admin</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        Login Here!
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'home', title: 'Home', to: '/' },
        { icon: 'info', title: 'About', to: '/about' },
        { icon: 'account_box', title: 'Admin', to: '/admin' },
        { icon: 'bookmark', title: 'Fire Posts', to: '/fire' }
      ]
    }),

    props: {
      source: String
    }
  }
</script>
