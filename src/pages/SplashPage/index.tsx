import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingComponent from '../../components/LoadingComponent'
import './style.scss'
const SplashPage = () => {
  const navigate = useNavigate() // Hook for navigation

  // Redirect to Home after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 2000)

    // Cleanup function to clear timeout if component unmounts
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: '#fff' }}>
        <LoadingComponent id="logo" />
      </div>
    </div>
  )
}

export default SplashPage