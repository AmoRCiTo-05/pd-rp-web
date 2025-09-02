
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  FileText,
  Scale,
  Shield,
  CheckCircle,
  BookOpen,
  ArrowRight,
  ChevronDown,
  Brain,
  Target,
  Award,
  HelpCircle,
  Users,
  AlertTriangle
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function EvaluationTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        
        {/* Hero Header */}
        <div className="text-center space-y-4 py-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              📝 FTD Evaluation Test
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Test your knowledge and understanding of Field Training Division concepts with comprehensive questions and detailed explanations.
            </p>
          </div>
        </div>

        {/* Overview Card */}
        <Card className="border-primary/20 bg-gradient-to-r from-card to-card/80 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl text-primary">📋 Test Overview</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <HelpCircle className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Question Types</h3>
                <p className="text-sm text-muted-foreground">
                  Basic concepts, situational scenarios, and multiple choice questions
                </p>
              </div>
              <div className="space-y-2">
                <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Comprehensive Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Tests knowledge across all FTD training phases and concepts
                </p>
              </div>
              <div className="space-y-2">
                <BookOpen className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Detailed Explanations</h3>
                <p className="text-sm text-muted-foreground">
                  Each answer includes thorough explanations for better understanding
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Part A - Basic Questions */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Part A - Basic Questions
            </CardTitle>
            <CardDescription>
              Click on each question to reveal the detailed answer and explanation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-4">
              
              <AccordionItem value="q1" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q1</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is SOP?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      SOP stands for <strong>Standard Operating Procedure</strong>. It's the set of official rules and guidelines every officer must follow to ensure consistency, professionalism, and accountability in policing.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q2</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is Chain of Command?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      Chain of Command is the <strong>hierarchy structure within the PD</strong>. It defines who reports to whom, ensuring discipline, accountability, and proper flow of orders during operations.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q3</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is RSPC (Reasonable Suspicion & Probable Cause)?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      <strong>Reasonable Suspicion</strong> allows a temporary stop or detain based on observed facts. <strong>Probable Cause</strong> is a stronger standard that allows arrest or search based on clear evidence.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q4</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Types of Warrants?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      The four main types are <strong>Search Warrant, Raid Warrant, Arrest Warrant, Kill on Sight Warrant</strong>.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q5</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is BOLO?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      BOLO stands for <strong>"Be On the Lookout."</strong> It's an alert broadcast to all units about wanted suspects, missing persons, or specific vehicles of interest.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q6</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is Miranda Rights?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      A <strong>legal requirement to inform suspects of their rights</strong>: the right to remain silent and the right to an attorney. It ensures fair questioning and protects from self-incrimination.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q7" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q7</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is N+2 Rule?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      The N+2 rule means <strong>always having at least two more officers than suspects</strong> in risky or hostile situations. It ensures officer and public safety.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q8" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q8</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is Penal Code?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      The Penal Code is the <strong>list of all criminal laws, charges, and punishments</strong>. It guides officers in determining the correct charges during arrests.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q9" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q9</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is 10-11?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      A 10-11 is a <strong>radio code used to indicate a traffic stop</strong>. Officers must announce it clearly to update dispatch and fellow units.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q10" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="secondary" className="text-sm">Q10</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Difference between Detain & Arrest?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      <strong>Detain</strong> is a temporary restriction of movement for investigation, requiring reasonable suspicion. <strong>Arrest</strong> is taking someone into custody with probable cause or a warrant.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Part B - Situational Questions */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <Users className="h-6 w-6" />
              Part B - Situational Questions
            </CardTitle>
            <CardDescription>
              Real-world scenarios and tactical situations officers may encounter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-4">
              
              <AccordionItem value="s1" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="outline" className="text-sm">S1</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is the work of HRU (Hostage Rescue Unit) in a situation?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      HRU specializes in <strong>hostage situations</strong>. They handle tactical planning, safe breaching, and extraction of hostages while ensuring minimal casualties and controlled escalation.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="s2" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="outline" className="text-sm">S2</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What are the commanding calls in a 90-A (Bank Robbery)?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      The commanding officer manages <strong>unit placements, negotiates with suspects, and organizes breach plans</strong>. They ensure communication between negotiators, HRU, and perimeter teams.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="s3" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="outline" className="text-sm">S3</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What should you do if you find unlisted evidence during a Search Warrant?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      <strong>Pause the search, inform your supervisor, and request an amended warrant</strong>. Taking unlisted evidence without proper approval can lead to legal challenges in court.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="s4" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="outline" className="text-sm">S4</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">How do you act during a felony stop?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      Officers must <strong>maintain cover, use tactical spacing, and give suspects step-by-step commands</strong>. Safety and coordination are prioritized until all individuals are secured.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="s5" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="outline" className="text-sm">S5</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">When is a PIT maneuver allowed in a pursuit?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      A PIT can only be used with <strong>supervisor approval, under safe conditions, and when the danger of the pursuit outweighs risks</strong>. It's a last resort to end a chase.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="s6" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="outline" className="text-sm">S6</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">How do you handle a traffic stop with a non-compliant driver?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      <strong>Maintain calm, call for backup, and escalate slowly using verbal commands</strong>. Avoid rushing into danger, and shift to a felony stop if the driver poses a threat.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="s7" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="outline" className="text-sm">S7</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is the role of Negotiators in a hostage situation?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      Negotiators <strong>communicate with suspects to buy time, reduce tension, and protect hostages</strong>. Their goal is peaceful resolution without immediate use of force.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="s8" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="outline" className="text-sm">S8</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">How do you respond to shots fired at officers during a priority call?</h3>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to expand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      <strong>Immediately call it out on radio, take cover, and engage only if necessary to protect life</strong>. Backup must be requested, and situational awareness is critical to avoid crossfire.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Multiple Choice Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              📘 Cadet Multiple Choice Evaluation
            </CardTitle>
            <CardDescription>
              Test your knowledge with multiple choice questions covering basic concepts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-4">
              
              <AccordionItem value="mcq1" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q1</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What does SOP stand for?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Standard Organized Plan</span>
                        <span>B) Standard Operating Procedure</span>
                        <span>C) Security Operations Protocol</span>
                        <span>D) Special Officer Program</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: B) Standard Operating Procedure</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      SOP is Standard Operating Procedure, the rules every officer must follow.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq2" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q2</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is the first step in the Chain of Command?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Chief of Police</span>
                        <span>B) Sergeant</span>
                        <span>C) Officer</span>
                        <span>D) Cadet</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: B) Sergeant</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Chain of Command starts from Sergeant upwards; cadets report to FTOs/Sergeants.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq3" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q3</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What does BOLO stand for?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Be On Law Order</span>
                        <span>B) Be On Lookout</span>
                        <span>C) Base Operations Law Office</span>
                        <span>D) Bureau of Law Officers</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: B) Be On Lookout</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      BOLO = Be On Lookout, issued for suspects or vehicles.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq4" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q4</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Which is stronger legally?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Hunch</span>
                        <span>B) Reasonable Suspicion</span>
                        <span>C) Probable Cause</span>
                        <span>D) None</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: C) Probable Cause</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Probable Cause is stronger than Reasonable Suspicion.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq5" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q5</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Which Amendment protects against unreasonable searches?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) 1st</span>
                        <span>B) 2nd</span>
                        <span>C) 4th</span>
                        <span>D) 6th</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: C) 4th</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      4th Amendment protects from unlawful searches and seizures.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq6" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q6</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is the N+2 Rule about?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Number of units on patrol</span>
                        <span>B) Keeping evidence secure</span>
                        <span>C) Backup during arrests</span>
                        <span>D) Penal codes</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: C) Backup during arrests</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      N+2 means always have at least two additional officers with the lead in risky actions.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq7" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q7</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is the main difference between Detain and Arrest?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Uniform</span>
                        <span>B) Duration & Charges</span>
                        <span>C) Miranda Rights</span>
                        <span>D) Vehicle type</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: B) Duration & Charges</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Detain = temporary hold, Arrest = formal custody with charges.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq8" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q8</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">When must Miranda Rights be read?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Always on contact</span>
                        <span>B) During frisk</span>
                        <span>C) Before questioning after arrest</span>
                        <span>D) Only in court</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: C) Before questioning after arrest</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Must be read before interrogation after an arrest.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq9" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q9</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is GSR testing?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Gun Shot Residue</span>
                        <span>B) General Search Report</span>
                        <span>C) General Safety Rule</span>
                        <span>D) Gun Safety Regulation</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: A) Gun Shot Residue</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      GSR checks if someone recently fired a gun.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq10" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q10</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Who handles 90-A situations?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Traffic Unit</span>
                        <span>B) HRU</span>
                        <span>C) Dispatch only</span>
                        <span>D) Civil Unit</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: B) HRU</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Hostage Rescue Unit (HRU) handles major robberies & hostage calls.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq11" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q11</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is the job of Dispatch?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Arrest criminals</span>
                        <span>B) Track evidence</span>
                        <span>C) Control radio comms & assign units</span>
                        <span>D) Court duties</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: C) Control radio comms & assign units</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Dispatch coordinates units, radio, and call assignments.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq12" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q12</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Penal Codes define:</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Laws and charges</span>
                        <span>B) Court proceedings</span>
                        <span>C) Evidence reports</span>
                        <span>D) Dispatch rules</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: A) Laws and charges</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Penal Codes are laws with charges officers apply.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq13" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q13</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Who has the final say in PD policy?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Sergeant</span>
                        <span>B) DOJ</span>
                        <span>C) Chief of Police</span>
                        <span>D) Officer</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: C) Chief of Police</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Chief of Police sets policy, DOJ oversees legality.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq14" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q14</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Which is used for vehicle lookups?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) DMV</span>
                        <span>B) MDT Criminal Records</span>
                        <span>C) Court Files</span>
                        <span>D) Dispatch</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: A) DMV</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      DMV checks vehicle registration & ownership.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq15" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q15</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">What is a 10-11?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Shots fired</span>
                        <span>B) Robbery</span>
                        <span>C) Traffic Stop</span>
                        <span>D) Pursuit</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: C) Traffic Stop</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      10-11 = Traffic Stop with proper callouts.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq16" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q16</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Which force is least lethal?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Baton</span>
                        <span>B) Taser</span>
                        <span>C) Firearm</span>
                        <span>D) PIT Maneuver</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: B) Taser</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Taser is the least lethal, used for compliance.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mcq17" className="border border-border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-4 text-left w-full">
                    <Badge variant="destructive" className="text-sm">Q17</Badge>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Who must approve a felony stop?</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                        <span>A) Cadet</span>
                        <span>B) Solo Officer</span>
                        <span>C) Supervisor/Sergeant</span>
                        <span>D) Dispatch</span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">Click to see answer</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Answer: C) Supervisor/Sergeant</p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Felony stops need supervisor approval.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              Additional resources to enhance your understanding and preparation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/sop/training">
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40">
                  <CardContent className="p-4 text-center space-y-2">
                    <FileText className="h-8 w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-sm">SOP for Training</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
                  </CardContent>
                </Card>
              </Link>

              <Link to="/confusing-topics">
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-primary/20 hover:border-primary/40">
                  <CardContent className="p-4 text-center space-y-2">
                    <AlertTriangle className="h-8 w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-sm">Confusing Topics</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Final Motivation */}
        <Card className="border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 shadow-lg">
          <CardContent className="text-center py-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Test Your Knowledge</h2>
            </div>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              ✨ "This evaluation helps you identify areas for improvement and reinforces your understanding of critical FTD concepts. Use it as a stepping stone to becoming a well-prepared officer."
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
