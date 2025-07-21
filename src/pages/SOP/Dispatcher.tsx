
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Headphones, Radio, Users, AlertTriangle, Phone, ChevronDown, ChevronRight } from 'lucide-react'

const sections = [
  {
    id: 1,
    title: "Purpose",
    icon: Headphones,
    content: "This document explains the dispatcher's role in making sure everything runs smoothly during an emergency or regular operation."
  },
  {
    id: 2,
    title: "1. Managing Calls and Assigning Help",
    icon: Radio,
    content: `The dispatcher takes all radio calls and decides which units or officers should handle the situation, based on what's needed and available.

Sample Conversation:
• Dispatcher on radio: Officer A, please attach yourself to the latest situation at 5th Avenue, reports of a disturbance.
• Officer A to Dispatcher: 10-4, I'm attaching myself. Also, I have a 10-12 with me, and I'm in XYZ car, heading to the scene.
• Dispatcher: 10-4 on that, Officer A. Officer B, please attach to the situation as well. I need you to provide backup.
• Officer B: 10-4, I'm 10-76, en route with a 10-12, ETA 5 minutes.
• Dispatcher: Roger that. MDT Officer will be Officer C, Negotiation Officer will be Officer D, and Officer A will be commanding the first responders. Ensure communication remains clear and check in once on-site.`
  },
  {
    id: 3,
    title: "2. Partnering Up",
    icon: Users,
    content: `If needed, the dispatcher can assign a partner to an officer for safety or teamwork, ensuring everyone knows their role.

Sample Conversation:
• Officer A: Direct to dispatch I need a 10-12.
• Dispatcher: Officer A, I'm assigning Officer B as your partner.
• Officer A: 10-4, understood.`
  },
  {
    id: 4,
    title: "3. Clear Communication",
    icon: Radio,
    content: `Dispatchers use simple codes to communicate clearly, like 10-3 (Stop talking) or 10-4 (Got it), to avoid confusion and save time.

Sample Conversation:
• Dispatcher: 10-3, everyone stop radio chatter unless you're in active communication.
• Dispatcher: 10-4, Officer A. Stand by for the next update. Officer B, I need you to report in with your location once you're on the scene.
• Officer B: 10-4, I'm 10-23, arrived at the location and assessing the situation.`
  },
  {
    id: 5,
    title: "4. Connecting Officers",
    icon: Phone,
    content: `The dispatcher is responsible for connecting officers with each other, confirming their readiness before establishing communication.

Sample Conversation:
• Dispatcher: Officer A, connect with Officer B for backup. Confirm when you're ready.
• Officer A: 10-4, confirming with Officer B.
• Dispatcher: Once confirmed, you may proceed with the connection.`
  },
  {
    id: 6,
    title: "5. Handling Emergency and Non-Emergency Communications",
    icon: AlertTriangle,
    content: `The dispatcher manages the flow of communications for both urgent and less critical situations.

Sample Conversation (Emergency):
• Dispatcher (Emergency): Officer A, urgent situation, Please respond and get to abc place at Officer C's tracker with your 10-12.
• Officer A: 10-4, en route with a code 3. I'm 10-23.

Sample Conversation (Non-Emergency):
• Dispatcher (Non-Emergency): Officer B, I need you to conduct a Code 1 in Sandy Shores.
• Officer B: 10-4, understood. Proceeding with Code 1. I'll report back once I've completed the check.
• Dispatcher: Copy that, Officer B. Keep me updated if anything unusual arises during your patrol.`
  }
]

export default function Dispatcher() {
  const [expandedSections, setExpandedSections] = useState<number[]>([1])

  const toggleSection = (id: number) => {
    setExpandedSections(prev =>
      prev.includes(id)
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Headphones className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Dispatcher SOP</h1>
              <p className="text-muted-foreground">Standard Operating Procedures for Emergency Dispatchers</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {sections.map((section) => {
            const IconComponent = section.icon
            const isExpanded = expandedSections.includes(section.id)
            
            return (
              <Card key={section.id} className="border-border bg-card/50">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleSection(section.id)}
                >
                  <CardTitle className="text-primary flex items-center gap-2">
                    <IconComponent className="h-5 w-5" />
                    {section.title}
                    <div className="ml-auto">
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                {isExpanded && (
                  <CardContent>
                    <div className="whitespace-pre-line text-foreground leading-relaxed">
                      {section.content}
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}

          <Card className="border-border bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Final Conclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">
                The dispatcher is the central hub of all operations. Every communication, whether emergency or non-emergency, goes through the dispatcher. The dispatcher is responsible for keeping track of every officer's move, ensuring all units are assigned properly, and maintaining constant awareness of the situation. Effective coordination through the dispatcher ensures safety, efficiency, and clear communication throughout the operation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
