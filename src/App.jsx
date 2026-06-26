import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Timeline from './components/Timeline'
import Technology from './components/Technology'
import Statistics from './components/Statistics'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-cyber-bg min-h-screen">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Timeline />
          <Technology />
          <Statistics />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
