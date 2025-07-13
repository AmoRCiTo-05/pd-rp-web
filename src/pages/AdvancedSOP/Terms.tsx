
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Search } from 'lucide-react'

const advancedTerms = [
  {
    term: "Command Structure",
    definition: "Hierarchical organization system within law enforcement agencies defining authority and responsibility levels.",
    category: "Leadership"
  },
  {
    term: "Tactical Operations",
    definition: "Specialized law enforcement operations requiring advanced training and coordination, including SWAT and high-risk scenarios.",
    category: "Operations"
  },
  {
    term: "Intelligence Gathering",
    definition: "Systematic collection and analysis of information to support law enforcement operations and investigations.",
    category: "Investigation"
  },
  {
    term: "Risk Assessment",
    definition: "Evaluation of potential threats and hazards to determine appropriate response strategies and resource allocation.",
    category: "Planning"
  },
  {
    term: "Inter-agency Coordination",
    definition: "Collaborative efforts between different law enforcement agencies to maximize effectiveness and resource sharing.",
    category: "Coordination"
  },
  {
    term: "Crisis Management",
    definition: "Structured approach to handling emergency situations requiring immediate decision-making and resource deployment.",
    category: "Emergency Response"
  },
  {
    term: "Strategic Planning",
    definition: "Long-term planning process for law enforcement operations, resource allocation, and goal achievement.",
    category: "Planning"
  },
  {
    term: "Operational Security",
    definition: "Measures taken to protect sensitive information and operations from unauthorized disclosure or compromise.",
    category: "Security"
  }
]

export default function AdvancedTerms() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(advancedTerms.map(term => term.category)))]

  const filteredTerms = advancedTerms.filter(
    term =>
      (selectedCategory === 'All' || term.category === selectedCategory) &&
      (term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
       term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
       term.category.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Advanced Terms</h1>
              <p className="text-muted-foreground">Command ranking learning terms and advanced concepts</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search terms or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredTerms.map((term, index) => (
            <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-primary flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    {term.term}
                  </CardTitle>
                  <Badge variant="secondary">{term.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{term.definition}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or category filter</p>
          </div>
        )}
      </div>
    </div>
  )
}
