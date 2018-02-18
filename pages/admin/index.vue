<template>
  <v-layout justify-center align-center>
    <v-flex>
      <div class="admin-page">
        <section class="new-post">
          <v-btn color="secondary" nuxt @click="$router.push('/admin/new-post')">Create Post</v-btn>
          <v-btn id="logout-btn" nuxt outline @click="onLogout">Logout</v-btn>
        </section>
        <section class="existing-posts">
          <h1>Existing Posts</h1>
          <PostList
            isAdmin
            :posts="loadedPosts" />
        </section>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  layout: 'admin',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
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
</style>
