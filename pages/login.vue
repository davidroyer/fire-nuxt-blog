<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card >
        <v-toolbar flat>
          <v-toolbar-title>Admin Login</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <form @submit.prevent="onSubmit">
          <v-card-text>
            <v-text-field prepend-icon="person" name="login" v-model="email" label="Login" type="email"></v-text-field>
            <v-text-field prepend-icon="lock" name="password" v-model="password" label="Password" id="password" type="password"></v-text-field>

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" class="white--text lighten-2" color="secondary">Login</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "default",
    // layout: 'default',
    data: () => ({
      drawer: null,
      isLogin: true,
      email: "",
      password: ""
    }),
    methods: {
      onSubmit() {
        this.$store.dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password
        })
        .then(() => {
          console.log('inside then of promise');
          this.$router.push('/admin');
        });
      }
    }
  }
</script>


<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
