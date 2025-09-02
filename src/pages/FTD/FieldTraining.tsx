
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Users, 
  Clock, 
  Target, 
  BookOpen, 
  Shield, 
  GraduationCap, 
  CheckCircle, 
  Calendar,
  MonitorSpeaker,
  FileText,
  Handshake,
  Zap,
  Car,
  Scale,
  Radio,
  Award,
  Heart,
  Sparkles
} from 'lucide-react'

export default function FieldTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        
        {/* Hero Header */}
        <div className="text-center space-y-4 py-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              👉 Field Training Division (FTD)
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Field Training Division is the foundation of the department, designed to shape cadets into capable officers through structured phases of training.
            </p>
          </div>
        </div>

        {/* Overview Card */}
        <Card className="border-primary/20 bg-gradient-to-r from-card to-card/80 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl text-primary">📌 Overview</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Target className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Purpose</h3>
                <p className="text-sm text-muted-foreground">
                  To help cadets learn and revise Police Department operations with both theoretical knowledge and practical application.
                </p>
              </div>
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Importance</h3>
                <p className="text-sm text-muted-foreground">
                  FTD is the core of every department, building discipline, professionalism, and effective duty execution.
                </p>
              </div>
              <div className="space-y-2">
                <Clock className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Duration</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive 1-Week Program across three progressive stages.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training Phases - Expandable Accordion */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              Training Phases
            </CardTitle>
            <CardDescription>
              Click on each stage to explore the detailed curriculum and training components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-4">
              
              {/* Stage 1 */}
              <AccordionItem value="stage1" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <Badge variant="secondary" className="text-sm font-semibold">Stage 1</Badge>
                    <div>
                      <h3 className="text-lg font-semibold">Basic Systems & Communication</h3>
                      <p className="text-sm text-muted-foreground">2 Days • Foundation Training</p>
                    </div>
                    <MonitorSpeaker className="h-5 w-5 text-primary ml-auto" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <MonitorSpeaker className="h-4 w-4" />
                        UI Training & Systems
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• PD Headquarters Introduction</li>
                        <li>• MDT Interface Navigation</li>
                        <li>• Radial Button (F1) & F6 Button Usage</li>
                        <li>• Plate Reader & Speed Reader in PD Vehicles</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Evidence & Communication
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• GSR Tests, Mugshots & Evidence Logging</li>
                        <li>• 10 Codes, Basic Codes & Full Forms</li>
                        <li>• DMV Operations & BOLO Setup</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Stage 2 */}
              <AccordionItem value="stage2" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <Badge variant="secondary" className="text-sm font-semibold">Stage 2</Badge>
                    <div>
                      <h3 className="text-lg font-semibold">SOPs, Legal Knowledge & Structure</h3>
                      <p className="text-sm text-muted-foreground">3 Days • Advanced Theory</p>
                    </div>
                    <Scale className="h-5 w-5 text-primary ml-auto" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Department Structure</h4>
                      <div className="flex flex-wrap gap-2">
                        {['SALE', 'SASP', 'LSPD', 'BCSO', 'DOJ'].map((dept) => (
                          <Badge key={dept} variant="outline">{dept}</Badge>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold mt-4">Constitutional Law</h4>
                      <p className="text-sm text-muted-foreground">First Seven Amendments</p>
                      
                      <h4 className="font-semibold mt-4">Operations</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Priority Callouts</li>
                        <li>• Penal Codes (Introduction & Explanation)</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Standard Operating Procedures</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Code of Conduct & Chain of Command</li>
                        <li>• Frisk vs. Search Protocols</li>
                        <li>• Miranda Rights Administration</li>
                        <li>• Use of Force (Types, Escalation, De-escalation)</li>
                        <li>• Types of Warrants</li>
                        <li>• Detain vs. Arrest Procedures</li>
                        <li>• BOLO vs. Warrants Differences</li>
                        <li>• N+2 Rule Application</li>
                        <li>• Reasonable Suspicion vs. Probable Cause</li>
                        <li>• Reports/FIR vs. Charge Sheet/Incident</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Stage 3 */}
              <AccordionItem value="stage3" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <Badge variant="secondary" className="text-sm font-semibold">Stage 3</Badge>
                    <div>
                      <h3 className="text-lg font-semibold">Field Operations & Tactical Training</h3>
                      <p className="text-sm text-muted-foreground">2 Days • Practical Application</p>
                    </div>
                    <Handshake className="h-5 w-5 text-primary ml-auto" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Car className="h-4 w-4" />
                        Traffic & Vehicle Operations
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Traffic Stops (10-11) with Radio Callouts</li>
                        <li>• PIT Training</li>
                        <li>• Felony Stops (Formation & Code 5 Callouts)</li>
                      </ul>
                      
                      <h4 className="font-semibold flex items-center gap-2 mt-4">
                        <Radio className="h-4 w-4" />
                        Command & Negotiation
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Robbery Commanding (Different Scenarios)</li>
                        <li>• Negotiations (90 Negotiation & Callouts)</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Tactical Training
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Taser Etiquette (When to Use & When Not)</li>
                        <li>• HRU (Hostage Rescue Unit) Training</li>
                        <li>• Breach Practice (Group Breach in 90s)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Key Learning Outcomes - Grid Layout */}
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Key Learning Outcomes</CardTitle>
            <CardDescription>What cadets master through the FTD program</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3 p-4 rounded-lg bg-muted/30">
                <BookOpen className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold">📖 Theory + Practice</h3>
                <p className="text-sm text-muted-foreground">From SOPs to field duty application</p>
              </div>
              <div className="text-center space-y-3 p-4 rounded-lg bg-muted/30">
                <Car className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold">🚓 Operational Skills</h3>
                <p className="text-sm text-muted-foreground">Traffic stops, felony stops, HRU operations</p>
              </div>
              <div className="text-center space-y-3 p-4 rounded-lg bg-muted/30">
                <Radio className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold">🎙 Command & Negotiation</h3>
                <p className="text-sm text-muted-foreground">Leadership in critical situations</p>
              </div>
              <div className="text-center space-y-3 p-4 rounded-lg bg-muted/30">
                <Scale className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold">⚖ Legal Knowledge</h3>
                <p className="text-sm text-muted-foreground">Amendments, penal codes, warrants</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why It Matters - Highlight Box */}
        <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 shadow-lg">
          <CardContent className="text-center py-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Why It Matters</h2>
            </div>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              ✨ "FTD is the core of every department. It prepares cadets not just with knowledge but with the confidence and responsibility required to serve and protect."
            </p>
          </CardContent>
        </Card>

        {/* Final Thoughts - Call to Action */}
        <Card className="border-primary/20 bg-gradient-to-br from-card to-muted/20 shadow-lg">
          <CardContent className="text-center py-8 space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Final Thoughts</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg leading-relaxed">
                The Field Training Division is more than a program—it's where cadets transform into officers ready to uphold the law and protect the community.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Heart className="h-5 w-5" />
                <p className="font-semibold">
                  Setting the standard for future leaders in law enforcement
                </p>
                <Heart className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
