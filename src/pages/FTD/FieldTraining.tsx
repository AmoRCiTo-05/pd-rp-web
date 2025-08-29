
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Clock, Target, BookOpen, Shield, GraduationCap, CheckCircle, Calendar, MonitorSpeaker, FileText, Handshake, Zap, Car } from 'lucide-react'

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

          {/* Enhanced Training Schedule Section */}
          <Card className="border-border bg-gradient-to-br from-card/80 to-card/50 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-primary flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6" />
                Training Schedule - Comprehensive 7-Day Program
              </CardTitle>
              <CardDescription className="text-base">
                A structured three-stage approach designed to transform cadets into competent officers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Stage 1 */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                <div className="ml-6">
                  <Card className="border-blue-200 bg-blue-50/50 shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1 text-sm font-semibold">
                            Stage 1
                          </Badge>
                          <div className="flex items-center gap-2 text-blue-600">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">2 Days</span>
                          </div>
                        </div>
                        <MonitorSpeaker className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-blue-800 text-xl">Foundation & Interface Training</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <MonitorSpeaker className="h-4 w-4" />
                          UI Training Components
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <p className="text-sm text-blue-700">• Police Department HQ Introduction</p>
                            <p className="text-sm text-blue-700">• MDT Interface Navigation</p>
                            <p className="text-sm text-blue-700">• Work Menu (F1) Operations</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-blue-700">• F6 Button Functions</p>
                            <p className="text-sm text-blue-700">• Plate & Speed Reader Usage</p>
                            <p className="text-sm text-blue-700">• Evidence Collection (GSR, Mugshots)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/80 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Communication & Documentation
                        </h4>
                        <div className="space-y-2">
                          <p className="text-sm text-blue-700">• 10 Codes and Basic Communication Codes</p>
                          <p className="text-sm text-blue-700">• Standard Forms and Abbreviations</p>
                          <p className="text-sm text-blue-700">• BOLO System and DMV Operations</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
                <div className="ml-6">
                  <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-semibold">
                            Stage 2
                          </Badge>
                          <div className="flex items-center gap-2 text-emerald-600">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">3 Days</span>
                          </div>
                        </div>
                        <Shield className="h-5 w-5 text-emerald-600" />
                      </div>
                      <CardTitle className="text-emerald-800 text-xl">Legal Framework & Department Structure</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-white/80 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-semibold text-emerald-800 mb-3">Department Organization</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['SALE', 'SASP', 'LSPD', 'BCSO', 'DOJ'].map((dept) => (
                            <Badge key={dept} variant="outline" className="border-emerald-300 text-emerald-700">
                              {dept}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/80 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Standard Operating Procedures
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <p className="text-xs text-emerald-700">• Code of Conduct & Chain of Command</p>
                            <p className="text-xs text-emerald-700">• Frisk vs Search Protocols</p>
                            <p className="text-xs text-emerald-700">• Miranda Rights Administration</p>
                            <p className="text-xs text-emerald-700">• Force Levels & De-escalation</p>
                            <p className="text-xs text-emerald-700">• Warrant Types & Procedures</p>
                            <p className="text-xs text-emerald-700">• Detain vs Arrest Protocols</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-emerald-700">• Crime Classification</p>
                            <p className="text-xs text-emerald-700">• BOLO vs Warrant Differences</p>
                            <p className="text-xs text-emerald-700">• N+2 Rule Application</p>
                            <p className="text-xs text-emerald-700">• Reasonable Suspicion vs Probable Cause</p>
                            <p className="text-xs text-emerald-700">• Reports vs Charge Sheets</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/80 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-semibold text-emerald-800 mb-3">Legal Foundation & Operations</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-emerald-700">• First Seven Constitutional Amendments</p>
                          <p className="text-sm text-emerald-700">• Priority Callout Procedures</p>
                          <p className="text-sm text-emerald-700">• Comprehensive Penal Code Training</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>
                <div className="ml-6">
                  <Card className="border-amber-200 bg-amber-50/50 shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="bg-amber-100 text-amber-700 px-3 py-1 text-sm font-semibold">
                            Stage 3
                          </Badge>
                          <div className="flex items-center gap-2 text-amber-600">
                            <Clock className="h-4 w-4" />
                            <span className="font-medium">2 Days</span>
                          </div>
                        </div>
                        <Handshake className="h-5 w-5 text-amber-600" />
                      </div>
                      <CardTitle className="text-amber-800 text-xl">Practical Field Operations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-white/80 p-4 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          Traffic & Vehicle Operations
                        </h4>
                        <div className="space-y-2">
                          <p className="text-sm text-amber-700">• Traffic Stops (10-11) with Radio Protocols</p>
                          <p className="text-sm text-amber-700">• PIT Maneuver Training</p>
                          <p className="text-sm text-amber-700">• Felony Stop Formations & Code 5 Callouts</p>
                        </div>
                      </div>

                      <div className="bg-white/80 p-4 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          Tactical Training
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <p className="text-sm text-amber-700">• Taser Usage Protocols</p>
                            <p className="text-sm text-amber-700">• Robbery Command Operations</p>
                            <p className="text-sm text-amber-700">• Crisis Negotiation Techniques</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-amber-700">• Hostage Rescue Unit (HRU) Operations</p>
                            <p className="text-sm text-amber-700">• Tactical Breach Procedures</p>
                            <p className="text-sm text-amber-700">• Group Coordination in High-Risk Scenarios</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Program Summary */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">👉</div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2 text-lg">Program Completion Benefits</h3>
                    <p className="text-foreground leading-relaxed">
                      This comprehensive one-week program transforms cadets through progressive skill building, 
                      ensuring they gain in-depth departmental knowledge and develop the confidence needed 
                      to perform effectively in real-world law enforcement scenarios.
                    </p>
                  </div>
                </div>
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
