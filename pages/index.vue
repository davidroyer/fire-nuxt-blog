<template>
  <v-layout justify-center align-center>
    <v-flex>
      <div class="home-page">
        <!-- <pre>{{blogPosts}}</pre> -->
        <!-- <template v-for="post in blogPosts">
          <nuxt-link> </nuxt-link>
        </template> -->
        <!-- <PostList :posts="blogPosts" /> -->
        <v-list>
          <v-list-tile
            router
            v-for="(post, key) in blogPosts"
            :to="`/fire/${post.slug}`"
            :key="key"
            exact
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="post.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

<!--
        <v-list-item
          v-for="(post, key) in blogPosts"
          :key="key">
          <v-list-tile
            router
            exact
            :to="`/fire/${post.slug}`">
            <v-list-tile-content>
              <v-list-tile-title v-text="post.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item> -->
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  /* padding: 20px; */
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
