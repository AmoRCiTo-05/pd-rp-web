import type { BankQuestion } from "./types";
const q = (
  id: string, kind: BankQuestion["kind"], stem: string, correct: string,
  wrong: string[], explanation: string, section: string,
): BankQuestion => ({ id, kind, stem, correct, wrong, explanation, section });

const T = {
  sop: "1. What is SOP?", ethics: "2. Code of Ethics vs Code of Conduct", chain: "3. Chain of Command",
  evidence: "4. Bonafide vs Non-Bonafide Evidence", frisk: "5. Frisk vs Search", miranda: "6. Miranda Rights",
  levels: "7. Levels of Force", deesc: "8. De-escalation of Force", esc: "9. Escalation of Force",
  match: "10. Match of Force", warrants: "12. Types of Warrants", bail: "13. Bail", detain: "14. Detain vs Arrest",
  crimes: "15. Types of Crimes", bolo: "16. BOLO vs Warrants", taser: "17. Use of Taser", n2: "18. N+2 Rule",
  rs: "19. Reasonable Suspicion", pc: "20. Probable Cause", fir: "21. Reports/FIR vs Chargesheet",
  settle: "22. Type of Settlement",
};
export const trainingBank: BankQuestion[] = [
  q("tr-01", "define", "What is an SOP?", "A guideline set by police management or government to guide officers", ["A list of radio codes used on patrol", "A court order to search a property", "A report filed after an arrest"], "SOP is a guideline provided by police management or government to guide officers and keep operations consistent and legal.", T.sop),
  q("tr-02", "scenario", "You see a colleague taking a bribe. What does the Code of Conduct require?", "Report the misconduct", ["Ignore it if they outrank you", "Confront them in public", "Wait until a supervisor notices"], "Ethics demand honesty, and the Code of Conduct requires reporting misconduct.", T.ethics),
  q("tr-03", "scenario", "A sergeant orders a cadet to run a personal errand. What can the cadet do?", "Refuse and report the order", ["Obey, since all orders must be followed", "Ask another cadet to do it", "File a chargesheet against the sergeant"], "Officers follow duty-related orders but may refuse and report personal or unlawful commands.", T.chain),
  q("tr-04", "classify", "Which of these is bonafide evidence?", "Bodycam footage", ["Hearsay", "A hidden recording made without consent", "An unverified rumor"], "Bonafide evidence is legally collected and reliable, such as fingerprints and bodycam footage.", T.evidence),
  q("tr-05", "scenario", "A suspect is loitering at night and you suspect a weapon. What may you do with reasonable suspicion?", "Frisk them with a limited pat-down", ["Search their bag fully", "Arrest them immediately", "Seize their vehicle"], "A frisk is a limited pat-down for weapons allowed with reasonable suspicion; a full search needs probable cause or a warrant.", T.frisk),
  q("tr-06", "define", "What does a full search require?", "Probable cause or a warrant", ["Reasonable suspicion only", "A BOLO alert", "Verbal consent from a supervisor"], "A search is more thorough than a frisk and requires probable cause or a warrant.", T.frisk),
  q("tr-07", "scenario", "Rights were not read before custodial questioning. What can happen to the confession?", "It may not be admissible", ["It becomes stronger evidence", "It turns into a chargesheet", "It must be read aloud in court"], "If Miranda Rights aren't read before questioning, the confession may not be admissible.", T.miranda),
  q("tr-08", "classify", "What is the first level of the force continuum?", "Officer Presence", ["Verbal Commands", "Empty-Hand Control", "Less-Lethal Force"], "The continuum starts with Officer Presence, then Verbal Commands, Empty-Hand Control, Less-Lethal and Lethal Force.", T.levels),
  q("tr-09", "not", "Which of these is NOT a level of force in the SOP?", "Verbal Insults", ["Verbal Commands", "Officer Presence", "Empty-Hand Control"], "The five levels are Officer Presence, Verbal Commands, Empty-Hand Control, Less-Lethal Force and Lethal Force.", T.levels),
  q("tr-10", "scenario", "A threatening person can be talked down instead of tased. Which principle is this?", "De-escalation of Force", ["Escalation of Force", "Match of Force", "N+2 Rule"], "De-escalation calms a situation through communication, reducing presence or offering exits.", T.deesc),
  q("tr-11", "scenario", "A suspect refuses to comply and starts resisting. What may the officer do?", "Escalate, for example to taser use", ["Draw a firearm right away", "Leave the scene", "Release the suspect"], "Escalation means raising force when verbal or soft tactics fail.", T.esc),
  q("tr-12", "scenario", "A suspect pulls a knife. Under Match of Force, what may the officer do?", "Draw a gun", ["Use only verbal commands", "Call a BOLO", "Request bail"], "Match of Force allows equivalent or slightly superior force; a knife threat may justify drawing a gun.", T.match),
  q("tr-13", "classify", "Which warrant is for terrorists only?", "KOS (Kill on Sight)", ["AOS (Arrest on Sight)", "Raid Warrant", "Search & Seizure Warrant"], "KOS warrants are only for terrorists.", T.warrants),
  q("tr-14", "define", "What does a Search & Seizure Warrant limit you to?", "The specific items listed, approved by a judge", ["Any item found at the property", "Immediate arrest of the owner", "Raiding the whole property"], "A search warrant is judge-approved and limits officers to the listed items.", T.warrants),
  q("tr-15", "define", "How much is bail set at?", "3x the value of the charges", ["2x the value of the charges", "Equal to the charges", "A fixed amount set by Dispatch"], "The SOP states Bail = 3x charges value.", T.bail),
  q("tr-16", "classify", "Who must approve bail for a felony?", "A judge", ["A magistrate", "The arresting officer", "The dispatcher"], "Misdemeanor bail is granted by a magistrate; felony bail needs judge approval.", T.bail),
  q("tr-17", "define", "What is needed to make an arrest?", "Probable cause", ["Reasonable suspicion", "A BOLO alert", "A hunch from patrol"], "Detaining needs reasonable suspicion; arresting needs probable cause.", T.detain),
  q("tr-18", "classify", "Which crime type means Held Until Trial?", "HUT", ["Felony", "Misdemeanor", "Infraction"], "HUT means Held Until Trial, for example terrorism.", T.crimes),
  q("tr-19", "not", "What can a BOLO NOT do on its own?", "Give arrest power", ["Alert officers to look out", "Describe a wanted vehicle", "Share suspect details"], "A BOLO is a Be On the Lookout alert with no arrest power; a warrant gives legal arrest authority.", T.bolo),
  q("tr-20", "scenario", "A fleeing suspect is running down stairs. Should you deploy a taser?", "No, avoid tasing on stairs or heights", ["Yes, stairs make it safer", "Yes, but without a warning", "Only if it is raining"], "Taser guidelines say avoid wet areas or heights, use cooldowns and warn before deploying.", T.taser),
  q("tr-21", "scenario", "You are confronting 2 suspects. How many officers does the N+2 rule require?", "At least 4", ["At least 2", "At least 3", "At least 6"], "Officers must outnumber suspects by at least 2, so 2 suspects need 4 officers.", T.n2),
  q("tr-22", "classify", "Seeing stolen goods in plain view gives you what?", "Probable cause", ["Reasonable suspicion only", "A BOLO", "A plea bargain"], "Stolen goods in plain view or matching fingerprints give probable cause to arrest.", T.pc),
  q("tr-23", "scenario", "Someone is pacing nervously outside a store at night. What does this give you?", "Reasonable suspicion for a brief stop", ["Probable cause to arrest", "Grounds for a raid warrant", "Authority to search their home"], "Reasonable suspicion allows a brief stop or frisk based on specific behavior or context.", T.rs),
  q("tr-24", "define", "What is a chargesheet?", "An official document with evidence for prosecution", ["The first complaint filed by an officer", "A radio log", "A bail receipt"], "An FIR is the first complaint; a chargesheet is the official evidence document for prosecution.", T.fir),
  q("tr-25", "classify", "An offender avoids jail by joining rehab. Which settlement is this?", "Diversion", ["Plea Bargain", "Civil Compromise", "Bail"], "Diversion lets an offender avoid jail by joining rehab or community service.", T.settle),
];

const M = { intro: "1. Introduction", cert: "3. Certification Process", purpose: "4. Purpose", types: "7. MPU Types", comms: "13. Communication Protocols", call: "Example Radio Callout" };
export const mpuBank: BankQuestion[] = [
  q("mpu-01", "define", "What does MPU specialize in?", "High-speed motorcycle-based pursuit operations", ["Aerial surveillance", "Speed enforcement on highways in cars", "Dispatch coordination"], "The Motor Pursuit Unit specializes in high-speed motorcycle-based pursuit operations.", M.intro),
  q("mpu-02", "classify", "What is the minimum rank to become an MPU Officer?", "Corporal", ["Cadet", "Officer", "Sergeant"], "MPU applicants must hold at least the rank of Corporal.", M.cert),
  q("mpu-03", "define", "How many trial ride-alongs are required for MPU?", "3", ["1", "2", "5"], "Applicants undergo 3 trial ride-alongs with the MPU Lead or SEU Leader.", M.cert),
  q("mpu-04", "classify", "Which MPU unit is the Urban Interceptor?", "MPU-3", ["MPU-1", "MPU-2", "SEU-3"], "MPU-1 is Patrol, MPU-2 Interception/Support, MPU-3 Urban Interceptor.", M.types),
  q("mpu-05", "classify", "Which MPU unit handles Interception/Support?", "MPU-2", ["MPU-1", "MPU-3", "SEU-2"], "MPU-2 is the Interception/Support role.", M.types),
  q("mpu-06", "scenario", "Which radio should MPU use during an active pursuit?", "Incident Radio", ["PD Main", "Dispatch private line", "No radio, hand signals only"], "MPU uses Incident Radio for active pursuits with short, clear callouts.", M.comms),
  q("mpu-07", "not", "Which is NOT part of MPU's purpose?", "Issuing bail to suspects", ["Engaging in pursuits in tight urban areas", "Giving visual confirmation to SEU", "Scouting suspect locations"], "MPU pursues, confirms visually, scouts and reduces loss-of-suspect scenarios.", M.purpose),
  q("mpu-08", "define", "What must MPU officers report after patrol?", "Fuel levels, status and vehicle issues", ["Total tickets written", "Every radio code used", "Their bail decisions"], "Officers must report fuel levels, status and vehicle issues post-patrol.", M.comms),
  q("mpu-09", "scenario", "In the example callout, what does MPU-1 request?", "SEU backup", ["Air-1 landing", "A raid warrant", "Bail approval"], "The example ends with MPU-1 requesting SEU backup while keeping visual from distance.", M.call),
];

const S = { intro: "1. Introduction", cert: "3. Certification Process", scope: "5. Scope", guide: "6. Authorized Guidelines", types: "7. SEU Types & Vehicle Assignments", comms: "13. Communication Protocols", call: "Example RP Callout" };
export const seuBank: BankQuestion[] = [
  q("seu-01", "define", "What is SEU responsible for?", "Monitoring and enforcing high-speed traffic violations", ["Motorcycle pursuits in alleys", "Aerial search and rescue", "Managing radio calls"], "The Speed Enforcement Unit monitors, enforces and responds to high-speed traffic violations.", S.intro),
  q("seu-02", "classify", "What is the minimum rank for SEU?", "Corporal", ["Cadet", "Sergeant", "Lieutenant"], "SEU officers must be at least Rank Corporal.", S.cert),
  q("seu-03", "not", "Which area is NOT listed in SEU's scope?", "Private residences", ["Highways", "Airport Roads", "Expressways"], "SEU patrols highways, freeways, expressways, airport roads and street-racing areas.", S.scope),
  q("seu-04", "define", "When must lights and sirens be used by SEU?", "For all stops", ["Only during pursuits", "Only at night", "Never on highways"], "SEU guidelines require lights and sirens for all stops.", S.guide),
  q("seu-05", "not", "Which is NOT an SEU guideline?", "Dashcams can be off during stops", ["Only approved SEU vehicles", "Lights and sirens for all stops", "Stay in jurisdiction unless ordered"], "Bodycam or dashcam must be active at all times.", S.guide),
  q("seu-06", "classify", "Which SEU unit is Lead Patrol & Interception?", "SEU-1", ["SEU-2", "SEU-3", "MPU-1"], "SEU-1 is Lead Patrol & Interception, SEU-2 Support & Surveillance, SEU-3 Urban Speed Enforcement.", S.types),
  q("seu-07", "scenario", "Which radio channel should SEU use for general updates?", "PD Main", ["Incident Radio", "Air-1 frequency", "Private calls"], "SEU uses Incident Radio for pursuits and PD Main for general updates.", S.comms),
  q("seu-08", "scenario", "How should every SEU 10-80 end on the radio?", "With a final Code 4 status", ["With a 10-3", "With a bail request", "Without any callout"], "End all 10-80s with \"Code 4, Suspect in Custody / Escaped / Vehicle Disabled\".", S.comms),
  q("seu-09", "scenario", "In the example callout, what support does SEU-1 request?", "Spike support from SEU-2 or MPU", ["A raid warrant", "A dispatcher partner", "Bail from a judge"], "SEU-1 requests spike support from SEU-2 or an MPU unit and asks for Air-1 status.", S.call),
];

const A = { intro: "Introduction", cert: "Certification Process (Getting Your Wings)", alt: "Authorized Air 1 Altitude Guidelines", comms: "Communication Protocols", sops: "Standard Operating Procedures (SOPs)" };
export const asdBank: BankQuestion[] = [
  q("asd-01", "define", "What does the Air Corps support?", "Patrol, SWAT and Major Crimes with aerial assistance", ["Only traffic tickets", "Court hearings", "Dispatcher training"], "The Air Corps supports Patrol, SWAT and Major Crimes with aerial assistance, surveillance and rescue.", A.intro),
  q("asd-02", "classify", "What altitude is used for pursuit operations?", "1,200 - 1,500 feet AGL", ["800 - 1,000 feet AGL", "500 - 1,000 feet AGL", "200 - 500 feet AGL"], "Pursuit operations fly at 1,200 - 1,500 feet above ground level.", A.alt),
  q("asd-03", "classify", "What altitude is used for tactical approach?", "200 - 500 feet AGL", ["1,200 - 1,500 feet AGL", "800 - 1,000 feet AGL", "500 - 1,000 feet AGL"], "Tactical operations approach at 200 - 500 feet AGL.", A.alt),
  q("asd-04", "classify", "What altitude is standard patrol and surveillance?", "800 - 1,000 feet AGL", ["200 - 500 feet AGL", "1,200 - 1,500 feet AGL", "2,000 feet AGL"], "Standard patrol and surveillance is 800 - 1,000 feet AGL.", A.alt),
  q("asd-05", "scenario", "A pilot faces a life-threatening emergency. Which signal is used?", "Mayday", ["Code Red", "Code Blue", "10-4"], "Mayday is used in life-threatening situations; Code Red means an active threat.", A.comms),
  q("asd-06", "scenario", "The pilot wants to use the surveillance camera while flying. What is required?", "A co-pilot must be present", ["Nothing, pilots may use it", "Dispatch approval only", "Flying above 2,000 feet"], "Pilots cannot use surveillance cameras while flying; a co-pilot must be present.", A.sops),
  q("asd-07", "not", "Which is NOT a part of getting your wings?", "Writing a chargesheet", ["Theory", "Handling", "Landing"], "Certification covers Theory, Communication, Handling and Landing.", A.cert),
  q("asd-08", "define", "When must the pilot notify Dispatch?", "Before takeoff and landing", ["Only after landing", "Only during pursuits", "Never, Air 1 is independent"], "Dispatch coordination means notifying before takeoff/landing and giving mission updates.", A.comms),
];

const D = { calls: "1. Managing Calls and Assigning Help", partner: "2. Partnering Up", clear: "3. Clear Communication", connect: "4. Connecting Officers", emerg: "5. Handling Emergency and Non-Emergency Communications" };
export const dispatcherBank: BankQuestion[] = [
  q("dp-01", "define", "Who decides which units handle a radio call?", "The dispatcher", ["The first officer to answer", "The suspect's lawyer", "The Air 1 pilot"], "The dispatcher takes all radio calls and decides which units should handle them.", D.calls),
  q("dp-02", "scenario", "An officer radios that they need a 10-12. What does the dispatcher do?", "Assign a partner to the officer", ["Tell everyone to stop talking", "End the shift", "Issue a BOLO"], "In the Partnering Up sample, the officer asks for a 10-12 and the dispatcher assigns Officer B.", D.partner),
  q("dp-03", "code", "Which code tells everyone to stop radio chatter?", "10-3", ["10-4", "10-12", "10-80"], "Dispatchers use 10-3 for Stop talking and 10-4 for Got it.", D.clear),
  q("dp-04", "meaning", "What does 10-4 mean in dispatcher communication?", "Got it", ["Stop talking", "Need a partner", "Pursuit in progress"], "10-4 means Got it, acknowledging a message.", D.clear),
  q("dp-05", "scenario", "Before connecting two officers, what must the dispatcher do?", "Confirm both are ready", ["Assign a sergeant", "Switch to Air 1", "Close the call"], "The dispatcher confirms readiness before establishing communication between officers.", D.connect),
  q("dp-06", "define", "Which calls does the dispatcher manage?", "Both emergency and non-emergency", ["Only emergencies", "Only non-emergencies", "Only pursuits"], "The dispatcher manages the flow of both urgent and less critical communications.", D.emerg),
];
