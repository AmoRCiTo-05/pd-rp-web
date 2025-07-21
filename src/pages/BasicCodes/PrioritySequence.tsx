
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, AlertTriangle, Zap } from 'lucide-react'

const prioritySequence = [
  { code: "10-99", description: "Everyone Respond", priority: 1 },
  { code: "10-14A", description: "Officer Down", priority: 2 },
  { code: "10-14B", description: "Medic Down", priority: 3 },
  { code: "10-73", description: "Kidnapping of Officer/EMS (On Duty)", priority: 4 },
  { code: "10-78", description: "Need Backup (EMERGENCY)", priority: 5 },
  { code: "10-90A", description: "Bank Robbery", priority: 6 },
  { code: "10-90B", description: "Jewellery Robbery", priority: 7 },
  { code: "10-90C", description: "Store Robbery", priority: 8 },
  { code: "10-90E", description: "Yacht Heist", priority: 9 },
  { code: "10-68", description: "Car Boosting", priority: 10 },
  { code: "10-45", description: "Street Race", priority: 11 },
  { code: "10-72", description: "Hostage Situation", priority: 12 },
  { code: "10-90D", description: "House Robbery / Burglary", priority: 13 },
  { code: "10-77", description: "Need Backup (non emergency)", priority: 14 },
  { code: "10-13A", description: "Shots Fired", priority: 15 },
  { code: "10-13B", description: "Shots Fired from vehicle", priority: 15 },
  { code: "10-25", description: "Report in Person", priority: 16 },
  { code: "10-67", description: "GTA / Car Jacking", priority: 17 },
  { code: "10-38", description: "Drug Sales / Suspicious Handoff", priority: 18 },
  { code: "10-44", description: "Brandishing", priority: 19 },
]

const getPriorityColor = (priority: number) => {
  if (priority <= 5) return 'bg-red-500/10 text-red-600 border-red-500/20'
  if (priority <= 10) return 'bg-orange-500/10 text-orange-600 border-orange-500/20'
  if (priority <= 15) return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
  return 'bg-green-500/10 text-green-600 border-green-500/20'
}

const getPriorityIcon = (priority: number) => {
  if (priority <= 5) return <AlertTriangle className="h-4 w-4 text-red-500" />
  if (priority <= 10) return <Zap className="h-4 w-4 text-orange-500" />
  if (priority <= 15) return <Clock className="h-4 w-4 text-yellow-500" />
  return <Clock className="h-4 w-4 text-green-500" />
}

export default function PrioritySequence() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Priority Sequence</h1>
              <p className="text-muted-foreground">Priority call sequence for law enforcement response (Highest to Lowest)</p>
            </div>
          </div>
        </div>

        {/* Warning Notice */}
        <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Important Notice</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                The sequences can change from time to time. Make sure to always keep checking the data for the most current priority order.
              </p>
            </div>
          </div>
        </div>

        {/* Priority Sequence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prioritySequence.map((item, index) => (
            <Card key={index} className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 border-border bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="font-mono text-sm px-2 py-1 bg-primary/10 text-primary border-primary/20">
                      #{item.priority}
                    </Badge>
                    {getPriorityIcon(item.priority)}
                  </div>
                </div>
                <CardTitle className="font-mono text-lg text-primary font-bold">
                  {item.code}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground font-medium leading-relaxed">
                  {item.description}
                </CardDescription>
                <div className="mt-3">
                  <Badge variant="outline" className={getPriorityColor(item.priority)}>
                    {item.priority <= 5 ? 'Critical' : item.priority <= 10 ? 'High' : item.priority <= 15 ? 'Medium' : 'Standard'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 p-6 bg-card/30 border border-border rounded-lg">
          <h3 className="font-heading text-lg font-semibold mb-4">Priority Levels</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">Critical</Badge>
              <span className="text-sm text-muted-foreground">(1-5)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-orange-500" />
              <Badge variant="outline" className="bg-orange-500/10 text-orange-600 border-orange-500/20">High</Badge>
              <span className="text-sm text-muted-foreground">(6-10)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-yellow-500" />
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Medium</Badge>
              <span className="text-sm text-muted-foreground">(11-15)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-green-500" />
              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">Standard</Badge>
              <span className="text-sm text-muted-foreground">(16+)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
