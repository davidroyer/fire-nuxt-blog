<template>
  <div class="admin-page">

    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList
        isAdmin
        :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>

export default {
  middleware: ['check-auth', 'auth'],
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
