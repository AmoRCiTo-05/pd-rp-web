
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Search, Shield, Scale, AlertTriangle } from 'lucide-react'

const advancedTerms = [
  {
    term: "Assault",
    definition: "Intentionally causing another person to reasonably fear immediate harmful or offensive contact.",
    category: "Criminal Law"
  },
  {
    term: "Aggravated Battery",
    definition: "Battery (unlawful physical contact) committed with circumstances that increase its severity, such as causing serious injury or using a dangerous weapon.",
    category: "Criminal Law"
  },
  {
    term: "Burglary",
    definition: "Illegally entering a building with the intent to commit a crime, often theft.",
    category: "Property Crime"
  },
  {
    term: "Impersonating",
    definition: "Falsely pretending to be another person, typically to deceive or gain advantage.",
    category: "Fraud"
  },
  {
    term: "Fraud",
    definition: "Deliberate deception for personal gain or to cause damage to another person or entity.",
    category: "Fraud"
  },
  {
    term: "Forgery",
    definition: "Falsely making or altering a document or signature with the intent to defraud.",
    category: "Fraud"
  },
  {
    term: "Trespassing",
    definition: "Entering or remaining on someone else's property without permission.",
    category: "Property Crime"
  },
  {
    term: "Vandalism",
    definition: "Deliberately damaging or destroying public or private property.",
    category: "Property Crime"
  },
  {
    term: "Aggressive Panhandling",
    definition: "Begging in a manner that is intimidating, harassing, or obstructs passage.",
    category: "Public Order"
  },
  {
    term: "Cannibalism",
    definition: "The act of a human consuming another human's flesh.",
    category: "Serious Crime"
  },
  {
    term: "Night Search (SWAT)",
    definition: "A law enforcement search conducted during nighttime hours, often involving specialized tactical units (SWAT) due to high-risk circumstances.",
    category: "Operations"
  },
  {
    term: "Embezzlement",
    definition: "Misappropriating assets entrusted to one's care for personal use.",
    category: "Financial Crime"
  },
  {
    term: "Accessory to Robbery",
    definition: "Assisting someone in committing a robbery, either before or after the fact.",
    category: "Criminal Law"
  },
  {
    term: "Extortion",
    definition: "Obtaining money, property, or services from another by force, threats, or abuse of authority.",
    category: "Financial Crime"
  },
  {
    term: "Money Laundering",
    definition: "Concealing the origins of illegally obtained money by passing it through a complex sequence of financial transactions.",
    category: "Financial Crime"
  },
  {
    term: "Graft",
    definition: "The illegal use of one's political influence or public office for personal gain.",
    category: "Corruption"
  },
  {
    term: "Grey Market",
    definition: "The unofficial and unauthorized distribution of products, often through channels not intended by the original manufacturer.",
    category: "Economic Crime"
  },
  {
    term: "Arson",
    definition: "The criminal act of deliberately setting fire to property.",
    category: "Property Crime"
  },
  {
    term: "Perjury",
    definition: "Knowingly making a false statement under oath or affirmation in a legal proceeding.",
    category: "Court Crime"
  },
  {
    term: "Double Jeopardy",
    definition: "A legal principle preventing an individual from being tried twice for the same crime after being acquitted or convicted.",
    category: "Legal Principle"
  },
  {
    term: "Vigilantism",
    definition: "Law enforcement undertaken by self-appointed groups or individuals without legal authority.",
    category: "Public Order"
  },
  {
    term: "Mayhem",
    definition: "Unlawfully and maliciously depriving a person of a body part or disabling or disfiguring them.",
    category: "Serious Crime"
  },
  {
    term: "Insurrection",
    definition: "A violent uprising against an authority or government.",
    category: "Serious Crime"
  },
  {
    term: "Poaching",
    definition: "Illegally hunting or catching animals or fish on land that is not one's own or without legal permission.",
    category: "Environmental Crime"
  },
  {
    term: "Littering",
    definition: "Discarding trash or waste improperly in a public or natural environment.",
    category: "Environmental Crime"
  },
  {
    term: "Jaywalking",
    definition: "Crossing a street unlawfully or outside designated crosswalks.",
    category: "Traffic Violation"
  },
  {
    term: "Joyriding",
    definition: "Taking and driving a vehicle without the owner's permission, typically for pleasure and without intent to permanently deprive the owner.",
    category: "Vehicle Crime"
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Criminal Law':
      case 'Serious Crime':
        return Scale
      case 'Operations':
        return Shield
      default:
        return AlertTriangle
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Advanced Terms</h1>
              <p className="text-muted-foreground">Command ranking learning terms and advanced concepts</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-2xl mx-auto">
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
          {filteredTerms.map((term, index) => {
            const IconComponent = getCategoryIcon(term.category)
            return (
              <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors text-left">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-primary flex items-center gap-2">
                      <IconComponent className="h-5 w-5" />
                      {term.term}
                    </CardTitle>
                    <Badge variant="secondary">{term.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{term.definition}</p>
                </CardContent>
              </Card>
            )
          })}
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
