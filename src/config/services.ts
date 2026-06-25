/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

// TODO: images are PLACEHOLDERS — copied from the template and cycled for variety.
// Replace each with a real photo of THIS company's aerobic septic work before launch.
import aerobicServicesImg from '../assets/services/aerobic-septic-services.jpg';
import aerobicInstallImg from '../assets/services/aerobic-septic-installation.jpg';
import drainFieldImg from '../assets/services/drain-field-replacement.jpg';
import systemRepairImg from '../assets/services/septic-system-repair.jpg';
import maintenanceImg from '../assets/services/septic-maintenance-contracts.jpg';
import inspectionImg from '../assets/services/septic-inspections.jpg';
import pumpingImg from '../assets/services/septic-tank-pumping.jpg';
import emergencyImg from '../assets/services/emergency-septic-service.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Septic Tank Pumping"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'aerobic-septic-services',
    name: 'Aerobic Septic Services',
    short: 'Aerobic Septic',
    blurb: 'Installation, repair, maintenance, inspections, and pumping for aerobic (ATU) systems — one TCEQ-savvy crew for the whole system across Comal County.',
    description:
      'We are a full-service aerobic septic company covering Comal County and the surrounding Texas Hill Country, from the new builds around New Braunfels and Bulverde out to the lake properties at Canyon Lake and the rural acreage up toward Spring Branch and Fischer. Out here the rocky limestone and tight clay soils do not percolate the way a conventional drain field needs, so the state requires an aerobic treatment unit — an ATU that aerates and treats wastewater before spraying it over a designated area. If it has to do with an aerobic system, we handle it: new installs designed and permitted for your lot, repairs to aerators, pumps, controls, and spray heads, the four-month maintenance inspections Texas law requires, drainfield and spray-field work, real-estate inspections, and tank pumping. You call, you tell us roughly where the system is and what is going on, and we give you a straight answer and a real price — no upsells, no scare tactics, just a crew that knows Hill Country aerobic systems and the TCEQ rules that govern them.',
    sections: [
      {
        h: 'One crew for the whole aerobic system',
        body: 'An aerobic system is more than a tank — there is a trash tank, an aeration chamber, a pump tank, an air compressor, a chlorinator, control floats, an alarm, and a network of spray heads or drip lines distributing treated effluent across your yard. A lot of folks call one company to install, another to maintain, and a third to inspect. We do all of it. That continuity matters: the people who installed or service your ATU are the people who know whether the aerator is tired or the spray field is starting to pond.',
      },
      {
        h: 'Built for Hill Country lots and TCEQ rules',
        body: 'Comal County aerobic work is shaped by two things — the ground and the regulations. The Hill Country sits on shallow, rocky limestone and pockets of tight clay where a conventional gravity drain field simply will not absorb effluent, which is exactly why aerobic systems are required here. On top of that, Texas mandates a maintenance contract with an inspection every four months for the life of an aerobic system. We install systems sized and permitted for your soil and lot, and we keep them in compliance so you are never caught off guard by the county or TCEQ.',
      },
      {
        h: 'Straight answers, honest pricing',
        body: 'Aerobic systems are easy to oversell because most homeowners cannot see what is happening inside the tank or under the spray field. We do not work that way. We tell you what your system actually needs, show you what we find when the lids are off, and quote it up front. If your aerator has another season in it, we say so. If a spray field is failing and a part swap is only buying time, we tell you that too — so you can plan instead of getting surprised.',
      },
    ],
    points: [
      'Install, repair, maintenance, inspections, and pumping — one crew',
      'Aerobic (ATU) systems across Comal County and the Hill Country',
      'TCEQ-compliant work and the required four-month inspections',
      'Aerators, pumps, controls, chlorinators, and spray heads serviced',
      'Honest, up-front pricing with no surprise add-ons',
      'We show you what we find before recommending work',
    ],
    faqs: [
      {
        q: 'Why does my Comal County property need an aerobic system instead of a regular septic?',
        a: 'The Hill Country sits on shallow, rocky limestone and tight clay soils that do not absorb wastewater fast enough for a conventional gravity drain field. An aerobic treatment unit (ATU) aerates and disinfects the effluent so it is clean enough to spray-distribute over a smaller area, which is what these soils can handle. For most lots around New Braunfels, Bulverde, and Canyon Lake, an aerobic system is the only design the county will permit.',
      },
      {
        q: 'Do you handle the whole system or just one part?',
        a: 'The whole system. We design and install new aerobic systems, repair aerators, pumps, controls, chlorinators, and spray heads, perform the state-required maintenance inspections every four months, pump tanks, and do inspections for home sales. One call covers it, and the crew that services your system is the crew that knows it.',
      },
      {
        q: 'Is a maintenance contract really required by law in Texas?',
        a: 'Yes. Texas requires every aerobic system to be under a maintenance contract with a licensed provider, with an inspection at least every four months for the life of the system. It is not optional, and the county can ask for proof. We hold the contract, run the inspections on schedule, and file the reports so you stay compliant.',
      },
      {
        q: 'I just bought a Hill Country home with no service history — where do I start?',
        a: 'Start with an inspection and a maintenance contract. We open the tanks, test the aerator, pump, floats, chlorinator, and alarm, check the spray field, and tell you the true condition. From there we put you on the required four-month schedule so the system stays healthy and compliant.',
      },
    ],
    image: aerobicServicesImg,
    imageAlt: 'Aerobic septic system being serviced at a Hill Country home in Comal County, Texas',
    hubOnly: true,
  },
  {
    slug: 'aerobic-septic-installation',
    name: 'Aerobic Septic Installation',
    short: 'Aerobic Install',
    blurb: 'New home with no city sewer? We design, permit, and install a TCEQ-licensed aerobic system sized for your Hill Country lot.',
    description:
      'A huge share of new construction in Comal County is exurban — beautiful acreage with no city sewer line anywhere near it — and on Hill Country ground that means an aerobic system is the only viable answer. We design, permit, and install complete aerobic treatment units (ATUs) across the county, from the subdivisions filling in around Bulverde and Garden Ridge to custom homes on raw land up toward Spring Branch, Fischer, and Smithson Valley. A proper install starts with a site evaluation and soil analysis, then a system sized to the home and approved by the county, set with the trash tank, aeration chamber, and pump tank, the compressor and electrical controls, the chlorination, and the spray distribution laid out to cover the required area without hitting the house, the well, or the property line. We are licensed installers who do it by the book — the right design, the right permit, an inspection that passes the first time, and a system that will run clean for decades if it is maintained.',
    sections: [
      {
        h: 'It starts with the soil and the permit',
        body: 'You cannot install a system until you know what the ground can take. We do a site evaluation and soil analysis, calculate the wastewater load from the number of bedrooms, and design a system the county will approve. On Hill Country lots the limiting factor is almost always the soil and the available area for spray distribution — we lay the system out so it meets every setback from the well, the house, the property line, and any drainageway, then pull the permit and handle the inspections.',
      },
      {
        h: 'A complete, code-compliant install',
        body: 'An aerobic install is a full system, not a tank in a hole. We set the trash tank that catches solids, the aeration chamber where air is pumped in to grow the bacteria that treat the waste, and the pump tank that holds and doses treated effluent. We wire the air compressor, control panel, floats, chlorinator, and the audible/visual alarm, then install the spray heads or drip field across the designated area. Everything is sized, placed, and documented to TCEQ and county standards so it passes inspection and runs right.',
      },
      {
        h: 'Built to last — and to stay compliant',
        body: 'A well-installed aerobic system is a long-term asset, but Texas requires it to be under a maintenance contract from day one. We start your two-year initial maintenance period at install and set you up on the required four-month inspection schedule, so the system is covered, compliant, and watched over from the moment it is turned on. Build it right and maintain it, and an ATU will quietly treat your household wastewater for decades.',
      },
    ],
    points: [
      'Site evaluation and soil analysis before any design',
      'System sized to bedrooms and approved by Comal County',
      'Trash tank, aeration chamber, and pump tank set correctly',
      'Compressor, control panel, chlorinator, floats, and alarm wired',
      'Spray heads or drip field laid out to required setbacks',
      'Permitting and inspections handled by licensed installers',
    ],
    faqs: [
      {
        q: 'How long does a new aerobic system installation take?',
        a: 'Once the site evaluation, design, and permit are in hand, the physical install of a typical residential aerobic system usually takes a few days, plus time for the county inspection and final hookup. The biggest variable is permitting and soil work up front, so the sooner we start the evaluation, the sooner you can be running.',
      },
      {
        q: 'What determines the size and cost of my system?',
        a: 'Mainly the number of bedrooms, which sets the design wastewater flow, plus your soil and how much area you have for spray distribution. Tighter soils or limited yard space can require a larger pump tank or drip distribution. We do the site evaluation first so you get a system sized correctly for your home and a real price, not a guess.',
      },
      {
        q: 'Do I have to maintain a brand-new system right away?',
        a: 'Yes. Texas requires an aerobic system to be under a maintenance contract from installation, including the standard two-year initial maintenance period and inspections every four months. We start that contract at install and keep your reports filed with the county, so you are compliant from day one.',
      },
    ],
    image: aerobicInstallImg,
    imageAlt: 'New aerobic septic system being installed on a Comal County Hill Country lot',
  },
  {
    slug: 'drain-field-replacement',
    name: 'Drain Field Replacement',
    short: 'Drain Field',
    blurb: 'Spray field ponding, soggy ground, or odors? We diagnose a failing distribution field and replace what needs replacing.',
    description:
      'On an aerobic system the spray field — or drip distribution field — is where the treated, disinfected effluent is dispersed back into your yard, and over the years it can clog, pond, or simply wear out. You see it above ground: soggy or standing water in the spray zone, a sewage smell outside, lush green stripes, spray heads that no longer throw a clean pattern, or alarms tripping because the pump tank cannot empty. We diagnose and replace failing distribution fields across Comal County. A lot of "field" trouble on the rocky, clay-heavy Hill Country ground is really a clogged drip line, a failed dosing pump, sun-rotted spray heads, or a treatment problem upstream pushing solids into the field — so we find the real cause first. Where the field itself has failed, we redesign and replace it to the available soil and setbacks, pull the permit, and rebuild it so your system disperses cleanly again.',
    sections: [
      {
        h: 'Reading the signs in the yard',
        body: 'A distribution field tells on itself above ground. Standing water or constantly soggy soil in the spray zone, a sewage smell outdoors, unusually green stripes of grass, spray heads that dribble instead of spraying a full pattern, and a high-water or pump alarm are all signs the field is not dispersing effluent the way it should. The earlier we look, the more options you have — a struggling field can sometimes be restored, while one that is fully clogged or undersized usually has to be rebuilt.',
      },
      {
        h: 'Why Hill Country fields fail — and what is fixable',
        body: 'Comal County is hard on distribution fields. Shallow limestone and tight clay drain slowly, so there is little margin when something goes wrong, and our heavy storm runoff can saturate a spray zone fast. On top of that, a treatment unit that is not maintained sends poorly treated effluent and solids into the lines and clogs them. The good news is that many "failed field" calls turn out to be a fixable upstream problem — a dead dosing pump, rotted spray heads, clogged drip emitters, or an aerator that quit — not a dead field. We diagnose first so you are not paying to replace a field that did not need it.',
      },
    ],
    points: [
      'Diagnosis of ponding, odors, soggy ground, and pump alarms',
      'We rule out pump, spray-head, and treatment problems before condemning a field',
      'Clogged drip lines and worn spray distribution replaced',
      'Failed fields redesigned to your soil, setbacks, and permit',
      'Honest call on repair vs. full replacement — no needless tear-outs',
      'Guidance on protecting the new field from runoff and overload',
    ],
    faqs: [
      {
        q: 'There is standing water in my spray area — does the whole field need replacing?',
        a: 'Not necessarily. Those are classic signs of a struggling field, but on aerobic systems the cause is often upstream — a failed dosing pump, clogged drip emitters, rotted spray heads, or an aerator that quit treating the waste. All of those are fixable without a full rebuild. We diagnose the whole system first. Meanwhile, cut back on water use so you are not loading a field that cannot disperse.',
      },
      {
        q: 'Can a failing distribution field be saved, or does it have to be replaced?',
        a: 'It depends on why it is failing. If the problem is upstream — a dead pump, clogged emitters, or poor treatment from a tired aerator — fixing that and resting the field can restore it. If the soil in the field is fully clogged or the field was undersized for the home, it usually has to be redesigned and replaced. We give you the honest call instead of defaulting to the most expensive option.',
      },
      {
        q: 'How do I keep a new field from failing again?',
        a: 'Keep the system under its required maintenance contract so the aerator and chlorinator keep the effluent clean before it ever reaches the field, spread heavy water use out rather than all at once, keep vehicles and heavy equipment off the spray area, and divert roof and storm runoff away from it. On Hill Country soils, keeping extra water off the field is half the battle.',
      },
    ],
    image: drainFieldImg,
    imageAlt: 'Drain field replacement work at a rural property in Comal County, Texas',
  },
  {
    slug: 'septic-system-repair',
    name: 'Septic System Repair',
    short: 'System Repair',
    blurb: 'Dead aerator, failed pump, no chlorine, or an alarm going off? We diagnose and repair the parts of an aerobic system that fail.',
    description:
      'An aerobic system has a lot of moving parts, and any of them can fail. There is the air compressor (the aerator) that keeps the treatment bacteria alive, the dosing or effluent pump that sprays the field, the control panel and float switches, the chlorinator that disinfects, the spray heads, and the audible/visual alarm that is supposed to warn you. When one of these quits, the system stops treating waste properly — and on a Hill Country lot that quickly becomes soggy ground, odors, or a backup. We diagnose and repair aerobic septic systems across Comal County. We find the actual problem rather than guessing, replace worn-out air compressors and diffusers, repair or replace dosing pumps and floats, rebuild control panels and alarms, swap rotted spray heads, and get the chlorinator dosing correctly again. Because Texas requires these systems to be maintained on a contract, a lot of repairs are things we catch on a four-month inspection before they ever become an emergency.',
    sections: [
      {
        h: 'The parts that actually fail',
        body: 'The air compressor runs constantly and is the most common failure — when it dies, the bacteria that treat the waste suffocate and the system stops working within days. Dosing and effluent pumps wear out. Float switches stick or corrode and the alarm sounds. Spray heads sun-rot, crack, or clog and stop covering the field. Chlorinators run empty or the dispenser fails, so the effluent leaves untreated. We carry the common aerobic parts and diagnose which one is the issue before we start swapping anything.',
      },
      {
        h: 'When the alarm goes off',
        body: 'That box on the side of the house with the red light and buzzer is your early-warning system, and on an aerobic unit it usually means one of three things: the air compressor has failed, the dosing pump is not keeping up or has quit, or a float is stuck and the pump tank is filling. It is a warning, not always an instant overflow — but do not silence it and forget it. Cut back on water use and call us; we test the compressor, pump, floats, and panel and get the system treating and dispersing again.',
      },
    ],
    points: [
      'Air compressors (aerators) and diffusers replaced',
      'Dosing and effluent pumps, floats, and alarms tested and replaced',
      'Control panels rebuilt and wiring faults traced',
      'Spray heads swapped and distribution lines cleared',
      'Chlorinators serviced so effluent is properly disinfected',
      'Real diagnosis first — we fix the actual problem',
    ],
    faqs: [
      {
        q: 'My aerobic alarm is going off — what does it mean?',
        a: 'On an aerobic system the alarm usually means the air compressor has failed, the dosing pump is not emptying the pump tank, or a float is stuck. It is a warning, not always an immediate overflow, but the longer the compressor is down the worse the treatment gets. Cut back on water use, do not just unplug the buzzer, and call us — we test the compressor, pump, floats, and panel and get it running again.',
      },
      {
        q: 'How long does an air compressor last, and what happens when it dies?',
        a: 'A residential aerator compressor typically lasts a handful of years and is a wear item. When it fails, the bacteria in the aeration chamber lose their oxygen and die off within days, the system stops treating waste, and you get odors and poor-quality effluent going to the field. It is one of the most common aerobic repairs — we usually have you back up fast with a replacement compressor or a rebuilt diffuser assembly.',
      },
      {
        q: 'Can I repair an aerobic system myself?',
        a: 'You can handle simple upkeep like keeping chlorine tablets stocked, but most aerobic repairs and any work on the treatment process must be done by a licensed maintenance provider in Texas, and the system has to stay under contract. Pumps, compressors, control panels, and chlorination affect public-health treatment, so they are not DIY. Call us — and we will note it on your maintenance report so you stay compliant.',
      },
    ],
    image: systemRepairImg,
    imageAlt: 'Aerobic septic system components being repaired at a home in Comal County, Texas',
  },
  {
    slug: 'septic-maintenance-contracts',
    name: 'Septic Maintenance Contracts',
    short: 'Maintenance',
    blurb: 'Texas requires aerobic systems to be on a maintenance contract with inspections every four months. We hold the contract and keep you compliant.',
    description:
      'If you own an aerobic system in Texas, a maintenance contract is not a sales pitch — it is the law. The state requires every aerobic treatment unit to be under contract with a licensed maintenance provider, with an inspection at least every four months (three times a year) for the life of the system, and the county can ask for proof. We provide maintenance contracts for aerobic systems across Comal County. On each visit we check and service the air compressor, test the dosing pump, floats, and alarm, inspect and refill the chlorinator, sample and evaluate the effluent quality, clean and adjust the spray heads, and file the required inspection report with the county. Beyond compliance, the real value is that we catch the small failures — a tired compressor, a sticking float, an empty chlorinator — on a routine visit, before they turn into a soggy yard, a backup, or a five-figure field replacement. It is the cheapest insurance there is for an expensive system.',
    sections: [
      {
        h: 'What the law actually requires',
        body: 'Texas rules require an aerobic system to be covered by a maintenance contract with a licensed provider and inspected at least three times a year — every four months. Those inspections have to be documented and reported to the permitting authority, which for most of our area is Comal County. Letting the contract lapse can mean violation notices and trouble when you sell. We hold the contract, run the inspections on schedule, and handle the paperwork so you never have to think about it.',
      },
      {
        h: 'What a real maintenance visit covers',
        body: 'A genuine four-month visit is more than a quick look. We verify the air compressor is running and putting out proper air, test the dosing pump and float switches, confirm the alarm works, inspect and top off the chlorinator (or check the liquid chlorine system), evaluate the effluent for clarity and odor, clean and adjust the spray heads so they cover the field correctly, and look over the spray area for ponding or runoff. Then we log it and file the report. You get a system that stays compliant and a heads-up on anything starting to wear.',
      },
    ],
    points: [
      'Meets the Texas requirement for inspections every four months',
      'Air compressor, dosing pump, floats, and alarm checked each visit',
      'Chlorinator inspected and refilled; effluent quality evaluated',
      'Spray heads cleaned and adjusted for full field coverage',
      'Required inspection reports filed with Comal County',
      'Small problems caught early — before they become big repairs',
    ],
    faqs: [
      {
        q: 'Do I really have to have a maintenance contract on my aerobic system?',
        a: 'Yes. Texas law requires every aerobic system to be under a maintenance contract with a licensed provider, with an inspection at least every four months for the life of the system. It is not optional, and Comal County can request proof of an active contract. We hold the contract, run the inspections, and file the reports so you stay compliant.',
      },
      {
        q: 'What happens if I let my maintenance contract lapse?',
        a: 'A lapsed contract means your system is out of compliance. You can receive violation notices from the county, and an unmaintained system is far more likely to fail — a dead aerator or empty chlorinator quickly leads to odors, poor treatment, and a clogged field. A lapse also complicates a home sale, since buyers and lenders look for an active contract. It is easy and inexpensive to keep it current.',
      },
      {
        q: 'How often will you actually come out?',
        a: 'At least three times a year — once every four months — which is the minimum the state requires. On each visit we service the compressor, test the pump, floats, and alarm, refill and check the chlorinator, evaluate the effluent, clean the spray heads, and file the report. If something needs attention between visits, you call and we come out.',
      },
    ],
    image: maintenanceImg,
    imageAlt: 'Technician performing a routine aerobic septic maintenance inspection in Comal County, Texas',
  },
  {
    slug: 'septic-inspections',
    name: 'Septic Inspections',
    short: 'Inspections',
    blurb: 'Buying or selling a Hill Country home? We inspect the aerobic system end to end and give you a clear written picture.',
    description:
      'An aerobic septic inspection tells you the true condition of a system before it becomes your problem — which is exactly why it matters when a Comal County home changes hands. We inspect aerobic systems across the county for home buyers, sellers, and owners who just want to know where they stand. We open the trash, aeration, and pump tanks, verify the air compressor and dosing pump are working, test the floats and alarm, check the chlorinator and evaluate the effluent quality, run the spray cycle to confirm the heads cover the field, and walk the spray area for ponding or surfacing. We also confirm whether the system has an active maintenance contract on file with the county — a detail that trips up a lot of Hill Country sales. You get a clear rundown of what is good, what is aging, and what needs attention, so you can buy with confidence, sell without surprises, or budget for the work ahead.',
    sections: [
      {
        h: 'Why it matters most at a home sale',
        body: 'A failing aerobic component or a clogged spray field can run from hundreds of dollars for a compressor to five figures for a field rebuild, and a buyer who skips the septic inspection can inherit exactly that. Because so much of Comal County is on aerobic systems rather than city sewer — the new exurban builds and the older lake and acreage homes alike — the septic inspection is one of the most important and most overlooked parts of a Hill Country deal. A clean, documented system is real proof a seller can hand a buyer.',
      },
      {
        h: 'The maintenance-contract catch on Texas sales',
        body: 'Here is the detail that surprises people: Texas requires an active maintenance contract on an aerobic system, and a lapsed one shows up at exactly the wrong moment — during a sale. Part of our inspection is confirming the contract status and the county records, so a buyer is not stepping into a compliance problem and a seller is not blindsided at closing. If the contract has lapsed, we can get it current and the system back on the four-month schedule.',
      },
    ],
    points: [
      'Full inspection for buyers, sellers, and owners',
      'Trash, aeration, and pump tanks opened and checked',
      'Air compressor, dosing pump, floats, and alarm tested',
      'Chlorinator and effluent quality evaluated',
      'Spray cycle run and the spray field walked for ponding',
      'Maintenance-contract and county-compliance status confirmed',
    ],
    faqs: [
      {
        q: 'Do I need a septic inspection when buying a Comal County home?',
        a: 'If the home is on an aerobic system — and most rural and exurban Comal County homes are — yes, absolutely. A standard home inspection does not cover the aerobic system in any depth, and components from the compressor to the spray field can be costly to replace. A dedicated aerobic inspection tells you the real condition, and whether the required maintenance contract is current, before you own it.',
      },
      {
        q: 'What is different about inspecting an aerobic system versus a conventional one?',
        a: 'There is far more to check. Beyond the tanks, an aerobic inspection has to verify the air compressor, the dosing pump, the floats and alarm, the chlorination, the effluent quality, and the spray distribution across the field — plus confirm the system is under the legally required maintenance contract. We test the whole treatment process, not just lift a lid, so you get a true picture.',
      },
      {
        q: 'How long does an inspection take and what do I get?',
        a: 'Most aerobic inspections take an hour or two depending on access and the spray cycle. You get a clear summary of the system: its type and age, the condition of the compressor, pump, floats, chlorinator, and tanks, how the effluent and spray field looked, the maintenance-contract status, and any repairs or attention it needs so you can plan or negotiate.',
      },
    ],
    image: inspectionImg,
    imageAlt: 'Technician inspecting an aerobic septic system during a home-sale inspection in Comal County, Texas',
  },
  {
    slug: 'septic-tank-pumping',
    name: 'Septic Tank Pumping',
    short: 'Tank Pumping',
    blurb: 'Even aerobic systems need the solids pumped out. We pump the trash and treatment tanks before sludge reaches the spray field.',
    description:
      'A common misconception is that an aerobic system never needs pumping. It does. Solids still settle in the trash tank and sludge accumulates in the treatment and pump chambers, and if it is not removed it carries over toward the spray field and fouls the distribution — turning a routine pump into an expensive field repair. We pump aerobic septic tanks across Comal County. We locate and open the tanks, pump out the accumulated solids and sludge, check the baffles, tank walls, and transfer ports while everything is open, and confirm the aerator and pump are seated and clear when we are done. How often a system needs pumping depends on the household size, the tank, and how heavily it is used — full-time families and rental homes around Canyon Lake and New Braunfels build up solids faster. The cheapest service you can do on time is the pump-out; the most expensive is the spray field you rebuild because the solids were allowed to carry over.',
    sections: [
      {
        h: 'Why aerobic systems still need pumping',
        body: 'Aeration treats the wastewater, but it does not make the solids disappear. The trash tank catches the heavy material before it reaches the aeration chamber, and over the years that tank — plus the bottom of the treatment and pump tanks — accumulates sludge. Left too long, those solids carry over into the pump and out to the spray field, clogging the lines and heads. Pumping on a sensible interval removes that buildup before it ever reaches the most expensive part of the system.',
      },
      {
        h: 'How often a Comal County home really needs it',
        body: 'There is no single number — it depends on the size of the household, the tank capacity, and how the home is used. A full-time family puts more solids through the system than a part-time lake place; a vacation rental near Canyon Lake with heavy weekend loads builds up faster than you would expect. We check the sludge levels at your maintenance visits and tell you when it is genuinely time, so you pump when the tank needs it — not on a guess and not too late.',
      },
    ],
    points: [
      'Trash, treatment, and pump tanks pumped of solids and sludge',
      'Tanks located and opened, baffles and transfer ports checked',
      'Aerator and pump confirmed clear and seated after pumping',
      'Sludge levels evaluated so you pump on the right interval',
      'Coordinated with your maintenance schedule where possible',
      'Most homes pumped in a single visit',
    ],
    faqs: [
      {
        q: 'Do aerobic systems really need to be pumped?',
        a: 'Yes — this is one of the most common misunderstandings. Aeration treats the liquid waste, but solids still accumulate in the trash tank and the bottoms of the treatment and pump tanks. If they are never removed they carry over to the spray field and clog it. We check sludge levels at maintenance visits and pump when the tank actually needs it, which protects the expensive distribution field.',
      },
      {
        q: 'How often should my aerobic tank be pumped?',
        a: 'It varies with household size, tank capacity, and usage rather than a fixed schedule. A full-time family typically needs pumping every few years; a heavily used rental builds solids faster. Because we are already checking your system every four months under the maintenance contract, we monitor the sludge and tell you exactly when it is time — no over-pumping and no waiting too long.',
      },
      {
        q: 'What are the signs my tank is overdue?',
        a: 'Slow drains throughout the house, gurgling, sewage odor, effluent that looks or smells poorly treated, or solids showing up at the spray heads all point to a tank that needs pumping. If you also see ponding in the spray field, call promptly — that can mean solids have already started carrying over. We pump and check the whole system so the fix addresses the real cause.',
      },
    ],
    image: pumpingImg,
    imageAlt: 'Aerobic septic tank being pumped at a home in Comal County, Texas',
  },
  {
    slug: 'emergency-septic-service',
    name: 'Emergency Septic Service',
    short: 'Emergency Service',
    blurb: 'Sewage backing up, toilets won’t flush, or an aerobic alarm screaming? Fast help to stop the mess and get you running.',
    description:
      'A septic backup is not a "next week" problem — it is sewage coming into your home or surfacing in your yard, and it gets worse and more expensive every hour. If your toilets and drains have stopped working, sewage is backing up into tubs or floor drains, you smell it inside, there is effluent surfacing in the spray field, or your aerobic alarm is going off and will not reset, that is an emergency and we treat it like one. We provide fast emergency aerobic septic service across Comal County. We come out, find why the system stopped — a failed air compressor, a dead dosing pump, a stuck float, a clogged spray field, or a tank full of solids — relieve the backup, and get you running again. On an aerobic system the alarm often goes off before a full backup, so a fast response can save you the mess entirely. The first priority is stopping the problem and getting your household functional; then we tell you straight what failed and what it takes to keep it from happening again.',
    sections: [
      {
        h: 'When an aerobic problem can’t wait',
        body: 'Some symptoms mean stop using water and call now: sewage backing up into tubs, showers, or floor drains; toilets that will not flush anywhere in the house; sewage odor indoors; effluent surfacing or ponding in the spray field; or an alarm that keeps sounding after you reset it. On an aerobic unit the alarm is your friend — it usually warns you before things overflow — but every load of laundry, every flush, every shower adds to a system that has nowhere to put the water. The faster we get there, the less damage and cleanup you face.',
      },
      {
        h: 'What we do first, and what comes next',
        body: 'On an emergency call the first job is to relieve the backup and find why the system quit — most often a failed air compressor, a dead or stuck dosing pump, or a tank that needed pumping. We pump down what needs pumping, swap the failed component, and get the house draining and the system treating again. With the immediate problem under control, we give you the honest picture and a plan — and if the system was not under its required maintenance contract, we get it back on the four-month schedule so you are not back here in a month.',
      },
    ],
    points: [
      'Fast response for backups, overflows, and aerobic alarms',
      'Failed compressors, dosing pumps, and floats diagnosed on the spot',
      'Tanks pumped down to relieve a backup and get you draining',
      'Sewage backing up indoors or surfacing in the spray field addressed',
      'Honest plan to prevent a repeat — not just a band-aid',
      'Ask about same-day availability when you call',
    ],
    faqs: [
      {
        q: 'Sewage is backing up into my house — what do I do right now?',
        a: 'Stop using water immediately — no flushing, laundry, or dishes — so you are not adding to a system that has nowhere to drain. Keep people and pets away from the sewage, and call us. On an aerobic system the cause is often a failed compressor or dosing pump plus a tank that needs relief; the faster we get there, the less cleanup and damage you face.',
      },
      {
        q: 'My aerobic alarm went off in the middle of the night — is that an emergency?',
        a: 'It is a warning that needs prompt attention. The alarm usually means the air compressor failed, the dosing pump is not emptying the tank, or a float is stuck — caught early, it often prevents a backup entirely. Do not just unplug the buzzer. Cut back on water use to buy time and call us; we test the compressor, pump, and floats and get it running.',
      },
      {
        q: 'How fast can you get to me?',
        a: 'Call with your location and what is happening and we will give you a real time, not a runaround. Backups and overflows get priority because they are a health and property issue. Same-day service is often available across Comal County — ask when you call.',
      },
      {
        q: 'Will pumping the tank fix the emergency for good?',
        a: 'Pumping relieves an immediate backup, but on an aerobic system it may be treating a symptom. If the cause is a failed compressor, a dead dosing pump, a stuck float, or a clogged spray field, that has to be addressed too or the problem returns. We get you running first, then tell you straight what it will take to keep it fixed — and get you back under maintenance so it does not recur.',
      },
    ],
    image: emergencyImg,
    imageAlt: 'Emergency aerobic septic service responding to a backup at a Comal County home',
    emergency: true,
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
