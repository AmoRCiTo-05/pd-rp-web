
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bike, Users, GraduationCap, Shield } from 'lucide-react'

export default function MEU() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Bike className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">MEU SOP</h1>
              <p className="text-muted-foreground">Motor Enforcement Unit - Standard Operating Procedures</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 text-left">
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Bike className="h-5 w-5" />
                Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The Motor Enforcement Unit (MEU) is responsible for enforcing traffic laws using motorcycles, ensuring rapid response to emergencies, and providing escort services.
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
                  <Badge variant="secondary" className="min-w-fit">MEU Head</Badge>
                  <span className="text-foreground">Supervises operations and policy enforcement.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">MEU Supervisors</Badge>
                  <span className="text-foreground">Oversee shift management and officer deployment.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">MEU Officers</Badge>
                  <span className="text-foreground">Conduct routine patrols, traffic enforcement, and special event duties.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-foreground">
                <li>Minimum 1 month of patrol experience.</li>
                <li>Must be Officer/Deputy Rank or above</li>
                <li>Completion of the Motorcycle Training Course.</li>
                <li>Strong physical endurance and riding skills.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Equipment & Vehicles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Police-issued motorcycles with emergency lights and sirens.</li>
                <li>Protective gear (Helmet, gloves, knee & elbow pads).</li>
                <li>Body-worn cameras and communication devices.</li>
                <li>Firearm, taser, handcuffs, and standard patrol gear.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
