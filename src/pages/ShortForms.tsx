import { useUrlQuery } from '@/hooks/useUrlQuery'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { shortForms } from '@/data/referenceLists'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileCode, Search } from 'lucide-react'



export default function ShortForms() {
  const [searchTerm, setSearchTerm] = useUrlQuery()

  const filteredShortForms = shortForms.filter(
    form =>
      form.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileCode className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Short Forms</h1>
              <Button asChild variant="outline" className="my-3 whitespace-normal h-auto min-h-10"><Link to="/practice/flashcards?deck=shortForms">Study with Flashcards</Link></Button>
              <p className="text-muted-foreground">Common abbreviations used in law enforcement communication</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search abbreviations or meanings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredShortForms.map((form, index) => (
            <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="font-mono text-sm px-3 py-1">
                    {form.abbreviation}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">{form.meaning}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredShortForms.length === 0 && (
          <div className="text-center py-12">
            <FileCode className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  )
}
