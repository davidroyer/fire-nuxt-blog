export default ({ store, route, redirect}) => {
  store.commit('setMeta', route.meta)
  const requiresAuth = route.meta.some(metaData => metaData.requiresAuth)
  console.log('requiresAuth: ', requiresAuth);

  if (requiresAuth && !store.getters.isAuthenticated) {
    redirect("/admin/auth");
  }
  // check requiresAuth bool and your store (authentication data) and redirect accordingly
}
