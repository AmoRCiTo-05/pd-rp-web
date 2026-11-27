import { useState, useRef, useEffect, useMemo, useId } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPageDrill } from '@/utils/pageDrills'
import { Search, X, Brain } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { searchPages, type SearchResult } from '@/data/searchData'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
  value?: string
  showResults?: boolean
  shortcut?: boolean
}

export function SearchBar({ placeholder = 'Search codes, procedures...', onSearch, className, value, showResults = true, shortcut = false }: SearchBarProps) {
  const [internalQuery, setInternalQuery] = useState('')
  const query = value ?? internalQuery
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const navigate = useNavigate()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listId = useId()
  const results = useMemo(() => showResults ? searchPages(query) : [], [query, showResults])
  const drillTargets = useMemo(() => results.map(result => {
    const path = result.path.split('?')[0]
    if (!createPageDrill(path)) return undefined
    const topic = new URLSearchParams(result.path.split('?')[1] ?? '').get('q') ?? query
    const filtered = createPageDrill(path, topic)
    return `/practice/quiz-me?page=${encodeURIComponent(path)}${filtered ? `&topic=${encodeURIComponent(topic)}` : ''}`
  }), [results, query])
  const update = (next: string) => {
    setInternalQuery(next); onSearch?.(next); setSelectedIndex(-1)
    setIsOpen(showResults && !!next.trim())
  }
  const close = () => { setIsOpen(false); setSelectedIndex(-1) }
  const openResult = (result: SearchResult) => {
    navigate(result.path); update(''); close(); inputRef.current?.blur()
  }
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !searchRef.current?.contains(event.target)) close()
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [])
  useEffect(() => {
    if (!shortcut) return
    const focus = (event: KeyboardEvent) => {
      const target = event.target
      const editing = target instanceof HTMLElement && (target.matches('input, textarea, select') || target.isContentEditable)
      const dialogOpen = !!document.querySelector('[role="dialog"]')
      if (dialogOpen) return
      if (((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') || (event.key === '/' && !editing && !event.ctrlKey && !event.metaKey && !event.altKey)) {
        event.preventDefault(); inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', focus)
    return () => document.removeEventListener('keydown', focus)
  }, [shortcut])
  const expanded = showResults && isOpen && !!query.trim()
  return (
    <div className={cn('relative', className)} ref={searchRef}>
      <Search aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input ref={inputRef} type="search" aria-label={placeholder} placeholder={placeholder} value={query}
        role={showResults ? 'combobox' : undefined} aria-expanded={showResults ? expanded : undefined}
        aria-autocomplete={showResults ? 'list' : undefined} aria-controls={showResults ? listId : undefined}
        aria-activedescendant={expanded && selectedIndex >= 0 && results[selectedIndex] ? `${listId}-${selectedIndex}` : undefined}
        onChange={e => update(e.target.value)} onFocus={() => { if (showResults && query.trim()) setIsOpen(true) }}
        onKeyDown={e => {
          if (e.key === 'Escape') { e.preventDefault(); close(); inputRef.current?.blur(); return }
          if (!showResults || !query.trim()) return
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault(); setIsOpen(true)
            if (results.length) setSelectedIndex(prev => e.key === 'ArrowDown' ? (prev + 1) % results.length : prev <= 0 ? results.length - 1 : prev - 1)
          } else if (e.key === 'Enter' && results.length) {
            e.preventDefault(); openResult(results[Math.max(0, selectedIndex)])
          }
        }}
        className="pl-10 pr-10 text-base sm:text-sm bg-card border-border h-10 focus:ring-2 focus:ring-primary/20" />
      {shortcut && !query && <kbd aria-hidden="true" className="hidden lg:block absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground pointer-events-none">Ctrl K</kbd>}
      {query && <Button variant="ghost" size="icon" aria-label="Clear search" onClick={() => { update(''); close(); inputRef.current?.focus() }} className="absolute right-0 top-0 h-10 w-10"><X className="h-4 w-4" /></Button>}
      {expanded && <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-[60vh] overflow-y-auto">
        {results.length === 0 && <p role="status" className="p-4 text-sm text-muted-foreground break-words">No matches for “{query}”</p>}
        <div id={listId} role="listbox" aria-label="Search results">
          {results.map((result, index) => <div id={`${listId}-${index}`} key={result.id} role="option" aria-selected={selectedIndex === index}
            className={cn('p-2', selectedIndex === index && 'bg-accent text-accent-foreground')}>
            <Button variant="ghost" onClick={() => openResult(result)} onMouseEnter={() => setSelectedIndex(index)} className="w-full h-auto whitespace-normal justify-start p-2 text-left">
              <span className="flex flex-col min-w-0 w-full gap-1">
                <span className="font-medium text-sm break-words">{result.title}</span>
                <span className="text-xs text-muted-foreground">{result.category}</span>
                <span className="text-xs text-muted-foreground line-clamp-2">{result.description}</span>
              </span>
            </Button>
            {drillTargets[index] && <Button variant="outline" size="sm" className="m-2 gap-2" onClick={() => {
              const target = drillTargets[index]
              if (!target) return
              navigate(target); update(''); close(); inputRef.current?.blur()
            }}><Brain className="h-3 w-3" />Test this topic</Button>}
          </div>)}
        </div>
      </div>}
    </div>
  )
}
