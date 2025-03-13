import { lazy } from 'react'

const HomePage = lazy(() => import('../pages/HomePage'))
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'))
const SplashPage = lazy(() => import('../pages/SplashPage'))

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
    path: '/splash',
    page: SplashPage,
    isHidden: true
  }
]
