
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Search } from 'lucide-react'

const caseLaws = [
  {
    title: "Tennessee vs Garner",
    description: "Deadly force allowed if suspect poses serious threat.",
  },
  {
    title: "Terry vs Ohio",
    description: "Stop-and-frisk allowed with reasonable suspicion.",
  },
  {
    title: "Pennsylvania vs Mimms",
    description: "Officers can order people out of vehicles if armed suspicion exists.",
  },
  {
    title: "Wyoming vs Houghton",
    description: "Officers can search belongings if hiding illegal items is suspected.",
  },
  {
    title: "Carrol vs United States",
    description: "No warrant needed with probable cause.",
  },
  {
    title: "Mike Smoore vs LSPD",
    description: "Search & sweep allowed in felony stops for protective custody.",
  },
  {
    title: "Miranda vs Arizona",
    description: "Suspects must be read their Miranda rights.",
  },
  {
    title: "People vs Georgina Williams",
    description: "Undercover statements are admissible in court.",
  },
  {
    title: "People vs Meg Kyrakruz",
    description: "No interrogation without a lawyer present.",
  },
  {
    title: "People vs Cedric Stanfield",
    description: "Possessing an unlicensed firearm is illegal, even if broken.",
  }
]

export default function CaseLaws() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCaseLaws = caseLaws.filter(
    caselaw =>
      caselaw.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caselaw.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Case Laws</h1>
              <p className="text-muted-foreground">Important legal precedents for law enforcement</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search case laws..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {filteredCaseLaws.map((caselaw, index) => (
            <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {caselaw.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{caselaw.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCaseLaws.length === 0 && (
          <div className="text-center py-12">
            <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  )
}
