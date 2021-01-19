import { useState, useMemo } from 'react'

const useSearchFilter = (badges) => {
  const [query, setQuery] = useState('')
  const [filteredBadges, setFilteredBadges] = useState(badges)

  // Recibe una funcion y una lista si la lista fue memorizada te devuelve inmediato si son iguales
  // Si solo usamos filter es costoso para la aplicacion si es una lista muy larga
  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })
    setFilteredBadges(result.reverse())
  }, [badges, query])

  return { setQuery, filteredBadges, query }
}

export default useSearchFilter
