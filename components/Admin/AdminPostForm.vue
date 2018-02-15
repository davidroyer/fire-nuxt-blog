<template>
  <form id="admin-post-form" @submit.prevent="onSave">
    <div class="editedPost-wrapper">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
      <AppControlInput v-model="editedPost.title">Title</AppControlInput>
      <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
      <AppControlInput
        control-type="textarea"
        v-model="editedPost.content">Content</AppControlInput>
      <vue-editor v-model="editedPost.content"></vue-editor>
    </div>
    <div class="editedPost-preview">
      <div v-html="editedPost.content"></div>
    </div>

    <div class="editedPost-buttons">
      <AppButton type="submit">Save</AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">Cancel</AppButton>
    </div>
  </form>
</template>

<script>
import {VueEditor, Quill } from 'vue2-editor'

export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  components: {
    VueEditor
  },

  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
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
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
   max-width: 1400px;
   margin-left: auto;
   margin-right: auto;
 }

 #admin-post-form .editedPost-wrapper {
   /* display: flex;
   flex-flow: row wrap; */
 }

 #admin-post-form .editedPost-preview {
   /* display: flex;
   flex-flow: row wrap; */
 }

 #admin-post-form .editedPost-buttons {
  flex-basis: 100%;
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
</style>
