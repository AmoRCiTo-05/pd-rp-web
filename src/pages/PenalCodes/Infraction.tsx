
import React, { useState } from 'react'
import { FileText, Search, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BackToTop } from '@/components/BackToTop'

const infractionOffenses = [
  { offense: "Littering", classification: "Infraction", sentence: "0", licensePoints: "", description: "Discarding items in a non-acceptable container, leaving trash on the ground." },
  { offense: "Anti-Mask Law -> Unauthorized Face Covering", classification: "Infraction", sentence: "0", licensePoints: "", description: "Wearing a face covering in a government building that obstructs identification and refusing to remove it when asked during a lawful investigation." },
  { offense: "Operating without a Permit", classification: "Infraction", sentence: "0", licensePoints: "", description: "Operating an event without prior approval, licensure, or permit from an authorized Government Entity." },
  { offense: "Disturbing the Peace", classification: "Infraction", sentence: "0", licensePoints: "", description: "Unlawfully fighting or challenging another in a public place, disturbing by loud noise, or using offensive words likely to provoke violence." },
  { offense: "Loitering on Government Properties", classification: "Infraction", sentence: "0", licensePoints: "", description: "Intentionally standing or waiting idly without apparent purpose on government properties." },
  { offense: "Public Intoxication", classification: "Infraction", sentence: "5", licensePoints: "", description: "Being under the influence of Alcohol or a Controlled Dangerous Substance in a public place." },
  { offense: "Failure to Yield to Emergency Vehicle", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Failing to pull to the side of the road or safely move out of the way and reduce speed when an emergency vehicle is active." },
  { offense: "Failure to Obey Traffic Control Device", classification: "Infraction", sentence: "0", licensePoints: "1", description: "Failure to obey any erected or maintained sign, including regulatory and warning signs, or pavement markings." },
  { offense: "Nonfunctional Vehicle -> Illegal Vehicle Modifications", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Driving a nonfunctional or unsafe vehicle, such as with smashed windows, illegal tint, or missing doors." },
  { offense: "Negligent Driving", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Driving in a way that is negligent, demonstrating a lack of proper regard or attention to safety, with no regard to basic traffic rules." },
  { offense: "Third Degree Speeding", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Speeding in excess of 1 mph to 30 mph over the posted limit." },
  { offense: "Second Degree Speeding", classification: "Infraction", sentence: "0", licensePoints: "4", description: "Speeding in excess of 31 mph to 60 mph over the posted limit." },
  { offense: "First Degree Speeding", classification: "Infraction", sentence: "0", licensePoints: "8", description: "Speeding in excess of more than 61+ mph over the posted limit." },
  { offense: "Unlicensed Operation of Vehicle", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Operating a vehicle without a proper license, or with a suspended/revoked license, or without a valid physical government identification card." },
  { offense: "Illegal U-Turn", classification: "Infraction", sentence: "0", licensePoints: "1", description: "Turning around at an intersection marked against U-turns, or changing direction in the middle of a roadway by crossing a yellow line." },
  { offense: "Illegal Passing", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Passing another vehicle by a shoulder, median, or solid lines, or interfering with safe operation of an approaching vehicle." },
  { offense: "Failure to Maintain Lane", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Failure to maintain control of a vehicle within an appropriate lane of travel." },
  { offense: "Illegal Turn", classification: "Infraction", sentence: "0", licensePoints: "1", description: "Performing a turn at a stop sign or red light without a full stop, failing to yield, making a left-hand turn where prohibited, turning from an opposite lane, or turning against a \"turn only lane\" indication." },
  { offense: "Failure to Stop", classification: "Infraction", sentence: "0", licensePoints: "1", description: "Failing to bring all wheels to a complete stop before moving forward, or failing to yield to oncoming traffic at a 4-way stop." },
  { offense: "Unauthorized Parking", classification: "Infraction", sentence: "0", licensePoints: "", description: "Parking in a fire lane, emergency lane, red curb, blocking a fire hydrant, parking unsafely, impeding traffic, failing to park within marked lines, or parking in a \"No Parking\" zone or handicap spot without authorization." },
  { offense: "Driving without Headlights or Signals", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Failing to use headlights to see safely in low light or allow other vehicles to see you." },
  { offense: "Unlawful Operation of an Unroadworthy Vehicle", classification: "Infraction", sentence: "0", licensePoints: "3", description: "Operating a vehicle that does not have a visible license plate." },
  { offense: "Jaywalking", classification: "Infraction", sentence: "0", licensePoints: "", description: "Crossing a roadway at any place except in a designated crosswalk while minding traffic control signal devices." },
  { offense: "Illegal Vehicle Modification", classification: "Infraction", sentence: "0", licensePoints: "2", description: "Any modification applied to a vehicle that would unlawfully alter performance and/or any body modifications that would render the vehicle unsafe or unroadworthy." },
  { offense: "Improper Use of a Horn", classification: "Infraction", sentence: "0", licensePoints: "1", description: "Using a horn when not reasonably necessary for safe operation, or using it in excess." },
  { offense: "Driving an Unregistered Vehicle", classification: "Infraction", sentence: "0", licensePoints: "1", description: "Illegally operating a motor vehicle on a public roadway that is not registered to the State of San Andreas." },
  { offense: "Failure to maintain Aircraft radio", classification: "Infraction", sentence: "0", licensePoints: "", description: "Maintaining radio frequency Radio 919.1 at all times during flights." },
  { offense: "Failure to Register Flight with Authorities", classification: "Infraction", sentence: "0", licensePoints: "", description: "Failure to report recreational flight via 311 prior to takeoff." },
  { offense: "Landing in an Unsafe Area", classification: "Infraction", sentence: "0", licensePoints: "", description: "Helicopter landing in undesignated areas, or less than 75m from any roadway, residence, or built-up structure; fixed-wing aircraft landing only on designated runways; pontoon aircraft landing on waterways but 75m from bridges, vessels, or swimming areas." },
  { offense: "Flying too Low", classification: "Infraction", sentence: "0", licensePoints: "", description: "Maintaining minimum altitudes of 1500 ft over city limits and 750 ft over county areas." },
  { offense: "Flying an Unregistered Aircraft", classification: "Infraction", sentence: "0", licensePoints: "", description: "Piloting any aircraft which does not have a valid registration, excluding rental aircrafts with tail number prefix \"RENT\" and \"PEG\"." },
  { offense: "Hunting In Restricted Areas", classification: "Infraction", sentence: "0", licensePoints: "", description: "Hunting outside of the defined boundaries of the hunting area." },
  { offense: "Unlicensed Hunting or Fishing", classification: "Infraction", sentence: "0", licensePoints: "", description: "Performing the act of hunting or fishing without being in possession of the appropriate license(s)." },
  { offense: "Hunting Outside of Hunting Hours", classification: "Infraction", sentence: "0", licensePoints: "", description: "Hunting outside of the window of 05:00 and 19:30." }
]

export default function Infraction() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOffenses = infractionOffenses.filter(
    offense =>
      offense.offense.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offense.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <FileText className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Infraction Offenses</h1>
              <p className="text-muted-foreground">Minor violations typically punishable by fines rather than imprisonment</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search infraction offenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Info Notice */}
          <Card className="mb-6 border-yellow-200 bg-yellow-50/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-yellow-600">
                <AlertTriangle className="h-5 w-5" />
                <span>Infraction Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Infractions are the least serious category of offenses, typically resulting in fines or citations rather than jail time. 
                Most infractions carry no jail sentence (0 months) but may include license points that affect driving privileges.
                Vehicle-related infractions can accumulate points leading to license suspension.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Offenses Table */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-heading text-xl">
              Infraction Offenses ({filteredOffenses.length} total)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Offense</TableHead>
                    <TableHead className="font-semibold">Classification</TableHead>
                    <TableHead className="font-semibold">Sentence</TableHead>
                    <TableHead className="font-semibold">License Points</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOffenses.map((offense, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell className="font-medium max-w-xs">
                        {offense.offense}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20">
                          Infraction
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {offense.sentence === '0' ? 'Fine/Citation' : `${offense.sentence} months`}
                      </TableCell>
                      <TableCell>
                        {offense.licensePoints || 'N/A'}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground max-w-md">
                        {offense.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {filteredOffenses.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}

        <BackToTop />
      </div>
    </div>
  )
}
