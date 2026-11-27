import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/** Keep page filters aligned with navigations to content search links. */
export function useUrlQuery(): [string, (value: string) => void] {
  const location = useLocation()
  const navigate = useNavigate()
  const [value, setState] = useState(() => new URLSearchParams(location.search).get('q') ?? '')
  useEffect(() => { setState(new URLSearchParams(location.search).get('q') ?? '') }, [location.key, location.search])
  const setValue = useCallback((next: string) => {
    setState(next)
    const params = new URLSearchParams(location.search)
    if (next) params.set('q', next)
    else params.delete('q')
    navigate({ pathname: location.pathname, search: params.toString(), hash: location.hash }, { replace: true })
  }, [location.pathname, location.search, location.hash, navigate])
  return [value, setValue]
}
