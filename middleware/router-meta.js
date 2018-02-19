export default ({ store, route, redirect}) => {
  store.commit('setMeta', route.meta)
  const requiresAuth = route.meta.some(metaData => metaData.requiresAuth)
  const isLoginRoute = route.name === 'login'

  if (isLoginRoute) {
    return;
  }
  if (requiresAuth && !store.getters.isAuthenticated && !isLoginRoute) {
    redirect("/login");
  }
}
