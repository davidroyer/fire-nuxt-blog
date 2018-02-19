export default function ({ store, redirect, route }) {
  // store.getters.isAuthenticated !== null && route.name == 'login' ? redirect('/admin') : ''
  !store.getters.isAuthenticated && isAdminRoute(route) ? redirect('/login') : ''
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path == '/admin')) {
    return true
  }
}
