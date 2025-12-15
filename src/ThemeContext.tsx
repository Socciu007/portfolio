import React, { createContext, useState, useContext } from 'react'

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode?: (value: boolean) => void;
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
      const newMode = !prevMode
      localStorage.setItem('dark-mode', JSON.stringify(newMode))
      return newMode
    })
  }

  // 👇 expose setter
  const updateDarkMode = (value: boolean) => {
    setDarkMode(value)
    localStorage.setItem('dark-mode', JSON.stringify(value))
  }

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode, setDarkMode: updateDarkMode }}
    >
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