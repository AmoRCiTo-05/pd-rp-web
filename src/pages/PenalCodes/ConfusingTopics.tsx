import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronRight, HelpCircle, Search } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Question {
  question: string;
  answer: string;
}

interface Category {
  name: string;
  questions: Question[];
}

const categories: Category[] = [
  {
    name: "Pursuit & Detainment",
    questions: [
      {
        question: "Can you continue following a suspect if you see them again after the situation was already declared \"Code 4\"?",
        answer: "Yes, but only if you have fresh reasonable suspicion. You cannot arrest solely because they look like the prior suspect — you need bona fide evidence or probable cause."
      },
      {
        question: "Can a BOLO alone justify detaining someone days after the original report?",
        answer: "Yes — if the BOLO is active and there's reasonable belief the person matches the description. But to arrest, you need additional evidence or confirmation."
      },
      {
        question: "If you previously detained someone wrongly, can you re-detain them if new evidence emerges?",
        answer: "Yes — new evidence changes the legal standing. You can detain or arrest if the new info creates reasonable suspicion or probable cause."
      }
    ]
  },
  {
    name: "Use of Force",
    questions: [
      {
        question: "Can a police officer shoot first in a situation?",
        answer: "Yes — but only if there's an imminent threat to life and the officer reasonably believes lethal force is necessary."
      },
      {
        question: "Can you use a taser on a handcuffed suspect if they spit on you?",
        answer: "No — tasers are not approved for retaliation. Use must be proportional, and alternate non-lethal control like spit hoods should be used."
      },
      {
        question: "Is it allowed to shoot a suspect fleeing in a vehicle if they are a known armed felon?",
        answer: "Only if they pose an immediate threat (e.g., shooting from the vehicle). Otherwise, deadly force is not justified."
      }
    ]
  },
  {
    name: "Vehicle Interventions",
    questions: [
      {
        question: "Can an officer shoot a vehicle's tires to stop a suspect?",
        answer: "Generally no — unless there's an imminent risk to public safety and you've received supervisor approval."
      },
      {
        question: "Is it SOP-compliant to PIT a fleeing vehicle near a crowded pedestrian zone if they're below 40 MPH?",
        answer: "No — even at lower speeds, risk to bystanders makes it unjustifiable."
      },
      {
        question: "Can a cadet deploy spikes without permission if the lead vehicle is occupied?",
        answer: "No — cadets must always seek field training officer (FTO) or supervisor permission."
      }
    ]
  },
  {
    name: "Civil Liberties & Speech",
    questions: [
      {
        question: "Is it legal for civilians to abuse or insult police officers under free speech laws?",
        answer: "Mild insults are protected. But threats or \"fighting words\" may justify detainment for verbal assault or disorderly conduct."
      },
      {
        question: "Can a civilian film you during a felony stop and stand close?",
        answer: "Yes — filming is allowed in public. But they can be ordered back or detained if they obstruct."
      },
      {
        question: "Can you detain someone for mocking your uniform loudly in public?",
        answer: "No — mocking isn't a crime. Unless it becomes threatening or incites violence, it's protected speech."
      }
    ]
  },
  {
    name: "Miranda & Confessions",
    questions: [
      {
        question: "Is a suspect's statement valid in court after being read their Miranda rights?",
        answer: "Yes — if they waived rights knowingly and voluntarily, it's admissible."
      },
      {
        question: "Is a spontaneous confession admissible if you hadn't read Miranda yet?",
        answer: "Yes — spontaneous, voluntary statements not prompted by questioning may still be admissible."
      },
      {
        question: "Do Miranda rights apply during undercover conversations?",
        answer: "No — undercover officers don't trigger Miranda."
      }
    ]
  },
  {
    name: "Prioritization & Ethics",
    questions: [
      {
        question: "In a fire where only one person can be saved — a judge, mayor, police chief, or a civilian — who should be saved?",
        answer: "The civilian must be prioritized. SOP and ethical duty require protection of the public first."
      },
      {
        question: "Can you delay an EMS call if the suspect has critical evidence you want to photograph first?",
        answer: "No — life safety comes before evidence."
      },
      {
        question: "If your supervisor orders you to ignore civilians in distress, do you comply?",
        answer: "No — unlawful or unethical orders must be disobeyed."
      }
    ]
  },
  {
    name: "Warrantless Entry",
    questions: [
      {
        question: "Can police enter private property after a confirmed 911 call?",
        answer: "Yes — a confirmed call is an exigent circumstance."
      },
      {
        question: "Can you jump a fence chasing a shoplifter if you saw them commit the crime?",
        answer: "Yes — hot pursuit of a jailable offense can justify it."
      },
      {
        question: "If someone screams inside a locked house, can you break in?",
        answer: "Yes — signs of distress allow forced entry."
      }
    ]
  },
  {
    name: "Frisk vs. Search",
    questions: [
      {
        question: "If someone claims a suspect has a gun, can police search their car directly?",
        answer: "No — frisking the person is allowed, but the car needs probable cause."
      },
      {
        question: "Does a frisk allow you to check someone's backpack?",
        answer: "No — only outer clothing. A backpack requires consent or probable cause."
      },
      {
        question: "Can you frisk someone who's just acting nervous near a crime scene?",
        answer: "Nervousness alone isn't enough — more is needed to justify a frisk."
      }
    ]
  },
  {
    name: "Evidence Admissibility",
    questions: [
      {
        question: "Is illegally obtained evidence allowed in court?",
        answer: "Generally, no. But it may be allowed under the Good Faith Exception."
      },
      {
        question: "If a suspect gives you stolen goods voluntarily, is it admissible without a warrant?",
        answer: "Yes — voluntary surrender is valid."
      },
      {
        question: "Can a civilian's edited video be accepted in court if it clearly shows a crime?",
        answer: "Only if the unedited version is available or verified."
      }
    ]
  },
  {
    name: "Legal Intent",
    questions: [
      {
        question: "What is \"Good Faith\" in police procedure?",
        answer: "Acting honestly, believing your actions are lawful."
      },
      {
        question: "If you search the wrong house with a valid warrant for another address, is that excused?",
        answer: "No — unless it was a documented clerical error in good faith."
      },
      {
        question: "Does 'good faith' apply if you misread charges and arrest someone incorrectly?",
        answer: "Yes — if based on official error and you acted reasonably."
      }
    ]
  },
  {
    name: "Evidence Classification",
    questions: [
      {
        question: "What are examples of bona fide vs. non-bona fide evidence?",
        answer: "Bona fide: DNA, verified footage, official documents, expert testimony. Non-bona fide: hearsay, fake IDs, edited footage, anonymous tips without verification."
      },
      {
        question: "Is social media evidence considered bona fide?",
        answer: "Only if original, unedited, and verifiable with time stamps or metadata. Screenshots must be backed by source confirmation."
      },
      {
        question: "Is a third-party security guard's statement bona fide if unverified?",
        answer: "No — not until it's cross-checked with other sources like CCTV or physical evidence."
      }
    ]
  },
  {
    name: "Criminal Terminology",
    questions: [
      {
        question: "What's the difference between \"Evading\" and \"Escaping\"?",
        answer: "Evading: Fleeing during a stop or refusing to stop when signaled. Escaping: Breaking free after being in lawful custody (e.g., fleeing jail or handcuffs)."
      },
      {
        question: "If someone unknowingly hides a fugitive, are they an accessory?",
        answer: "No — to be charged as an accessory, the help must be intentional and knowing."
      },
      {
        question: "Can someone helping during a crime due to fear still be charged?",
        answer: "Possibly. If they acted under duress, courts may reduce or drop charges, but the context matters."
      }
    ]
  },
  {
    name: "Arrest Protocol",
    questions: [
      {
        question: "Can you arrest someone later without a warrant if you have probable cause and know their identity?",
        answer: "Yes — as long as they are in a public space. If they are in a private property, you need a warrant unless exigent conditions apply."
      },
      {
        question: "Can you arrest someone inside a private gym locker room without a warrant if they're a wanted felon?",
        answer: "No — unless it's publicly accessible or you have probable cause under exigent circumstances (like immediate danger)."
      },
      {
        question: "Can a phone confession alone justify an arrest without further proof?",
        answer: "No — confessions need corroboration with physical or testimonial evidence, especially if the confession isn't recorded or witnessed."
      }
    ]
  },
  {
    name: "Detainment Standards",
    questions: [
      {
        question: "What's the difference between Detaining and Arresting?",
        answer: "Detaining: Temporary stop, based on reasonable suspicion. No charges filed. Arresting: Full custody with intent to file charges, based on probable cause."
      },
      {
        question: "Can you detain someone just for being near a crime scene?",
        answer: "No — proximity doesn't equal suspicion. You need clear links to behavior, identity, or involvement."
      },
      {
        question: "How long can you detain someone without arresting them?",
        answer: "Typically 20–30 minutes. Prolonged detention without arrest or justification becomes unlawful."
      }
    ]
  },
  {
    name: "BOLO vs. Legal Warrant",
    questions: [
      {
        question: "What's the difference between a BOLO and a Warrant?",
        answer: "BOLO (Be On Lookout): Informational — allows you to observe or question. Warrant: Legal authority — allows arrest or search."
      },
      {
        question: "Can a BOLO be upgraded to a warrant without judge approval?",
        answer: "No — a judge must review and approve probable cause to issue a valid warrant."
      },
      {
        question: "Can you stop a car just because it matches a BOLO if the plate doesn't match?",
        answer: "Yes — for questioning only. Arrest or search requires more matching evidence or verification."
      }
    ]
  },
  {
    name: "Reasonable Suspicion vs. Probable Cause",
    questions: [
      {
        question: "How do Reasonable Suspicion and Probable Cause differ?",
        answer: "Reasonable Suspicion: Based on observations, allows limited action (e.g., stop, frisk). Probable Cause: Requires factual evidence, allows full action (e.g., arrest, search)."
      },
      {
        question: "Is the smell of marijuana alone probable cause for a vehicle search?",
        answer: "In most jurisdictions, yes — if it's fresh, strong, and detected by a trained officer."
      },
      {
        question: "Can nervous behavior at a bank justify detainment?",
        answer: "Not alone. Must be combined with other suspicious behavior (e.g., matching a BOLO, bulging clothing, or scanning cameras)."
      }
    ]
  }
];

const ConfusingTopics = () => {
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
          <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Confusing Topics
          </h1>
        </div>
        <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          Confusing topics in SOP with detailed explanations to clarify common misconceptions and gray areas.
        </p>
        
        {/* Search Bar */}
        <div className="relative mb-4 sm:mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search topics, questions, or answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          <Badge variant="secondary">{filteredCategories.length} Categories</Badge>
          <Badge variant="secondary">{filteredCategories.reduce((total, cat) => total + cat.questions.length, 0)} Topics</Badge>
        </div>
      </div>

      {filteredCategories.length === 0 ? (
        <Card className="text-center py-8">
          <CardContent>
            <p className="text-muted-foreground">No topics found matching your search.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-l-4 border-l-orange-500/50">
              <Collapsible 
                open={openCategories.includes(category.name)}
                onOpenChange={() => toggleCategory(category.name)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <CardTitle className="text-lg sm:text-xl">{category.name}</CardTitle>
                        <Badge variant="outline">{category.questions.length} topics</Badge>
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
                              Topic {questionIndex + 1}
                            </Badge>
                            <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">Question:</h4>
                            <p className="text-xs sm:text-sm mb-3 leading-relaxed">{question.question}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-orange-600 mb-1 text-sm sm:text-base">Answer:</h4>
                            <p className="text-xs sm:text-sm bg-muted/30 p-2 sm:p-3 rounded border-l-4 border-l-orange-500/50 leading-relaxed">
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

export default ConfusingTopics;
