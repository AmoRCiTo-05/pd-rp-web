import React, { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Radio, AlertCircle, CheckCircle, Clock } from 'lucide-react'

const tenCodes = [
  { code: '10-1', meaning: 'Unable to copy, bad reception', category: 'Communication', priority: 'Low' },
  { code: '10-2', meaning: 'Good reception', category: 'Communication', priority: 'Low' },
  { code: '10-3', meaning: 'Stop transmitting', category: 'Communication', priority: 'Medium' },
  { code: '10-4', meaning: 'Acknowledgment (OK)', category: 'Communication', priority: 'Low' },
  { code: '10-5', meaning: 'Relay message', category: 'Communication', priority: 'Medium' },
  { code: '10-6', meaning: 'Busy, stand by', category: 'Status', priority: 'Medium' },
  { code: '10-7', meaning: 'Out of service', category: 'Status', priority: 'Medium' },
  { code: '10-8', meaning: 'In service', category: 'Status', priority: 'Low' },
  { code: '10-9', meaning: 'Repeat message', category: 'Communication', priority: 'Low' },
  { code: '10-10', meaning: 'Fight in progress', category: 'Emergency', priority: 'High' },
  { code: '10-11', meaning: 'Dog case', category: 'Incident', priority: 'Low' },
  { code: '10-12', meaning: 'Stand by (stop)', category: 'Communication', priority: 'Medium' },
  { code: '10-13', meaning: 'Weather/road conditions', category: 'Information', priority: 'Low' },
  { code: '10-14', meaning: 'Prowler report', category: 'Incident', priority: 'Medium' },
  { code: '10-15', meaning: 'Civil disturbance', category: 'Emergency', priority: 'High' },
  { code: '10-16', meaning: 'Domestic problem', category: 'Incident', priority: 'Medium' },
  { code: '10-17', meaning: 'Meet complainant', category: 'Assignment', priority: 'Medium' },
  { code: '10-18', meaning: 'Complete assignment quickly', category: 'Assignment', priority: 'Medium' },
  { code: '10-19', meaning: 'Return to station', category: 'Movement', priority: 'Low' },
  { code: '10-20', meaning: 'Location', category: 'Information', priority: 'Medium' },
  { code: '10-21', meaning: 'Call by telephone', category: 'Communication', priority: 'Medium' },
  { code: '10-22', meaning: 'Report in person', category: 'Assignment', priority: 'Medium' },
  { code: '10-23', meaning: 'Stand by', category: 'Communication', priority: 'Medium' },
  { code: '10-24', meaning: 'Completed last assignment', category: 'Status', priority: 'Low' },
  { code: '10-25', meaning: 'Report in person to', category: 'Assignment', priority: 'Medium' },
  { code: '10-26', meaning: 'Detaining subject, expedite', category: 'Emergency', priority: 'High' },
  { code: '10-27', meaning: 'Drivers license information', category: 'Information', priority: 'Medium' },
  { code: '10-28', meaning: 'Vehicle registration information', category: 'Information', priority: 'Medium' },
  { code: '10-29', meaning: 'Check for wanted', category: 'Information', priority: 'Medium' },
  { code: '10-30', meaning: 'Unnecessary use of radio', category: 'Communication', priority: 'Low' },
  { code: '10-31', meaning: 'Crime in progress', category: 'Emergency', priority: 'High' },
  { code: '10-32', meaning: 'Man with gun', category: 'Emergency', priority: 'High' },
  { code: '10-33', meaning: 'Emergency traffic', category: 'Emergency', priority: 'High' },
  { code: '10-34', meaning: 'Riot', category: 'Emergency', priority: 'High' },
  { code: '10-35', meaning: 'Major crime alert', category: 'Emergency', priority: 'High' },
  { code: '10-36', meaning: 'Correct time', category: 'Information', priority: 'Low' },
  { code: '10-37', meaning: 'Investigate suspicious vehicle', category: 'Incident', priority: 'Medium' },
  { code: '10-38', meaning: 'Stopping suspicious vehicle', category: 'Incident', priority: 'Medium' },
  { code: '10-39', meaning: 'Urgent - use light, siren', category: 'Emergency', priority: 'High' },
  { code: '10-40', meaning: 'Silent run - no light, siren', category: 'Movement', priority: 'Medium' },
  { code: '10-41', meaning: 'Beginning tour of duty', category: 'Status', priority: 'Low' },
  { code: '10-42', meaning: 'Ending tour of duty', category: 'Status', priority: 'Low' },
  { code: '10-43', meaning: 'Information', category: 'Information', priority: 'Low' },
  { code: '10-44', meaning: 'Permission to leave patrol', category: 'Status', priority: 'Medium' },
  { code: '10-45', meaning: 'Dead animal', category: 'Incident', priority: 'Low' },
  { code: '10-46', meaning: 'Assist motorist', category: 'Assistance', priority: 'Low' },
  { code: '10-47', meaning: 'Emergency road repairs', category: 'Incident', priority: 'Medium' },
  { code: '10-48', meaning: 'Traffic standard repair', category: 'Incident', priority: 'Low' },
  { code: '10-49', meaning: 'Traffic light out', category: 'Incident', priority: 'Medium' },
  { code: '10-50', meaning: 'Accident (fatal/personal injury)', category: 'Emergency', priority: 'High' },
  { code: '10-51', meaning: 'Wrecker needed', category: 'Assistance', priority: 'Medium' },
  { code: '10-52', meaning: 'Ambulance needed', category: 'Emergency', priority: 'High' },
  { code: '10-53', meaning: 'Road blocked', category: 'Incident', priority: 'Medium' },
  { code: '10-54', meaning: 'Livestock on highway', category: 'Incident', priority: 'Medium' },
  { code: '10-55', meaning: 'Suspected DUI', category: 'Incident', priority: 'High' },
  { code: '10-56', meaning: 'Intoxicated pedestrian', category: 'Incident', priority: 'Medium' },
  { code: '10-57', meaning: 'Hit and run (fatal/personal injury)', category: 'Emergency', priority: 'High' },
  { code: '10-58', meaning: 'Direct traffic', category: 'Assignment', priority: 'Medium' },
  { code: '10-59', meaning: 'Convoy or escort', category: 'Assignment', priority: 'Medium' },
  { code: '10-60', meaning: 'Squad in vicinity', category: 'Information', priority: 'Low' },
  { code: '10-61', meaning: 'Isolate self for message', category: 'Communication', priority: 'Medium' },
  { code: '10-62', meaning: 'Reply to message', category: 'Communication', priority: 'Medium' },
  { code: '10-63', meaning: 'Prepare to make written copy', category: 'Communication', priority: 'Medium' },
  { code: '10-64', meaning: 'Message for local delivery', category: 'Communication', priority: 'Low' },
  { code: '10-65', meaning: 'Net message assignment', category: 'Communication', priority: 'Medium' },
  { code: '10-66', meaning: 'Message cancellation', category: 'Communication', priority: 'Medium' },
  { code: '10-67', meaning: 'Clear for net message', category: 'Communication', priority: 'Medium' },
  { code: '10-68', meaning: 'Dispatch information', category: 'Information', priority: 'Medium' },
  { code: '10-69', meaning: 'Message received', category: 'Communication', priority: 'Low' },
  { code: '10-70', meaning: 'Fire', category: 'Emergency', priority: 'High' },
  { code: '10-71', meaning: 'Advise nature of fire', category: 'Emergency', priority: 'High' },
  { code: '10-72', meaning: 'Report progress on fire', category: 'Emergency', priority: 'High' },
  { code: '10-73', meaning: 'Smoke report', category: 'Incident', priority: 'Medium' },
  { code: '10-74', meaning: 'Negative', category: 'Communication', priority: 'Low' },
  { code: '10-75', meaning: 'In contact with', category: 'Communication', priority: 'Low' },
  { code: '10-76', meaning: 'En route', category: 'Movement', priority: 'Medium' },
  { code: '10-77', meaning: 'ETA (Estimated Time of Arrival)', category: 'Information', priority: 'Medium' },
  { code: '10-78', meaning: 'Need assistance', category: 'Emergency', priority: 'High' },
  { code: '10-79', meaning: 'Notify coroner', category: 'Emergency', priority: 'High' },
  { code: '10-80', meaning: 'Chase in progress', category: 'Emergency', priority: 'High' },
  { code: '10-81', meaning: 'Breathalyzer', category: 'Incident', priority: 'Medium' },
  { code: '10-82', meaning: 'Reserve lodging', category: 'Assignment', priority: 'Low' },
  { code: '10-83', meaning: 'Work school crossing', category: 'Assignment', priority: 'Medium' },
  { code: '10-84', meaning: 'If meeting, advise ETA', category: 'Information', priority: 'Low' },
  { code: '10-85', meaning: 'Delayed due to', category: 'Information', priority: 'Low' },
  { code: '10-86', meaning: 'Officer/operator on duty', category: 'Status', priority: 'Low' },
  { code: '10-87', meaning: 'Pick up/distribute checks', category: 'Assignment', priority: 'Low' },
  { code: '10-88', meaning: 'Present telephone number of', category: 'Information', priority: 'Low' },
  { code: '10-89', meaning: 'Bomb threat', category: 'Emergency', priority: 'High' },
  { code: '10-90', meaning: 'Bank alarm', category: 'Emergency', priority: 'High' },
  { code: '10-91', meaning: 'Pick up prisoner/subject', category: 'Assignment', priority: 'Medium' },
  { code: '10-92', meaning: 'Improperly parked vehicle', category: 'Incident', priority: 'Low' },
  { code: '10-93', meaning: 'Blockade', category: 'Assignment', priority: 'Medium' },
  { code: '10-94', meaning: 'Drag racing', category: 'Incident', priority: 'Medium' },
  { code: '10-95', meaning: 'Prisoner/subject in custody', category: 'Status', priority: 'Medium' },
  { code: '10-96', meaning: 'Mental subject', category: 'Incident', priority: 'High' },
  { code: '10-97', meaning: 'Check (test) signal', category: 'Communication', priority: 'Low' },
  { code: '10-98', meaning: 'Prison/jail break', category: 'Emergency', priority: 'High' },
  { code: '10-99', meaning: 'Wanted/stolen indicated', category: 'Information', priority: 'High' }
]

const categories = ['All', 'Communication', 'Status', 'Emergency', 'Incident', 'Information', 'Assignment', 'Movement', 'Assistance']
const priorities = ['All', 'Low', 'Medium', 'High']

export default function TenCodes() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriority, setSelectedPriority] = useState('All')

  const filteredCodes = tenCodes.filter(code => {
    const matchesSearch = code.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         code.meaning.toLowerCase().includes(searchQuery.toLowerCase())
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
              placeholder="Search 10-codes or meanings..."
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
                  {code.meaning}
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