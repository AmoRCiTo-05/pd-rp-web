import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { searchData } from '@/data/searchData'

const defaultTitle = 'PD RP Guide | Law Enforcement Roleplay'
const defaultDescription = 'A comprehensive guide for law enforcement roleplay on GTA RP servers. Explore 10-codes, SOPs, penal codes, amendments, and more.'

export function useDocumentMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const page = pathname === '/' ? undefined : searchData.find(item => item.path === pathname)
    document.title = page ? `${page.title} | PD RP Guide` : defaultTitle
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = page?.description ?? defaultDescription
  }, [pathname])
}
