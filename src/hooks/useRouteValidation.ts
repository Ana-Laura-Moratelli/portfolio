import { useState, useEffect } from 'react'

// Lista de rotas válidas
const validRoutes = [
  '/',
  '/home',
  '/#about',
  '/#experience', 
  '/#projects',
  '/#skills',
  '/#education',
  '/#contact'
]

export function useRouteValidation() {
  const [isValidRoute, setIsValidRoute] = useState(true)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname + window.location.hash
      setCurrentPath(path)
      
      // Verifica se é uma rota válida
      const isValid = validRoutes.some(route => {
        if (route === '/') return path === '/' || path === ''
        if (route.startsWith('/#')) return path === route || path === route.substring(1)
        return path === route
      })
      
      setIsValidRoute(isValid)
    }

    // Verifica na montagem
    checkRoute()

    // Escuta mudanças na URL
    const handleLocationChange = () => {
      checkRoute()
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)

    // Observa mudanças no pathname (para SPAs)
    const observer = new MutationObserver(() => {
      if (window.location.pathname !== currentPath.split('#')[0]) {
        checkRoute()
      }
    })

    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    })

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
      observer.disconnect()
    }
  }, [currentPath])

  return { isValidRoute, currentPath }
}
