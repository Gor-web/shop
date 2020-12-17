export default function auth({ from, next, router }) {
  if (localStorage.getItem('token')) {
    return from.name ? router.push({name: from.name}) : router.back();
  }
  return next();
}
