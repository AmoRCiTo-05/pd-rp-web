
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bike, Users, GraduationCap, Shield, Radio, AlertTriangle } from 'lucide-react'

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
              <h1 className="font-heading text-3xl font-bold">MPU SOP</h1>
              <p className="text-muted-foreground">Motor Pursuit Unit - Standard Operating Procedures</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 text-left">
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Bike className="h-5 w-5" />
                1. Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The Motor Pursuit Unit (MPU) is a tactical law enforcement division specialized in high-speed motorcycle-based pursuit operations. These officers are trained to respond quickly, navigate tight urban environments, and provide rapid visual tracking during vehicular chases.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                2. Oath of the MPU Officer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed italic">
                "I swear to protect and serve with speed, skill, and control. I will use my training to pursue justice while ensuring public safety, maintaining discipline, and representing the department with honor and precision."
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
              <p className="text-foreground leading-relaxed mb-4">To become an MPU Officer, one must:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Hold at least the rank of Corporal or above.</li>
                <li>Complete MPU Training Program (Vehicle handling + Pursuit Tactics)</li>
                <li>Pass Obstacle Course & Reaction Test</li>
                <li>Undergo 3 trial ride-alongs with MPU Lead or SEU Leader</li>
                <li>Be approved by HR and High Command</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Bike className="h-5 w-5" />
                4. Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed mb-4">MPU's purpose is to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Engage in vehicle pursuits, especially in tight or urban environments</li>
                <li>Assist SEU and ground units with visual confirmation</li>
                <li>Scout and report suspect locations during evasion</li>
                <li>Reduce loss-of-suspect scenarios by superior maneuverability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                7. MPU Types
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
                      <td className="p-3 font-mono">MPU-1</td>
                      <td className="p-3">Patrol Vehicle</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-mono">MPU-2</td>
                      <td className="p-3">Interception/Support</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3 font-mono">MPU-3</td>
                      <td className="p-3">Urban Interceptor</td>
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
                <li>Use Incident Radio for active MPU pursuits</li>
                <li>Avoid radio spamming, focus on short, clear callouts</li>
                <li>Must report fuel levels, status, and vehicle issues post-patrol</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Example Radio Callout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-foreground font-mono text-sm">
                  "MPU-1 to Dispatch, visual on suspect, black Kuruma, southbound Alta Street, speeds 140+, requesting SEU backup. Will maintain visual from distance."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
