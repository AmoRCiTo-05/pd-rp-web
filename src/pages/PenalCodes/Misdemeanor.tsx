
import React, { useState } from 'react'
import { Gavel, Search, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BackToTop } from '@/components/BackToTop'

const misdemeanorOffenses = [
  { offense: "Criminal Threats", classification: "Misdemeanor", sentence: "5", licensePoints: "", description: "Threatening to physically harm or kill another, causing fear." },
  { offense: "Aggravated Criminal Threats", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Willfully threatening death or great bodily injury, causing sustained fear." },
  { offense: "Unlawful Imprisonment", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Restricting a person's freedom of movement without legal justification." },
  { offense: "Misdemeanor Domestic Violence", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Unlawful act of enacting violence or abuse on a domestic partner or family member." },
  { offense: "Reckless Endangerment", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Willfully engaging in an activity that endangers the life or property of another." },
  { offense: "Assault", classification: "Misdemeanor", sentence: "12", licensePoints: "", description: "Unlawful attempt to touch or injure another person, or intentionally placing them in fear of injury." },
  { offense: "Battery", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Unlawful use of force or violence against another person, causing physical harm." },
  { offense: "Aggravated Battery", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Unlawful intentional and reckless use of force or violence, resulting in serious bodily injury." },
  { offense: "Battery on a Government Employee", classification: "Misdemeanor", sentence: "20", licensePoints: "", description: "Unlawful use of force or violence against a Government Employee." },
  { offense: "Battery on a Judge", classification: "Misdemeanor", sentence: "30", licensePoints: "", description: "Unlawful use of force or violence against a Judge." },
  { offense: "Petty Theft", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Stealing property valued at less than $5,000." },
  { offense: "Burglary", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Unlawfully entering or remaining concealed in a building with intent to commit a crime." },
  { offense: "Leaving Without Paying", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Obtaining services by deception or unlawful means without compensating the provider." },
  { offense: "Possession of Nonlegal Currency", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Possession of loose, rolled, marked, or inked monies in relation to certain offenses." },
  { offense: "Possession of Government-Issued Items", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Possession of items issued and accessible only in SASP armories to SASP or state employees." },
  { offense: "Possession of Items Used in the Commission of a Crime", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Possession of items that could aid in the commission of certain offenses, or possession of a still for liquor manufacture." },
  { offense: "Impersonating", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Impersonating another person that could make them civilly or criminally liable." },
  { offense: "Possession of Stolen Identification", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Fraudulent use or possession of another person's identifying information." },
  { offense: "Possession of Stolen Government Identification", classification: "Misdemeanor", sentence: "20", licensePoints: "", description: "Possessing a governmental employee's badge or other identifying information that does not belong to the individual." },
  { offense: "Fraud", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Knowingly or designedly defrauding any other person of money, labor, or property by false representation." },
  { offense: "Forgery", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Possessing or creating any false government document or false currency." },
  { offense: "Trespassing", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Knowingly entering or remaining unlawfully in or upon private property." },
  { offense: "Vandalism", classification: "Misdemeanor", sentence: "5", licensePoints: "", description: "Intentionally defacing, destroying, or damaging any property that does not belong to the individual." },
  { offense: "Criminal Possession of Stolen Property", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Possessing any physical property that is reported and reasonably believed to be stolen." },
  { offense: "Misuse of Emergency Systems", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Making a request for emergency response when no actual emergency exists, or reporting a false crime." },
  { offense: "Conspiracy", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Conspiring to commit any crime with one or more people, and one of them commits an overt act in furtherance of that agreement." },
  { offense: "Violating a Court Order", classification: "Misdemeanor", sentence: "Judge Discretion", licensePoints: "", description: "Willfully disobeying or not complying with the terms written in any court-issued order." },
  { offense: "Failure to Appear", classification: "Misdemeanor", sentence: "Judge Discretion", licensePoints: "", description: "Failure to Appear in Court when summoned." },
  { offense: "Resisting Arrest", classification: "Misdemeanor", sentence: "5", licensePoints: "", description: "Using physical force or willfully absconding to prevent arrest, handcuffing, or being taken to jail or prison." },
  { offense: "Disobeying a Peace Officer", classification: "Infraction", sentence: "0", licensePoints: "", description: "Willfully refusing or failing to comply with a lawful order, signal, or direction of any peace officer." },
  { offense: "Disorderly Conduct", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Engaging in behavior intending to cause public inconvenience." },
  { offense: "False Reporting", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Unlawful act of reporting a false or nonexistent crime." },
  { offense: "Harassment", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Intimidating or pressuring another person aggressively with unwelcome words, deeds, actions, or gestures." },
  { offense: "Misdemeanor Obstruction of Justice", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Recklessly or with criminal negligence hindering the discovery, apprehension, conviction, or punishment of a person who committed a crime." },
  { offense: "Unlawful Assembly", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Participating in an event/assembly which results in violent conduct or creates a risk of causing public harm with a group of at least four people." },
  { offense: "Harboring a Fugitive", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Knowingly hiding a criminal with an active warrant or who has escaped police custody." },
  { offense: "3rd Degree Possession of Controlled/Dangerous Substance", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Possession of a controlled/dangerous substance or untaxed alcohol within specified amounts." },
  { offense: "Prostitution", classification: "Misdemeanor", sentence: "20", licensePoints: "", description: "Offering, for payment, the services of prostitution or offering payment for prostitution." },
  { offense: "Aggressive Panhandling", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Solicitation made in person for immediate donation of money or other gratuity by vocal or nonvocal appeal, including badgering, harassment, threats, or demands." },
  { offense: "Obstructing Emergency Services", classification: "Misdemeanor", sentence: "20", licensePoints: "", description: "Hindering Medical or Fire personnel in the performance of their duties." },
  { offense: "Brandishing a Weapon", classification: "Misdemeanor", sentence: "5", licensePoints: "", description: "Unlawful drawing or exhibition of a deadly weapon in the presence of another person not in self-defense, or otherwise displaying a weapon in public without a legal reason." },
  { offense: "Unlawful Discharge of a Stun Gun or Deleterious Agent", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Unlawful act of knowingly discharging any electrical stun gun, propelled bean bag, tear gas, or similar agent against another person without cause." },
  { offense: "Negligent Discharge of a Firearm", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Unlawful act of willfully or unwillfully discharging a firearm in a negligent manner that could result in injury, death, or property damage." },
  { offense: "Possession of Illegal Weapon Modification Device", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Possessing any weapon modification device that would unlawfully alter any weapon." },
  { offense: "Driving While Under the Influence of Drugs or Alcohol", classification: "Misdemeanor", sentence: "5", licensePoints: "5", description: "Operating a vehicle or bicycle while affected by drug or alcohol intoxication." },
  { offense: "Evading", classification: "Misdemeanor", sentence: "5", licensePoints: "2", description: "Fleeing from a peace officer to avoid apprehension, detention, or arrest while on foot or in a vehicle." },
  { offense: "Reckless Driving", classification: "Misdemeanor", sentence: "10", licensePoints: "2", description: "Driving with a willful or wanton disregard for the safety of oneself or others, or in a manner likely to cause injury or death." },
  { offense: "Unlawful Use of a Motor Vehicle", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "Taking a vehicle without the owner's consent, without intent to permanently deprive the owner." },
  { offense: "Animal Cruelty", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Maliciously and intentionally wounding or killing an animal." },
  { offense: "Hunting With A Non-Hunting Weapon", classification: "Misdemeanor", sentence: "10", licensePoints: "", description: "The use of any firearm that is not a hunting rifle in the act of hunting." },
  { offense: "Overhunting", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Illegally killing more than allowed through collecting over the limit of pelts, meat, antlers etc, allowed by the season's stipulations published by the San Andreas Park Rangers." },
  { offense: "Overfishing", classification: "Misdemeanor", sentence: "15", licensePoints: "", description: "Illegally catching or possessing more than allowed through collecting over the limit of fish allowed by the season's stipulations published by the San Andreas Park Rangers." },
  { offense: "Hit and Run", classification: "Misdemeanor", sentence: "10", licensePoints: "5", description: "Operating a vehicle involved in an accident resulting in injury, death, or property damage, and leaving the scene without providing identifiable information or rendering aid." }
]

export default function Misdemeanor() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOffenses = misdemeanorOffenses.filter(
    offense =>
      offense.offense.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offense.classification.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getSeverityBadge = (classification: string) => {
    if (classification === 'Infraction') {
      return <Badge variant="secondary">Infraction</Badge>
    }
    return <Badge variant="default" className="bg-orange-500 hover:bg-orange-600">Misdemeanor</Badge>
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Gavel className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Misdemeanor Offenses</h1>
              <p className="text-muted-foreground">Lesser offenses typically punishable by less than one year in jail</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search misdemeanor offenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Info Notice */}
          <Card className="mb-6 border-orange-200 bg-orange-50/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-orange-600">
                <AlertTriangle className="h-5 w-5" />
                <span>Misdemeanor Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Misdemeanor charges are less serious than felonies but more serious than infractions. 
                Most misdemeanors result in jail time up to 30 months and may include license points for vehicle-related offenses.
                <strong> Judge Discretion</strong> means the sentence is determined by the presiding judge based on case specifics.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Offenses Table */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-heading text-xl">
              Misdemeanor Offenses ({filteredOffenses.length} total)
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
                        {getSeverityBadge(offense.classification)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {offense.sentence === '0' ? 'Fine/Citation' : 
                         offense.sentence === 'Judge Discretion' ? 'Judge Discretion' : 
                         `${offense.sentence} months`}
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
            <Gavel className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}

        <BackToTop />
      </div>
    </div>
  )
}
