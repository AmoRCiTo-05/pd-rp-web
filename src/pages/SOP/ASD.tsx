
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plane, Users, GraduationCap, Camera, AlertTriangle, Settings } from 'lucide-react'

export default function ASD() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">ASD SOP</h1>
              <p className="text-muted-foreground">Air Support Division - Standard Operating Procedures</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Plane className="h-5 w-5" />
                3.1 Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The Air Support Division (ASD) enhances law enforcement operations through aerial surveillance, search and rescue, and pursuit assistance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                3.2 Chain of Command
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">ASU Lead</Badge>
                  <span className="text-foreground">Supervises operations and ensures pilot training compliance.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">ASU Instructor</Badge>
                  <span className="text-foreground">Manage shift schedules and operational duties.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">Pilots/Co-Pilots</Badge>
                  <span className="text-foreground">Conduct aerial patrols and assist ground units.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="min-w-fit">Trainees</Badge>
                  <span className="text-foreground">Undergo training before full deployment.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                3.3 Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-foreground">
                <li>Must have a valid pilot license</li>
                <li>Must be Officer/Deputy Rank or above</li>
                <li>Must complete LEO Air Support Training.</li>
                <li>No major disciplinary actions in the past 1 month.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Camera className="h-5 w-5" />
                3.4 Equipment & Aircraft
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Law enforcement helicopters (AS350, Maverick models).</li>
                <li>Thermal imaging & surveillance cameras for operations.</li>
                <li>Radio communication systems for real-time coordination.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Settings className="h-5 w-5" />
                3.5 Operational Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>All flights must be pre-approved by the ASU Supervisor.</li>
                <li>Pilots cannot operate surveillance cameras while flying; a co-pilot must be present.</li>
                <li>Minimum altitude: 40 feet (except for tactical landings).</li>
                <li>Thermal imaging is restricted to authorized operations only.</li>
                <li>Solo pilots cannot respond to situations unless LEO numbers are critically low.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                3.6 Civilian Aircraft Regulations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Civilian aircraft must notify law enforcement & air traffic control before flights.</li>
                <li>Unauthorized civilian aircraft may be contacted on 911/311 frequencies.</li>
                <li>If a civilian pilot fails to comply, two verbal warnings will be given before escalation.</li>
                <li>Unauthorized aircraft may be shot down if posing a severe threat.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
