
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Clock, Target, BookOpen, Shield, GraduationCap, CheckCircle } from 'lucide-react'

export default function FieldTraining() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Field Training Division (FTD)</h1>
              <p className="text-muted-foreground">Comprehensive Training Program for Law Enforcement</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Target className="h-5 w-5" />
                Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                To help cadets and officers who need to revise the working of the Police Department.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Importance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                FTD is the core of every department, laying the foundation for discipline, knowledge, and professional growth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Training Schedule - In Phases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="secondary">Stage 1</Badge>
                  <span>2 Days</span>
                </h3>
                <div className="space-y-2 text-foreground">
                  <p className="font-medium">UI Training</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Introduction of Police Department Headquarters</li>
                    <li>MDT Interface</li>
                    <li>Use of Work Menu in Radial Button (F1)</li>
                    <li>Use of F6 Button</li>
                    <li>Plate Reader and Speed Reader in PD Vehicles</li>
                    <li>Taking GSR, Mugshots, Evidences</li>
                  </ul>
                  <p className="font-medium mt-3">Additional Training</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>10 Codes, Basic Codes, Full Forms</li>
                    <li>How to set BOLO on a vehicle and use the DMV Section</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="secondary">Stage 2</Badge>
                  <span>3 Days</span>
                </h3>
                <div className="space-y-2 text-foreground">
                  <p className="font-medium">Department Structure</p>
                  <p className="text-sm">SALE, SASP, LSPD, BCSO, DOJ</p>
                  
                  <p className="font-medium mt-3">Standard Operating Procedures</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Code of Conduct, Chain of Command</li>
                    <li>Difference Between Frisk and Search</li>
                    <li>Miranda Rights</li>
                    <li>Types/Level Of Forces</li>
                    <li>De-escalation and Escalation of Force</li>
                    <li>Match of Force</li>
                    <li>Types of Warrants</li>
                    <li>Difference between Detain and Arrest</li>
                    <li>Types of Crimes</li>
                    <li>Difference between BOLO and Warrants</li>
                    <li>N+2 Rule</li>
                    <li>Reasonable Suspicion vs Probable Cause</li>
                    <li>Reports/FIR vs Charge Sheet/Incident</li>
                  </ul>
                  
                  <p className="font-medium mt-3">Legal Foundation</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>First Seven Amendments</li>
                    <li>Priority Callouts</li>
                    <li>Penal Codes (Introduction & Explanation to all types of Charges)</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Badge variant="secondary">Stage 3</Badge>
                  <span>2 Days</span>
                </h3>
                <div className="space-y-2 text-foreground">
                  <p className="font-medium">Practical Applications</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Performing 10-11 (Traffic Stop) with proper radio callouts</li>
                    <li>PIT Trainings</li>
                    <li>Taser Etiquettes (Step by Step when to use and when not to use)</li>
                    <li>Felony Stop (Proper formation and all Code 5 Callouts)</li>
                    <li>Commanding (Robbery Commanding in different 90)</li>
                    <li>Negotiations (90 negotiation and callouts)</li>
                    <li>HRU (90 hostage rescue unit)</li>
                    <li>Breach in practice (Group breach in 90s)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-foreground font-medium">
                  👉 This one-week program helps a cadet gain in-depth knowledge of the department and prepares them to start working effectively.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Learning Aspect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                People who follow this program gain a structured understanding of law enforcement operations, acquire practical skills, and develop confidence to handle real-time scenarios.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The Field Training Division ensures every cadet transitions from theory to practice with clarity. By combining legal knowledge, department SOPs, and hands-on training, the program builds discipline, professionalism, and operational readiness. It acts as the bridge between classroom learning and active field duty.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Final Thoughts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The FTD program is more than just training—it is the foundation of a police officer's career. By the end of this course, cadets not only understand procedures but also embody the values of responsibility, courage, and service to the community. With structured phases and practical simulations, FTD sets the standard for future leaders in law enforcement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
