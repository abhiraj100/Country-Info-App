import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'

import './App.css'
// import { useState } from 'react'

const App = () => {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <>
      <ThemeProvider>
      {/* <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} /> */}
      <Header />
      <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App;
