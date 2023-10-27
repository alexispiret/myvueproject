
import store from '/src/lib/store.js';

export default function useAuthGuard(to, from, next) {
  const isUserLoggedIn = store.state.user !== null;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
}
