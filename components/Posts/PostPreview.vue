<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="post-content">
        <h1 class="title">{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
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
  top: 20px;
  position: absolute;
}

.post-content .title {
  margin-bottom: .5em;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

.post-preview {
  margin: 1em;
}

article {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  transition: all .25s ease;
}

.post-content {
  background: transparent !important;
}
.post-preview:hover article, .post-preview:focus article {
  background: #eee;
}

</style>
