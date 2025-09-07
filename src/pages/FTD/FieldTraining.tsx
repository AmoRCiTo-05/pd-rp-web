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
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronDown
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FieldTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        
        {/* Hero Header */}
        <div className="text-center space-y-4 py-8 sm:py-12 px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              👉 Field Training Division (FTD)
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
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
              Click on each stage below to explore the detailed curriculum and training components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-4">
              
              {/* Stage 1 */}
              <AccordionItem value="stage1" className="border border-border rounded-lg px-3 sm:px-4">
                <AccordionTrigger className="hover:no-underline group py-3 sm:py-4">
                  <div className="flex items-center gap-3 sm:gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-xs sm:text-sm font-semibold shrink-0">Stage 1</Badge>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-lg font-semibold leading-tight">Basic Systems & Communication</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">2 Days • Foundation Training</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                      <MonitorSpeaker className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 sm:pt-4 space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <MonitorSpeaker className="h-4 w-4" />
                        UI Training & Systems
                      </h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• PD Headquarters Introduction</li>
                        <li>• MDT Interface Navigation</li>
                        <li>• Radial Button & Menu Button Usage</li>
                        <li>• Plate Reader & Speed Reader in PD Vehicles</li>
                      </ul>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <FileText className="h-4 w-4" />
                        Evidence & Communication
                      </h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
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
                <AccordionTrigger className="hover:no-underline group py-4">
                  <div className="flex items-center gap-3 sm:gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-xs sm:text-sm font-semibold shrink-0">Stage 2</Badge>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-lg font-semibold leading-tight">SOPs, Legal Knowledge & Structure</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">3 Days • Advanced Theory</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Department Structure</h4>
                      <div className="space-y-2">
                        <div>
                          <h5 className="text-sm font-medium mb-1">Main Departments</h5>
                          <div className="flex flex-wrap gap-2">
                            {['SALE', 'SASP', 'LSPD', 'BCSO', 'SASPR'].map((dept) => (
                              <Badge key={dept} variant="outline">{dept}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium mb-1">Sub Departments</h5>
                          <div className="flex flex-wrap gap-2">
                            {['MPU', 'SEU', 'ASD'].map((dept) => (
                              <Badge key={dept} variant="secondary">{dept}</Badge>
                            ))}
                          </div>
                        </div>
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
                <AccordionTrigger className="hover:no-underline group py-4">
                  <div className="flex items-center gap-3 sm:gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-xs sm:text-sm font-semibold shrink-0">Stage 3</Badge>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-lg font-semibold leading-tight">Field Operations & Tactical Training</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">2 Days • Practical Application</p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                      <Handshake className="h-5 w-5 text-primary" />
                    </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg bg-muted/30">
                <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-sm sm:text-base">📖 Theory + Practice</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">From SOPs to field duty application</p>
              </div>
              <div className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg bg-muted/30">
                <Car className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-sm sm:text-base">🚓 Operational Skills</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Traffic stops, felony stops, HRU operations</p>
              </div>
              <div className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg bg-muted/30">
                <Radio className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-sm sm:text-base">🎙 Command & Negotiation</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Leadership in critical situations</p>
              </div>
              <div className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg bg-muted/30">
                <Scale className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-sm sm:text-base">⚖ Legal Knowledge</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Amendments, penal codes, warrants</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why It Matters - Highlight Box */}
        <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 shadow-lg">
          <CardContent className="text-center py-6 sm:py-8 px-4 sm:px-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">Why It Matters</h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              ✨ "FTD is the core of every department. It prepares cadets not just with knowledge but with the confidence and responsibility required to serve and protect."
            </p>
          </CardContent>
        </Card>

        {/* Helpful Resources Section */}
        <Card className="border-primary/20 bg-gradient-to-br from-card to-muted/20 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6" />
              Helpful Resources
            </CardTitle>
            <CardDescription>
              Additional resources to enhance your FTD experience and clear any queries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <Link to="/sop/training">
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40 h-full">
                  <CardContent className="p-3 sm:p-4 text-center space-y-2">
                    <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-xs sm:text-sm leading-tight">SOP for Training</h3>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mx-auto" />
                  </CardContent>
                </Card>
              </Link>

              <Link to="/amendments">
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40 h-full">
                  <CardContent className="p-3 sm:p-4 text-center space-y-2">
                    <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-xs sm:text-sm leading-tight">Amendments</h3>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mx-auto" />
                  </CardContent>
                </Card>
              </Link>

              <Link to="/case-laws">
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40 h-full">
                  <CardContent className="p-3 sm:p-4 text-center space-y-2">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-xs sm:text-sm leading-tight">Case Laws</h3>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mx-auto" />
                  </CardContent>
                </Card>
              </Link>

              <Link to="/confusing-topics">
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40 h-full">
                  <CardContent className="p-3 sm:p-4 text-center space-y-2">
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-xs sm:text-sm leading-tight">Confusing Topics</h3>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mx-auto" />
                  </CardContent>
                </Card>
              </Link>
            </div>
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
