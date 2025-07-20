
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, ChevronDown, ChevronRight } from 'lucide-react'
import { SearchBar } from '@/components/SearchBar'

const trainingContent = [
  {
    id: 1,
    title: "1. What is SOP?",
    content: "Standard Operating Procedure (SOP) is a guideline provided/set by police management or government to guide police officers in their work. It includes processes for identifying reasonable suspicion, probable cause, and determining appropriate force levels.\n📌 Example: SOP may outline exactly when an officer may frisk a suspect or escalate force. It ensures consistency and legality in law enforcement operations."
  },
  {
    id: 2,
    title: "2. Code of Ethics vs Code of Conduct",
    content: "Code of Ethics reflects the values officers must embody, like integrity, impartiality, and accountability.\nCode of Conduct covers behavior expectations like wearing a clean uniform, reporting misconduct, and obeying legal orders.\n📌 Example: If an officer sees a colleague taking bribes, ethics demand honesty, while conduct rules require reporting it."
  },
  {
    id: 3,
    title: "3. Chain of Command",
    content: "The chain of command is the structure through which orders flow, from superiors to subordinates. Officers must follow duty-related orders but can report unlawful or personal commands.\n📌 Example: A cadet must block a road if instructed by a sergeant, but may refuse to do a personal errand and report it."
  },
  {
    id: 4,
    title: "4. Bonafide vs Non-Bonafide Evidence",
    content: "Bonafide evidence is legally collected and reliable (e.g., fingerprints, bodycam footage).\nNon-Bonafide evidence is unverified or illegally obtained (e.g., hearsay, hidden recordings).\n📌 Example: A confession after Miranda is bonafide; a secretly recorded conversation without consent may be inadmissible."
  },
  {
    id: 5,
    title: "5. Frisk vs Search",
    content: "A frisk is a limited pat-down for weapons, allowed with reasonable suspicion.\nA search is more thorough, requiring probable cause or a warrant.\n📌 Example: Frisk a suspect loitering at night; search their bag only if you see contraband or smell drugs."
  },
  {
    id: 6,
    title: "6. Miranda Rights",
    content: "These are legal rights read during custodial interrogation:\n\n• You have the Right to remain silent\n• Anything said may be used in court\n• You have the Right to an attorney\n• If unaffordable, state will provide one, If available\n\n📌 Example: If rights aren't read before questioning, the confession may not be admissible."
  },
  {
    id: 7,
    title: "7. Levels of Force",
    content: "The SOP uses a force continuum:\n\n1. Officer Presence\n2. Verbal Commands\n3. Empty-Hand Control\n4. Less-Lethal Force (tasers, batons)\n5. Lethal Force (firearms for deadly threats)\n\n📌 Example: A calm subject may only need verbal commands, but a gunman may justify lethal force."
  },
  {
    id: 8,
    title: "8. De-escalation of Force",
    content: "De-escalation is calming a situation through communication, reducing police presence, or offering exits.\n📌 Example: Talking down a threatening individual rather than tasing them helps avoid violence."
  },
  {
    id: 9,
    title: "9. Escalation of Force",
    content: "Escalation means raising force if verbal or soft tactics fail.\n📌 Example: If a suspect refuses to comply and begins resisting, an officer may escalate to taser use."
  },
  {
    id: 10,
    title: "10. Match of Force",
    content: "This principle requires officers to apply equivalent or slightly superior force to neutralize threats.\n📌 Example: If a suspect uses a knife, an officer may draw a gun."
  },
  {
    id: 11,
    title: "11. 10-Codes",
    content: "Radio shorthand used for quick, effective communication.\n📌 Example: \"10-80\" means pursuit in progress, and \"10-4\" means message acknowledged."
  },
  {
    id: 12,
    title: "12. Types of Warrants",
    content: "• AOS (Arrest on Sight): Immediate arrest authority\n• Search & Seizure Warrant: For specific items, judge-approved\n• Raid Warrant: For raiding property; broad scope\n• KOS (Kill on Sight): For terrorists only\n\n📌 Example: AOS allows immediate detention; search warrant limits you to listed items."
  },
  {
    id: 13,
    title: "13. Bail",
    content: "Allows a suspect to await trial outside custody.\n\n• Misdemeanor: Magistrate grants bail\n• Felony: Needs judge approval\n• Bail = 3x charges value\n\n📌 Example: Bail may be denied if suspect is a flight risk or repeat offender."
  },
  {
    id: 14,
    title: "14. Detain vs Arrest",
    content: "• Detain: Temporary stop for investigation; needs reasonable suspicion\n• Arrest: Full custody with charges; needs probable cause\n\n📌 Example: A man matching a robbery suspect's clothing may be detained, but not arrested without further proof."
  },
  {
    id: 15,
    title: "15. Types of Crimes",
    content: "• Infraction: Minor (e.g., jaywalking)\n• Misdemeanor: Moderate (e.g., trespass)\n• Felony: Serious (e.g., armed robbery)\n• HUT: Held Until Trial (e.g., terrorism)\n\n📌 Example: Stealing a car is a felony; speeding is an infraction."
  },
  {
    id: 16,
    title: "16. BOLO vs Warrants",
    content: "• BOLO: \"Be On the Lookout\" alert; no arrest power\n• Warrant: Legal order to arrest or search\n\n📌 Example: A BOLO vehicle can't be stopped unless matching a crime. A warrant gives legal arrest authority."
  },
  {
    id: 17,
    title: "17. Use of Taser",
    content: "Guidelines include:\n\n• Avoid wet areas or heights\n• Cooldown between uses\n• Warn suspect before deploying\n\n📌 Example: A fleeing suspect may be tased, but not while running on stairs or near water."
  },
  {
    id: 18,
    title: "18. N+2 Rule",
    content: "Officers must outnumber suspects by at least 2.\n📌 Example: Confronting 2 suspects needs minimum 4 officers. Exceptions: high-risk crimes like kidnappings or terrorism."
  },
  {
    id: 19,
    title: "19. Reasonable Suspicion",
    content: "Allows a brief stop or frisk based on specific behavior or context.\n📌 Example: Someone pacing nervously outside a store at night may be detained and questioned."
  },
  {
    id: 20,
    title: "20. Probable Cause",
    content: "Stronger than reasonable suspicion; allows arrest, search, or warrants.\n📌 Example: Seeing stolen goods in plain view or matching fingerprints gives probable cause to arrest."
  },
  {
    id: 21,
    title: "21. Reports/FIR vs Chargesheet",
    content: "• FIR/Report: First complaint filed by officer\n• Chargesheet: Official document with evidence for prosecution\n\n📌 Example: A theft FIR may become a chargesheet if CCTV proves the suspect's guilt."
  },
  {
    id: 22,
    title: "22. Type of Settlement",
    content: "• Plea Bargain: Lighter sentence for guilty plea\n• Diversion: Offender avoids jail by joining rehab/community service\n• Civil Compromise: Case dropped after compensation\n\n📌 Example: A minor drug offender may complete a rehab program to avoid criminal record."
  }
]

export default function Training() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const filteredContent = trainingContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">SOP for Training</h1>
              <p className="text-muted-foreground">Essential training procedures and guidelines for law enforcement officers</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <SearchBar 
            placeholder="Search training topics..."
            onSearch={setSearchQuery}
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredContent.length} of {trainingContent.length} training topics
          </p>
        </div>

        <div className="space-y-4">
          {filteredContent.map((item) => (
            <Card key={item.id} className="border-border bg-card/50">
              <CardHeader 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleExpanded(item.id)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-primary font-semibold">
                    {item.title}
                  </CardTitle>
                  {expandedItems.includes(item.id) ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </div>
              </CardHeader>
              {expandedItems.includes(item.id) && (
                <CardContent>
                  <div className="whitespace-pre-line text-foreground leading-relaxed">
                    {item.content}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="font-heading text-lg font-semibold mb-2">No training topics found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
