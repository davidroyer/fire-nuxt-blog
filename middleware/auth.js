export default function({store, route, redirect}) {
  console.log("[Middleware] Just Auth");

  if (!store.getters.isAuthenticated && route.name !== 'admin-auth') {
    redirect("/admin/auth");
  }
}
