
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { searchPages, SearchResult } from '@/data/searchData'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export function SearchBar({ placeholder = "Search codes, procedures...", onSearch, className }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const navigate = useNavigate()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch?.(value)
    
    const searchResults = searchPages(value)
    setResults(searchResults)
    setIsOpen(searchResults.length > 0 && value.trim().length >= 2)
    setSelectedIndex(-1)
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    setSelectedIndex(-1)
    onSearch?.('')
    inputRef.current?.focus()
  }

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path)
    setQuery('')
    setResults([])
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.blur()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % results.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev <= 0 ? results.length - 1 : prev - 1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (results.length > 0 && query.trim().length >= 2) {
            setIsOpen(true)
          }
        }}
        className="pl-10 pr-10 bg-card border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
      />
      {query && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearSearch}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 hover:bg-muted"
        >
          <X className="h-3 w-3" />
        </Button>
      )}

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="py-2">
            {results.map((result, index) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result)}
                className={`w-full px-4 py-3 text-left hover:bg-accent hover:text-accent-foreground transition-colors border-none bg-transparent ${
                  selectedIndex === index ? 'bg-accent text-accent-foreground' : ''
                }`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{result.title}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {result.category}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {result.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
