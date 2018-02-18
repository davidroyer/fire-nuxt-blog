<template>
  <v-layout justify-center align-center>
    <v-flex sm10>

      <div class="single-post-page">
        <section class="post">
          <h1 class="display-2 post-title">{{ post.title }}</h1>
          <div class="post-details">
            <div class="post-detail">Last updated on {{ post.updatedDate | date }}</div>
            <div class="post-detail">Written by {{ post.author }}</div>
            <div class="post-detail tags" v-if="post.tags" >
              <template v-for="(tag, index) in post.tags">
                <div class="tag">{{tag}}</div>
              </template>
            </div>
          </div>

          <!-- <div class="post-image">
            <img v-if="post.thumbnail" :src="post.thumbnail" :alt="'Post thumbnail for ' + post.title">
          </div> -->

          <div class="post-content" v-html="post.content"></div>
        </section>
      </div>

    </v-flex>
  </v-layout>

</template>

<script>
export default {
  async asyncData({app, params, payload}) {

    const data = await app.$axios.$get(`/posts.json?orderBy="slug"&equalTo="${params.slug}"&print=pretty`)
    const keys = Object.keys(data)
    const post = data[keys[0]]

    return {
      post
    }
  }
};
</script>

<style scoped>
.post {
  text-align: center;
  max-width: 100%;
}


@media (min-width: 768px) {
  .post {
    width: 900px;
    margin: auto;
    text-align: center;
  }
}

.post-title {
  margin: 0;
  margin-bottom: .1em;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  /* border-bottom: 1px solid #ccc; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* font-size: .85em; */
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

.post-detail.tags {
    display: inline-flex;
    justify-content: center;
    margin-top: 1em;
    font-weight: bold;
    font-size: .85em;
}
.tag {
    margin: 0 .75em;
    border: 1px solid #6161616e;
    padding: .25em .75em;
    border-radius: 5px;
}
</style>
