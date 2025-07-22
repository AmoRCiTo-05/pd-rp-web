
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileCode, Search } from 'lucide-react'

const shortForms = [
  { abbreviation: "APB", meaning: "All Points Bulletin" },
  { abbreviation: "AOS", meaning: "Arrest On Sight" },
  { abbreviation: "ATL", meaning: "Attempting To Locate" },
  { abbreviation: "BAC", meaning: "Blood Alcohol Concentration" },
  { abbreviation: "BAT", meaning: "Breath Alcohol Test" },
  { abbreviation: "BCSO", meaning: "Blaine County Sheriffs Office" },
  { abbreviation: "BOLO", meaning: "Be on a Lookout" },
  { abbreviation: "CERT", meaning: "Community Emergency Response Team" },
  { abbreviation: "CDS", meaning: "Controlled Dangerous Substance" },
  { abbreviation: "CSU", meaning: "Crime Scene Unit" },
  { abbreviation: "CTS", meaning: "Critical Traffic Stop" },
  { abbreviation: "CI", meaning: "Confidential Informant" },
  { abbreviation: "DOA", meaning: "Dead On Arrival / Drug Observation Agency" },
  { abbreviation: "DOJ", meaning: "Department of Justice" },
  { abbreviation: "DRT", meaning: "Dead Right There" },
  { abbreviation: "DV", meaning: "Domestic Violence" },
  { abbreviation: "EMS", meaning: "Emergency Medical Services" },
  { abbreviation: "EOW", meaning: "End Of Watch (officer killed on duty)" },
  { abbreviation: "FIB", meaning: "Federal Investigation Bureau" },
  { abbreviation: "FI", meaning: "Field Interview" },
  { abbreviation: "FIR", meaning: "First Investigation Report" },
  { abbreviation: "FTD", meaning: "Field Training Department" },
  { abbreviation: "FTO", meaning: "Field Training Officer" },
  { abbreviation: "GO", meaning: "General Order" },
  { abbreviation: "GOA", meaning: "Gone On Arrival" },
  { abbreviation: "GTA", meaning: "Grand Theft Auto" },
  { abbreviation: "GSR", meaning: "Gun Shot Residue" },
  { abbreviation: "HIT", meaning: "High-Intensity Target" },
  { abbreviation: "HOJ", meaning: "Home of Justice" },
  { abbreviation: "HUT", meaning: "Held Until Trial" },
  { abbreviation: "IAA", meaning: "Internal Affairs Agency" },
  { abbreviation: "ID", meaning: "Identification" },
  { abbreviation: "IFAKS", meaning: "Individual First Aid Kits" },
  { abbreviation: "K9", meaning: "Canine Unit" },
  { abbreviation: "KOS", meaning: "Kill On Sight" },
  { abbreviation: "LS", meaning: "Los Santos" },
  { abbreviation: "LSPD", meaning: "Los Santos Police Department" },
  { abbreviation: "MDT", meaning: "Mobile Data Terminal" },
  { abbreviation: "MIA", meaning: "Missing In Action" },
  { abbreviation: "MO", meaning: "Modus Operandi" },
  { abbreviation: "NB", meaning: "Note Bene (Note Well)" },
  { abbreviation: "NCIC", meaning: "National Crime Information Center" },
  { abbreviation: "NOTICE", meaning: "Notice Of Traffic Incident Causing Emergency" },
  { abbreviation: "OC", meaning: "Oleoresin Capsicum (Pepper Spray)" },
  { abbreviation: "OIS", meaning: "Officer Involved Shooting" },
  { abbreviation: "PIT", meaning: "Pursuit Immobilization/Intervention Technique" },
  { abbreviation: "PD", meaning: "Police Department" },
  { abbreviation: "PO", meaning: "Police Officer" },
  { abbreviation: "POI", meaning: "Person of Interest" },
  { abbreviation: "RA", meaning: "Rescue Ambulance" },
  { abbreviation: "RO", meaning: "Registered Owner" },
  { abbreviation: "RTB", meaning: "Returning To Base" },
  { abbreviation: "RTO", meaning: "Radio Traffic Only" },
  { abbreviation: "SASP", meaning: "San Andreas State Police" },
  { abbreviation: "SO", meaning: "Sheriff's Office" },
  { abbreviation: "SOP", meaning: "Standard Operating Procedure" },
  { abbreviation: "SRO", meaning: "School Resource Officer" },
  { abbreviation: "SWAT", meaning: "Special Weapons and Tactics" },
  { abbreviation: "TA", meaning: "Traffic Accident" },
  { abbreviation: "TO", meaning: "Training Officer" },
  { abbreviation: "TVI", meaning: "Tactical Vehicle Intervention" },
  { abbreviation: "UOI", meaning: "Unusual Occurrence Investigation" },
  { abbreviation: "UTL", meaning: "Unable to Locate" },
  { abbreviation: "VCB", meaning: "Visual Contact Broken" },
  { abbreviation: "VO", meaning: "Victim's Officer" },
  { abbreviation: "WARN", meaning: "Warning, Alert, Response Network" },
  { abbreviation: "WI", meaning: "Witness Interview" },
  { abbreviation: "WO", meaning: "Warning Order" }
]

export default function ShortForms() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredShortForms = shortForms.filter(
    form =>
      form.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileCode className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Short Forms</h1>
              <p className="text-muted-foreground">Common abbreviations used in law enforcement communication</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search abbreviations or meanings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredShortForms.map((form, index) => (
            <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="font-mono text-sm px-3 py-1">
                    {form.abbreviation}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">{form.meaning}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredShortForms.length === 0 && (
          <div className="text-center py-12">
            <FileCode className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  )
}
