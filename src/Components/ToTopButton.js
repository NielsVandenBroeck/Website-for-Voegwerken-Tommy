import React, { useState, useEffect } from 'react'
import { FiChevronUp } from 'react-icons/fi'

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-2xl text-white shadow-lg transition-all duration-300 hover:bg-accent-600 hover:shadow-xl ${
        isVisible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
      }`}
      aria-label="Terug naar boven"
    >
      <FiChevronUp />
    </button>
  )
}

export default ToTopButton
