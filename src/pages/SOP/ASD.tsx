
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plane, Users, GraduationCap, Shield, AlertTriangle, Radio } from 'lucide-react'

export default function ASD() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">ASD SOP</h1>
              <p className="text-muted-foreground">Air Support Division - Standard Operating Procedures</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 text-left">
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Plane className="h-5 w-5" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The SASP Air Corps supports Patrol Operations, SWAT teams, and Major Crimes Units by providing aerial assistance, surveillance, search and rescue, and tactical insertions. Response times are crucial in assisting units that require Air 1 support. The Air Corps plays a critical role in public safety, criminal apprehension, and emergency response, ensuring that ground units receive real-time intelligence and tactical advantage.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Oath
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed italic">
                "This is my chopper. There are many like it, but this one is mine. I swear to uphold the high standards of the Air Corps, protect my chopper, and keep my co-pilot safe. If I crash or fail, I risk my wings and the trust of my team. I pledge to serve with honor, courage, and precision in the skies."
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Certification Process (Getting Your Wings)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Theory (Helicopter mechanics, maintenance, SOPs, emergency procedures)</li>
                <li>Communication (In-flight, air-to-ground coordination, emergency protocols)</li>
                <li>Handling (Take-off, in-flight controls, hovering, positioning, altitude management)</li>
                <li>Landing (Precision landing under various conditions, emergency landings)</li>
                <li>Tactical Maneuvering (Insertions, flying under fire, rapid extractions, urban operations)</li>
                <li>Night & Adverse Weather Training (Low-visibility operations, using onboard instruments)</li>
                <li>Final Exam (Viva and practical test for certification)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Plane className="h-5 w-5" />
                Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The Air 1 Unit serves as the aerial division of the San Andreas State Police, providing tactical air support, reconnaissance, emergency response, and high-risk intervention. Air 1 ensures enhanced situational awareness, rapid deployment, and an additional layer of security for law enforcement operations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Authorized Air 1 Altitude Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Standard Patrol & Surveillance:</h4>
                  <p className="text-foreground ml-4">Above Ground Level (AGL): 800 - 1,000 feet</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Pursuit Operations:</h4>
                  <p className="text-foreground ml-4">Above Ground Level (AGL): 1,200 - 1,500 feet</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Search & Rescue:</h4>
                  <p className="text-foreground ml-4">Above Ground Level (AGL): 500 - 1,000 feet</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tactical Operations:</h4>
                  <p className="text-foreground ml-4">Above Ground Level (AGL): 200 - 500 feet (for approach)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Radio className="h-5 w-5" />
                Communication Protocols
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Dispatch Coordination: Notify before takeoff/landing, provide mission updates.</li>
                <li>Radio Channels: Use designated secure frequencies to prevent interference.</li>
                <li>Emergency Signals:</li>
                <ul className="ml-6 list-disc list-inside space-y-1 text-foreground">
                  <li>Mayday - Used in life-threatening situations.</li>
                  <li>Code Red - Indicates an active threat requiring immediate response.</li>
                  <li>Code Blue - Signifies an aircraft in distress but not in immediate danger.</li>
                </ul>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Standard Operating Procedures (SOPs)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Only certified pilots may operate Air 1.</li>
                <li>Pilots cannot use surveillance cameras while flying - a co-pilot must be present.</li>
                <li>Helicopters are for specialized operations only, including pursuits, robberies, search and rescue, SWAT ops.</li>
                <li>Thermal imaging is used only in authorized operations (e.g. Major RPR, Dense terrain, Wooded areas, Perimeter Scanning).</li>
                <li>Unauthorized aircraft must be contacted on frequency 911. If unresponsive, seek clearance before engaging.</li>
                <li>Recklessness is strictly prohibited – Any misuse of Air 1 may result in disciplinary action or license suspension.</li>
                <li>Landing on roads/highways is prohibited unless explicitly authorized by High Command or the Air 1 Commander.</li>
                <li>Mandatory uniform and gear compliance – Violations may result in strikes or suspension.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
