
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Users, GraduationCap, Car, Shield, Radio, AlertTriangle } from 'lucide-react'

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
                1. Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The Speed Enforcement Unit (SEU) is a specialized division of the Police Department responsible for monitoring, enforcing, and responding to high-speed traffic violations. Operating high-performance patrol vehicles, SEU ensures road safety through proactive patrolling and rapid response.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                2. Oath of the SEU Officer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed italic">
                "I swear to uphold the laws of the State, act swiftly and responsibly, and ensure public safety through fair and effective speed enforcement. I will not abuse the power entrusted to me and will conduct myself with honor and discipline at all times."
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                3. Certification Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">To be assigned to SEU, an officer must:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Be at least Rank Corporal or above</li>
                <li>Have completed the SEU Training Program</li>
                <li>Successfully pass High-Speed Vehicle Control assessment</li>
                <li>Get clearance from HR & SEU Command</li>
                <li>Undergo a Probationary Ride-Along phase with SEU-1 Lead</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Zap className="h-5 w-5" />
                4. Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">The SEU aims to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Enforce traffic speed limits and related laws</li>
                <li>Minimize street racing and reckless driving</li>
                <li>Reduce vehicular incidents through deterrence and rapid response</li>
                <li>Support ground patrol and pursuits when speeds escalate</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Car className="h-5 w-5" />
                5. Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">The SEU is authorized to patrol and enforce in:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Highways</li>
                <li>Freeways</li>
                <li>Expressways</li>
                <li>Airport Roads</li>
                <li>Inner-city areas with frequent street racing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                6. Authorized Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>SEU Officers must operate only approved SEU vehicles.</li>
                <li>Officers must not exceed departmental jurisdiction unless given chase or support orders.</li>
                <li>Lights/Sirens must be used for all stops.</li>
                <li>Bodycam or In-car dashcam must be active at all times.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Car className="h-5 w-5" />
                7. SEU Types & Vehicle Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold text-foreground">Unit</th>
                      <th className="text-left p-3 font-semibold text-foreground">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-mono">SEU-1</td>
                      <td className="p-3">Lead Patrol & Interception</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-mono">SEU-2</td>
                      <td className="p-3">Support & Surveillance</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-mono">SEU-3</td>
                      <td className="p-3">Urban Speed Enforcement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Radio className="h-5 w-5" />
                13. Communication Protocols
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Use Incident Radio for pursuit-related traffic</li>
                <li>Use PD Main for general updates</li>
                <li>Callouts must include location, direction, suspect details</li>
                <li>End all 10-80s with final status: "Code 4, Suspect in Custody / Escaped / Vehicle Disabled"</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Example RP Callout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-foreground font-mono text-sm">
                  SEU-1 to Dispatch, 10-80 initiated, black Sultan RS, eastbound Del Perro Freeway, speed 160+, requesting spike support from SEU-2 or MPU unit. Air-1 status?
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
