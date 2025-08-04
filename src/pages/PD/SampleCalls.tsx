
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Radio, Search, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CallFormat {
  title: string;
  format: string;
  description?: string;
}

interface CallCategory {
  name: string;
  calls: CallFormat[];
}

const callCategories: CallCategory[] = [
  {
    name: "Patrol & Basic Codes",
    calls: [
      {
        title: "Code-1",
        format: "[CallSign] Performing a Code-1 in a [Unit Used]",
        description: "Non-emergency response or routine patrol"
      },
      {
        title: "10-11 (Traffic Stop)",
        format: "[CallSign] Performing a 10-11 on a [Vehicle Color, Make] at [Location] with [Occupants of Vehicle] [Additional Req / No Additionals Req]",
        description: "Traffic stop procedure with vehicle details"
      }
    ]
  },
  {
    name: "Emergency Responses",
    calls: [
      {
        title: "10-13 (Officer Down)",
        format: "[CallSign] Responding to the latest 10-13 with a Code 2 / Code 3",
        description: "Officer in distress or down, requiring immediate assistance"
      },
      {
        title: "10-14 (Officer Requesting Backup)",
        format: "[CallSign] Responding to the 10-14 with a Code 3",
        description: "Officer requesting backup assistance"
      },
      {
        title: "10-16 (Prisoner Transport Request)",
        format: "Solo: [CallSign] 10-76 to the 10-16\n\nWith Unit: [CallSign] 10-76 to the 10-16 with [1/2/3] [10-47 / 10-15 / 10-14]",
        description: "Request for prisoner transport, solo or with additional units"
      },
      {
        title: "10-19 (Returning to Station)",
        format: "Solo: [CallSign] 10-76 to the 10-19\n\nWith Unit: [CallSign] 10-76 to the 10-19 with [1/2/3] [10-15] with a Code 2 / Code 3",
        description: "Officer returning to station, solo or with prisoners"
      },
      {
        title: "10-23 (On Scene)",
        format: "[CallSign] 10-23 to the latest [Call You Responded To]",
        description: "Officer arriving on scene of a call"
      },
      {
        title: "10-25 (Meet Another Unit)",
        format: "[CallSign] to [CallSign of Other Unit], please 10-25 to the [Location]",
        description: "Request to meet with another unit at specified location"
      }
    ]
  },
  {
    name: "Backup & Threat Situations",
    calls: [
      {
        title: "10-32 (Suspect with Firearm)",
        format: "[CallSign] There is a [1/2/3/4/5/6] 10-32 at my twenty, requesting 10-77 / 10-78",
        description: "Suspect armed with firearm, requesting backup"
      },
      {
        title: "10-72 (Active Shooter / Armed Suspect)",
        format: "[CallSign] There is a 10-72 at my 10-20, requesting 10-77 / 10-78",
        description: "Active shooter situation requiring immediate backup"
      }
    ]
  },
  {
    name: "Pursuits & Felonies",
    calls: [
      {
        title: "10-38 (Felony Stop)",
        format: "[CallSign] Responding to the latest 10-38 with a Code 2 / Code 3",
        description: "High-risk vehicle stop for felony suspects"
      },
      {
        title: "10-80 (Vehicle Pursuit)",
        format: "Responding: [CallSign] Responding to the latest 10-80 in a [Unit Used]\n\nOn Scene: [CallSign] Joining the 10-80 as the Secondary / Tertiary / Backup Unit",
        description: "Vehicle pursuit in progress"
      }
    ]
  },
  {
    name: "Special Incidents",
    calls: [
      {
        title: "10-90 (Robbery in Progress)",
        format: "[CallSign] Responding to the latest 10-90[A/B/C/D] with a Code 3 in a [Unit Used]",
        description: "Robbery in progress with severity levels A-D"
      },
      {
        title: "10-91 (Vehicle/Animal/Officer Unit)",
        format: "[CallSign] Requesting a 10-91 at my 10-20",
        description: "Request for tow truck, animal control, or additional unit"
      },
      {
        title: "10-98 (Suspicious Vehicle / Subject)",
        format: "[CallSign] Responding to the 10-98 with a Code 2 / Code 3",
        description: "Suspicious person or vehicle investigation"
      }
    ]
  },
  {
    name: "Duty Status",
    calls: [
      {
        title: "10-41 (On Duty)",
        format: "[CallSign] Going 10-41",
        description: "Officer beginning shift and going on duty"
      },
      {
        title: "10-42 (Off Duty)",
        format: "[CallSign] Going 10-42",
        description: "Officer ending shift and going off duty"
      }
    ]
  }
];

const SampleCalls = () => {
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
      return callCategories;
    }

    const query = searchQuery.toLowerCase().trim();
    return callCategories.map(category => ({
      ...category,
      calls: category.calls.filter(call => 
        call.title.toLowerCase().includes(query) ||
        call.format.toLowerCase().includes(query) ||
        call.description?.toLowerCase().includes(query) ||
        category.name.toLowerCase().includes(query)
      )
    })).filter(category => category.calls.length > 0);
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-6xl">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Radio className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Sample Calls
          </h1>
        </div>
        <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          Sample calls on a PD Radio while using PD 10-Codes and proper LEO radio callout formats.
        </p>

        {/* Search Bar */}
        <div className="relative mb-4 sm:mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search call types, formats, or descriptions..."
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
          <Badge variant="secondary">{filteredCategories.reduce((total, cat) => total + cat.calls.length, 0)} Call Formats</Badge>
          {searchQuery && (
            <Badge variant="outline">Filtered Results</Badge>
          )}
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {filteredCategories.length === 0 ? (
          <Card className="p-6 sm:p-8 text-center">
            <p className="text-muted-foreground">No call formats found matching your search.</p>
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
                        <Badge variant="outline" className="flex-shrink-0 text-xs sm:text-sm">{category.calls.length}</Badge>
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
                      {category.calls.map((call, callIndex) => (
                        <div key={callIndex} className="border rounded-lg p-3 sm:p-4 bg-card/50">
                          <div className="mb-3">
                            <Badge variant="secondary" className="mb-2 text-xs">
                              Format {callIndex + 1}
                            </Badge>
                            <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">{call.title}</h4>
                            {call.description && (
                              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{call.description}</p>
                            )}
                          </div>
                          
                          <div className="bg-muted/30 p-3 sm:p-4 rounded border-l-4 border-l-blue-500/50">
                            <h5 className="font-medium text-blue-600 mb-2 text-sm">Radio Format:</h5>
                            <code className="text-xs sm:text-sm font-mono whitespace-pre-wrap block">
                              {call.format}
                            </code>
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

export default SampleCalls;
