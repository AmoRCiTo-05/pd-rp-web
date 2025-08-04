import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HelpCircle, Search, X, ChevronDown, ChevronRight } from 'lucide-react';
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

const situationCategories: Category[] = [
  {
    name: "Use of Force Scenarios",
    questions: [
      {
        scenario: "A suspect is verbally aggressive and refuses to comply with commands.",
        question: "What level of force is justified in this situation?",
        answer: "Verbal commands, soft empty hand techniques, or OC spray may be justified depending on the totality of the circumstances."
      },
      {
        scenario: "An armed suspect points a firearm at officers.",
        question: "What is the appropriate response?",
        answer: "Lethal force is justified to protect the lives of officers and others."
      },
      {
        scenario: "A suspect is passively resisting arrest.",
        question: "What techniques can be used to gain compliance?",
        answer: "Escort holds, pressure points, or mechanical restraints may be used."
      }
    ]
  },
  {
    name: "Search and Seizure Scenarios",
    questions: [
      {
        scenario: "Officers have probable cause to believe a vehicle contains illegal drugs.",
        question: "What actions can officers take?",
        answer: "Officers can conduct a warrantless search of the vehicle, including containers that could hold the drugs."
      },
      {
        scenario: "A suspect is stopped for a traffic violation and appears nervous.",
        question: "Can officers conduct a pat-down search for weapons?",
        answer: "Officers can conduct a pat-down search if they have reasonable suspicion the suspect is armed and dangerous."
      },
      {
        scenario: "Officers enter a home with a valid search warrant.",
        question: "What areas can be searched?",
        answer: "Officers can search areas specified in the warrant where the items sought could be located."
      }
    ]
  },
  {
    name: "Interview and Interrogation Scenarios",
    questions: [
      {
        scenario: "A suspect is in custody and being questioned about a crime.",
        question: "What rights must be advised to the suspect?",
        answer: "The suspect must be advised of their Miranda rights before interrogation."
      },
      {
        scenario: "A suspect invokes their right to remain silent.",
        question: "What actions should officers take?",
        answer: "Officers must cease questioning and respect the suspect's right to remain silent."
      },
      {
        scenario: "A suspect requests an attorney during questioning.",
        question: "What actions should officers take?",
        answer: "Officers must cease questioning until an attorney is present."
      }
    ]
  },
  {
    name: "Traffic Stop Scenarios",
    questions: [
      {
        scenario: "A vehicle is stopped for speeding.",
        question: "What information can officers request from the driver?",
        answer: "Officers can request the driver's license, vehicle registration, and insurance information."
      },
      {
        scenario: "During a traffic stop, officers observe drug paraphernalia in plain view.",
        question: "What actions can officers take?",
        answer: "Officers can seize the paraphernalia and conduct a search of the vehicle based on probable cause."
      },
      {
        scenario: "A driver refuses to exit the vehicle during a lawful traffic stop.",
        question: "What actions can officers take?",
        answer: "Officers can order the driver out of the vehicle and use reasonable force if necessary to gain compliance."
      }
    ]
  },
  {
    name: "Domestic Violence Scenarios",
    questions: [
      {
        scenario: "Officers respond to a domestic disturbance call and hear yelling inside.",
        question: "What actions can officers take?",
        answer: "Officers can enter the home without a warrant if they have a reasonable belief someone is in imminent danger."
      },
      {
        scenario: "A victim of domestic violence recants their statement.",
        question: "Can officers still make an arrest?",
        answer: "Officers can make an arrest if they have probable cause based on other evidence, even without the victim's statement."
      },
      {
        scenario: "A suspect violates a domestic violence restraining order.",
        question: "What actions can officers take?",
        answer: "Officers must arrest the suspect for violating the restraining order."
      }
    ]
  },
  {
    name: "Mental Health Crisis Scenarios",
    questions: [
      {
        scenario: "Officers encounter an individual experiencing a mental health crisis and posing a danger to themselves.",
        question: "What actions can officers take?",
        answer: "Officers can take the individual into protective custody and transport them to a mental health facility for evaluation."
      },
      {
        scenario: "An individual is threatening suicide.",
        question: "What steps should officers take to ensure the person's safety?",
        answer: "Officers should attempt to establish communication, assess the immediate danger, and take steps to remove any means of self-harm."
      },
      {
        scenario: "An individual with a known mental illness is refusing medication and becoming agitated.",
        question: "Under what circumstances can officers administer medication against the person's will?",
        answer: "Medication can only be administered against the person's will if they pose an imminent danger to themselves or others and a court order has been obtained."
      }
    ]
  },
  {
    name: "Crowd Control Scenarios",
    questions: [
      {
        scenario: "A peaceful protest begins to turn violent.",
        question: "What steps should officers take to de-escalate the situation?",
        answer: "Officers should attempt to communicate with protest leaders, establish clear boundaries, and use de-escalation techniques."
      },
      {
        scenario: "Protesters are blocking a public roadway.",
        question: "What actions can officers take to disperse the crowd?",
        answer: "Officers can issue dispersal orders, provide a reasonable opportunity to comply, and use reasonable force if necessary to remove protesters."
      },
      {
        scenario: "Protesters are throwing objects at officers.",
        question: "What level of force is justified in response?",
        answer: "Officers can use riot control agents, impact weapons, or other reasonable force to protect themselves and others."
      }
    ]
  },
  {
    name: "Active Shooter Scenarios",
    questions: [
      {
        scenario: "Officers respond to an active shooter incident in a school.",
        question: "What is the immediate priority?",
        answer: "The immediate priority is to locate and neutralize the shooter to stop the threat."
      },
      {
        scenario: "Officers encounter wounded individuals while searching for the shooter.",
        question: "Should officers stop to provide medical aid?",
        answer: "Officers should continue to move towards the threat, but provide quick assessments and direct wounded individuals to safe areas if possible."
      },
      {
        scenario: "The shooter is located and engaged in gunfire with officers.",
        question: "What tactics should officers use to neutralize the threat?",
        answer: "Officers should use cover and concealment, communicate with each other, and use lethal force if necessary to stop the shooter."
      }
    ]
  },
  {
    name: "High-Risk Vehicle Stop Scenarios",
    questions: [
      {
        scenario: "Officers are conducting a high-risk vehicle stop on a suspect wanted for armed robbery.",
        question: "What procedures should be followed?",
        answer: "Officers should use a tactical approach, maintain cover, issue clear commands, and control all occupants of the vehicle."
      },
      {
        scenario: "The suspect refuses to exit the vehicle.",
        question: "What actions can officers take?",
        answer: "Officers can use chemical agents, break windows, or use other reasonable force to remove the suspect from the vehicle."
      },
      {
        scenario: "The suspect exits the vehicle and begins firing at officers.",
        question: "What is the appropriate response?",
        answer: "Officers can use lethal force to protect themselves and others."
      }
    ]
  },
  {
    name: "Building Search Scenarios",
    questions: [
      {
        scenario: "Officers are searching a building for a burglary suspect.",
        question: "What tactics should be used to safely clear rooms?",
        answer: "Officers should use a systematic approach, maintain communication, and use cover and concealment."
      },
      {
        scenario: "Officers encounter a locked door.",
        question: "What options are available to gain entry?",
        answer: "Officers can attempt to force the door, use a breaching tool, or obtain a key."
      },
      {
        scenario: "The suspect is located and refuses to surrender.",
        question: "What actions can officers take?",
        answer: "Officers can use verbal commands, chemical agents, or other reasonable force to gain compliance."
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

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return situationCategories;
    }

    const query = searchQuery.toLowerCase().trim();
    return situationCategories.map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.scenario.toLowerCase().includes(query) ||
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query) ||
        category.name.toLowerCase().includes(query)
      )
    })).filter(category => category.questions.length > 0);
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-6xl">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Situation Based Questions
          </h1>
        </div>
        <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          A comprehensive collection of situation-based questions for law enforcement interviews and training scenarios.
        </p>

        {/* Search Bar */}
        <div className="relative mb-4 sm:mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search scenarios, questions, or answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          <Badge variant="secondary">{filteredCategories.length} Categories</Badge>
          <Badge variant="secondary">{filteredCategories.reduce((total, cat) => total + cat.questions.length, 0)} Scenarios</Badge>
          {searchQuery && (
            <Badge variant="outline">Filtered Results</Badge>
          )}
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {filteredCategories.length === 0 ? (
          <Card className="p-6 sm:p-8 text-center">
            <p className="text-muted-foreground">No scenarios found matching your search.</p>
          </Card>
        ) : (
          filteredCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-l-4 border-l-blue-500/50">
              <Collapsible 
                open={openCategories.includes(category.name)}
                onOpenChange={() => toggleCategory(category.name)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors py-3 sm:py-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <CardTitle className="text-lg sm:text-xl truncate">{category.name}</CardTitle>
                        <Badge variant="outline" className="flex-shrink-0 text-xs sm:text-sm">{category.questions.length}</Badge>
                      </div>
                      {openCategories.includes(category.name) ? (
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0 px-3 sm:px-6">
                    <div className="space-y-4 sm:space-y-6">
                      {category.questions.map((item, itemIndex) => (
                        <div key={itemIndex} className="border rounded-lg p-3 sm:p-4 bg-card/50">
                          <div className="mb-4">
                            <Badge variant="secondary" className="mb-2 text-xs">
                              Scenario {itemIndex + 1}
                            </Badge>
                            <h4 className="font-semibold text-blue-600 mb-2 text-sm sm:text-base">Scenario:</h4>
                            <p className="text-xs sm:text-sm mb-3 bg-blue-50/50 dark:bg-blue-950/30 p-2 sm:p-3 rounded border-l-4 border-l-blue-500/50">
                              {item.scenario}
                            </p>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">Question:</h4>
                            <p className="text-xs sm:text-sm mb-3">{item.question}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-green-600 mb-1 text-sm sm:text-base">Expected Response:</h4>
                            <p className="text-xs sm:text-sm bg-green-50/50 dark:bg-green-950/30 p-2 sm:p-3 rounded border-l-4 border-l-green-500/50">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default SituationQuestions;
