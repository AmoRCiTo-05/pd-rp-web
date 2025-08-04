
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Radio, AlertCircle, Shield } from 'lucide-react';

interface CallSection {
  title: string;
  icon: React.ReactNode;
  calls: {
    code: string;
    description: string;
    format: string;
  }[];
}

const callSections: CallSection[] = [
  {
    title: "Patrol & Basic Codes",
    icon: <Shield className="h-5 w-5" />,
    calls: [
      {
        code: "Code-1",
        description: "Routine patrol",
        format: "[CallSign] Performing a Code-1 in a [Unit Used]"
      },
      {
        code: "10-11",
        description: "Traffic Stop",
        format: "[CallSign] Performing a 10-11 on a [Vehicle Color, Make] at [Location] with [Occupants of Vehicle] [Additional Req / No Additionals Req]"
      }
    ]
  },
  {
    title: "Emergency Responses",
    icon: <AlertCircle className="h-5 w-5" />,
    calls: [
      {
        code: "10-13",
        description: "Officer Down",
        format: "[CallSign] Responding to the latest 10-13 with a Code 2 / Code 3"
      },
      {
        code: "10-14",
        description: "Officer Requesting Backup",
        format: "[CallSign] Responding to the 10-14 with a Code 3"
      },
      {
        code: "10-16",
        description: "Prisoner Transport Request",
        format: "Solo: [CallSign] 10-76 to the 10-16\n\nWith Unit: [CallSign] 10-76 to the 10-16 with [1/2/3] [10-47 / 10-15 / 10-14]"
      },
      {
        code: "10-19",
        description: "Returning to Station",
        format: "Solo: [CallSign] 10-76 to the 10-19\n\nWith Unit: [CallSign] 10-76 to the 10-19 with [1/2/3] [10-15] with a Code 2 / Code 3"
      },
      {
        code: "10-23",
        description: "On Scene",
        format: "[CallSign] 10-23 to the latest [Call You Responded To]"
      },
      {
        code: "10-25",
        description: "Meet Another Unit",
        format: "[CallSign] to [CallSign of Other Unit], please 10-25 to the [Location]"
      }
    ]
  },
  {
    title: "Backup & Threat Situations",
    icon: <AlertCircle className="h-5 w-5" />,
    calls: [
      {
        code: "10-32",
        description: "Suspect with Firearm",
        format: "[CallSign] There is a [1/2/3/4/5/6] 10-32 at my twenty, requesting 10-77 / 10-78"
      },
      {
        code: "10-72",
        description: "Active Shooter / Armed Suspect",
        format: "[CallSign] There is a 10-72 at my 10-20, requesting 10-77 / 10-78"
      }
    ]
  },
  {
    title: "Pursuits & Felonies",
    icon: <AlertCircle className="h-5 w-5" />,
    calls: [
      {
        code: "10-38",
        description: "Felony Stop",
        format: "[CallSign] Responding to the latest 10-38 with a Code 2 / Code 3"
      },
      {
        code: "10-80",
        description: "Vehicle Pursuit",
        format: "Responding: [CallSign] Responding to the latest 10-80 in a [Unit Used]\n\nOn Scene: [CallSign] Joining the 10-80 as the Secondary / Tertiary / Backup Unit"
      }
    ]
  },
  {
    title: "Special Incidents",
    icon: <AlertCircle className="h-5 w-5" />,
    calls: [
      {
        code: "10-90",
        description: "Robbery in Progress",
        format: "[CallSign] Responding to the latest 10-90[A/B/C/D] with a Code 3 in a [Unit Used]"
      },
      {
        code: "10-91",
        description: "Vehicle/Animal/Officer Unit",
        format: "[CallSign] Requesting a 10-91 at my 10-20"
      },
      {
        code: "10-98",
        description: "Suspicious Vehicle / Subject",
        format: "[CallSign] Responding to the 10-98 with a Code 2 / Code 3"
      }
    ]
  },
  {
    title: "Duty Status",
    icon: <Shield className="h-5 w-5" />,
    calls: [
      {
        code: "10-41",
        description: "On Duty",
        format: "[CallSign] Going 10-41"
      },
      {
        code: "10-42",
        description: "Off Duty",
        format: "[CallSign] Going 10-42"
      }
    ]
  }
];

const SampleCalls = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          <Radio className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Sample Calls
          </h1>
        </div>
        <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          Sample Calls on a PD Radio while using PD 10-Codes. LEO Radio Callout Formats and proper communication procedures.
        </p>
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          <Badge variant="secondary">{callSections.length} Categories</Badge>
          <Badge variant="secondary">{callSections.reduce((total, section) => total + section.calls.length, 0)} Call Formats</Badge>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {callSections.map((section, sectionIndex) => (
          <Card key={sectionIndex} className="border-l-4 border-l-primary/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                {section.icon}
                <CardTitle className="text-lg sm:text-xl">{section.title}</CardTitle>
                <Badge variant="outline">{section.calls.length} formats</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {section.calls.map((call, callIndex) => (
                  <div key={callIndex} className="border rounded-lg p-3 sm:p-4 bg-card/50">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
                      <Badge variant="secondary" className="w-fit">
                        {call.code}
                      </Badge>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm sm:text-base mb-1">{call.description}</h4>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-3 rounded border-l-4 border-l-primary/50">
                      <h5 className="font-medium text-primary mb-2 text-sm sm:text-base">Radio Format:</h5>
                      <code className="text-xs sm:text-sm font-mono whitespace-pre-line leading-relaxed">
                        {call.format}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SampleCalls;
