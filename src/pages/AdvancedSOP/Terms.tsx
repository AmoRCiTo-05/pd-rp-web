
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Search, Shield, Scale, AlertTriangle } from 'lucide-react'

const advancedTerms = [
  {
    term: "Assault",
    definition: "Intentionally causing another person to reasonably fear immediate harmful or offensive contact.",
    category: "Criminal Law"
  },
  {
    term: "Aggravated Battery",
    definition: "Battery (unlawful physical contact) committed with circumstances that increase its severity, such as causing serious injury or using a dangerous weapon.",
    category: "Criminal Law"
  },
  {
    term: "Burglary",
    definition: "Illegally entering a building with the intent to commit a crime, often theft.",
    category: "Property Crime"
  },
  {
    term: "Impersonating",
    definition: "Falsely pretending to be another person, typically to deceive or gain advantage.",
    category: "Fraud"
  },
  {
    term: "Fraud",
    definition: "Deliberate deception for personal gain or to cause damage to another person or entity.",
    category: "Fraud"
  },
  {
    term: "Forgery",
    definition: "Falsely making or altering a document or signature with the intent to defraud.",
    category: "Fraud"
  },
  {
    term: "Trespassing",
    definition: "Entering or remaining on someone else's property without permission.",
    category: "Property Crime"
  },
  {
    term: "Vandalism",
    definition: "Deliberately damaging or destroying public or private property.",
    category: "Property Crime"
  },
  {
    term: "Aggressive Panhandling",
    definition: "Begging in a manner that is intimidating, harassing, or obstructs passage.",
    category: "Public Order"
  },
  {
    term: "Cannibalism",
    definition: "The act of a human consuming another human's flesh.",
    category: "Serious Crime"
  },
  {
    term: "Night Search (SWAT)",
    definition: "A law enforcement search conducted during nighttime hours, often involving specialized tactical units (SWAT) due to high-risk circumstances.",
    category: "Operations"
  },
  {
    term: "Embezzlement",
    definition: "Misappropriating assets entrusted to one's care for personal use.",
    category: "Financial Crime"
  },
  {
    term: "Accessory to Robbery",
    definition: "Assisting someone in committing a robbery, either before or after the fact.",
    category: "Criminal Law"
  },
  {
    term: "Extortion",
    definition: "Obtaining money, property, or services from another by force, threats, or abuse of authority.",
    category: "Financial Crime"
  },
  {
    term: "Money Laundering",
    definition: "Concealing the origins of illegally obtained money by passing it through a complex sequence of financial transactions.",
    category: "Financial Crime"
  },
  {
    term: "Graft",
    definition: "The illegal use of one's political influence or public office for personal gain.",
    category: "Corruption"
  },
  {
    term: "Grey Market",
    definition: "The unofficial and unauthorized distribution of products, often through channels not intended by the original manufacturer.",
    category: "Economic Crime"
  },
  {
    term: "Arson",
    definition: "The criminal act of deliberately setting fire to property.",
    category: "Property Crime"
  },
  {
    term: "Perjury",
    definition: "Knowingly making a false statement under oath or affirmation in a legal proceeding.",
    category: "Court Crime"
  },
  {
    term: "Double Jeopardy",
    definition: "A legal principle preventing an individual from being tried twice for the same crime after being acquitted or convicted.",
    category: "Legal Principle"
  },
  {
    term: "Vigilantism",
    definition: "Law enforcement undertaken by self-appointed groups or individuals without legal authority.",
    category: "Public Order"
  },
  {
    term: "Mayhem",
    definition: "Unlawfully and maliciously depriving a person of a body part or disabling or disfiguring them.",
    category: "Serious Crime"
  },
  {
    term: "Insurrection",
    definition: "A violent uprising against an authority or government.",
    category: "Serious Crime"
  },
  {
    term: "Poaching",
    definition: "Illegally hunting or catching animals or fish on land that is not one's own or without legal permission.",
    category: "Environmental Crime"
  },
  {
    term: "Littering",
    definition: "Discarding trash or waste improperly in a public or natural environment.",
    category: "Environmental Crime"
  },
  {
    term: "Jaywalking",
    definition: "Crossing a street unlawfully or outside designated crosswalks.",
    category: "Traffic Violation"
  },
  {
    term: "Joyriding",
    definition: "Taking and driving a vehicle without the owner's permission, typically for pleasure and without intent to permanently deprive the owner.",
    category: "Vehicle Crime"
  },
  {
    term: "Resisting Arrest",
    definition: "Intentionally preventing or attempting to prevent a law enforcement officer from making a lawful arrest.",
    category: "Criminal Law"
  },
  {
    term: "Obstruction of Justice",
    definition: "Interfering with the process of law, including hiding evidence, lying to officers, or helping someone avoid arrest.",
    category: "Court Crime"
  },
  {
    term: "Vehicular Manslaughter",
    definition: "Causing someone's death through negligent or reckless driving, without intent to kill.",
    category: "Serious Crime"
  },
  {
    term: "Solicitation",
    definition: "Encouraging, requesting, or demanding someone to commit a crime, often used in drug or prostitution contexts.",
    category: "Public Order"
  },
  {
    term: "Stalking",
    definition: "Repeated, unwanted attention or harassment that causes fear or distress to another person.",
    category: "Personal Crime"
  },
  {
    term: "Misuse of Emergency Services",
    definition: "Falsely calling 911 or emergency services without real cause, wasting resources.",
    category: "Public Order"
  },
  {
    term: "Tampering with Evidence",
    definition: "Destroying, hiding, or altering evidence with the intent to affect a legal investigation.",
    category: "Court Crime"
  },
  {
    term: "Hit and Run",
    definition: "Leaving the scene of an accident without offering help or reporting the incident.",
    category: "Traffic Crime"
  },
  {
    term: "Aiding and Abetting",
    definition: "Helping or encouraging another person to commit a crime, even if not directly involved.",
    category: "Criminal Law"
  },
  {
    term: "Illegal Surveillance",
    definition: "Recording, watching, or tracking individuals without proper legal authority or consent.",
    category: "Privacy Crime"
  },
  {
    term: "Unlawful Assembly",
    definition: "Gathering of individuals in a group that threatens public safety or violates the law.",
    category: "Public Order"
  },
  {
    term: "Tampering with Public Property",
    definition: "Unauthorized interference with infrastructure like traffic signs, power boxes, or fire hydrants.",
    category: "Property Crime"
  },
  {
    term: "Reckless Endangerment",
    definition: "Acting with disregard for the safety of others, creating a significant risk of injury or harm.",
    category: "Public Safety"
  },
  {
    term: "Criminal Conspiracy",
    definition: "An agreement between two or more people to commit a crime, even if the crime isn't actually carried out.",
    category: "Criminal Law"
  },
  {
    term: "Unlawful Imprisonment",
    definition: "Restraining or detaining someone without legal authority, such as locking someone in a room.",
    category: "Personal Crime"
  },
  {
    term: "Obstruction of a Peace Officer",
    definition: "Intentionally interfering with a police officer's lawful duties, such as providing false information or blocking their actions.",
    category: "Criminal Law"
  },
  {
    term: "Brandishing a Weapon",
    definition: "Displaying a weapon in a threatening manner without justification, often used to intimidate.",
    category: "Weapons Offense"
  },
  {
    term: "Inciting a Riot",
    definition: "Encouraging or provoking others to engage in violent or unlawful group behavior against the peace.",
    category: "Serious Crime"
  },
  {
    term: "False Imprisonment",
    definition: "Illegally detaining someone against their will without proper legal authority.",
    category: "Personal Crime"
  },
  {
    term: "Unlawful Discharge of a Firearm",
    definition: "Firing a weapon in an unauthorized manner or location, such as in public or within city limits.",
    category: "Weapons Offense"
  },
  {
    term: "Conspiracy to Commit a Crime",
    definition: "Planning or agreeing with others to commit a crime, regardless of whether the act is completed.",
    category: "Criminal Law"
  },
  {
    term: "Racketeering",
    definition: "Running illegal business operations as part of an organized group, including extortion, bribery, or fraud.",
    category: "Organized Crime"
  },
  {
    term: "Possession of Stolen Property",
    definition: "Knowingly having goods obtained through theft or illegal means.",
    category: "Property Crime"
  },
  {
    term: "Obstruction of Traffic",
    definition: "Blocking roadways, intersections, or public pathways without proper authorization.",
    category: "Traffic Violation"
  },
  {
    term: "Criminal Mischief",
    definition: "Damaging or interfering with the use of property, often for malicious purposes (e.g., smashing car windows, breaking locks).",
    category: "Property Crime"
  },
  {
    term: "Threatening a Public Official",
    definition: "Verbally or physically threatening a government or law enforcement officer in a way that causes fear or obstructs duty.",
    category: "Serious Crime"
  },
  {
    term: "Improper Use of Emergency Equipment",
    definition: "Using sirens, lights, or radio codes without authorization, impersonating emergency services.",
    category: "Operational Misconduct"
  },
  {
    term: "Evading Law Enforcement",
    definition: "Fleeing from police pursuit on foot or in a vehicle to avoid arrest or detention.",
    category: "Criminal Law"
  },
  {
    term: "Obstruction of Government Property",
    definition: "Damaging or blocking access to property owned or controlled by the government (e.g., roads, courthouses, police stations).",
    category: "Property Crime"
  },
  {
    term: "Contraband Possession",
    definition: "Possessing illegal items such as drugs, weapons, or banned materials—especially in restricted areas like jails or government buildings.",
    category: "Security Violation"
  },
  {
    term: "Bribery",
    definition: "Offering or accepting something of value in exchange for influence or action by a public official or authority figure.",
    category: "Corruption"
  },
  {
    term: "Tampering with a Witness",
    definition: "Trying to intimidate, bribe, or otherwise influence a witness to lie, stay silent, or avoid testifying in a legal proceeding.",
    category: "Court Crime"
  },
  {
    term: "Unlawful Possession of a Firearm",
    definition: "Owning or carrying a firearm without a valid license, or while being legally prohibited from possessing one.",
    category: "Weapons Offense"
  },
  {
    term: "Failure to Comply",
    definition: "Refusing to obey lawful commands from law enforcement or other officials (e.g., ignoring orders during a stop).",
    category: "Criminal Law"
  },
  {
    term: "Disturbing the Peace",
    definition: "Engaging in disruptive or violent behavior in public, such as fighting, shouting threats, or creating excessive noise.",
    category: "Public Order"
  },
  {
    term: "Perverting the Course of Justice",
    definition: "Knowingly interfering with the administration of justice — such as hiding suspects, destroying evidence, or misleading the court.",
    category: "Court Crime"
  },
  {
    term: "Possession with Intent to Distribute",
    definition: "Holding illegal substances with the purpose of selling or supplying them, based on amount, packaging, or behavior.",
    category: "Drug Crime"
  },
  {
    term: "Forgery of Government Documents",
    definition: "Creating or altering official documents (e.g., licenses, permits, IDs) to deceive or gain unlawful benefit.",
    category: "Fraud"
  },
  {
    term: "Misuse of Identification",
    definition: "Using someone else's ID or a fake identity for personal gain or to avoid consequences.",
    category: "Fraud"
  },
  {
    term: "Illegal Assembly During Curfew",
    definition: "Gathering in public during curfew hours declared due to emergencies or unrest.",
    category: "Public Order"
  },
  {
    term: "Threatening Behavior / Intimidation",
    definition: "Actions or speech intended to cause fear, emotional distress, or submission through coercion or threat.",
    category: "Personal Crime"
  },
  {
    term: "Disorderly Conduct",
    definition: "A broad charge for behavior that causes public inconvenience, annoyance, or alarm (e.g., loitering, indecent exposure, aggressive shouting).",
    category: "Public Order"
  },
  {
    term: "Escaping Lawful Custody",
    definition: "Fleeing from handcuffs, jail, transport, or officers after lawful arrest or detention.",
    category: "Serious Crime"
  },
  {
    term: "Trespass During Emergency Order",
    definition: "Entering restricted or cordoned-off areas during disasters or active crime scenes.",
    category: "Public Safety"
  },
  {
    term: "Cybercrime – Unauthorized Access",
    definition: "Accessing computers, networks, or data without authorization, often to steal, disrupt, or alter information.",
    category: "Cybercrime"
  }
]

export default function AdvancedTerms() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(advancedTerms.map(term => term.category)))]

  const filteredTerms = advancedTerms.filter(
    term =>
      (selectedCategory === 'All' || term.category === selectedCategory) &&
      (term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
       term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
       term.category.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Criminal Law':
      case 'Serious Crime':
        return Scale
      case 'Operations':
        return Shield
      default:
        return AlertTriangle
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Advanced Terms</h1>
              <p className="text-muted-foreground">Command ranking learning terms and advanced concepts</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-2xl mx-auto">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search terms or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredTerms.map((term, index) => {
            const IconComponent = getCategoryIcon(term.category)
            return (
              <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors text-left">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-primary flex items-center gap-2">
                      <IconComponent className="h-5 w-5" />
                      {term.term}
                    </CardTitle>
                    <Badge variant="secondary">{term.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{term.definition}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or category filter</p>
          </div>
        )}
      </div>
    </div>
  )
}
