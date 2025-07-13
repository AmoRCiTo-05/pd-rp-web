
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Gavel, Search } from 'lucide-react'

const amendments = [
  {
    number: "1st",
    title: "No Religious Discrimination",
    description: "Protects religious freedom and prevents discrimination based on religious beliefs.",
  },
  {
    number: "2nd",
    title: "Right to bear arms with proper Paperwork",
    description: "Allows citizens to own firearms with appropriate documentation and permits.",
  },
  {
    number: "3rd",
    title: "No Warrant No Entry",
    description: "Protects against unauthorized entry into private property without a warrant.",
  },
  {
    number: "4th",
    title: "No Warrant No Search & Seizure",
    description: "Prohibits unreasonable searches and seizures without a warrant.",
  },
  {
    number: "5th",
    title: "Protection Against Self-Incrimination",
    description: "Without Evidence a LEO cannot incriminate through interrogation & threats, Directly / Indirectly",
  },
  {
    number: "6th",
    title: "Right to Attorney",
    description: "Guarantees the right to legal representation in criminal cases.",
  },
  {
    number: "7th",
    title: "Right to Trial by a Judge",
    description: "Ensures the right to a fair trial presided over by a judge.",
  },
  {
    number: "8th",
    title: "Protection Against Cruel Punishment",
    description: "No cruel or unusual punishments / not limited to excessive fines",
  },
  {
    number: "9th",
    title: "Unlisted Rights",
    description: "Protects rights not listed in Constitution",
  },
  {
    number: "10th",
    title: "Federal Powers",
    description: "Federal Government possess powers only listed in Constitution",
  }
]

export default function Amendments() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredAmendments = amendments.filter(
    amendment =>
      amendment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      amendment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      amendment.number.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Gavel className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Amendments</h1>
              <p className="text-muted-foreground">Constitutional amendments relevant to law enforcement</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search amendments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid gap-6">
          {filteredAmendments.map((amendment, index) => (
            <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {amendment.number}
                  </Badge>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Gavel className="h-5 w-5" />
                    {amendment.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{amendment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAmendments.length === 0 && (
          <div className="text-center py-12">
            <Gavel className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  )
}
