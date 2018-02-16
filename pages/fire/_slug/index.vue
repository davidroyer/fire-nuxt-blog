<template>
  <v-layout justify-center align-center>
    <v-flex sm10>

      <div class="single-post-page">
        <section class="post">
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-details">
            <div class="post-detail">Last updated on {{ post.updatedDate | date }}</div>
            <div class="post-detail">Written by {{ post.author }}</div>
          </div>

          <div class="post-image">
            <img v-if="post.thumbnail" :src="post.thumbnail" :alt="'Post thumbnail for ' + post.title">
          </div>

          <div class="post-content" v-html="post.content"></div>
        </section>
      </div>

    </v-flex>
  </v-layout>

</template>

<script>
export default {
  async asyncData({app, params, payload}) {
    // if (payload) {
    //   return {
    //     post: payload.postData
    //   }
    // }

    const data = await app.$axios.$get(`/posts.json?orderBy="slug"&equalTo="${params.slug}"&print=pretty`)
    const keys = Object.keys(data)
    const post = data[keys[0]]

    return {
      post
    }
  }
};
</script>
