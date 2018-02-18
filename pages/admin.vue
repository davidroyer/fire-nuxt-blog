<template>
  <v-layout justify-center align-center>
    <div id="dashboard">
      <v-menu
       :nudge-width="200"
        :close-on-content-click="true"
        v-model="showAdminMenu"
      >
        <v-btn large id="admin-menu-btn" color="secondary lighten-1" dark slot="activator" icon>
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-card>
          <v-card-title primary-title>
            <div class="title">Admin Menu</div>
          </v-card-title>

          <v-card-text>
            <div>
              <nuxt-link to="/admin">Admin</nuxt-link>
            </div>
            <div>
              <nuxt-link to="/admin/new-post">New Post</nuxt-link>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" nuxt @click="$router.push('/admin/new-post')">Create Post</v-btn>
            <v-btn id="logout-btn" nuxt outline @click="onLogout">Logout</v-btn>
          </v-card-actions>

        </v-card>
      </v-menu>

    </div>
    <div id="admin-children">
      <nuxt-child :key="$route.params.id"/>
    </div>
  </v-layout>
</template>

<script>

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  data () {
    return {
      showAdminMenu: false
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    handleUserLoginText() {
      return this.isLoggedIn ? 'Logout' : 'Login'
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/admin/auth");
    }
  }
};
</script>

<style scoped>
  .admin-page {
    text-align: center;
  }

  @media (min-width: 650px) {
    .new-post {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }

  #logout-btn {
    font-size: .9em !important;
  }
  .left {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .right {
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }
  #dashboard {
    font-size: .8em;
    font-weight: 500;
    /* padding: 1em 3.5em 1.5em 1.25em; */
    background: #f1f1f1;
    box-shadow: 0px 2px 3px -2px rgba(0, 0, 0, .25), 0px 2px 2px 0px rgba(0, 0, 0, .25), 0px 1px 1px -2px rgba(0, 0, 0, 0.26);
    z-index: 999;
    border-radius: 100%;
    position: fixed;
    right: 25px;
    top: 75px;
  }

  #admin-children {
    width: 100%;
  }
  #admin-menu-btn {
    margin: 0px;
    border-radius: 50%;
  }
</style>
