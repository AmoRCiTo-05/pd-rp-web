import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { tenCodes } from '@/data/referenceLists'

import React, { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Radio, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'



const categories = ['All', 'Communication', 'Status', 'Emergency', 'Incident', 'Information', 'Assignment', 'Movement', 'Assistance']
const priorities = ['All', 'Low', 'Medium', 'High']

export default function TenCodes() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriority, setSelectedPriority] = useState('All')

  const filteredCodes = tenCodes.filter(code => {
    const matchesSearch = code.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         code.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || code.category === selectedCategory
    const matchesPriority = selectedPriority === 'All' || code.priority === selectedPriority
    return matchesSearch && matchesCategory && matchesPriority
  })

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'High':
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case 'Medium':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'Low':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/10 text-red-600 border-red-500/20'
      case 'Medium':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
      case 'Low':
        return 'bg-green-500/10 text-green-600 border-green-500/20'
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    }
  }

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
              <Radio className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold">10-Codes</h1>
              <Button asChild variant="outline" className="my-3 whitespace-normal h-auto min-h-10"><Link to="/practice/flashcards?deck=tenCodes">Study with Flashcards</Link></Button>
              <p className="text-sm sm:text-base text-muted-foreground">Essential radio communication codes</p>
            </div>
          </div>
        </div>

        {/* Filters - Optimized for mobile */}
        <div className="mb-6 sm:mb-8 space-y-4">
          <div className="w-full">
            <SearchBar 
              placeholder="Search 10-codes..."
              onSearch={setSearchQuery}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="flex-1 min-w-[140px]">
              <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary touch-manipulation"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-1 min-w-[120px]">
              <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Priority</label>
              <select 
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary touch-manipulation"
              >
                {priorities.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCodes.length} of {tenCodes.length} codes
          </p>
        </div>

        {/* Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredCodes.map((code, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 border-border bg-card/50 active:scale-[0.98] touch-manipulation"
            >
              <CardHeader className="pb-2 sm:pb-3">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="font-mono text-lg sm:text-xl text-primary font-bold">
                    {code.code}
                  </CardTitle>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    {getPriorityIcon(code.priority)}
                    <Badge variant="outline" className={cn("text-xs", getPriorityColor(code.priority))}>
                      {code.priority}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-foreground font-medium mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base">
                  {code.description}
                </CardDescription>
                <Badge variant="secondary" className="text-xs">
                  {code.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* No Results */}
        {filteredCodes.length === 0 && (
          <div className="text-center py-12">
            <Radio className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="font-heading text-lg font-semibold mb-2">No codes found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
