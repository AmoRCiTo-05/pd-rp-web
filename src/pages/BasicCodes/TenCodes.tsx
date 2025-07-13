
import React, { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Radio, AlertCircle, CheckCircle, Clock } from 'lucide-react'

const tenCodes = [
  { code: "10-2", description: "Reception Good", category: 'Communication', priority: 'Low' },
  { code: "10-3", description: "Stop Transmitting", category: 'Communication', priority: 'Medium' },
  { code: "10-4", description: "Message Received, Understood", category: 'Communication', priority: 'Low' },
  { code: "10-6", description: "Change Channel", category: 'Communication', priority: 'Medium' },
  { code: "10-7", description: "Out of Service", category: 'Status', priority: 'Medium' },
  { code: "10-8", description: "In service", category: 'Status', priority: 'Low' },
  { code: "10-9", description: "Repeat Message", category: 'Communication', priority: 'Low' },
  { code: "10-10", description: "Negative", category: 'Communication', priority: 'Low' },
  { code: "10-11", description: "Traffic Stop", category: 'Incident', priority: 'Medium' },
  { code: "10-12", description: "Ride-along", category: 'Status', priority: 'Low' },
  { code: "10-13", description: "Shots Fired", category: 'Emergency', priority: 'High' },
  { code: "10-14A", description: "Officer Down", category: 'Emergency', priority: 'High' },
  { code: "10-14B", description: "EMS Down", category: 'Emergency', priority: 'High' },
  { code: "10-15", description: "Suspect/Prisoner in Custody", category: 'Status', priority: 'Medium' },
  { code: "10-16", description: "Hospital", category: 'Information', priority: 'Medium' },
  { code: "10-19", description: "Return(ing) to Station", category: 'Movement', priority: 'Low' },
  { code: "10-20", description: "Location", category: 'Information', priority: 'Medium' },
  { code: "10-21", description: "Telephone", category: 'Communication', priority: 'Medium' },
  { code: "10-22", description: "Disregard", category: 'Communication', priority: 'Medium' },
  { code: "10-23", description: "Arrived at Scene", category: 'Status', priority: 'Medium' },
  { code: "10-25", description: "Meet in person", category: 'Assignment', priority: 'Medium' },
  { code: "10-28", description: "Vehicle Registration Check", category: 'Information', priority: 'Medium' },
  { code: "10-29", description: "Warrant Check", category: 'Information', priority: 'Medium' },
  { code: "10-29F", description: "Subject Wanted/ Felony", category: 'Emergency', priority: 'High' },
  { code: "10-29M", description: "Subject Wanted/ Misdemeanor", category: 'Incident', priority: 'Medium' },
  { code: "10-29V", description: "Vehicle Wanted", category: 'Incident', priority: 'Medium' },
  { code: "10-31", description: "Crime in progress", category: 'Emergency', priority: 'High' },
  { code: "10-32", description: "Person with a gun", category: 'Emergency', priority: 'High' },
  { code: "10-38", description: "Drug Sales", category: 'Incident', priority: 'High' },
  { code: "10-41", description: "Going ON DUTY", category: 'Status', priority: 'Low' },
  { code: "10-42", description: "Going OFF DUTY", category: 'Status', priority: 'Low' },
  { code: "10-47", description: "Injured Person", category: 'Emergency', priority: 'High' },
  { code: "10-50", description: "Vehicle Accident", category: 'Incident', priority: 'Medium' },
  { code: "10-52", description: "Requesting EMS", category: 'Emergency', priority: 'High' },
  { code: "10-55", description: "Intoxicated driver", category: 'Incident', priority: 'High' },
  { code: "10-56", description: "Intoxicated person", category: 'Incident', priority: 'Medium' },
  { code: "10-57", description: "HIT & RUN", category: 'Incident', priority: 'High' },
  { code: "10-60", description: "Stolen Vehicle", category: 'Incident', priority: 'High' },
  { code: "10-66", description: "Suspicious Person", category: 'Incident', priority: 'Medium' },
  { code: "10-67", description: "GTA/Car Jacking", category: 'Emergency', priority: 'High' },
  { code: "10-70", description: "Foot pursuit", category: 'Emergency', priority: 'High' },
  { code: "10-71", description: "Shooting", category: 'Emergency', priority: 'High' },
  { code: "10-72", description: "Hostage/Hostage situation", category: 'Emergency', priority: 'High' },
  { code: "10-76", description: "Enroute", category: 'Movement', priority: 'Medium' },
  { code: "10-77", description: "Need backup (non-emergency)", category: 'Assistance', priority: 'Medium' },
  { code: "10-78", description: "Need backup (emergency)", category: 'Emergency', priority: 'High' },
  { code: "10-79", description: "Estimate time of arrival (ETA)", category: 'Information', priority: 'Low' },
  { code: "10-80", description: "Vehicle pursuit", category: 'Emergency', priority: 'High' },
  { code: "10-90A", description: "Bank Robbery", category: 'Emergency', priority: 'High' },
  { code: "10-90B", description: "Jewellery Robbery", category: 'Emergency', priority: 'High' },
  { code: "10-90C", description: "Store Robbery", category: 'Emergency', priority: 'High' },
  { code: "10-90D", description: "House Robbery/Burglary", category: 'Emergency', priority: 'High' },
  { code: "10-91", description: "Transport Unit", category: 'Assignment', priority: 'Medium' },
  { code: "10-94", description: "Reckless Driving", category: 'Incident', priority: 'Medium' },
  { code: "10-98", description: "Prison Break", category: 'Emergency', priority: 'High' },
  { code: "10-99", description: "Everyone responds", category: 'Emergency', priority: 'High' }
]

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
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Radio className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">10-Codes</h1>
              <p className="text-muted-foreground">Essential radio communication codes for law enforcement</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-6">
          <div className="flex-1">
            <SearchBar 
              placeholder="Search 10-codes or descriptions..."
              onSearch={setSearchQuery}
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-card border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Priority</label>
              <select 
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="px-3 py-2 bg-card border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCodes.map((code, index) => (
            <Card key={index} className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 border-border bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-mono text-xl text-primary font-bold">
                    {code.code}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    {getPriorityIcon(code.priority)}
                    <Badge variant="outline" className={getPriorityColor(code.priority)}>
                      {code.priority}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground font-medium mb-3 leading-relaxed">
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
