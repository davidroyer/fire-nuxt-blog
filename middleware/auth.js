export default function({store, route, redirect}) {
  console.log("auth.js file");

  if (!store.getters.isAuthenticated && route.name !== 'login') {
    console.log('would redirect to login from middleware/auth.js');
    redirect("/login");
  }
}
