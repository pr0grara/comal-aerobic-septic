/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'new-braunfels',
    name: 'New Braunfels',
    state: 'TX',
    intro:
      'New Braunfels sits at the edge of the Texas Hill Country where the Comal and Guadalupe rivers meet, and it is one of the fastest-growing cities in the country. That growth is the story for septic here: subdivisions and custom homes are filling in across the outskirts faster than sewer lines can reach them, so a huge share of new construction goes in on aerobic systems. The ground demands it — shallow limestone and tight clay do not percolate the way a conventional drain field needs, so the county requires an aerobic treatment unit with spray distribution. We install, repair, maintain, and inspect aerobic systems all over the New Braunfels area. The local mix is new ATUs on fresh builds out toward Gruene, Solms, and the river roads, plus older systems on established acreage that need the four-month maintenance Texas mandates. We see compressors that have quit, chlorinators run dry, spray fields ponding after a storm, and tanks that were never pumped. Tell us where your system is and what it is doing, and we will give you a straight answer, a real price, and a TCEQ-licensed crew that keeps you compliant.',
    neighborhoods: ['Gruene', 'Solms', 'River Chase', 'Vintage Oaks', 'Mission Hill', 'Veramendi'],
    landmarks: ['Comal River', 'Guadalupe River', 'Gruene Historic District', 'Landa Park'],
    issues: [
      {
        title: 'Explosive growth ahead of sewer lines',
        body: 'New Braunfels is growing faster than utilities can extend, so most new homes on the outskirts go in on aerobic systems rather than city sewer. New ATUs need to be designed and permitted correctly for the lot, and from day one Texas requires them under a maintenance contract with inspections every four months.',
      },
      {
        title: 'River-corridor lots and runoff',
        body: 'Homes along the Comal and Guadalupe and out the river roads sit on ground that can flood and saturate fast in a Hill Country storm. A spray field overwhelmed by runoff ponds and backs up, so keeping storm water diverted away from the distribution area matters as much as servicing the unit.',
      },
      {
        title: 'Lapsed maintenance on resale homes',
        body: 'With homes changing hands constantly in this market, aerobic maintenance contracts often lapse between owners. A lapsed contract is a compliance problem and a sign the compressor and chlorinator may have gone untended. A pump, inspection, and fresh contract gets a new owner a known, compliant baseline.',
      },
    ],
    nearby: ['gruene', 'garden-ridge', 'canyon-lake'],
    faqs: [
      {
        q: 'Do you cover all of the New Braunfels area?',
        a: 'Yes. We cover New Braunfels and the surrounding communities — Gruene, Solms, River Chase, Vintage Oaks, and out the river roads and growing subdivisions on the edges of town. If you are not sure we reach you, call and ask; we likely do.',
      },
      {
        q: 'I’m building a new home outside New Braunfels — do I need an aerobic system?',
        a: 'Almost certainly. If there is no city sewer at your lot — which is the case for most new construction on the outskirts — the Hill Country soils require an aerobic treatment unit with spray distribution. We do the site evaluation, design and permit the system, install it, and start the required maintenance contract so you are compliant from day one.',
      },
      {
        q: 'My aerobic alarm keeps going off — who do I call in New Braunfels?',
        a: 'Call us. The alarm usually means the air compressor failed, the dosing pump is not emptying the tank, or a float is stuck. Cut back on water use, do not just unplug the buzzer, and we will come test the compressor, pump, and floats and get the system treating and spraying again.',
      },
    ],
  },
  {
    slug: 'canyon-lake',
    name: 'Canyon Lake',
    state: 'TX',
    intro:
      'Canyon Lake spreads around the reservoir north of New Braunfels, a ring of lake communities, weekend places, and full-time homes tucked into the steep, rocky hills above the water. There is no city sewer out here — essentially every home runs on an aerobic system — which makes this some of the busiest aerobic country we cover. We install, repair, maintain, and inspect aerobic systems all around Canyon Lake, from Startzville and Sattler down by the dam to the Hancock and Cordova areas and the subdivisions up the hills. The lake setting brings its own challenges: a lot of properties are part-time or short-term rentals that go from empty to a packed house on a holiday weekend, which slams the system and fills tanks faster than the owners expect. Steep, rocky lots leave little room for a spray field, and proximity to the lake means the county is strict about treated-effluent quality and setbacks. We know how heavy weekend loads and Hill Country limestone stress an ATU, and how to keep a lake-area system compliant. Tell us where your system is and what is going on, and we will give you an honest answer and a real price.',
    neighborhoods: ['Startzville', 'Sattler', 'Canyon City', 'Hancock', 'Cordova', 'Mystic Shores'],
    landmarks: ['Canyon Lake', 'Canyon Dam', 'Guadalupe River tailwater', 'Comal Park'],
    issues: [
      {
        title: 'Rentals and weekend homes that fill systems fast',
        body: 'Many Canyon Lake properties are short-term rentals or weekend places that sit quiet, then host a full house on a holiday. That bursty, heavy load overwhelms an aerobic system and fills tanks faster than a normal household, so these homes need close maintenance and well-timed pumping to avoid a backup during a guest’s stay.',
      },
      {
        title: 'Steep, rocky lots and tight spray fields',
        body: 'The hills around Canyon Lake are steep and shallow over limestone, leaving little room and little soil for a spray field. Systems here have to be designed carefully to the available area and setbacks, and a field with no margin ponds quickly if the unit is not treating well or storm runoff piles on.',
      },
      {
        title: 'Strict effluent rules near the water',
        body: 'Because the lake is a public water supply and recreation area, the county is strict about treated-effluent quality and setbacks. A chlorinator run dry or a failed aerator is not just a nuisance here — it is a compliance issue. Regular maintenance keeps the effluent clean and the system in good standing.',
      },
    ],
    nearby: ['sattler', 'startzville', 'canyon-city'],
    faqs: [
      {
        q: 'Do you cover the whole Canyon Lake area?',
        a: 'Yes. We cover Canyon Lake and the surrounding communities — Startzville, Sattler, Canyon City, Hancock, Cordova, and the subdivisions up the hills around the reservoir. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'I rent out my Canyon Lake place — how should I handle the aerobic system?',
        a: 'Keep it under its required maintenance contract and watch the pumping interval, because heavy holiday-weekend use fills the tanks fast. We service the compressor, pump, chlorinator, and spray heads every four months and time pumping to your usage, so you are not facing a backup or an alarm while guests are there.',
      },
      {
        q: 'My spray field ponds after big rains — is the system failing?',
        a: 'Not necessarily. On the steep, rocky lots around Canyon Lake, storm runoff can saturate a spray field that is otherwise fine, and the cause of ponding is often upstream — a tired aerator, a dead dosing pump, or clogged heads. We diagnose the whole system and check whether runoff needs diverting before recommending anything as expensive as a field rebuild.',
      },
    ],
  },
  {
    slug: 'bulverde',
    name: 'Bulverde',
    state: 'TX',
    intro:
      'Bulverde sits in southern Comal County along the US-281 corridor, a fast-growing band of new subdivisions and ranchettes between San Antonio and the deeper Hill Country. It is some of the busiest new-construction territory we cover, and almost all of it is on aerobic systems — there is no city sewer for the acreage and the master-planned communities filling in around Bulverde and Spring Branch. We install, repair, maintain, and inspect aerobic systems throughout the Bulverde area. The local pattern is heavily new builds: ATUs going into fresh subdivisions like Johnson Ranch and Mystic Shores’ overflow, plus custom homes on larger lots where the rocky limestone leaves limited room for a spray field. We handle the site evaluations, designs, and permits for new systems, and we maintain the wave of systems that came in over the last decade and now need their four-month inspections, compressor service, and the occasional pump. Tell us whether you are building, buying, or just need your existing system kept compliant, and we will give you a straight answer and a TCEQ-licensed crew.',
    neighborhoods: ['Johnson Ranch', 'Oak Village North', 'Belterra', 'Singing Hills', 'Indian Springs'],
    landmarks: ['US-281 corridor', 'Bulverde Community Park', 'Cibolo Creek headwaters', 'Tapatio Springs area'],
    issues: [
      {
        title: 'Heavy new construction on rocky ground',
        body: 'Bulverde is filling with new subdivisions and ranchettes, all on aerobic systems because there is no sewer. New ATUs have to be designed and permitted to the shallow limestone and the area available for spray distribution, then maintained under contract from day one. Getting the install right on rocky ground is what keeps the system working for decades.',
      },
      {
        title: 'A decade of systems now needing service',
        body: 'Bulverde’s building boom means thousands of aerobic systems installed over the last several years that are now hitting the age where compressors wear out, chlorinators need attention, and spray heads clog. Many owners do not realize the four-month maintenance is legally required — we get them back on schedule before a worn part becomes a backup.',
      },
      {
        title: 'Limited spray area on subdivision lots',
        body: 'Subdivision lots around Bulverde can be tight, leaving a small spray field with little margin. When the area is limited, an unmaintained unit or extra storm runoff overloads the field quickly. Careful design and regular maintenance keep a small field dispersing cleanly.',
      },
    ],
    nearby: ['spring-branch', 'garden-ridge', 'bracken'],
    faqs: [
      {
        q: 'Do you serve Bulverde and the 281 corridor?',
        a: 'Yes. We cover Bulverde and the surrounding southern Comal County communities — Johnson Ranch, Oak Village North, Belterra, and the subdivisions and ranchettes along US-281. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'I just moved into a Bulverde home with an aerobic system — what do I need to do?',
        a: 'Get the system inspected and put under an active maintenance contract if it is not already. Texas requires aerobic systems to be inspected every four months by a licensed provider, and many Bulverde homes change hands with a lapsed contract. We check the compressor, pump, chlorinator, and spray field, give you a baseline, and keep you compliant.',
      },
      {
        q: 'Can you design and install a system for my new Bulverde build?',
        a: 'Yes. We do the site evaluation and soil analysis, size the system to your home, lay out the spray field to the available area and setbacks, pull the county permit, and install it — all to TCEQ standards. We also start the required maintenance contract so your new system is compliant from the day it is turned on.',
      },
    ],
  },
  {
    slug: 'spring-branch',
    name: 'Spring Branch',
    state: 'TX',
    intro:
      'Spring Branch sits in the heart of Comal County’s Hill Country along Highway 46 and the upper reaches of the Guadalupe, a spread-out community of ranches, acreage homes, and newer hill-view subdivisions with no city sewer anywhere in sight. Out here aerobic is simply how wastewater is handled — the rocky, shallow soils leave no other choice — so essentially every property runs an ATU. We install, repair, maintain, and inspect aerobic systems throughout the Spring Branch area. The mix is rural and growing at once: longtime ranches and country homes with older systems that need diligent maintenance, alongside a steady flow of new custom homes on big lots up toward Smithson Valley and Fischer. We see compressors worn out on systems that fell off their maintenance schedule, spray fields struggling in tight clay, and brand-new builds that need a properly designed and permitted system from scratch. We bring the equipment and the know-how to reach a system on a large rural lot and the licensing to keep it compliant. Tell us where your system is and what is going on, and we will give you an honest answer and a real price.',
    neighborhoods: ['Rebecca Creek', 'Bear Springs', 'Mountain Springs', 'Hidden Springs', 'River Crossing'],
    landmarks: ['Guadalupe River', 'Highway 46', 'Rebecca Creek', 'Guadalupe River State Park'],
    issues: [
      {
        title: 'Large rural lots and access',
        body: 'Spring Branch properties are often big rural acreage with the aerobic system and spray field set well off the road. We come prepared with the equipment to reach and service a system on a large lot, and we map components so future four-month inspections and pump-outs go quickly.',
      },
      {
        title: 'Older ranch systems off their schedule',
        body: 'Plenty of longtime ranch and country homes around Spring Branch have aerobic systems that drifted off their required maintenance schedule. A neglected compressor or empty chlorinator quietly stops treating the waste, so we get these systems serviced, back on the four-month schedule, and compliant before a small lapse becomes a field problem.',
      },
      {
        title: 'New custom builds on raw land',
        body: 'A lot of Spring Branch growth is custom homes on raw Hill Country acreage, where a system has to be designed and permitted from scratch to the soil and the spray area available. We handle the site evaluation, design, permit, and install so the system is sized right for the home and the ground.',
      },
    ],
    nearby: ['canyon-lake', 'smithson-valley', 'bulverde'],
    faqs: [
      {
        q: 'Do you cover Spring Branch and the Highway 46 area?',
        a: 'Yes. We cover Spring Branch and the surrounding Hill Country communities — Rebecca Creek, Bear Springs, River Crossing, and the ranches and subdivisions along Highway 46 and up toward Smithson Valley. Tell us where the property is and we will come prepared for the access.',
      },
      {
        q: 'My ranch system has not been serviced in a while — is that a problem?',
        a: 'Yes, on two fronts. Texas requires aerobic systems to be inspected every four months, so a long gap is a compliance issue, and an unmaintained compressor or chlorinator stops the system from treating waste properly — which leads to odors and a clogged spray field. We service it, get you back on schedule, and keep your reports filed with the county.',
      },
      {
        q: 'Can you reach a system on a large Spring Branch lot?',
        a: 'Yes. Big rural acreage is normal out here. We come prepared to reach and service a system set well off the road, locate buried components, and map them so your four-month inspections and any pumping go quickly and you are not paying to hunt for the tanks each time.',
      },
    ],
  },
  {
    slug: 'garden-ridge',
    name: 'Garden Ridge',
    state: 'TX',
    intro:
      'Garden Ridge sits at the southern tip of Comal County, a leafy, established community of large wooded lots between San Antonio and New Braunfels. It is more built-out and settled than the fast-growing 281 corridor, but it shares the same reality: no city sewer, so homes run on aerobic systems over the rocky Hill Country ground. We install, repair, maintain, and inspect aerobic systems throughout the Garden Ridge area. The local pattern leans toward established homes on generous, tree-shaded lots — many with systems that have been in the ground long enough that compressors, chlorinators, and spray heads are reaching the end of their service life. We see aging components on otherwise well-kept properties, spray fields shaded and damp under heavy oak canopy, and homes selling in a desirable market where a clean, compliant system matters. We know the Garden Ridge area, how its lots and soils handle a system, and how to keep an older ATU running clean and compliant. Tell us where your system is and what it is doing, and we will give you a straight answer and a real price.',
    neighborhoods: ['Garden Ridge Estates', 'Oak Ridge', 'Forest Waters', 'Las Brisas', 'Stonebridge'],
    landmarks: ['Natural Bridge Caverns', 'Natural Bridge Wildlife Ranch', 'FM 3009', 'Cibolo Creek'],
    issues: [
      {
        title: 'Aging components on established systems',
        body: 'Garden Ridge is a settled community where many aerobic systems have been running for years. Compressors, dosing pumps, chlorinators, and spray heads are wear items that reach the end of their life, so regular maintenance and timely replacement keep an aging system treating cleanly instead of failing all at once.',
      },
      {
        title: 'Shaded, damp spray fields under oak canopy',
        body: 'The heavy oak canopy that gives Garden Ridge its character also shades spray fields and keeps the ground damp, which slows how fast effluent disperses. Keeping the unit treating well and the spray heads clear, and keeping runoff off the field, helps a shaded distribution area keep up.',
      },
      {
        title: 'Compliance at resale in a desirable market',
        body: 'Garden Ridge homes are sought-after and change hands at a premium, and an aerobic system without an active maintenance contract becomes a sticking point at closing. A pump, inspection, and current contract gives sellers clean proof and buyers a known, compliant system.',
      },
    ],
    nearby: ['bracken', 'bulverde', 'new-braunfels'],
    faqs: [
      {
        q: 'Do you serve Garden Ridge?',
        a: 'Yes. We cover Garden Ridge and the surrounding southern Comal County communities, including the established neighborhoods off FM 3009 and the wooded lots toward the Natural Bridge area. Call and tell us where the property is and we will confirm.',
      },
      {
        q: 'My Garden Ridge system is older — should I be worried about it failing?',
        a: 'Not if it is maintained. Aerobic systems last decades when the wear parts — compressor, pump, chlorinator, spray heads — are serviced and replaced on time, which is exactly what the required four-month maintenance catches. We inspect the whole system, replace what is near the end of its life, and keep an older system running clean and compliant.',
      },
      {
        q: 'I’m selling my Garden Ridge home — does the septic matter?',
        a: 'It does. Buyers and lenders look for an aerobic system that is in good shape and under an active maintenance contract, and a lapse can stall a closing. We inspect the system, get the contract current, and give you a clear written summary so the septic does not become a last-minute problem in the deal.',
      },
    ],
  },
  {
    slug: 'sattler',
    name: 'Sattler',
    state: 'TX',
    intro:
      'Sattler sits right below Canyon Dam where the Guadalupe River tailwater begins, the gateway to the river’s famous tubing and trout stretch and one of the busier lake-area communities in Comal County. There is no city sewer here — homes, river camps, and rental cabins all run on aerobic systems over the rocky ground near the water. We install, repair, maintain, and inspect aerobic systems throughout the Sattler area. The river and lake setting drives the local pattern: a lot of part-time river places and short-term rentals that fill with tubers and guests on a summer weekend and sit quiet the rest of the time, plus full-time homes on the hills above the tailwater. That on-off, heavy-load use is hard on a system, and proximity to the Guadalupe makes the county strict about effluent quality and setbacks. We know how seasonal river traffic stresses an aerobic unit and how to keep a system near the water clean and compliant. Tell us where your system is and what is going on, and we will give you an honest answer and a real price.',
    neighborhoods: ['Sattler', 'Canyon City', 'Guadalupe River corridor', 'River Road area', 'Mountain Valley'],
    landmarks: ['Canyon Dam', 'Guadalupe River tailwater', 'Whitewater Amphitheater', 'Horseshoe Falls'],
    issues: [
      {
        title: 'River rentals with bursty summer loads',
        body: 'Sattler’s river camps and rental cabins fill with tubers and guests on summer weekends and sit empty in between. That bursty, heavy use overloads an aerobic system and fills tanks fast, so these properties need attentive maintenance and well-timed pumping to avoid a backup or an alarm during a busy weekend.',
      },
      {
        title: 'Strict effluent rules along the Guadalupe',
        body: 'Sitting right on the Guadalupe tailwater, Sattler systems face strict county requirements for treated-effluent quality and setbacks from the water. A chlorinator run dry or a failed aerator is a compliance issue here, not just an inconvenience. Regular maintenance keeps the effluent properly disinfected and the system in good standing.',
      },
      {
        title: 'Rocky, low-lying lots near the water',
        body: 'Lots near the tailwater are rocky and can sit low and damp, leaving a spray field little dry soil to work with, especially when the river runs high. Keeping the unit treating well and runoff diverted protects a field that does not have much margin.',
      },
    ],
    nearby: ['canyon-lake', 'canyon-city', 'startzville'],
    faqs: [
      {
        q: 'Do you cover Sattler and the river corridor?',
        a: 'Yes. We cover Sattler, Canyon City, and the Guadalupe River corridor below the dam, including the river camps and rental properties along the tailwater. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'I run a river rental in Sattler — how do I keep the aerobic system from backing up?',
        a: 'Keep it under its maintenance contract and time the pumping to your busy season, because tuber-weekend loads fill the tanks fast. We service the compressor, pump, chlorinator, and spray heads every four months and check sludge levels so you are not dealing with an alarm or a backup while the cabin is full.',
      },
      {
        q: 'Does being right on the Guadalupe affect my septic requirements?',
        a: 'Yes. The county is strict about treated-effluent quality and setbacks near the river, so the system has to be disinfecting properly and dispersing within the allowed area. We make sure the chlorination is working, the effluent is clean, and the spray field meets the setbacks, and we keep your inspection reports on file.',
      },
    ],
  },
  {
    slug: 'fischer',
    name: 'Fischer',
    state: 'TX',
    intro:
      'Fischer is a small, historic Hill Country community on the western edge of Comal County, ranch and acreage country along Ranch Road 32 between Canyon Lake and Wimberley, scattered with old family land and newer hill-view homes. There is no city sewer anywhere out here — every property runs an aerobic system over the rocky, shallow ground that defines this stretch of the Hill Country. We install, repair, maintain, and inspect aerobic systems throughout the Fischer area. The local pattern is rural: longtime ranches and country homes with systems that need diligent maintenance to stay compliant, and a slow but steady flow of new custom homes on big lots taking in the views. We see compressors worn out on remote systems that fell off their schedule, spray fields working in tight, rocky soil, and new builds that need a properly designed and permitted system. We bring the equipment to reach a system on a large rural lot and the licensing to keep it in good standing. Tell us where your system is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Fischer', 'Mountain Valley', 'Mountain Top', 'Devils Backbone', 'Rocky Creek'],
    landmarks: ['Ranch Road 32', 'Devils Backbone', 'Fischer Store', 'Blanco River headwaters area'],
    issues: [
      {
        title: 'Remote ranch systems off their schedule',
        body: 'Fischer’s ranches and country homes often sit well off the road on big acreage, and their aerobic systems can drift off the required maintenance schedule. A neglected compressor or chlorinator stops treating the waste, so we get remote systems serviced, mapped, and back on the four-month schedule before a lapse becomes a field problem.',
      },
      {
        title: 'Tight, rocky soils and limited spray area',
        body: 'The shallow limestone along the Devils Backbone and Ranch Road 32 leaves little soil for a spray field. Systems here have to be designed carefully to the available area, and a field with little margin needs a well-maintained unit upstream so it is only ever dispersing clean, treated effluent.',
      },
      {
        title: 'New hill-view builds on raw land',
        body: 'Fischer draws custom homes on big lots for the views, and those builds need an aerobic system designed and permitted from scratch to the soil and spray area available. We handle the site evaluation, design, permit, and install so the system fits the lot and the home.',
      },
    ],
    nearby: ['canyon-lake', 'spring-branch', 'startzville'],
    faqs: [
      {
        q: 'Do you really drive out to Fischer?',
        a: 'Yes. We cover Fischer and the surrounding western Comal County ranch country along Ranch Road 32 and the Devils Backbone, including the remote acreage. Tell us about the access and where the system is and we will come prepared.',
      },
      {
        q: 'My Fischer property’s system is on big acreage — can you find and service it?',
        a: 'Yes. We locate the tanks and components, service the compressor, pump, chlorinator, and spray heads, and map everything so your four-month inspections and any pumping go quickly. Remote, large-lot systems are normal for us out here.',
      },
      {
        q: 'I’m building on raw land near Fischer — what does the septic involve?',
        a: 'On Hill Country ground with no sewer, you will need an aerobic system. We do the site evaluation and soil analysis, design the system to your home and the spray area available, pull the county permit, install it, and start the required maintenance contract so you are compliant from day one.',
      },
    ],
  },
  {
    slug: 'startzville',
    name: 'Startzville',
    state: 'TX',
    intro:
      'Startzville sits on the south shore of Canyon Lake along FM 2673, the commercial heart of the lake communities and home to a dense mix of year-round residents, weekend places, and rental properties in the hills above the water. There is no city sewer here — every home runs an aerobic system over the rocky, steep ground around the lake. We install, repair, maintain, and inspect aerobic systems throughout the Startzville area. The lake-community pattern drives the work: a lot of part-time and short-term rental homes that fill on holiday weekends and slam the system with heavy loads, plus full-time households on tight, steep lots where the spray field has little room. Closeness to Canyon Lake means the county holds systems to strict effluent and setback standards. We know how bursty rental use and Hill Country limestone stress an aerobic unit, and how to keep a lake-area system clean and compliant. Tell us where your system is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Canyon Lake Hills', 'Canyon Lake Forest', 'Cougar Canyon', 'Triple Peak', 'Skyridge'],
    landmarks: ['Canyon Lake south shore', 'FM 2673', 'Comal Park', 'Canyon Lake Marina'],
    issues: [
      {
        title: 'Rental and weekend loads on tight lots',
        body: 'Startzville’s short-term rentals and weekend homes fill on holidays and sit quiet otherwise, and that bursty heavy use overloads an aerobic system on a small lake lot. Attentive maintenance and well-timed pumping keep these systems from backing up or alarming during a packed weekend.',
      },
      {
        title: 'Steep lake-hill lots with little spray area',
        body: 'The hills above Canyon Lake are steep and shallow over limestone, leaving cramped spray fields with little margin. A field with no room to spare ponds quickly if the unit is not treating well, so careful design and regular service are essential here.',
      },
      {
        title: 'Strict standards near the lake',
        body: 'Because Startzville sits right on Canyon Lake, the county is strict about treated-effluent quality and setbacks. A dry chlorinator or dead aerator becomes a compliance problem, not just a nuisance. Routine maintenance keeps the effluent disinfected and the system in good standing.',
      },
    ],
    nearby: ['canyon-lake', 'sattler', 'canyon-city'],
    faqs: [
      {
        q: 'Do you cover Startzville and the south shore?',
        a: 'Yes. We cover Startzville and the Canyon Lake south-shore communities along FM 2673 — Canyon Lake Hills, Canyon Lake Forest, and the subdivisions up the hills. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'I rent out my Startzville home — how often should the system be serviced?',
        a: 'At least the legally required every four months, and we time pumping to your busy season because holiday-weekend loads fill the tanks fast. We service the compressor, pump, chlorinator, and spray heads and monitor sludge so you avoid an alarm or a backup while guests are there.',
      },
      {
        q: 'My spray field is in a tight, steep spot — can it still work?',
        a: 'Yes, but it has little margin, so it relies on the unit upstream treating the waste cleanly. We keep the aerator, pump, and chlorinator in good shape and the heads clear so the field only ever disperses clean effluent, and we check for runoff that could overload a cramped distribution area.',
      },
    ],
  },
  {
    slug: 'smithson-valley',
    name: 'Smithson Valley',
    state: 'TX',
    intro:
      'Smithson Valley sits in the rolling Hill Country of central Comal County around the intersection of US-281 and Highway 46, a fast-growing area of new subdivisions and acreage homes anchored by the well-known Smithson Valley schools. There is no city sewer out here — homes run on aerobic systems over the rocky ground that defines this part of the county. We install, repair, maintain, and inspect aerobic systems throughout the Smithson Valley area. The local pattern is a wave of new construction: family homes filling subdivisions near the schools and on larger lots up the surrounding hills, almost all on aerobic systems installed over the last several years that now need their four-month maintenance and the first round of wear-part replacements. We also handle new builds from the site evaluation forward. We see compressors reaching the end of their life, chlorinators that need attention, and spray fields working in tight subdivision lots. We know the area and the TCEQ rules that govern these systems. Tell us where your system is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Mystic Shores', 'Havenwood', 'Copper Ridge', 'Ventana', 'Stonebridge'],
    landmarks: ['US-281 / Highway 46', 'Smithson Valley schools', 'Cibolo Creek', 'Guadalupe River access'],
    issues: [
      {
        title: 'A wave of newer systems hitting service age',
        body: 'Smithson Valley’s growth means thousands of aerobic systems installed over the last several years, now reaching the age where compressors wear out and chlorinators and spray heads need attention. Many families do not realize the four-month maintenance is required by law — we get them on schedule before a worn part becomes a backup.',
      },
      {
        title: 'Subdivision lots with limited spray area',
        body: 'Homes near the Smithson Valley schools and in the newer subdivisions often sit on lots where the spray field is tight. A small field has little margin, so it depends on a well-maintained unit upstream and on keeping storm runoff diverted away from the distribution area.',
      },
      {
        title: 'New builds needing design and permitting',
        body: 'New family homes keep going in around Smithson Valley, each needing an aerobic system designed and permitted to the lot’s soil and available spray area. We handle the site evaluation, design, permit, and install so the system is sized right and compliant from the start.',
      },
    ],
    nearby: ['spring-branch', 'bulverde', 'canyon-lake'],
    faqs: [
      {
        q: 'Do you serve Smithson Valley?',
        a: 'Yes. We cover Smithson Valley and the surrounding communities around US-281 and Highway 46 — Mystic Shores, Havenwood, Copper Ridge, and the subdivisions near the schools. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'We just bought a Smithson Valley home — is the aerobic system our responsibility now?',
        a: 'Yes, and it needs to be under an active maintenance contract with inspections every four months, which Texas requires. Many homes change hands with a lapsed contract. We inspect the compressor, pump, chlorinator, and spray field, give you a baseline, and keep you compliant going forward.',
      },
      {
        q: 'Can you install a system for a new build near the Smithson Valley schools?',
        a: 'Yes. We do the site evaluation and soil analysis, size the system to the home, lay out the spray field to the lot and setbacks, pull the county permit, and install it to TCEQ standards — then start the required maintenance contract so the new system is compliant from day one.',
      },
    ],
  },
  {
    slug: 'gruene',
    name: 'Gruene',
    state: 'TX',
    intro:
      'Gruene is the historic district on the north side of New Braunfels along the Guadalupe River, famous for Gruene Hall and a steady flow of visitors, surrounded by river homes, vacation rentals, and the upscale neighborhoods that have grown up around it. While the commercial core has utilities, plenty of the homes and rental properties out along the river and the surrounding lots run on aerobic systems over the rocky Hill Country ground. We install, repair, maintain, and inspect aerobic systems throughout the Gruene area. The river-tourism setting shapes the work: short-term rentals and second homes that fill with visitors on weekends and during festival season, putting heavy, bursty loads on their systems, plus full-time homes in the established neighborhoods nearby. Closeness to the Guadalupe makes the county strict about effluent quality and setbacks. We know how visitor traffic stresses an aerobic unit and how to keep a river-area system clean and compliant. Tell us where your system is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Gruene', 'River Chase', 'Gruene Estates', 'Riverside', 'Mountain Valley'],
    landmarks: ['Gruene Hall', 'Guadalupe River', 'Gristmill', 'Gruene Historic District'],
    issues: [
      {
        title: 'Vacation rentals with festival-weekend loads',
        body: 'Gruene’s rentals and second homes fill with visitors on weekends and during festival season, then sit quiet. That bursty heavy use overloads an aerobic system and fills tanks fast, so these properties need attentive maintenance and timed pumping to avoid an alarm or backup during a packed weekend.',
      },
      {
        title: 'Strict effluent rules along the Guadalupe',
        body: 'Sitting on the Guadalupe, Gruene-area systems face strict county standards for treated-effluent quality and setbacks from the river. A chlorinator run dry or a failed aerator is a compliance issue here. Regular maintenance keeps the effluent properly disinfected and the system in good standing.',
      },
      {
        title: 'River-corridor lots and runoff',
        body: 'Homes along the river sit on ground that can flood and saturate quickly in a Hill Country storm. A spray field overwhelmed by runoff ponds and backs up, so diverting storm water away from the distribution area is as important as servicing the unit.',
      },
    ],
    nearby: ['new-braunfels', 'canyon-lake', 'garden-ridge'],
    faqs: [
      {
        q: 'Do you cover the Gruene area?',
        a: 'Yes. We cover Gruene and the surrounding river neighborhoods on the north side of New Braunfels — River Chase, Gruene Estates, and the homes and rentals along the Guadalupe. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'I rent out a place in Gruene — how should I manage the aerobic system?',
        a: 'Keep it under its required maintenance contract and time the pumping to festival and summer season, because visitor weekends fill the tanks fast. We service the compressor, pump, chlorinator, and spray heads every four months and check sludge so you are not dealing with a backup while guests are in town.',
      },
      {
        q: 'Does being near the Guadalupe change my septic requirements?',
        a: 'Yes. The county is strict about treated-effluent quality and setbacks near the river, so the system has to be disinfecting properly and spraying within the allowed area. We confirm the chlorination is working and the field meets the setbacks, and we keep your inspection reports on file.',
      },
    ],
  },
  {
    slug: 'canyon-city',
    name: 'Canyon City',
    state: 'TX',
    intro:
      'Canyon City sits on the northeast side of Canyon Lake near the dam in Comal County, a lake-area community of full-time homes, weekend places, and rentals in the hills overlooking the water. There is no city sewer here — every property runs an aerobic system over the rocky, steep ground that rings the lake. We install, repair, maintain, and inspect aerobic systems throughout the Canyon City area. The lake-community pattern drives the work: part-time and short-term rental homes that fill on holiday weekends with heavy loads, alongside full-time households on tight, steep lots where the spray field has little room. Being right on Canyon Lake means the county holds systems to strict effluent and setback standards. We know how bursty seasonal use and Hill Country limestone stress an aerobic unit, and how to keep a lake-area system clean and compliant. Tell us where your system is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Canyon City', 'Hancock', 'Cordova', 'North Park', 'Jacobs Creek'],
    landmarks: ['Canyon Lake north shore', 'Canyon Dam', 'Jacobs Creek Park', 'Overlook Park'],
    issues: [
      {
        title: 'Weekend and rental loads near the dam',
        body: 'Canyon City’s lake homes and rentals fill on holiday weekends and sit quiet otherwise, and that bursty heavy use overloads an aerobic system and fills tanks fast. Attentive maintenance and well-timed pumping keep these systems from backing up or alarming during a busy weekend.',
      },
      {
        title: 'Steep, rocky lots with cramped spray fields',
        body: 'The hills above Canyon Lake near the dam are steep and shallow over limestone, leaving little room or soil for a spray field. A cramped field ponds quickly if the unit is not treating well, so careful design and regular service matter here.',
      },
      {
        title: 'Strict effluent standards on the lake',
        body: 'Sitting on Canyon Lake, Canyon City systems face strict county requirements for treated-effluent quality and setbacks from the water. A dry chlorinator or failed aerator becomes a compliance issue, not just an inconvenience. Routine maintenance keeps the effluent disinfected and the system in good standing.',
      },
    ],
    nearby: ['canyon-lake', 'sattler', 'startzville'],
    faqs: [
      {
        q: 'Do you cover Canyon City and the north shore?',
        a: 'Yes. We cover Canyon City and the Canyon Lake north-shore communities near the dam — Hancock, Cordova, and the subdivisions in the hills above the water. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My Canyon City place is a weekend rental — how do I keep the system healthy?',
        a: 'Keep it under its maintenance contract and time pumping to the busy season, since holiday-weekend loads fill the tanks fast. We service the compressor, pump, chlorinator, and spray heads every four months and watch the sludge levels so you avoid a backup or an alarm when the house is full.',
      },
      {
        q: 'Does living on Canyon Lake affect my aerobic system requirements?',
        a: 'Yes. The county is strict about treated-effluent quality and setbacks near the lake, so the system has to be disinfecting properly and dispersing within the allowed area. We make sure the chlorination is working, the effluent is clean, and the spray field meets the setbacks, and we keep your reports on file.',
      },
    ],
  },
  {
    slug: 'bracken',
    name: 'Bracken',
    state: 'TX',
    intro:
      'Bracken sits at the far southern edge of Comal County near the Bexar County line along US-281, an older crossroads community now surrounded by the suburban growth spreading north from San Antonio. It is known for the Bracken Bat Cave nearby, and while development is closing in, many of the homes here — on larger established lots and the acreage that has not yet been subdivided — still run on aerobic systems over the rocky Hill Country ground. We install, repair, maintain, and inspect aerobic systems throughout the Bracken area. The local mix is established homes with aging systems alongside new construction filling in the remaining land, all on aerobic units because city sewer has not reached most of these properties. We see compressors and chlorinators reaching the end of their service life, spray fields on lots being squeezed by nearby development, and homes selling in a hot, close-to-San-Antonio market where a clean, compliant system matters. We know the area and the rules that govern these systems. Tell us where your system is and what is going on, and we will give you a straight answer and a real price.',
    neighborhoods: ['Bracken', 'Bracken Village', 'Oak Grove', 'Specht', 'Evans Road area'],
    landmarks: ['Bracken Bat Cave', 'US-281', 'Bexar County line', 'Cibolo Creek'],
    issues: [
      {
        title: 'Aging systems amid encroaching growth',
        body: 'Bracken’s established homes often have aerobic systems running for years, with compressors, chlorinators, and spray heads reaching the end of their service life. As development crowds in, keeping these older systems maintained and their wear parts replaced on time keeps them treating cleanly and compliant.',
      },
      {
        title: 'Spray fields squeezed by new development',
        body: 'New construction is filling the land around older Bracken properties, and a spray field designed when a lot had room can feel tight as setbacks and neighbors close in. We make sure existing fields still meet setbacks and keep the unit treating well so a constrained field disperses cleanly.',
      },
      {
        title: 'Compliance in a hot resale market',
        body: 'Bracken’s closeness to San Antonio makes it a desirable, fast-moving market, and an aerobic system without an active maintenance contract becomes a sticking point at closing. A pump, inspection, and current contract gives sellers clean proof and buyers a known, compliant system.',
      },
    ],
    nearby: ['garden-ridge', 'bulverde', 'new-braunfels'],
    faqs: [
      {
        q: 'Do you serve Bracken?',
        a: 'Yes. We cover Bracken and the surrounding far-southern Comal County area along US-281 near the Bexar County line, including the established neighborhoods and the acreage still on aerobic systems. Call and tell us where the property is and we will confirm.',
      },
      {
        q: 'My Bracken home’s aerobic system is getting old — what should I do?',
        a: 'Keep it under its required maintenance contract so the wear parts — compressor, pump, chlorinator, spray heads — are serviced and replaced before they fail. Aerobic systems last decades when maintained. We inspect the whole system every four months, replace what is near the end of its life, and keep you compliant.',
      },
      {
        q: 'I’m selling near Bracken — does the septic affect the sale?',
        a: 'Yes. In this close-to-San-Antonio market, buyers and lenders look for an aerobic system in good shape and under an active maintenance contract, and a lapse can stall a closing. We inspect the system, get the contract current, and give you a clear written summary so the septic does not derail the deal.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
