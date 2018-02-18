<template>
<form id="admin-post-form" @submit.prevent="onSave">
  <div class="editedPost-wrapper">
    <label id="post-settings-label">Post Settings</label>
    <v-text-field id="title" name="title" label="Post Title" v-model="editedPost.title"></v-text-field>
    <v-text-field id="subtitle" name="subtitle" label="Post Subtitle" v-model="editedPost.subtitle"></v-text-field>
    <v-text-field id="slug" name="slug" label="Post Slug" v-model="postSlug"></v-text-field>
    <v-text-field id="thumbnail" name="thumbnail" label="Post Thumbnail Link" v-model="editedPost.thumbnail"></v-text-field>
    <v-text-field
      name="excerpt"
      id="excerpt"
      label="Post Excerpt"
      multi-line
      :rows="2"
      v-model="editedPost.excerpt">
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


    <div class="editedPost-buttons">
      <v-btn color="error" @click="onCancel">Cancel</v-btn>
      <v-btn color="secondary" @click="onSave">Save</v-btn>
    </div>
  </div>

  <div class="editedPost-preview post-content-editor">
    <label id="post-content-label" class="display-1 label-styles">Post Content</label>
    <no-ssr>
      <mavon-editor placeholder="Start Editing..." v-on:change="handleChange" v-on:save="handleEditorSave" v-model="editedPost.markdown"></mavon-editor>
    </no-ssr>
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
            title: '',
            subtitle: '',
            slug: '',
            thumbnail: '',
            tags: [],
            excerpt: '',
            content: '',
            markdown: ''

          },
          editorMarkdown: '# Starting'
    };
  },
  methods: {
    handleChange(value, render) {
      this.editedPost.content = render
    },

    handleEditorSave(value, render) {
      this.onSave()
    },

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
  flex: 0 1 350px;
  max-width: 350px;
  border-right: 2px solid rgba(128, 128, 128, 0.38039);
  padding-right: 2.75em;
  padding-left: .5em;
  margin: 2em auto;
}

.editedPost-preview {
  flex: 1 1 100%;
  padding: .5em 1.5em .5em 2.5em;
  max-width: calc(100% - 350px);
  margin: 2em auto;
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
.markdown-body {
  height: 100%;
  z-index: 1;
}
#post-content-label, #post-settings-label {
  margin-top: -.5em;
  margin-bottom: 1.5em;
  font-weight: 400;
  font-size: 2.25em !important;
  color: rgba(0, 0, 0, 0.75);
  display: block;
}

#post-content-label {
  margin-bottom: 2em;
}
</style>
