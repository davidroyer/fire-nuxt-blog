<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Admin</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
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
    middleware: ['check-auth', 'auth'],
    // meta: {
    //   requiresAuth: true,
    //   works: true
    // },
    props: {
      source: String
    }
  }
</script>
