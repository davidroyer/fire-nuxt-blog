export default ({ store, route, redirect}) => {
  const requiresAuth = route.meta.some(metaData => metaData.requiresAuth)
  // const isLoginRoute = route.name === 'admin-auth'
  store.commit('setMeta', route.meta)

  if (!store.getters.isAuthenticated && route.name !== 'admin-auth') {
    context.redirect("/admin/auth");
  }
  // if (isLoginRoute) {
  //   return;
  // }
  //
  // if (requiresAuth && !store.getters.isAuthenticated && !isLoginRoute) {
  //   redirect("/admin/auth");
  // }
}
