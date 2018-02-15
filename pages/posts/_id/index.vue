<template>
  <v-layout justify-center align-center>
    <v-flex xs11>
      <div class="single-post-page">

        <section class="post">
          <h1 class="post-title">{{ loadedPost.title }}</h1>
          <div class="post-details">
            <div class="post-detail">Last updated on {{ loadedPost.updatedDate | date }}</div>
            <div class="post-detail">Written by {{ loadedPost.author }}</div>
          </div>

          <div class="post-image">
            <img :src="loadedPost.thumbnail" :alt="'Post thumbnail for ' + loadedPost.title">
          </div>

          <div class="post-content" v-html="loadedPost.content"></div>
        </section>

        <section class="post-feedback">
          <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
        </section>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      }
    }
    return context.app.$axios.$get('/posts/' + context.params.id + '.json')
      .then(data => {
        return {
          loadedPost: data
        }
      })
      .catch(e => context.error(e))
  },
  head: {
    title: 'A Blog Post'
  }
};
</script>


<style scoped>

@media (min-width: 768px) {
  .post {
    width: 900px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  /* border-bottom: 1px solid #ccc; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: .85em;
  font-style: italic;
  margin-top: -10px;
  margin-bottom: 15px;

}

@media (min-width: 768px) {
  .post-details {
    flex-flow: row wrap;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
  flex-basis: 100%;
}
.post-content {
  text-align: left;
}
.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}

.post-image {
  height: 300px;
  margin-bottom: 4.5em;
}

.post-image img {
  max-width: 100%;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
