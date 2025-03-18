import React, { createContext, useState, useContext } from 'react'

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('dark-mode')
    return savedTheme ? JSON.parse(savedTheme) : false
  })

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => {
      // Save the new mode to localStorage
      const newMode = !prevMode
      localStorage.setItem('dark-mode', JSON.stringify(newMode))
      return newMode
    })
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}