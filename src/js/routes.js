
import Home from '../pages/home.vue';
import Tests from '../pages/tests.vue';
import More from '../pages/more.vue';

import About from '../pages/about/about.vue';

import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/tests',
    component: Tests,
  },
  {
    path: '/more',
    component: More,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
