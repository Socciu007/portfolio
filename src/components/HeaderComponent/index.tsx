import { NavLink, useNavigate } from 'react-router-dom'
import './style.scss'
import menu from '/assets/icons/menu.svg'
import { useState, useEffect } from 'react'
import { useTheme } from '../../ThemeContext'
import sun from '/assets/icons/sun-light.svg'
import moon from '/assets/icons/moon-star.svg'

const HeaderComponent = ({ isHidden }: { isHidden: boolean }) => {
  const [activeSection, setActiveSection] = useState('home')
  const { darkMode, toggleDarkMode } = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'works', 'projects', 'about']
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element?.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      setActiveSection(currentSection || 'home')
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className="header header--sticky">
      <div className="header__container">
        <NavLink to="/splash" className="header__container-logo">
          <span style={{ color: '#00a8cc' }}> &lt;</span>
          <span className="logo-name" style={{ color: '#00a8cc' }}>
            VuTien
          </span>
          <span style={{ color: '#00a8cc' }}>/&gt;</span>
        </NavLink>
        <div className="wrapper">
          {!isHidden && (
            <div className="header__container-nav display-desktop">
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setActiveSection('projects')}
              >
                Projects
              </a>
              <a
                href="#works"
                className={activeSection === 'works' ? 'active' : ''}
                onClick={() => setActiveSection('works')}
              >
                Works
              </a>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setActiveSection('about')}
              >
                About
              </a>
              <a
                href="#blogs"
                className={activeSection === 'blogs' ? 'active' : ''}
                onClick={() => setActiveSection('blogs')}
              >
                Blogs
              </a>
              <a
                href="#"
                className={activeSection === 'gift' ? 'active' : ''}
                onClick={() => navigate('/gift')}
              >
                Gift
              </a>
            </div>
          )}
          <div className="wrapper-mode">
            {darkMode ? (
              <img
                onClick={toggleDarkMode}
                src={moon}
                loading="lazy"
                alt="moon"
              />
            ) : (
              <img
                onClick={toggleDarkMode}
                src={sun}
                loading="lazy"
                alt="sun"
              />
            )}
          </div>
        </div>
        <div className="header__container-nav display-smartphone">
          <img src={menu} loading="lazy" alt="img-menu" />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
