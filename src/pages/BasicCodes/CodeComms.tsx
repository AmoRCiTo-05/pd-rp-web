
import React, { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, AlertCircle, CheckCircle, Clock, Zap } from 'lucide-react'

const codeCommunications = [
  { code: "Code 1", description: "Routine Call - No lights or Sirens", priority: 'Low', type: 'Routine' },
  { code: "Code 2", description: "Use Lights. No Sirens", priority: 'Medium', type: 'Urgent' },
  { code: "Code 3", description: "EMERGENCY - Lights and Sirens ON", priority: 'High', type: 'Emergency' },
  { code: "Code 4", description: "All Clear", priority: 'Low', type: 'Status' },
  { code: "Code 5", description: "Felony Stop", priority: 'High', type: 'Emergency' },
  { code: "Code 6", description: "Investigating the Area", priority: 'Medium', type: 'Assignment' },
  { code: "Code 36", description: "Posted Traffic Enforcement", priority: 'Low', type: 'Assignment' },
  { code: "Code 44", description: "Food break", priority: 'Low', type: 'Status' },
  { code: "Code 50", description: "Report Writing", priority: 'Low', type: 'Administrative' },
  { code: "Code 100", description: "Emergency assistance required", priority: 'High', type: 'Emergency' },
  { code: "Code Arson", description: "Active fire incident caused by deliberate criminal activity (arson). Used when there's confirmation or strong suspicion that a fire was intentionally set.", priority: 'High', type: 'Emergency' },
  { code: "Code Grey", description: "Uncooperative or combative individual, usually in a hospital or detention setting. May also refer to a mental health emergency or hostile subject requiring restraint.", priority: 'Medium', type: 'Status' },
  { code: "Code Blue", description: "Medical emergency — person is unconscious or not breathing (cardiac/respiratory arrest). Often used by EMS or hospitals to signal urgent life-saving measures are needed.", priority: 'High', type: 'Emergency' },
  { code: "Code Red", description: "Fire or major emergency requiring immediate response. Sometimes also used in tactical units to mean full alert / lockdown / highest-level threat.", priority: 'High', type: 'Emergency' },
  { code: "Code Adam", description: "Missing or abducted child. Originally developed by Walmart and now used widely, this code is activated when a child is reported missing in a public area or facility.", priority: 'High', type: 'Emergency' },
  { code: "Code Purple", description: "Hostage situation or violent person with a weapon — especially in hospitals or schools. Some systems may use it for bomb threats or VIP threats, depending on local protocol.", priority: 'High', type: 'Emergency' }
]

const priorities = ['All', 'Low', 'Medium', 'High']
const types = ['All', 'Routine', 'Urgent', 'Emergency', 'Status', 'Assignment', 'Administrative']

export default function CodeComms() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPriority, setSelectedPriority] = useState('All')
  const [selectedType, setSelectedType] = useState('All')

  const filteredCodes = codeCommunications.filter(code => {
    const matchesSearch = code.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         code.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPriority = selectedPriority === 'All' || code.priority === selectedPriority
    const matchesType = selectedType === 'All' || code.type === selectedType
    return matchesSearch && matchesPriority && matchesType
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Emergency':
        return 'bg-red-500/10 text-red-600 border-red-500/20'
      case 'Urgent':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20'
      case 'Assignment':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20'
      case 'Status':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20'
      case 'Administrative':
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
      default:
        return 'bg-green-500/10 text-green-600 border-green-500/20'
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Code Communications</h1>
              <p className="text-muted-foreground">Essential response codes for law enforcement operations</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-6">
          <div className="flex-1">
            <SearchBar 
              placeholder="Search code communications..."
              onSearch={setSearchQuery}
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
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
            
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 bg-card border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCodes.length} of {codeCommunications.length} codes
          </p>
        </div>

        {/* Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCodes.map((code, index) => (
            <Card key={index} className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 border-border bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-mono text-xl text-primary font-bold">
                    {code.code}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    {getPriorityIcon(code.priority)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground font-medium mb-4 leading-relaxed">
                  {code.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className={getPriorityColor(code.priority)}>
                    {code.priority}
                  </Badge>
                  <Badge variant="outline" className={getTypeColor(code.type)}>
                    {code.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCodes.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="font-heading text-lg font-semibold mb-2">No codes found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
