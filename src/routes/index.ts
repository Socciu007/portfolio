import { lazy } from 'react'

const HomePage = lazy(() => import('../pages/HomePage'))
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'))
const SplashPage = lazy(() => import('../pages/SplashPage'))
const BlogDetailPage = lazy(() => import('../pages/BlogDetailPage'))
const GiftPage = lazy(() => import('../pages/GiftPage'))
const Gift1 = lazy(() => import('../pages/GiftPage/gift1'))

export const routes = [
  {
    path: '/',
    page: HomePage
  },
  {
    path: '/projects/:id',
    page: ProjectDetailPage,
    isHiddenHeader: true
  },
  {
    path: '/blogs/:id',
    page: BlogDetailPage,
    isHiddenHeader: true
  },
  {
    path: '/splash',
    page: SplashPage,
    isHidden: true
  },
  {
    path: '/gift',
    page: GiftPage,
    isHiddenHeader: true
  },
  {
    path: '/gift/1',
    page: Gift1,
    isHiddenHeader: true
  }
]
