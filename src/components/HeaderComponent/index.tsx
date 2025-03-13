import { NavLink } from 'react-router-dom'
import './style.scss'
import menu from '/assets/icons/menu.svg'
import { useState, useEffect } from 'react'

const HeaderComponent = ({ isHidden }: { isHidden: boolean }) => {
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'works', 'projects', 'contact']
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
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => setActiveSection('contact')}
            >
              About Me
            </a>
          </div>
        )}
        <div className="header__container-nav display-smartphone">
          <img src={menu} alt="img-menu" />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
