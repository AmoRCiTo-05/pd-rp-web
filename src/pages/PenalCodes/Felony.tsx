
import React, { useState } from 'react'
import { Scale, Search, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BackToTop } from '@/components/BackToTop'

const felonyOffenses = [
  { offense: "Unlawful Imprisonment of a Government Employee", classification: "Felony", sentence: "20", licensePoints: "", description: "Restricting a Government Employee's freedom of movement without legal justification." },
  { offense: "Unlawful Imprisonment of a Judge", classification: "Felony", sentence: "30", licensePoints: "", description: "Restricting a Judge's freedom of movement without legal justification." },
  { offense: "Kidnapping", classification: "Felony", sentence: "15", licensePoints: "", description: "Unlawfully taking or confining another person by force or fear." },
  { offense: "Accessory to Kidnapping", classification: "Felony", sentence: "8", licensePoints: "", description: "Helping an individual hinder the apprehension, trial, or punishment for kidnapping." },
  { offense: "Kidnapping of a Government Employee", classification: "Felony", sentence: "30", licensePoints: "", description: "Taking a Government Employee by force or fear a significant distance without consent." },
  { offense: "Kidnapping of a Judge", classification: "Felony", sentence: "40", licensePoints: "", description: "Taking a Judge by force or fear a significant distance without consent." },
  { offense: "Hostage Taking", classification: "Felony", sentence: "20", licensePoints: "", description: "Unlawfully taking or confining a person for use as a shield, leverage, or to obtain ransom." },
  { offense: "Accessory to Hostage Taking", classification: "Felony", sentence: "10", licensePoints: "", description: "Being an accessory after the fact to hostage taking." },
  { offense: "Hostage Taking of a Government Employee", classification: "Felony", sentence: "40", licensePoints: "", description: "Unlawfully taking or confining a Government Employee for use as a shield, leverage, or to obtain ransom." },
  { offense: "Hostage Taking of a Judge", classification: "Felony", sentence: "50", licensePoints: "", description: "Unlawfully taking or confining a Judge for use as a shield, leverage, or to obtain ransom." },
  { offense: "Felony Domestic Violence", classification: "Felony", sentence: "25", licensePoints: "", description: "Unlawful act of enacting serious bodily injury or grievous violence on a domestic partner or family member." },
  { offense: "Assault with a Weapon", classification: "Felony", sentence: "20", licensePoints: "", description: "Intentionally assaulting another person and inflicting substantial bodily harm with a weapon." },
  { offense: "Assault with a Weapon on a Government Employee", classification: "Felony", sentence: "30", licensePoints: "", description: "Intentionally assaulting a Government Employee and inflicting substantial bodily harm with a weapon." },
  { offense: "Assault with a Weapon on a Judge", classification: "Felony", sentence: "40", licensePoints: "", description: "Intentionally assaulting a Judge and inflicting substantial bodily harm with a weapon." },
  { offense: "Assault with a Deadly Weapon", classification: "Felony", sentence: "30", licensePoints: "", description: "Intentionally assaulting another person and inflicting substantial bodily harm with a deadly weapon." },
  { offense: "Assault with a Deadly Weapon on a Government Employee", classification: "Felony", sentence: "40", licensePoints: "", description: "Intentionally assaulting a Government Employee and inflicting substantial bodily harm with a deadly weapon." },
  { offense: "Assault with a Deadly Weapon on a Judge", classification: "Felony", sentence: "50", licensePoints: "", description: "Intentionally assaulting a Judge and inflicting substantial bodily harm with a deadly weapon." },
  { offense: "Attempted Murder", classification: "Felony", sentence: "50", licensePoints: "", description: "Willful attempt to commit murder that fails, is prevented, or intercepted." },
  { offense: "Attempted Murder of a Government Employee", classification: "Felony", sentence: "60", licensePoints: "", description: "Willful attempt to commit murder against a Government Employee that fails, is prevented, or intercepted." },
  { offense: "Attempted Murder of a Judge", classification: "Felony", sentence: "75", licensePoints: "", description: "Willful attempt to commit murder against a Judge that fails, is prevented, or intercepted." },
  { offense: "Torture", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Deliberately inflicting severe physical or mental pain, injury, or suffering." },
  { offense: "Voluntary Manslaughter", classification: "Felony", sentence: "HUT", licensePoints: "", description: "Intentionally killing another person without premeditation, as a result of a reckless act or traumatic event." },
  { offense: "Involuntary Manslaughter", classification: "Felony", sentence: "1 year", licensePoints: "", description: "Unintentionally killing another person as a result of a reckless or negligent act, or a non-felony crime." },
  { offense: "Vehicular Manslaughter", classification: "Felony", sentence: "3 years", licensePoints: "", description: "Unintentionally killing another person through the reckless or negligent use of a vehicle." },
  { offense: "Second Degree Murder", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Unlawfully and deliberately killing another person with malice aforethought, but without premeditation." },
  { offense: "Accessory to Second Degree Murder", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Being an accessory after the fact to second degree murder." },
  { offense: "Second Degree Murder of a Government Employee", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Unlawfully and deliberately killing a Government Employee with malice aforethought, but without premeditation." },
  { offense: "Accessory to Second Degree Murder of a Government Employee", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Being an accessory after the fact to second degree murder of a Government Employee." },
  { offense: "Second Degree Murder of a Judge", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Unlawfully and deliberately killing a Judge with malice aforethought, but without premeditation." },
  { offense: "Accessory to Second Degree Murder of a Judge", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Being an accessory after the fact to second degree murder of a Judge." },
  { offense: "First Degree Murder", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Knowingly or intentionally killing another human being with premeditated intent, or during the commission of certain serious crimes." },
  { offense: "Accessory to First Degree Murder", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Being an accessory after the fact to first degree murder." },
  { offense: "First Degree Murder of a Government Employee", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Knowingly or intentionally killing a Government Employee with premeditated intent, or during the commission of certain serious crimes." },
  { offense: "Accessory to First Degree Murder of a Government Employee", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Being an accessory after the fact to first degree murder of a Government Employee." },
  { offense: "First Degree Murder of a Judge", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Knowingly or intentionally killing a Judge with premeditated intent, or during the commission of certain serious crimes." },
  { offense: "Accessory to First Degree Murder of a Judge", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Being an accessory after the fact to first degree murder of a Judge." },
  { offense: "Cannibalism", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Intentionally ingesting the flesh, blood, or internal organs of other human beings." },
  { offense: "Gang Related Shooting", classification: "Felony", sentence: "30", licensePoints: "", description: "Individuals operating under a group or organization engaging in a shooting with other gangs or gang members." },
  { offense: "Grand Theft", classification: "Felony", sentence: "25", licensePoints: "", description: "Stealing property valued at more than $5,000." },
  { offense: "Grand Theft Auto (A)", classification: "Felony", sentence: "20", licensePoints: "", description: "Unlawfully acquiring and/or driving another's vehicle without consent, with intent to permanently deprive." },
  { offense: "Grand Theft Auto (B)", classification: "Felony", sentence: "35", licensePoints: "", description: "Unlawfully taking and/or driving a government vehicle without consent, with intent to permanently or temporarily deprive." },
  { offense: "Carjacking", classification: "Felony", sentence: "30", licensePoints: "", description: "Unlawfully taking a vehicle with force or threat of bodily harm." },
  { offense: "Robbery", classification: "Felony", sentence: "25", licensePoints: "", description: "Taking or attempting to take something of value from a financial institution or store through force or fear." },
  { offense: "Accessory to Robbery", classification: "Felony", sentence: "12", licensePoints: "", description: "Being an accessory to robbery." },
  { offense: "Armed Robbery", classification: "Felony", sentence: "30", licensePoints: "", description: "Taking or attempting to take something of value from a financial institution or store while armed, through force or fear." },
  { offense: "Accessory to Armed Robbery", classification: "Felony", sentence: "15", licensePoints: "", description: "Being an accessory to armed robbery." },
  { offense: "Grand Larceny", classification: "Felony", sentence: "45", licensePoints: "", description: "Robbing, being an accessory to, or attempting to rob a vault in specific banks." },
  { offense: "Sale of Items Used in the Commission of a Crime", classification: "Felony", sentence: "15", licensePoints: "", description: "Sale of any items used to aid in the commission of a felony, misdemeanor, or infraction." },
  { offense: "Theft of an Aircraft", classification: "Felony", sentence: "20", licensePoints: "", description: "Unlawfully taking an aircraft without consent, with intent to use for profit, purpose, or pleasure." },
  { offense: "Impersonating a Peace Officer or Public Servant", classification: "Felony", sentence: "25", licensePoints: "", description: "Willfully wearing authorized uniform/insignia or fraudulently introducing belief of being a peace officer/public servant." },
  { offense: "Impersonating a Judge", classification: "Felony", sentence: "SAO Discretion", licensePoints: "", description: "Impersonating a Judge by acting or introducing themselves as a Judge and attempting to perform judicial duties." },
  { offense: "Impersonation of a Medical Professional", classification: "Felony", sentence: "25", licensePoints: "", description: "Impersonating a Medical Professional by acting or introducing themselves as one." },
  { offense: "Extortion", classification: "Felony", sentence: "20", licensePoints: "", description: "Using coercion upon another person with intent to obtain property, services, or restrict freedom." },
  { offense: "Money Laundering", classification: "Felony", sentence: "HUT", licensePoints: "", description: "Illegal process of making large amounts of money from criminal activity appear to have come from a legitimate source." },
  { offense: "Graft", classification: "Felony", sentence: "30", licensePoints: "", description: "Unlawful acquisition of funds or property through improper/unlawful transactions subverting public interest." },
  { offense: "Greenmail", classification: "Felony", sentence: "CoC / Judge Discretion", licensePoints: "", description: "Purchasing enough shares in a business to challenge leadership and force a buyback at a premium." },
  { offense: "Grey Market", classification: "Felony", sentence: "30", licensePoints: "", description: "Trade of a legal commodity through distribution channels not authorized by the original manufacturer or state." },
  { offense: "Black Market", classification: "Felony", sentence: "60", licensePoints: "", description: "Repeat sale of illegal items or commodities or false currencies for profit without state approval." },
  { offense: "Tax Evasion", classification: "Felony", sentence: "60", licensePoints: "", description: "Sale of illegal items or commodities or false currencies for profit without Government Approval." },
  { offense: "Felony Trespassing", classification: "Felony", sentence: "15", licensePoints: "", description: "Entering private property without permission while in possession of a weapon with intent to rob or cause bodily harm, or repeated misdemeanor trespassing, or unlawful entry onto government premises." },
  { offense: "Arson", classification: "Felony", sentence: "15", licensePoints: "", description: "Willfully starting or causing a fire with or without intent to damage property, or causing burning of a person, animal, structure, or land." },
  { offense: "Vandalism of Government Property", classification: "Felony", sentence: "25", licensePoints: "", description: "Intentionally causing damage to government property." },
  { offense: "Bribery of a Government Official", classification: "Felony", sentence: "20", licensePoints: "", description: "Conferring or agreeing to confer any benefit upon a public servant to influence their official actions." },
  { offense: "Possession of Contraband in a Government Facility", classification: "Felony", sentence: "25", licensePoints: "", description: "Possessing a weapon, controlled substance, explosives, or items used to conspire crime while in a government facility." },
  { offense: "Smuggling Items into a Government Facility", classification: "Felony", sentence: "25", licensePoints: "", description: "Smuggling any unauthorized item into a government facility." },
  { offense: "Escaping Custody", classification: "Felony", sentence: "10", licensePoints: "", description: "Unlawful act of escaping or attempting to escape the custody of peace officers, judges, or other government agency." },
  { offense: "Jailbreak", classification: "Felony", sentence: "60", licensePoints: "", description: "Removing or attempting to remove oneself or another from official detention without lawful authority, or failing to return from temporary leave." },
  { offense: "Accessory to Jailbreak", classification: "Felony", sentence: "40", licensePoints: "", description: "Being an accessory after the fact to jailbreak." },
  { offense: "Attempted Jailbreak", classification: "Felony", sentence: "30", licensePoints: "", description: "Attempting to unlawfully remove oneself or another from official detention or failing to return from temporary leave." },
  { offense: "Perjury", classification: "Felony", sentence: "Judge Discretion", licensePoints: "", description: "Knowingly lying under oath verbally or through writing in judicial proceedings." },
  { offense: "Violation of a Restraining Order", classification: "Felony", sentence: "20", licensePoints: "", description: "Willfully disobeying the outlined restrictions of a lawful restraining order." },
  { offense: "Embezzlement", classification: "Felony", sentence: "45", licensePoints: "", description: "Fraudulent appropriation of finances by a person to whom business or government funds have been entrusted." },
  { offense: "Unlawful Practice", classification: "Felony", sentence: "15", licensePoints: "", description: "Practicing law or medicine without proper state-sanctioned licensing." },
  { offense: "Contempt of Court", classification: "Felony", sentence: "Judge Discretion", licensePoints: "", description: "Engaging in disorderly behavior during court, publishing false reports, or refusing to be sworn in as a witness or answer material questions." },
  { offense: "Malfeasance", classification: "Felony", sentence: "45", licensePoints: "", description: "A government employee performing an act they had no legal right to perform, or exceeding, ignoring, or abusing their powers." },
  { offense: "Operating an Unlicensed Business", classification: "Felony", sentence: "30", licensePoints: "", description: "Operating a Business without prior approval, licensure, or permit from an authorized Government Entity." },
  { offense: "Felony Obstruction of Justice", classification: "Felony", sentence: "15", licensePoints: "", description: "Intentionally hindering the discovery, apprehension, conviction, or punishment of a person who committed a crime." },
  { offense: "Inciting a Riot", classification: "Felony", sentence: "25", licensePoints: "", description: "Organizing an event/assembly which results in violent conduct or creates a risk of causing public harm with a group of at least 4 people." },
  { offense: "Evidence Tampering", classification: "Felony", sentence: "30", licensePoints: "", description: "Destroying, concealing, or removing a piece of evidence with the purpose of hiding the truth or making an item unavailable for investigation or trial." },
  { offense: "Witness Tampering", classification: "Felony", sentence: "HUT", licensePoints: "", description: "Murdering, attempting to murder, or using force, intimidation, or threats to hinder, delay, or prevent an individual from producing testimony or evidence." },
  { offense: "Vigilantism", classification: "Felony", sentence: "30", licensePoints: "", description: "Law enforcement undertaken without legal authority by a self-appointed group or person." },
  { offense: "Government Corruption", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "A government employee acting outside the interests of public good or justice, demonstrating criminal negligence for personal gains, or convicted of a felony while on duty for personal gains." },
  { offense: "Stalking", classification: "Felony", sentence: "40", licensePoints: "", description: "Following, harassing, or threatening another person to the point where an individual fears for their safety." },
  { offense: "2nd Degree Possession of Controlled/Dangerous Substance", classification: "Felony", sentence: "25", licensePoints: "", description: "Possession of a controlled/dangerous substance or untaxed alcohol within specified amounts." },
  { offense: "1st Degree Possession of Controlled/Dangerous Substance", classification: "Felony", sentence: "35", licensePoints: "", description: "Possession of a controlled/dangerous substance or untaxed alcohol within specified amounts." },
  { offense: "Cultivation/Production of Controlled/Dangerous Substance", classification: "Felony", sentence: "30", licensePoints: "", description: "Unlawful manufacturing, intent to manufacture, or harvesting of any controlled/dangerous substance (with exception to Marijuana), or planting/cultivating/harvesting/processing Marijuana in excess of 6 plants." },
  { offense: "Sale of Controlled/Dangerous Substance", classification: "Felony", sentence: "35", licensePoints: "", description: "Unlawful selling of any controlled/dangerous substance(s) or untaxed alcohol." },
  { offense: "3rd Degree Drug Trafficking", classification: "Felony", sentence: "75", licensePoints: "", description: "Manufacturing, selling, delivering, or possessing with intent to manufacture, sell, or deliver a controlled substance in excess of specified amounts." },
  { offense: "2nd Degree Drug Trafficking", classification: "Felony", sentence: "100", licensePoints: "", description: "Manufacturing, selling, delivering, or possessing with intent to manufacture, sell, or deliver a controlled substance in excess of specified amounts." },
  { offense: "1st Degree Drug Trafficking", classification: "Capital Offense", sentence: "200", licensePoints: "", description: "Manufacturing, selling, delivering, or possessing with intent to manufacture, sell, or deliver a controlled substance in excess of specified amounts." },
  { offense: "Desecration of a Human Corpse", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Any act committed after the death of a human being including dismemberment, disfigurement, mutilation, burning, or causing the dead body to be devoured, scattered, or dissipated, except for authorized procedures." },
  { offense: "Pimping and Pandering", classification: "Felony", sentence: "25", licensePoints: "", description: "Unlawful act of causing, compelling, inducing, enticing, or procuring any individual to engage in prostitution." },
  { offense: "Illegal Gambling", classification: "Felony", sentence: "20", licensePoints: "", description: "Unlawfully wagering, or facilitating the wagering, on the outcome of an uncertain event for financial or personal gain." },
  { offense: "Solicitation of a Crime", classification: "Felony", sentence: "35", licensePoints: "", description: "Requesting, commanding, paying, coercing, or encouraging another person to commit, attempt to commit, or be an accomplice to any crime." },
  { offense: "Criminal Discharge of a Firearm from a Vehicle", classification: "Felony", sentence: "25", licensePoints: "", description: "Unlawful act of willfully and maliciously discharging a firearm, directly or indirectly, at another person or inhabited dwelling from any vehicle." },
  { offense: "Unlawful Possession of Ammunition", classification: "Felony", sentence: "10", licensePoints: "", description: "Unlawful act of owning, possessing, or having under custody or control any ammunition or reloaded ammunition by a person prohibited from owning or possessing a firearm, without possessing the weapon itself." },
  { offense: "Criminal Possession of a Weapon (Class 1)", classification: "Felony", sentence: "10", licensePoints: "", description: "Possession of a Class 1 weapon without a proper license, not registered, or not purchasable at approved legal vendors." },
  { offense: "Criminal Possession of a Weapon (Class 2)", classification: "Felony", sentence: "15", licensePoints: "", description: "Possession of a Class 2 weapon without a proper license, not registered, or not purchasable at approved legal vendors." },
  { offense: "Criminal Possession of a Weapon (Class 3)", classification: "Felony", sentence: "25", licensePoints: "", description: "Possession of a Class 3 weapon without a proper license, not registered, or not purchasable at approved legal vendors." },
  { offense: "Criminal Possession of a Weapon (Class 4)", classification: "Felony", sentence: "35", licensePoints: "", description: "Possession of a Class 4 weapon without a proper license, not registered, or not purchasable at approved legal vendors." },
  { offense: "Criminal Possession of a Weapon (Class 5)", classification: "Felony", sentence: "45", licensePoints: "", description: "Possession of a Class 5 weapon without a proper license, not registered, or not purchasable at approved legal vendors." },
  { offense: "Criminal Possession of a Police Weapon (Class 1)", classification: "Felony", sentence: "30", licensePoints: "", description: "Possession of a Class 1 government-issued weapon without proper license, not registered, or not authorized to carry." },
  { offense: "Criminal Possession of a Police Weapon (Class 2)", classification: "Felony", sentence: "30", licensePoints: "", description: "Possession of a Class 2 government-issued weapon without proper license, not registered, or not authorized to carry." },
  { offense: "Criminal Possession of a Police Weapon (Class 3)", classification: "Felony", sentence: "40", licensePoints: "", description: "Possession of a Class 3 government-issued weapon without proper license, not registered, or not authorized to carry." },
  { offense: "Criminal Possession of an Explosive or Incendiary Device", classification: "Misdemeanor", sentence: "20", licensePoints: "", description: "Possessing, controlling, owning, or having under custody or control any incendiary device or explosive device." },
  { offense: "Criminal Use of Explosives or Incendiary Device", classification: "Felony", sentence: "35", licensePoints: "", description: "Unlawful act of intentionally placing, using, or attempting to use an explosive or incendiary device against any real person or property and detonating or igniting said device, or using it to intimidate or terrify." },
  { offense: "Criminal Use of a Weapon", classification: "Felony", sentence: "10", licensePoints: "", description: "Using and/or discharging any Class of weapon outside of self-defense limitations." },
  { offense: "Criminal Use of a Weapon at a Government Facility", classification: "Felony", sentence: "35", licensePoints: "", description: "Using and/or discharging a firearm, outside self-defense limitations, at a government facility." },
  { offense: "Criminal Sale of a Weapon (Class 1)", classification: "Felony", sentence: "30", licensePoints: "", description: "Unlawful act of selling, purchasing, or exchanging of a Class 1 weapon without proper licensure." },
  { offense: "Criminal Sale of a Weapon (Class 2)", classification: "Felony", sentence: "40", licensePoints: "", description: "Unlawful act of selling, purchasing, or exchanging of a Class 2 weapon without proper licensure." },
  { offense: "Criminal Sale of a Weapon (Class 3)", classification: "Felony", sentence: "50", licensePoints: "", description: "Unlawful act of selling, purchasing, or exchanging of a Class 3 weapon without proper licensure." },
  { offense: "Criminal Sale of a Weapon (Class 4)", classification: "Felony", sentence: "60", licensePoints: "", description: "Unlawful act of selling, purchasing, or exchanging of a Class 4 weapon without proper licensure." },
  { offense: "Criminal Sale of a Weapon (Class 5)", classification: "Felony", sentence: "80", licensePoints: "", description: "Unlawful act of selling, purchasing, or exchanging of a Class 5 weapon without proper licensure." },
  { offense: "Weapon Stockpiling", classification: "Felony", sentence: "30", licensePoints: "", description: "Possession of six or more Class 1, 2, 3, 4, and/or 5 firearms on their person or stored in one location." },
  { offense: "3rd Degree Weapon Trafficking", classification: "Felony", sentence: "1 year", licensePoints: "", description: "Illicit trade, sale, and/or transport of contraband firearms, ammunition, and other weapon accessories for contraband weaponry, defined as 5+ of any aforementioned criteria." },
  { offense: "2nd Degree Weapon Trafficking", classification: "Felony", sentence: "3 years", licensePoints: "", description: "Illicit trade, sale, and/or transport of contraband firearms, ammunition, and other weapon accessories for contraband weaponry, defined as 10+ of any aforementioned criteria." },
  { offense: "1st Degree Weapon Trafficking", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Illicit trade, sale, and/or transport of contraband firearms, ammunition, and other weapon accessories for contraband weaponry, defined as 20+ of any aforementioned criteria." },
  { offense: "Insurrection", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Participating in acts of mass destruction in pursuit of social, political, or economical aims." },
  { offense: "Mayhem", classification: "Capital Offense", sentence: "HUT", licensePoints: "", description: "Committing an act \"dangerous to human life\" intended to intimidate or coerce a civilian population, influence government policy, or affect government conduct by mass destruction, assassination, or kidnapping." },
  { offense: "Reckless Evading", classification: "Felony", sentence: "10", licensePoints: "5", description: "Fleeing from police custody in a motor vehicle with willful or wanton disregard for safety." },
  { offense: "Street Racing", classification: "Felony", sentence: "15", licensePoints: "10", description: "Participating in an unsanctioned auto race on a public road, highway, or freeway." },
  { offense: "Piloting without Proper License", classification: "Felony", sentence: "20", licensePoints: "", description: "Operating or attempting to operate an aircraft without the proper license." },
  { offense: "Flying into Restricted Airspace", classification: "Felony", sentence: "20", licensePoints: "", description: "Flying in an unauthorized area when not responding to an emergency call." },
  { offense: "Poaching", classification: "Felony", sentence: "25", licensePoints: "", description: "Unlawfully killing any legal or illegal game outside of authorized hunting grounds, or harvesting, processing, injuring, possessing, or containing an endangered species." }
]

export default function Felony() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOffenses = felonyOffenses.filter(
    offense =>
      offense.offense.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offense.classification.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getSeverityBadge = (classification: string) => {
    if (classification === 'Capital Offense') {
      return <Badge variant="destructive">Capital Offense</Badge>
    }
    return <Badge variant="default">Felony</Badge>
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Scale className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Felony Offenses</h1>
              <p className="text-muted-foreground">Serious crimes punishable by imprisonment for more than one year</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search felony offenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Warning Notice */}
          <Card className="mb-6 border-red-200 bg-red-50/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-600">
                <AlertTriangle className="h-5 w-5" />
                <span>Important Notice</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Felony charges are serious offenses that can result in significant jail time. 
                <strong> HUT (Held Until Trial)</strong> indicates the most severe cases where bail is typically denied. 
                <strong> Capital Offenses</strong> represent the most serious category of crimes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Offenses Table */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-heading text-xl">
              Felony Offenses ({filteredOffenses.length} total)
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
                        {offense.sentence} {offense.sentence !== 'HUT' && offense.sentence !== 'Judge Discretion' && offense.sentence !== 'SAO Discretion' && offense.sentence !== 'CoC / Judge Discretion' && 'months'}
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
            <Scale className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}

        <BackToTop />
      </div>
    </div>
  )
}
