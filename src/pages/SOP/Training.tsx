
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, ChevronDown, ChevronRight } from 'lucide-react'
import { SearchBar } from '@/components/SearchBar'

const trainingContent = [
  {
    id: 1,
    title: "1. What is SOP?",
    content: "Definition: Standard Operating Procedure (SOP) is a guideline provided/set by police management or government to guide police officers in their work. This procedure includes various aspects such as:\n- Identifying reasonable suspicion\n- Establishing probable cause\n- Adhering to the chain of command\n- Managing escalation and de-escalation of force\n- Ensuring appropriate level of force\n- Addressing other operational considerations"
  },
  {
    id: 2,
    title: "2. Code of Ethics vs Code of Conduct",
    content: `Code of Ethics:
- Integrity: Officer should always act with honesty and fairness.
- Respect for Human Rights: Treat all individuals with dignity.
- Impartiality: Make decisions without bias.
- Accountability: Be responsible for actions and decisions.
- Service to the Community: Prioritize community safety.

Code of Conduct:
- Use of Force: Only use force when absolutely necessary.
- Duty to Report Misconduct: Report unethical behavior.
- Professional Appearance: Maintain neat, clean uniform.
- Confidentiality: Keep sensitive information private.
- Respect for Authority: Follow lawful orders from supervisors.`
  },
  {
    id: 3,
    title: "3. Chain of Command",
    content: "Officer is required to follow orders from their seniors without questioning, demonstrating professionalism. However, officer is only obligated to follow orders related to departmental duties and not personal tasks unrelated to the department. If a senior officer threatens or mistreats an officer, the officer can file a grievance report to the captain or higher authority to address the situation. Additionally, if an officer has an issue with a colleague or senior, they should first seek assistance from a senior officer. If this approach fails, they may escalate the matter to the Human Resources department for resolution."
  },
  {
    id: 4,
    title: "4. Bonafide and Non-Bonafide Evidence",
    content: `Bonafide Evidence: Genuine, trustworthy evidence admissible in court.
Examples: Eyewitness testimony, physical evidence like fingerprints or DNA, authenticated documents.

Non-Bonafide Evidence: Evidence not genuine or trustworthy.
Examples: Hearsay, illegally obtained evidence, fabricated documentation.`
  },
  {
    id: 5,
    title: "5. Frisk vs Search",
    content: `Frisk:
- Brief pat-down for weapons
- Requires reasonable suspicion
- Limited to outer clothing
- Safety-focused

Search:
- Thorough examination
- Requires warrant/probable cause
- Can include property/belongings
- Evidence-gathering focused`
  },
  {
    id: 6,
    title: "6. Miranda Rights",
    content: `Rights that must be read during detainment/arrest and before questioning:
- Right to remain silent
- Anything said can be used in court
- Right to an attorney
- State will provide attorney if needed
- Confirmation of understanding rights`
  },
  {
    id: 7,
    title: "7. Levels of Force",
    content: `1. Officer Presence: Professional demeanor
2. Verbalization: Calm commands
3. Empty Hand Control: Physical restraint
4. Less-Lethal Force: Tasers, batons
5. Lethal Force: Firearms (serious threats only)`
  },
  {
    id: 8,
    title: "8. De-escalation of Force",
    content: "Using communication and strategies to calm situations without physical force. Focus on peaceful resolution through verbal communication, reducing police presence, and maintaining professional demeanor. Main priority is always to de-escalate the situation."
  },
  {
    id: 9,
    title: "9. Escalation of Force",
    content: "Gradual increase in force from verbal commands to physical intervention when necessary. Example: If a civilian draws a weapon during questioning, officer may escalate from verbal to lethal force to neutralize the threat."
  },
  {
    id: 10,
    title: "10. Match of Force",
    content: "Officer matches the level of force/equipment to counter threats effectively. Examples include using similar weapons or vehicles to match criminal capabilities."
  },
  {
    id: 11,
    title: "11. 10-Codes",
    content: "Short phrase or number used for quick radio communication to improve speed and clarity."
  },
  {
    id: 12,
    title: "12. Types of Warrants",
    content: `- AOS (Arrest on Sight): Requires high command/DA permission
- Search & Seizure: Judge approval needed, specific items only
- Raid Warrant: Judge permission, any illegal items
- KOS (Kill on Sight): For terrorists only`
  },
  {
    id: 13,
    title: "13. Bail",
    content: `Bail is a financial guarantee that allows a defendant to be released from custody while awaiting trial:

- Misdemeanor: Only a Magistrate can grant bail for minor offenses
- Felony: Requires Judge approval and is rarely granted for serious crimes
- Financial Requirement: Typically set at 3x the amount of registered charges
- Guarantor: Requires a third party to vouch for defendant's court appearance
- Conditions: Often includes restrictions like regular check-ins, travel limitations, and ankle monitor
- Revocation: Bail can be revoked if conditions are violated or new crimes committed
- Hearing Process: Decision based on flight risk, danger to community, and criminal history
- Payment Options: Can be paid in cash, property, or through a bail bondsman (percentage fee)`
  },
  {
    id: 14,
    title: "14. Detain vs Arrest",
    content: `Detain:
- Temporary hold for questioning
- Based on reasonable suspicion
- Limited movement restriction

Arrest:
- Taking into custody
- Requires probable cause
- Full custody and charges`
  },
  {
    id: 15,
    title: "15. Types of Crimes",
    content: `- Felony: Serious crime (murder, arson)
- Misdemeanor: Lesser offense (trespassing)
- Infraction: Minor violation (traffic)
- HUT: Held Until Trial (terrorism)`
  },
  {
    id: 16,
    title: "16. BOLO vs Warrants",
    content: `BOLO (Be On the Lookout):
- Alert to watch for person/vehicle
- No arrest authority
- Information gathering tool
- Purpose: To identify and locate persons of interest
- Issued By: Any officer can create and distribute
- Requirements: Description of subject, reason for BOLO, instructions on action to take
- Duration: Can remain active until canceled or subject is found
- Legal Impact: Does not provide legal authority to detain or arrest alone

Warrant:
- Legal document authorizing arrest or search
- Requires probable cause
- Must be signed by judge
- Purpose: To authorize arrest or search
- Issued By: Only judicial officers
- Requirements: Specific allegations of criminal activity
- Duration: Until executed or expired
- Legal Impact: Provides full legal authority for specified action`
  },
  {
    id: 17,
    title: "17. Use of Taser",
    content: `- Avoid wet areas/heights
- No continuous use
- 1-3 minute cooldown
- Warning required
- For fleeing suspect`
  },
  {
    id: 18,
    title: "18. N+2 Rule",
    content: "Server rule: officer = suspect + 2. Exceptions: government employee kidnapping, warrants, terrorist attacks, gang wars. Officer can use any weapons in these cases."
  },
  {
    id: 19,
    title: "19. Reasonable Suspicion",
    content: "Reasonable suspicion is the legal standard that allows an officer to briefly detain a person for investigative purposes. It requires more than a hunch but less evidence than probable cause.\n\n- Based on specific facts and circumstances\n- Officer can articulate why they suspected criminal activity\n- Allows temporary detention, questioning, and pat-downs\n- Cannot justify arrest or full search without escalation to probable cause\n- Examples include: suspicious behavior in high-crime area, matching description of suspect, unusual nervousness or evasiveness, visible contraband, reliable informant tip\n\nUnlike probable cause, reasonable suspicion is a lower threshold that permits limited investigation but not arrest."
  },
  {
    id: 20,
    title: "20. Probable Cause",
    content: "Probable cause is the legal standard required for arrests, searches, and obtaining warrants. It exists when there is a reasonable basis for believing a crime may have been committed or evidence of a crime exists in a specific location.\n\n- Higher standard than reasonable suspicion\n- Based on factual evidence, not mere suspicion\n- Officer must have reasonable belief that a person committed a crime\n- Allows for arrest, search warrants, and seizure of evidence\n- Examples include: direct observation of criminal activity, positive results from field sobriety tests, physical evidence in plain view, multiple witness statements\n\nProbable cause represents a reasonable belief based on facts that would lead a reasonable person to believe a crime was committed, providing the legal basis for more intrusive police actions."
  },
  {
    id: 21,
    title: "21. Reports/FIR vs Chargesheet",
    content: `Reports/FIR:
- Initial incident documentation
- Investigation needed
- Complaint filing

Chargesheet:
- Formal charges
- Based on evidence
- Leads to prosecution`
  },
  {
    id: 22,
    title: "22. Type of Settlement",
    content: `Types of legal settlements in criminal cases:

- Plea Bargain: Agreement to plead guilty to lesser charges in exchange for reduced penalties
- Deferred Prosecution: Charges are suspended if defendant completes specific requirements
- Civil Compromise: Settlement of a criminal matter through financial or other compensation
- Diversion Programs: Alternative to prosecution involving rehabilitation, community service, or education
- Conditional Discharge: Case dismissal after completing court-ordered conditions
- No Contest Plea: Accepting punishment without admitting guilt
- Alford Plea: Maintaining innocence while acknowledging evidence is sufficient for conviction`
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
