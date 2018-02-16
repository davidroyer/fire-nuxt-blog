<template>
<v-layout justify-center align-center>
  <v-flex>
    <h1 class="display-1">Fire Posts</h1>
    <div class="post-list">
      <template v-for="(post, key) in posts">
        <nuxt-link class="post-preview" :key="key" exact :to="`/fire/${post.slug}`">
          <article>
            <div
              class="post-thumbnail"
              v-if="post.thumbnail"
              :style="{backgroundImage: 'url(' + post.thumbnail + ')'}"></div>
            <div class="post-content">
              <h1 v-if="post.title">{{ post.title }}</h1>
              <p v-if="post.previewText">{{ post.previewText }}</p>
            </div>
          </article>
        </nuxt-link>
      </template>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  async asyncData({ app }) {
    const posts = await app.$axios.$get('/posts.json')
    return {
      posts
    }
  }
};
</script>

<style scoped>
  .post-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 850px) {
    .post-preview {
      width: 400px;
      margin: 10px;
    }
  }

  .post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }

  .post-content {
    padding: 10px;
    text-align: center;
  }

  a:hover .post-content,
  a:active .post-content {
    background-color: #ccc;
  }

  .post-preview {
    margin: 1em;
  }
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
