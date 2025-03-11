import { lazy } from 'react'

const HomePage = lazy(() => import('../pages/HomePage'))
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'))

export const routes = [
  {
    path: '/',
    page: HomePage,
  },
  {
    path: '/projects/:id',
    page: ProjectDetailPage,
  },
]
