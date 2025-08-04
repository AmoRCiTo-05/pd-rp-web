import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronRight, BookOpen, Search } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Question {
  scenario: string;
  question: string;
  answer: string;
}

interface Category {
  name: string;
  questions: Question[];
}

const categories: Category[] = [
  {
    name: "Use of Force & Arrest Procedures",
    questions: [
      {
        scenario: "While patrolling downtown, you respond to a 911 call reporting a suspicious male loitering near a bank wearing a hoodie and pacing back and forth. Upon arrival, you observe the male nervously checking his surroundings. You approach and ask him for ID. He becomes evasive and tries to walk away.",
        question: "What level of suspicion is this, and what can you legally do at this point?",
        answer: "This is reasonable suspicion. You may detain the individual for questioning but cannot arrest unless you gather probable cause. You may frisk if you believe he is armed."
      },
      {
        scenario: "During a routine traffic stop, you notice a bulge in the driver's waistband. When asked to step out, the driver complies but appears tense. As you frisk him, you find a concealed firearm.",
        question: "How should you proceed, and what legal standards apply?",
        answer: "Frisk is justified due to suspicion of being armed. Upon discovering a firearm, and assuming no valid license is presented, you now have probable cause to arrest. Read Miranda rights, confiscate the weapon, and search the person fully."
      },
      {
        scenario: "While on foot patrol in a high-crime area, you see two individuals arguing. One of them suddenly pulls a knife and threatens the other. You draw your firearm and give three verbal warnings, but he refuses to drop it.",
        question: "What level of force is now authorized, and what should you do next?",
        answer: "Lethal force is authorized as there's an imminent threat to life. Use appropriate force to neutralize the threat and immediately call for EMS and backup."
      },
      {
        scenario: "A suspect is handcuffed and placed in the patrol car after arrest. He starts kicking the window violently and trying to break free.",
        question: "What force can you use to restrain him?",
        answer: "Use hard empty-hand control or non-lethal tools like restraints or a hobble. Ensure the force is proportional and the suspect receives medical attention if necessary."
      },
      {
        scenario: "You detain an individual in relation to a reported robbery, but after investigation, it turns out he was wrongly identified and uninvolved.",
        question: "What are your obligations in this case?",
        answer: "You must release the individual immediately, document the incident in your MDT, and report the mistaken identity to your supervisor."
      }
    ]
  },
  {
    name: "Evidence Handling & Documentation",
    questions: [
      {
        scenario: "During a robbery investigation, your bodycam captures a suspect holding a firearm and threatening civilians. The footage is clear and unedited.",
        question: "How do you classify this evidence and what is your next step?",
        answer: "This is bonafide evidence. You must upload the footage link in the MDT under \"Evidence\" and ensure it's timestamped and verified."
      },
      {
        scenario: "At a drug bust scene, you find suspicious white powder and electronic devices with potentially incriminating data.",
        question: "How do you process these items?",
        answer: "Send the powder to EMS for lab verification and the devices to forensics. Once certified, upload results in MDT and label accordingly in evidence logs."
      },
      {
        scenario: "You see another officer taking marijuana from the evidence locker and placing it in his personal bag.",
        question: "What should you do?",
        answer: "Report the misconduct to Internal Affairs immediately. Do not confront the officer directly unless necessary. Document the incident."
      },
      {
        scenario: "A civilian provides security camera footage showing a vehicle involved in a hit-and-run.",
        question: "Is this admissible evidence? What steps do you take?",
        answer: "Yes, if the footage is unaltered. Request the original copy, ensure metadata is intact, and classify it as bonafide if verified. Link in MDT."
      },
      {
        scenario: "After a felony stop, you recover weapons and a large amount of cash from the suspect's vehicle. You forget to log it in MDT until after the suspect is jailed.",
        question: "What should you do now?",
        answer: "Immediately update the MDT with evidence entries and inform your supervisor. Late logging may trigger a compliance review."
      }
    ]
  },
  {
    name: "Command & Robbery Response",
    questions: [
      {
        scenario: "You're the commanding officer at an ongoing bank robbery. There are four armed suspects and two hostages. Negotiator is on standby, and units are positioned.",
        question: "What are your responsibilities and steps to manage this situation?",
        answer: "Assign a negotiator to verify proof of life. Designate an MDT officer to collect evidence inside the bank. Establish a perimeter, prepare a pursuit unit, maintain communication discipline, and ensure any response matches force. Debrief post-situation and ensure MDT updates."
      },
      {
        scenario: "In a hostage robbery, suspects ask to leave with the hostage as a shield.",
        question: "What is the SOP-approved response to such demands?",
        answer: "Deny the request. Hostage must be released before suspects exit. If they attempt escape with the hostage, you may intervene using de-escalation or controlled force."
      },
      {
        scenario: "During a major crime scene, multiple units are arriving, but no one has taken charge.",
        question: "What should be done immediately as a senior officer on scene?",
        answer: "Take command, assign roles (MDT officer, perimeter, negotiation), establish radio protocol, and begin documentation. Ensure no one acts independently."
      }
    ]
  },
  {
    name: "Vehicle Pursuits & PIT Protocols",
    questions: [
      {
        scenario: "A suspect vehicle evades after a robbery. After 12 minutes of pursuit, they begin ramming civilian vehicles.",
        question: "Can you initiate a PIT, and under what conditions?",
        answer: "Yes, since they are endangering civilians, a soft PIT is justified. Request permission from commanding officer and use only with PIT-approved vehicle."
      },
      {
        scenario: "During a chase, the suspect changes vehicles for the second time.",
        question: "What is the tire pop policy now?",
        answer: "Pop two tires or deploy spikes. Ensure it's documented in MDT and use only pistol unless SWAT-authorized."
      },
      {
        scenario: "AIR-1 is requested during a car chase, but the officer available doesn't have a license.",
        question: "Can they still fly AIR-1 under orders from a commanding officer?",
        answer: "No. AIR-1 license is mandatory. Even commanding officers cannot override this rule."
      },
      {
        scenario: "In a boosting vehicle pursuit, officers begin using SEU units and bikes without permission.",
        question: "Is this allowed, and what's the proper protocol?",
        answer: "No. Boosting chases follow strict vehicle-use rules. Only specific vehicles like Caracara or STX are allowed based on suspect vehicle type."
      },
      {
        scenario: "You're in a pursuit and the suspect flips their car once but resets.",
        question: "What is the SOP regarding tire pop now?",
        answer: "No tire pop on first flip. If it happens again, one tire pop is permitted. Avoid lethal escalation."
      }
    ]
  },
  {
    name: "Community Interaction & Public Conduct",
    questions: [
      {
        scenario: "A civilian records you during duty and makes aggressive remarks.",
        question: "How should you respond?",
        answer: "Stay professional, do not engage verbally. Verbal abuse alone isn't grounds for arrest. De-escalate and report if behavior disrupts operations."
      },
      {
        scenario: "A crowd begins gathering during a traffic stop, making sarcastic comments.",
        question: "What should you do?",
        answer: "Maintain focus on the stop. If crowd grows or interferes, request backup and disperse them using verbal warnings. Do not retaliate."
      },
      {
        scenario: "You receive a public complaint about excessive force by another officer.",
        question: "What are your responsibilities?",
        answer: "Inform Internal Affairs and ensure the complaint is documented. Offer the complainant the official procedure to file it. Avoid bias."
      }
    ]
  },
  {
    name: "Patrol & Field Activity",
    questions: [
      {
        scenario: "You start your shift and notice your patrol car has low fuel and missing spike strips.",
        question: "What must you do before starting duty?",
        answer: "Refill the vehicle, check all equipment, and report any missing items to Watch Commander. Start shift only when ready."
      },
      {
        scenario: "During a building check, you find an unlocked warehouse door at midnight.",
        question: "What is your next course of action?",
        answer: "Call for backup, enter cautiously, and check for signs of forced entry. Document findings and report to dispatch."
      },
      {
        scenario: "On patrol, you see a suspicious vehicle parked in a school zone with engine running.",
        question: "How do you proceed?",
        answer: "Approach with caution, run the plate, observe driver behavior. Detain if reasonable suspicion arises; escalate only with probable cause."
      }
    ]
  },
  {
    name: "Arrest & Processing",
    questions: [
      {
        scenario: "You arrest a suspect and they plead not guilty. Their lawyer has been requested but hasn't arrived in 20 minutes.",
        question: "What do you do next?",
        answer: "Process and jail the suspect. SOP allows you to proceed if lawyer does not appear within 15 minutes."
      },
      {
        scenario: "A suspect confesses to a crime during casual questioning but was never read Miranda rights.",
        question: "Is the confession valid?",
        answer: "No, if in custody, Miranda rights must be read first. The statement may be inadmissible in court."
      },
      {
        scenario: "While jailing a suspect, you realize their weapons and contraband were not logged.",
        question: "What do you do?",
        answer: "Halt processing, log items immediately in MDT and notify commanding officer of the delay."
      }
    ]
  },
  {
    name: "Disciplinary & Misconduct",
    questions: [
      {
        scenario: "You witness a sergeant issuing commands in violation of SOP, such as allowing lethal force in a low-threat scenario.",
        question: "What action should you take?",
        answer: "Report the incident to High-Command or Internal Affairs. Include your report with bodycam and radio logs."
      },
      {
        scenario: "An officer tases a handcuffed suspect who was verbally abusive.",
        question: "Is this allowed?",
        answer: "No. Tasers may not be used on restrained individuals unless there's a new active threat. IA complaint should be filed."
      },
      {
        scenario: "You've been issued a verbal warning.",
        question: "Can you appeal this?",
        answer: "No. Verbal warnings are not appealable. Only LEO WARNED and STRIKE are appealable through chain-of-command."
      }
    ]
  },
  {
    name: "Legal Standards – Warrants, Suspicion, Charges",
    questions: [
      {
        scenario: "You catch someone vandalizing a car and detain them.",
        question: "Is a warrant needed to arrest them?",
        answer: "No. You witnessed the misdemeanor. Arrest is valid without a warrant."
      },
      {
        scenario: "You suspect a house is being used for drug manufacturing.",
        question: "What must you have before entering?",
        answer: "Probable cause and a search warrant unless exigent circumstances exist."
      },
      {
        scenario: "You stop a person near a robbery scene who matches a BOLO description.",
        question: "Can you detain them?",
        answer: "Yes, under reasonable suspicion. Confirm details and escalate if evidence supports."
      },
      {
        scenario: "What's the difference between a BOLO and a Warrant?",
        question: "Explain.",
        answer: "BOLO is an internal alert to be on the lookout; not an order. A warrant is a legal document allowing arrest or search."
      }
    ]
  },
  {
    name: "Specialized Units – SWAT, Air, SEU, MPU",
    questions: [
      {
        scenario: "A terrorist attack is underway and officers are responding with pistols.",
        question: "What weapons are permitted under SOP?",
        answer: "Officers with SMG authorization may use them. Others, including cadets, may use Deagle if approved by High-Command."
      },
      {
        scenario: "You're in SWAT, deployed for a hostage rescue.",
        question: "What must you ensure before entry?",
        answer: "Confirm threat level, hostage status, communication protocol, and follow commands from SWAT Overwatch or Commander."
      },
      {
        scenario: "You are an SEU officer in a high-speed pursuit and initiate PIT without approval.",
        question: "Is this a violation?",
        answer: "Yes. PIT requires conditions: speed under 80 in city, 120 outside, permission from commanding, and proper vehicle."
      },
      {
        scenario: "A cadet uses a taser on a suspect near a cliffside.",
        question: "What SOP rule was violated?",
        answer: "Tasing near elevated edges or stairs is prohibited. Cadet may face disciplinary action."
      }
    ]
  },
  {
    name: "Tactical Response & Scene Management",
    questions: [
      {
        scenario: "You arrive first at an armed robbery in progress with a civilian held at gunpoint. Backup is two minutes out.",
        question: "What immediate actions should you take?",
        answer: "Take cover, assess risk, communicate updates to dispatch and units en route, avoid engaging unless shots are fired or immediate threat escalates."
      },
      {
        scenario: "An explosion is reported in a commercial area. Civilians are panicked and some are recording.",
        question: "What is your priority as a first responder?",
        answer: "Secure the scene perimeter, evacuate civilians, call bomb squad/EMS, avoid speculation, and initiate incident command until supervisors arrive."
      },
      {
        scenario: "A suspect has barricaded themselves in a house with a possible hostage but no shots fired.",
        question: "How should the scene be handled?",
        answer: "Establish perimeter, request SWAT, initiate negotiations, confirm proof of life, and avoid forced entry unless lives are at immediate risk."
      }
    ]
  },
  {
    name: "Internal Protocols & Department Policy",
    questions: [
      {
        scenario: "A cadet repeatedly ignores radio protocol and talks over senior officers.",
        question: "What is your obligation as their FTO?",
        answer: "Correct the behavior immediately. If it continues, file an observation report and notify the Watch Commander for possible disciplinary review."
      },
      {
        scenario: "An officer refuses to share MDT access or evidence files from a joint case.",
        question: "What is the proper course of action?",
        answer: "Escalate the issue to a supervisor. All case-related evidence must be shared among assigned units as per SOP collaboration standards."
      },
      {
        scenario: "You're asked to participate in a pursuit outside your department's assigned zone without clearance.",
        question: "Can you join?",
        answer: "No, unless mutual aid is requested or jurisdiction is shared (city/county overlap). Otherwise, notify dispatch and remain in-zone."
      }
    ]
  },
  {
    name: "Civilian Complaints & IA Investigations",
    questions: [
      {
        scenario: "A civilian files a complaint claiming you searched their car without cause.",
        question: "What must you do?",
        answer: "Document the complaint, inform your supervisor, and preserve all bodycam/MDT logs. Let Internal Affairs handle investigation."
      },
      {
        scenario: "IA contacts you about a case involving a partner officer.",
        question: "What is your duty if you witnessed misconduct?",
        answer: "Provide an honest and complete statement. Lying or withholding info during an IA inquiry is a serious SOP violation."
      },
      {
        scenario: "You are being falsely accused by a suspect of physical assault during an arrest.",
        question: "How do you protect yourself?",
        answer: "Secure bodycam and witness footage, file a detailed report, and immediately inform your supervisor and IA liaison."
      }
    ]
  },
  {
    name: "Traffic & DUI Enforcement",
    questions: [
      {
        scenario: "You pull over a driver who smells of alcohol but passes the breathalyzer.",
        question: "Can you arrest for DUI?",
        answer: "No, if tests are clean and no impairment is observed. Continue investigation but do not arrest without evidence of impairment."
      },
      {
        scenario: "A driver refuses to exit the vehicle during a stop but is not physically threatening.",
        question: "What steps should you take?",
        answer: "Use verbal commands, call backup, and escalate slowly. Do not break the window unless there's threat or probable cause."
      },
      {
        scenario: "You ticket a parked vehicle in a red zone, but the owner confronts you claiming it's an emergency.",
        question: "How should you respond?",
        answer: "Remain calm, explain the violation, and offer instructions to appeal. Do not revoke the ticket unless a commanding officer authorizes."
      }
    ]
  },
  {
    name: "Mental Health & EMS Coordination",
    questions: [
      {
        scenario: "A civilian is found wandering the streets barefoot and screaming incoherently.",
        question: "What's your first action?",
        answer: "Detain safely if needed, call EMS for psych eval, and ensure no threats to self/others. Avoid charges unless a crime occurs."
      },
      {
        scenario: "EMS requests police presence at a house where the patient has prior violent history.",
        question: "What should you do upon arrival?",
        answer: "Secure the scene before EMS enters, assess for threats, and ensure patient is safe for transport. Use non-lethal force if needed."
      },
      {
        scenario: "You respond to a suspected overdose case at a park.",
        question: "What's the protocol?",
        answer: "Call EMS, secure scene, look for substances, begin basic aid if trained, and gather witness statements."
      }
    ]
  },
  {
    name: "Public Events & Community Engagement",
    questions: [
      {
        scenario: "You're assigned to patrol a city festival with thousands in attendance.",
        question: "What are your patrol priorities?",
        answer: "Ensure crowd control, monitor exits, look for intoxicated or disorderly persons, maintain high visibility, and assist EMS if needed."
      },
      {
        scenario: "A child is reported missing at a parade.",
        question: "What is your immediate protocol?",
        answer: "Broadcast BOLO, secure perimeter, interview guardians, search nearby shops/cars, and check with event staff/security cams."
      },
      {
        scenario: "You're invited to speak at a school on policing. A student asks why police use force.",
        question: "How do you respond?",
        answer: "Explain force is used only when necessary for public or officer safety and always guided by laws and policy. Emphasize accountability."
      }
    ]
  },
  {
    name: "Interagency Cooperation",
    questions: [
      {
        scenario: "The fire department is blocked by traffic and cannot reach a burning house.",
        question: "What should you do?",
        answer: "Clear traffic manually or by code 2/3 escort, establish scene control, and coordinate crowd control with other LEOs."
      },
      {
        scenario: "You are assisting the Marshals in a warrant service but your department's SOP differs on tactics.",
        question: "What do you follow?",
        answer: "Follow Marshal command structure unless their instruction violates your legal limits. Clarify roles beforehand."
      }
    ]
  }
];

const SituationQuestions = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(question => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        question.scenario.toLowerCase().includes(query) ||
        question.question.toLowerCase().includes(query) ||
        question.answer.toLowerCase().includes(query) ||
        category.name.toLowerCase().includes(query)
      );
    })
  })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Situation Based Questions
          </h1>
        </div>
        <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          A comprehensive question bank for law enforcement interviews covering various scenarios and procedures.
        </p>
        
        {/* Search Bar */}
        <div className="relative mb-4 sm:mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search scenarios, questions, or answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          <Badge variant="secondary">{filteredCategories.length} Categories</Badge>
          <Badge variant="secondary">{filteredCategories.reduce((total, cat) => total + cat.questions.length, 0)} Questions</Badge>
        </div>
      </div>

      {filteredCategories.length === 0 ? (
        <Card className="text-center py-8">
          <CardContent>
            <p className="text-muted-foreground">No questions found matching your search.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-l-4 border-l-primary/50">
              <Collapsible 
                open={openCategories.includes(category.name)}
                onOpenChange={() => toggleCategory(category.name)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <CardTitle className="text-lg sm:text-xl">{category.name}</CardTitle>
                        <Badge variant="outline">{category.questions.length} questions</Badge>
                      </div>
                      {openCategories.includes(category.name) ? (
                        <ChevronDown className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-5 w-5 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-4 sm:space-y-6">
                      {category.questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="border rounded-lg p-3 sm:p-4 bg-card/50">
                          <div className="mb-3">
                            <Badge variant="secondary" className="mb-2">
                              Scenario {questionIndex + 1}
                            </Badge>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {question.scenario}
                            </p>
                          </div>
                          
                          <div className="mb-3">
                            <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">Question:</h4>
                            <p className="text-xs sm:text-sm">{question.question}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-green-600 mb-1 text-sm sm:text-base">Answer:</h4>
                            <p className="text-xs sm:text-sm bg-muted/30 p-2 sm:p-3 rounded border-l-4 border-l-green-500/50 leading-relaxed">
                              {question.answer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SituationQuestions;
