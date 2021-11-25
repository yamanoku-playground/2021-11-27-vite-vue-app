import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    // meta: {
    //   announcer: {
    //     message: 'Home page'
    //   }
    // }
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    // meta: {
    //   announcer: {
    //     message: 'About page'
    //   }
    // }
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact,
    // meta: {
    //   announcer: {
    //     message: "Contact page",
    //     politeness: "assetive",
    //   }
    // }
  }
]