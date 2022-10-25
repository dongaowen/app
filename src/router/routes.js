import Home from '@/views/Home';
import Search from '@/views/Search';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Detail from '@/views/Detail'

export default [
  {
    path: '/detail/:id',
    component: Detail,
    meta: {
      show: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      show: true
    }
  },
  {
    name: 'search',
    path: '/search/:keyword',
    component: Search,
    meta: {
      show: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      show: false
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      show: false
    }
  },
  {
    path: '*',
    redirect: '/home'
  }
]