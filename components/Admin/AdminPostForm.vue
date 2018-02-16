<template>
<form id="admin-post-form" @submit.prevent="onSave">
  <div class="editedPost-wrapper">

    <v-text-field name="title" label="Post Title" id="title" v-model="editedPost.title"></v-text-field>
    <v-text-field name="slug" label="Post Slug" id="slug" v-model="postSlug"></v-text-field>
    <v-text-field name="thumbnail" label="Post Thumbnail Link" id="thumbnail" v-model="editedPost.thumbnail"></v-text-field>
    <v-text-field
      name="previewText"
      id="previewText"
      label="Post Preview Text"
      multi-line
      :rows="2"
      v-model="editedPost.previewText">
    </v-text-field>

    <v-select
      label="Post Tags"
      chips
      tags
      clearable
      v-model="editedPost.tags"
    >
      <template slot="selection" slot-scope="data">

        <v-chip
          label
          small
          color="indigo"
          text-color="white"
          @input="remove(data.item)"
          :selected="data.selected">
          <v-icon color="white darken-2" left>label</v-icon>
          {{ data.item }}
        </v-chip>
      </template>
    </v-select>
    <label class="label-styles">Post Content</label>
    <no-ssr>
      <vue-editor v-model="editedPost.content"></vue-editor>
    </no-ssr>
    <div class="editedPost-buttons">
      <v-btn color="error" @click="onCancel">Cancel</v-btn>
      <v-btn color="secondary" @click="onSave">Save</v-btn>
    </div>
  </div>
  <div class="editedPost-preview">
    <div v-html="editedPost.content"></div>
  </div>
</form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },

  computed: {
    postTitle () {
      return this.post ? this.post.title : ""
    },

    postSlug() {
      return this.slugify(this.editedPost.title)
    }
  },

  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            title: "",
            slug: "",
            thumbnail: "",
            tags: [],
            previewText: "",
            content: ""

          }
    };
  },
  methods: {
    slugify(input) {
      let output = input.toLowerCase()
        .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
        .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
        .replace(/^-+|-+$/g, ''); // remove leading, trailing -
      return output
    },
    onSave() {
      // Save the post
      this.editedPost.slug = this.postSlug
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
#admin-post-form {
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 800px) {
  #admin-post-form {
    display: flex;
  }
}


.editedPost-buttons {
  flex-basis: 100%;
  text-align: right;
  margin-top: 2.5em;
}

.editedPost-wrapper {
  flex: 0 1 48%;
  max-width: 650px;
  border-right: 2px solid #80808061;
  padding-right: 2em;
}

.editedPost-preview {
  flex: 1 1 47%;
  box-sizing: border-box;
  padding: .5em 1.5em .5em 2.5em;
}

.label-styles {
  color: rgba(0, 0, 0, .54);
  margin-bottom: 0.5em;
  display: block;
  margin-top: 1em;
  font-size: 1.1em;
}
.input-group {
    margin-top: 1.5em;
}

.input-group--chips {
  margin-bottom: 2.5em;
  margin-top: .25em;
}
</style>
