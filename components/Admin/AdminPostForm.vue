<template>
  <form id="admin-post-form" @submit.prevent="onSave">
    <div class="editedPost-wrapper">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
      <AppControlInput v-model="editedPost.title">Title</AppControlInput>
      <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>

    <no-ssr>
      <vue-editor v-model="editedPost.content"></vue-editor>
    </no-ssr>
      <div class="editedPost-buttons">
        <v-btn color="secondary" @click="onSave">Save</v-btn>
         <v-btn color="error" @click="onCancel">Cancel</v-btn>
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
</style>
