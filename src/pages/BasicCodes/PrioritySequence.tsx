
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Clock } from 'lucide-react'

const priorityData = [
  { code: '10-99', description: 'Everyone Respond', priority: 'HIGHEST' },
  { code: '10-14A', description: 'Officer Down', priority: 'HIGHEST' },
  { code: '10-14B', description: 'Medic Down', priority: 'HIGHEST' },
  { code: '10-73', description: 'Kidnapping of Officer/EMS (On Duty)', priority: 'HIGHEST' },
  { code: '10-78', description: 'Need Backup (EMERGENCY)', priority: 'HIGHEST' },
  { code: '10-90A', description: 'Bank Robbery', priority: 'HIGH' },
  { code: '10-90B', description: 'Jewellery Robbery', priority: 'HIGH' },
  { code: '10-90C', description: 'Store Robbery', priority: 'HIGH' },
  { code: '10-90E', description: 'Yacht Heist', priority: 'HIGH' },
  { code: '10-68', description: 'Car Boosting', priority: 'HIGH' },
  { code: '10-45', description: 'Street Race', priority: 'HIGH' },
  { code: '10-72', description: 'Hostage Situation', priority: 'HIGH' },
  { code: '10-90D', description: 'House Robbery / Burglary', priority: 'MEDIUM' },
  { code: '10-77', description: 'Need Backup (non emergency)', priority: 'MEDIUM' },
  { code: '10-13A', description: 'Shots Fired', priority: 'MEDIUM' },
  { code: '10-13B', description: 'Shots Fired from vehicle', priority: 'MEDIUM' },
  { code: '10-25', description: 'Report in Person', priority: 'MEDIUM' },
  { code: '10-67', description: 'GTA / Car Jacking', priority: 'LOW' },
  { code: '10-38', description: 'Drug Sales / Suspicious Handoff', priority: 'LOW' },
  { code: '10-44', description: 'Brandishing', priority: 'LOWEST' },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'HIGHEST': return 'bg-red-500/20 text-red-500 border-red-500/30'
    case 'HIGH': return 'bg-orange-500/20 text-orange-500 border-orange-500/30'
    case 'MEDIUM': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30'
    case 'LOW': return 'bg-blue-500/20 text-blue-500 border-blue-500/30'
    case 'LOWEST': return 'bg-gray-500/20 text-gray-500 border-gray-500/30'
    default: return 'bg-gray-500/20 text-gray-500 border-gray-500/30'
  }
}

export default function PrioritySequence() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Priority Sequence</h1>
              <p className="text-muted-foreground">Emergency call priority sequence for law enforcement response</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Priority Call Sequence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold text-foreground">Priority</th>
                      <th className="text-left p-3 font-semibold text-foreground">Code</th>
                      <th className="text-left p-3 font-semibold text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priorityData.map((item, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-3">
                          <Badge variant="outline" className={getPriorityColor(item.priority)}>
                            {item.priority}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <code className="bg-muted/50 px-2 py-1 rounded text-sm font-mono">
                            {item.code}
                          </code>
                        </td>
                        <td className="p-3 text-foreground">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The sequences can change from time to time. Make sure to always keep checking the data and stay updated with the latest priority classifications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
