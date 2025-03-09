import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
  )
}

export default App
