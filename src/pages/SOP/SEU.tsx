
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Users, GraduationCap, Car } from 'lucide-react'

export default function SEU() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">SEU SOP</h1>
              <p className="text-muted-foreground">Speed Enforcement Unit - Standard Operating Procedures</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 text-left">
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The Speed Enforcement Unit (SEU) is tasked with enforcing speed limits, conducting traffic stops for excessive speeding, and reducing road-related fatalities. SEU officers use advanced technology to monitor and control speeding violations across highways and city roads.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                Chain of Command
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">SEU Head</Badge>
                  <span className="text-foreground">Oversees all operations and ensures compliance with policies.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">Supervisors</Badge>
                  <span className="text-foreground">Manage daily deployment, monitor officer performance, and provide training.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">Trainer</Badge>
                  <span className="text-foreground">Trains Trainee for SEU Department.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">SEU Officers</Badge>
                  <span className="text-foreground">Execute speed enforcement, conduct traffic stops, and issue citations.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">Trainee</Badge>
                  <span className="text-foreground">Learns from trainer about Speed Enforcement.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Eligibility & Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Eligibility Criteria</h4>
                  <ul className="list-disc list-inside space-y-1 text-foreground ml-4">
                    <li>Minimum 1 month of patrol experience.</li>
                    <li>Must be Officer/Deputy Rank or above</li>
                    <li>No serious disciplinary actions within the past 2 weeks.</li>
                    <li>Must pass the SEU driving and pursuit course.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Car className="h-5 w-5" />
                Equipment & Vehicles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>High-performance patrol vehicles (Interceptor models).</li>
                <li>Radar and RADAR speed detection systems.</li>
                <li>Dash and body cameras for evidence collection.</li>
                <li>Portable spike strips for extreme situations.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
