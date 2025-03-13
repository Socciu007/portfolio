import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
// import { Suspense } from 'react'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Page = route.page
          const Main = () => (
            <div className="app">
              {!route.isHidden && <HeaderComponent isHidden={route.isHiddenHeader || false} />}
              <Page />
              {!route.isHidden && <FooterComponent />}
            </div>
          )
          return (
            <Route key={route.path} path={route.path} element={<Main />} />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
