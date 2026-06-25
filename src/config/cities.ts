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
    slug: 'hendersonville',
    name: 'Hendersonville',
    state: 'NC',
    intro:
      'Hendersonville sits south of Asheville in the apple-orchard country between the Blue Ridge and the edge of the mountains, and like most of Henderson County it loses power more than anywhere on flat ground would. Ice storms load the limbs and bring down lines, summer thunderstorms roll through, and a single tree across a rural feeder can leave a neighborhood dark for hours or days. Plenty of homes here — out toward Etowah, Mills River, Edneyville, and Dana — run on a private well and a septic pump, so an outage does not just kill the lights, it cuts your water and your wastewater too. We install, repair, maintain, and replace home standby generators all over the Hendersonville area. The local mix is its own thing: a lot of retirees and second-home owners who want the home to take care of itself when the power drops, older homes that need a modern unit and an automatic transfer switch, and newer builds where we size for the well pump, heat strips, and the whole panel. We install Generac and comparable units on propane or natural gas, do a real load calculation, and set the system up to come back automatically. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Laurel Park', 'Flat Rock', 'Etowah', 'Dana', 'Mills River', 'Edneyville'],
    landmarks: ['Historic Main Street', 'Jump Off Rock', 'Henderson County orchards', 'Flat Rock / Carl Sandburg Home'],
    issues: [
      {
        title: 'Frequent ice and storm outages',
        body: 'Henderson County loses power regularly — ice storms bring down limbs and lines in winter, and summer thunderstorms take out rural feeders. A properly sized standby generator brings the whole home back automatically within seconds, so an outage that lasts hours or days barely interrupts you.',
      },
      {
        title: 'Homes on a well and septic pump',
        body: 'Many Hendersonville-area homes run on a private well and a septic or lift pump, so when the power drops you lose water and wastewater along with the lights. We size generators to keep both pumps running, which is the difference between riding out an outage and hauling water.',
      },
      {
        title: 'Older homes needing a modern unit',
        body: 'Plenty of long-owned homes around Hendersonville have no backup power or an aging unit without an automatic transfer switch. We install modern Generac and comparable generators with automatic switches so the home comes back on its own, even when nobody is there.',
      },
    ],
    nearby: ['flat-rock', 'laurel-park', 'east-flat-rock'],
    faqs: [
      {
        q: 'Do you serve all of the Hendersonville area?',
        a: 'Yes. We cover Hendersonville and the surrounding communities — Laurel Park, Flat Rock, Etowah, Dana, Mills River, and Edneyville — and out into the rural orchard country. If you are not sure you are in our area, call and ask; we likely reach you.',
      },
      {
        q: 'Will a standby generator keep my well and septic pump running?',
        a: 'Yes, when it is sized for them. Well pumps draw hard on startup and septic or lift pumps add load, so we include them in the load calculation. A right-sized unit keeps your water and wastewater running through an outage, which matters most on the rural homes around Hendersonville.',
      },
      {
        q: 'How quickly can a generator restore power after an outage?',
        a: 'Typically within seconds. The automatic transfer switch senses the outage, starts the generator, and transfers your home over — no action from you, whether you are home or away. When utility power returns, it switches back and shuts the unit down.',
      },
    ],
  },
  {
    slug: 'fletcher',
    name: 'Fletcher',
    state: 'NC',
    intro:
      'Fletcher sits in the Cane Creek valley between Asheville and Hendersonville, straddling the Buncombe–Henderson county line along the busy US-25 corridor near the regional airport. It has grown fast, with subdivisions and new homes filling in around older farmland, and like the rest of the area it sees its share of storm and ice outages that take down power for hours at a time. We install, repair, maintain, and replace home standby generators throughout the Fletcher area. The mix here is suburban and rural at once: newer homes on lots subdivided from farm tracts, where we size a whole-house unit for the full panel including the heat pump, and long-owned properties out toward Cane Creek and Mills River that run on a well and septic pump and need backup to keep water flowing. We install Generac and comparable units on propane or natural gas, wire in an automatic transfer switch, and commission the system so the home comes back on its own. We know the Cane Creek and Mills River area and how to set a generator on the lots out here without a fuss. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Cane Creek', 'Mills River', 'Royal Pines', 'Fanning Fields', 'Livingston Creek'],
    landmarks: ['Cane Creek', 'Asheville Regional Airport', 'US-25 corridor', 'Mills River'],
    issues: [
      {
        title: 'New builds wanting whole-house backup',
        body: 'Fletcher’s subdivisions are full of newer homes with heat pumps and full electrical panels, and owners want the whole house to keep running in an outage. We size whole-house generators for the heat pump startup and the full load so the home runs normally when the grid is down.',
      },
      {
        title: 'Rural homes on a well and septic',
        body: 'Out toward Cane Creek and Mills River, plenty of homes run on a private well and septic pump. An outage there means no water and no wastewater, so we size generators to keep both pumps and the heat running through a storm.',
      },
      {
        title: 'Storm and ice outages on the corridor',
        body: 'Even along the built-up US-25 corridor, ice and summer storms knock out power around Fletcher. A standby generator with an automatic transfer switch restores the home within seconds, so an outage does not empty the fridge or leave you in the cold.',
      },
    ],
    nearby: ['mills-river', 'hendersonville', 'naples'],
    faqs: [
      {
        q: 'Do you serve Fletcher and the Cane Creek area?',
        a: 'Yes. We cover Fletcher and the surrounding communities along the Buncombe–Henderson line, including Cane Creek, Mills River, and Royal Pines. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'Can a generator run my heat pump during an outage?',
        a: 'Yes, when it is sized for it. Heat pumps are a large startup load, so we include the compressor and any backup heat strips in the load calculation. A properly sized whole-house unit keeps your Fletcher home heated and cooled right through an outage.',
      },
      {
        q: 'I just built a new home in Fletcher — should I plan for a generator?',
        a: 'It is a smart move, and easier to plan now. We can size a unit to your full panel, place the pad and transfer switch cleanly, and coordinate the gas hookup so your new home has automatic backup power from the start.',
      },
    ],
  },
  {
    slug: 'mills-river',
    name: 'Mills River',
    state: 'NC',
    intro:
      'Mills River is a spread-out, rural community along the river of the same name, between Hendersonville and the airport, full of farmland, the North Carolina Arboretum nearby, and homes scattered across the valley and up into the foothills. Almost everything out here runs on a well and septic pump, so a power outage is not a minor inconvenience — it cuts your water and your wastewater along with the lights, and the area sees plenty of ice and storm outages every year. We install, repair, maintain, and replace home standby generators throughout the Mills River area. The local pattern is rural: working farms and long-owned homes with big electrical demands, newer houses on lots carved from larger tracts, and properties at the end of long driveways where the power is the first thing to go and the last to come back. We install Generac and comparable units on propane — the usual fuel out here — size them with a real load calculation to carry the well pump, septic pump, heat, and the essentials, and wire in an automatic transfer switch so the home comes back on its own. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['North Mills River', 'School House Road area', 'Banner Farm Road', 'Jeffress Road area'],
    landmarks: ['Mills River', 'NC Arboretum', 'Pisgah National Forest', 'Mills River Park'],
    issues: [
      {
        title: 'Well and septic homes lose water in an outage',
        body: 'Mills River is well-and-septic country, so an outage stops your water and your wastewater, not just your lights. We size standby generators to carry the well pump’s hard startup and the septic or lift pump so your home keeps running through a storm.',
      },
      {
        title: 'Long rural feeders, slow restoration',
        body: 'Homes at the end of long driveways and rural feeders out here tend to lose power first and get it back last. A standby generator means you are not waiting on the utility — the home transfers to backup automatically within seconds and stays running for days on propane.',
      },
      {
        title: 'Farms and homes with big electrical loads',
        body: 'Working farms and larger homes around Mills River have serious electrical demands. We do a real load calculation so the generator can carry what matters during an outage rather than stumbling when the well pump or heat kicks on.',
      },
    ],
    nearby: ['fletcher', 'naples', 'horse-shoe'],
    faqs: [
      {
        q: 'Do you cover Mills River and the rural areas around it?',
        a: 'Yes. We cover Mills River and the surrounding valley and foothill properties, including the homes at the end of long rural driveways. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'Most homes here are on propane — does that work for a generator?',
        a: 'Yes, propane is the standard fuel for standby generators out here and works great. We size the gas connection so the unit runs for days on a typical residential tank, and advise on tank capacity so a long mountain outage does not catch you short.',
      },
      {
        q: 'My home is on a well — how do I keep water during an outage?',
        a: 'A standby generator sized to include your well pump keeps water flowing the whole time. Well pumps draw hard when they start, so we account for that startup surge in the load calculation, which keeps the generator from stumbling when the pump kicks on.',
      },
    ],
  },
  {
    slug: 'flat-rock',
    name: 'Flat Rock',
    state: 'NC',
    intro:
      'Flat Rock sits just south of Hendersonville, a historic village of summer estates, the Carl Sandburg Home, and the Flat Rock Playhouse, surrounded by wooded lots and rolling foothill terrain. It is an established, leafy community — and all those mature trees mean power lines come down in ice and wind storms, leaving homes dark while crews work to clear the lines. We install, repair, maintain, and replace home standby generators throughout the Flat Rock area. The local mix leans toward established and second homes whose owners want the property to take care of itself when the power drops, plus rural lots on a well and septic pump that lose water in an outage. We install Generac and comparable units on propane or natural gas, do a real load calculation to size for the whole home or the essentials, and wire in an automatic transfer switch so the house comes back automatically — important on a second home that may be empty when a storm hits. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Kenmure', 'Highland Lake', 'Little River Road area', 'Rutledge', 'Glassy Mountain area'],
    landmarks: ['Carl Sandburg Home', 'Flat Rock Playhouse', 'Highland Lake', 'The Park at Flat Rock'],
    issues: [
      {
        title: 'Mature trees bring down lines',
        body: 'Flat Rock’s wooded, established lots mean ice and wind regularly drop limbs across power lines, and restoration can take a while. A standby generator with an automatic transfer switch restores the whole home within seconds so you are not waiting in the dark.',
      },
      {
        title: 'Second homes that sit empty in a storm',
        body: 'Many Flat Rock homes are second homes or summer places that may be empty when a storm hits. An automatic generator keeps the heat, the sump or septic pump, and the freezer running on its own, protecting the home whether or not anyone is there.',
      },
      {
        title: 'Established homes needing modern backup',
        body: 'A lot of Flat Rock estates have no backup power or an aging unit. We install modern Generac and comparable generators with automatic transfer switches, sized to the home, so an established property finally has dependable, hands-off backup.',
      },
    ],
    nearby: ['east-flat-rock', 'hendersonville', 'zirconia'],
    faqs: [
      {
        q: 'Do you serve Flat Rock and the surrounding area?',
        a: 'Yes. We cover Flat Rock and the nearby communities, including Kenmure, Highland Lake, and the wooded lots toward Glassy Mountain. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'My Flat Rock home is a second home — will the generator run when I’m away?',
        a: 'Yes, that is exactly what it is for. The automatic transfer switch starts the generator and transfers the home the moment power drops, with no one present, and it runs a weekly self-test so it stays ready. Your heat, pumps, and freezer keep running whether or not you are there.',
      },
      {
        q: 'How loud is a standby generator near the house?',
        a: 'Modern units are reasonably quiet, and we place the generator to keep noise away from bedrooms and patios where the lot allows, within code clearances. On the wooded Flat Rock lots there is usually room to site it well away from living spaces.',
      },
    ],
  },
  {
    slug: 'laurel-park',
    name: 'Laurel Park',
    state: 'NC',
    intro:
      'Laurel Park sits on the wooded slopes just west of Hendersonville, a hillside town of established homes climbing toward Jump Off Rock with long views over the valley. The terrain is the story here: homes perch on grades among mature trees, and those trees and the elevation mean ice and wind storms bring down lines and leave the hill dark. We install, repair, maintain, and replace home standby generators throughout Laurel Park. The local mix is established and retirement homes whose owners want the home to handle an outage on its own, on lots where the grade and the trees take real planning to place a unit well. We install Generac and comparable generators on propane or natural gas, do a real load calculation to size for the whole home or the essentials, and wire in an automatic transfer switch so the house comes back automatically. We know how to set a generator on a sloped Laurel Park lot within code clearances and keep the noise away from living spaces. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Jump Off Rock area', 'Laurel Park Highway', 'White Pine Drive area', 'Echo Mountain area'],
    landmarks: ['Jump Off Rock', 'Rhododendron Lake', 'Echo Mountain', 'Laurel Park Village'],
    issues: [
      {
        title: 'Hillside lots and tree-lined streets',
        body: 'Laurel Park’s wooded slopes mean limbs come down on lines in ice and wind, and the hillside can be slow to restore. We place a standby generator to fit the grade and clearances, and the automatic switch brings the home back within seconds of an outage.',
      },
      {
        title: 'Retirement and established homes',
        body: 'Many Laurel Park homeowners are retirees who want the home to take care of itself in a storm, not wrestle a portable generator on a hill. A standby unit with an automatic transfer switch does exactly that — hands-off, automatic backup for the whole home.',
      },
      {
        title: 'Placement on sloped, wooded lots',
        body: 'Setting a generator on a Laurel Park slope takes planning — grade, clearances from windows and the meter, and keeping noise off the patio. We handle the pad and placement so the unit is safe, serviceable, and out of the way.',
      },
    ],
    nearby: ['hendersonville', 'horse-shoe', 'flat-rock'],
    faqs: [
      {
        q: 'Do you serve Laurel Park?',
        a: 'Yes. We cover Laurel Park and the hillside neighborhoods toward Jump Off Rock and Echo Mountain. Tell us about the lot and the grade and we will come prepared to place the unit properly.',
      },
      {
        q: 'Can you install a generator on a steep, sloped lot?',
        a: 'Yes. Sloped lots are common in Laurel Park. We set a level pad, meet the required clearances from windows, doors, and the meter, and pick a spot that stays accessible for service and keeps noise away from living areas.',
      },
      {
        q: 'I’m retired and don’t want to deal with a portable — is a standby better?',
        a: 'Much better for that. A standby generator is permanent and fully automatic — no cords, no fuel cans, no going outside in an ice storm. It senses the outage, starts itself, and powers the home within seconds, then shuts down when utility power returns.',
      },
    ],
  },
  {
    slug: 'etowah',
    name: 'Etowah',
    state: 'NC',
    intro:
      'Etowah sits west of Hendersonville along US-64, a rural community of farms, the well-known Etowah Valley golf area, and homes spread across the valley between the French Broad and the foothills. Out here nearly everything runs on a well and septic pump, so an outage cuts your water and wastewater along with the lights, and the area sees the same ice and storm outages as the rest of Henderson County. We install, repair, maintain, and replace home standby generators throughout the Etowah area. The local mix is rural: long-owned homes and farms with real electrical demands, retirement and golf-community homes, and properties on long rural feeders that lose power first in a storm. We install Generac and comparable units on propane — the usual fuel out here — size them with a real load calculation to carry the well pump, septic pump, heat, and essentials, and wire in an automatic transfer switch so the home comes back on its own. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Etowah Valley', 'Horse Shoe edge', 'Brickyard Road area', 'US-64 corridor'],
    landmarks: ['Etowah Valley Golf', 'French Broad River', 'US-64 corridor', 'Pisgah views'],
    issues: [
      {
        title: 'Well and septic homes lose water',
        body: 'Etowah is well-and-septic country, so an outage stops your water and wastewater, not just your lights. We size standby generators to carry the well pump’s hard startup and the septic pump so the home keeps running through a storm.',
      },
      {
        title: 'Rural feeders slow to restore',
        body: 'Homes on the rural roads around Etowah tend to lose power first and get it back last. A standby generator means you are not waiting on the utility — the home transfers automatically within seconds and runs for days on propane.',
      },
      {
        title: 'Retirement and golf-community homes',
        body: 'Many Etowah homeowners want the home to handle an outage on its own. A standby unit with an automatic transfer switch delivers hands-off backup that keeps the whole home running while you are home or away.',
      },
    ],
    nearby: ['horse-shoe', 'hendersonville', 'mills-river'],
    faqs: [
      {
        q: 'Do you serve Etowah?',
        a: 'Yes. We cover Etowah and the surrounding valley along US-64, including the golf-community and rural homes. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My Etowah home is on a well — will a generator keep water on?',
        a: 'Yes, when it is sized to include the well pump. Well pumps draw hard on startup, so we account for that surge in the load calculation. A right-sized unit keeps your water and septic running through the whole outage.',
      },
      {
        q: 'How long will a generator run on propane during an outage?',
        a: 'It depends on tank size and load, but a typical residential propane tank carries a home standby unit through several days of normal use. We size the gas connection and advise on tank capacity so a long outage does not catch you short.',
      },
    ],
  },
  {
    slug: 'edneyville',
    name: 'Edneyville',
    state: 'NC',
    intro:
      'Edneyville sits in the apple country east of Hendersonville, climbing toward the Bearwallow Mountain ridge, a rural community of orchards, farms, and homes scattered across the higher, more exposed terrain of eastern Henderson County. The elevation and the orchards mean the area takes the brunt of ice storms, and outages here can run long while crews clear rural lines. Nearly everything runs on a well and septic pump, so when the power drops you lose water and wastewater too. We install, repair, maintain, and replace home standby generators throughout the Edneyville area. The local pattern is rural and agricultural: working orchards and farms with real electrical demands, long-owned homes, and properties on exposed ridges that lose power often. We install Generac and comparable units on propane — the usual fuel out here — size them with a real load calculation to carry the well pump, septic pump, heat, and essentials, and wire in an automatic transfer switch so the home comes back on its own. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Bearwallow', 'Sugarloaf', 'Apple orchard country', 'US-64 East corridor'],
    landmarks: ['Bearwallow Mountain', 'Henderson County apple orchards', 'Sugarloaf Mountain', 'US-64 East'],
    issues: [
      {
        title: 'Exposed ridges take the brunt of ice',
        body: 'Edneyville’s higher, more exposed terrain toward Bearwallow gets hit hard by ice storms, and outages can run long. A standby generator with an automatic transfer switch restores the whole home within seconds, so a long outage does not leave you stranded.',
      },
      {
        title: 'Orchards and farms with big loads',
        body: 'Working orchards and farms around Edneyville have serious electrical demands. We do a real load calculation so the generator carries what matters during an outage rather than stumbling when a pump or heat kicks on.',
      },
      {
        title: 'Well and septic homes lose water',
        body: 'Edneyville is well-and-septic country, so an outage cuts your water and wastewater. We size generators to keep the well pump and septic pump running, which is the difference between riding out a storm and hauling water.',
      },
    ],
    nearby: ['dana', 'hendersonville', 'east-flat-rock'],
    faqs: [
      {
        q: 'Do you serve Edneyville and the apple-country area?',
        a: 'Yes. We cover Edneyville and the surrounding orchard country toward Bearwallow and Sugarloaf. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'Outages here run long — how long can a generator keep going?',
        a: 'On propane, a typical residential tank carries a home standby unit through several days of normal use; on natural gas it runs indefinitely. We size the connection and advise on tank capacity so a long ice-storm outage does not catch you short.',
      },
      {
        q: 'I have a well and lose water when the power’s out — can a generator fix that?',
        a: 'Yes. A standby generator sized to include your well pump keeps water flowing the whole outage. We account for the pump’s hard startup surge so the unit carries it without stumbling, along with the septic pump and heat.',
      },
    ],
  },
  {
    slug: 'dana',
    name: 'Dana',
    state: 'NC',
    intro:
      'Dana sits east of Hendersonville along US-64, a rural community in the apple-orchard belt of Henderson County, with farms, scattered homes, and the higher ground running toward Edneyville and the Bearwallow ridge. Like the rest of eastern Henderson County, it takes ice storms hard and sits on rural feeders that lose power first and restore last, and nearly every home runs on a well and septic pump that goes down with the grid. We install, repair, maintain, and replace home standby generators throughout the Dana area. The local pattern is rural and agricultural: long-owned homes and farms, properties on long driveways off the highway, and homes where an outage means no water until the power is back. We install Generac and comparable units on propane — the usual fuel out here — size them with a real load calculation to carry the well pump, septic pump, heat, and essentials, and wire in an automatic transfer switch so the home comes back on its own. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Dana community', 'Clear Creek edge', 'US-64 East corridor', 'Apple orchard roads'],
    landmarks: ['Henderson County apple orchards', 'US-64 East', 'Clear Creek', 'Bearwallow views'],
    issues: [
      {
        title: 'Ice storms and long outages',
        body: 'Eastern Henderson County around Dana takes ice storms hard, and rural outages can run long. A standby generator with an automatic transfer switch brings the whole home back within seconds, so you are not waiting on the utility in the cold.',
      },
      {
        title: 'Well and septic homes lose water',
        body: 'Dana is well-and-septic country, so an outage stops your water and wastewater, not just your lights. We size generators to keep the well pump and septic pump running through a storm.',
      },
      {
        title: 'Long driveways, rural feeders',
        body: 'Homes off the highway and at the end of long driveways around Dana lose power first and get it back last. A standby generator means you are not waiting on the line crew — the home transfers automatically and runs for days on propane.',
      },
    ],
    nearby: ['edneyville', 'hendersonville', 'east-flat-rock'],
    faqs: [
      {
        q: 'Do you serve Dana?',
        a: 'Yes. We cover Dana and the surrounding apple-country communities along US-64 East. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'Will a standby generator keep my well running in an outage?',
        a: 'Yes, when it is sized for the well pump. Well pumps draw hard on startup, so we include that surge in the load calculation. A right-sized unit keeps your water and septic running the whole time the grid is down.',
      },
      {
        q: 'Do you service generators you didn’t install?',
        a: 'Yes. We repair and maintain Generac and comparable standby generators regardless of who installed them, so homeowners around Dana have a local crew to call for service, repairs, and maintenance plans.',
      },
    ],
  },
  {
    slug: 'horse-shoe',
    name: 'Horse Shoe',
    state: 'NC',
    intro:
      'Horse Shoe sits along the French Broad River west of Hendersonville, named for the bend in the river, a rural community of farms, riverbottom land, and homes spread along US-64 between Etowah and Mills River. Out here homes run on a well and septic pump, so an outage cuts your water and wastewater along with the lights, and the area sees the same ice and storm outages as the rest of Henderson County. We install, repair, maintain, and replace home standby generators throughout the Horse Shoe area. The local mix is rural: farms and long-owned homes with real electrical demands, newer homes on subdivided river-valley lots, and properties on rural feeders that lose power first in a storm. We install Generac and comparable units on propane — the usual fuel out here — size them with a real load calculation to carry the well pump, septic pump, heat, and essentials, and wire in an automatic transfer switch so the home comes back on its own. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Horse Shoe community', 'River Road area', 'Banner Farm Road edge', 'US-64 corridor'],
    landmarks: ['French Broad River', 'US-64 corridor', 'Horse Shoe farmland', 'River bend'],
    issues: [
      {
        title: 'Well and septic homes lose water',
        body: 'Horse Shoe is well-and-septic country, so an outage stops your water and wastewater. We size standby generators to carry the well pump’s hard startup and the septic pump so your home keeps running through a storm.',
      },
      {
        title: 'River-valley homes and high water tables',
        body: 'Homes along the French Broad in Horse Shoe may rely on sump or lift pumps where the ground stays damp, and losing those in an outage risks water problems. We size generators to keep those pumps running along with the well and heat.',
      },
      {
        title: 'Rural feeders slow to restore',
        body: 'Homes on the rural roads around Horse Shoe lose power first and get it back last. A standby generator transfers the home automatically within seconds and runs for days on propane, so you are not waiting on the utility.',
      },
    ],
    nearby: ['etowah', 'mills-river', 'hendersonville'],
    faqs: [
      {
        q: 'Do you serve Horse Shoe?',
        a: 'Yes. We cover Horse Shoe and the surrounding river-valley communities along US-64 between Etowah and Mills River. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My home along the river uses a sump pump — can a generator back it up?',
        a: 'Yes. We can include a sump or lift pump in the load calculation so it keeps running in an outage, along with the well pump, septic pump, and heat — important where the ground stays damp near the river.',
      },
      {
        q: 'Is propane a good fuel for a generator out here?',
        a: 'Yes, propane is the standard fuel for standby generators in the Horse Shoe area and works great. We size the gas connection so the unit runs for days on a typical tank and advise on capacity for a long outage.',
      },
    ],
  },
  {
    slug: 'east-flat-rock',
    name: 'East Flat Rock',
    state: 'NC',
    intro:
      'East Flat Rock sits just southeast of Hendersonville, a community along US-176 and the old rail line, a mix of established neighborhoods, some on city services and many on a well and septic pump out toward the rural edges. It takes the same ice and storm outages as the rest of Henderson County, and the wooded, established lots mean limbs come down on lines and leave homes dark. We install, repair, maintain, and replace home standby generators throughout the East Flat Rock area. The local mix is established homes whose owners want hands-off backup, plus rural properties that lose water when the well pump goes down with the grid. We install Generac and comparable units on propane or natural gas, do a real load calculation to size for the whole home or the essentials, and wire in an automatic transfer switch so the house comes back automatically. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Blue Ridge community', 'US-176 corridor', 'East Flat Rock village', 'Tracy Grove area'],
    landmarks: ['US-176 corridor', 'Blue Ridge Community College nearby', 'East Flat Rock Park', 'Green River access'],
    issues: [
      {
        title: 'Ice and wind drop lines',
        body: 'East Flat Rock’s wooded, established lots mean ice and wind regularly bring down limbs and lines, leaving homes dark. A standby generator with an automatic transfer switch restores the whole home within seconds, so you are not waiting in the cold.',
      },
      {
        title: 'Rural homes on a well and septic',
        body: 'Out toward the edges of East Flat Rock, homes run on a private well and septic pump, so an outage cuts your water and wastewater. We size generators to keep both pumps and the heat running through a storm.',
      },
      {
        title: 'Established homes needing modern backup',
        body: 'Many East Flat Rock homes have no backup power or an aging unit without an automatic transfer switch. We install modern Generac and comparable generators with automatic switches so the home comes back on its own.',
      },
    ],
    nearby: ['flat-rock', 'hendersonville', 'zirconia'],
    faqs: [
      {
        q: 'Do you serve East Flat Rock?',
        a: 'Yes. We cover East Flat Rock and the surrounding neighborhoods along US-176, from the village out to the rural edges. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'How quickly does a standby generator restore power?',
        a: 'Typically within seconds. The automatic transfer switch senses the outage, starts the generator, and transfers your home over with no action from you, then switches back and shuts down when utility power returns.',
      },
      {
        q: 'Can you size a smaller generator for just the essentials?',
        a: 'Yes. If you do not need whole-house backup, we can size an essentials unit with a load-managed transfer switch to keep the well pump, septic pump, heat, and refrigerator running on a smaller, less expensive generator.',
      },
    ],
  },
  {
    slug: 'zirconia',
    name: 'Zirconia',
    state: 'NC',
    intro:
      'Zirconia sits in the far south of Henderson County near the South Carolina line, along US-25 toward the Green River and Lake Summit, a rural community of foothill homes, lake properties, and forested lots. It is some of the more remote, exposed country in the county, and outages from ice and storms can run long while crews work distant rural lines. Nearly everything out here runs on a well and septic pump, so an outage means no water and no wastewater. We install, repair, maintain, and replace home standby generators throughout the Zirconia area. The local mix is rural and lake: long-owned homes on well and septic, lake and second homes near Lake Summit and the Green River that may sit empty when a storm hits, and forested lots at the end of long driveways. We install Generac and comparable units on propane — the usual fuel out here — size them with a real load calculation, and wire in an automatic transfer switch so the home comes back on its own, even when nobody is there. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Lake Summit', 'Green River', 'Tuxedo edge', 'US-25 South corridor'],
    landmarks: ['Lake Summit', 'Green River', 'Green River Cove', 'US-25 South'],
    issues: [
      {
        title: 'Remote, exposed, slow to restore',
        body: 'Zirconia’s far-south, forested terrain takes ice and storms hard and sits on distant rural lines, so outages can run long. A standby generator with an automatic transfer switch brings the home back within seconds, so you are not waiting on a distant crew.',
      },
      {
        title: 'Lake and second homes that sit empty',
        body: 'Lake and second homes near Lake Summit and the Green River may be empty when a storm hits. An automatic generator keeps the heat, pumps, and freezer running on its own, protecting the home whether or not anyone is there.',
      },
      {
        title: 'Well and septic homes lose water',
        body: 'Zirconia is well-and-septic country, so an outage stops your water and wastewater. We size generators to keep the well pump and septic pump running, which matters on these remote properties.',
      },
    ],
    nearby: ['flat-rock', 'east-flat-rock', 'hendersonville'],
    faqs: [
      {
        q: 'Do you serve Zirconia and the Lake Summit area?',
        a: 'Yes. We cover Zirconia and the surrounding communities toward Lake Summit, the Green River, and the South Carolina line. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My lake home sits empty part of the year — will the generator run when I’m away?',
        a: 'Yes, that is exactly what it is for. The automatic transfer switch starts the generator and transfers the home the moment power drops, with no one present, and a weekly self-test keeps it ready. Your heat, pumps, and freezer keep running whether or not you are there.',
      },
      {
        q: 'Outages out here can be long — what fuel and runtime should I plan for?',
        a: 'Most homes here run on propane, which carries a standby unit through several days of normal use on a typical tank. We size the connection and advise on tank capacity so a long, remote outage does not catch you short.',
      },
    ],
  },
  {
    slug: 'naples',
    name: 'Naples',
    state: 'NC',
    intro:
      'Naples sits just north of Hendersonville along the US-25 corridor toward Fletcher, a community of established neighborhoods and newer homes between the city and the county line. It takes the same ice and summer-storm outages as the rest of Henderson County, and a mix of wooded lots and rural edges means lines come down and homes go dark several times a year. We install, repair, maintain, and replace home standby generators throughout the Naples area. The local mix is suburban and rural at once: established homes whose owners want hands-off backup, newer houses with heat pumps and full panels that want whole-house coverage, and rural properties on a well and septic pump that lose water in an outage. We install Generac and comparable units on propane or natural gas, do a real load calculation to size for the whole home or the essentials, and wire in an automatic transfer switch so the house comes back automatically. Tell us what you have or what you need, and we will give you a straight answer and a real price.',
    neighborhoods: ['Naples community', 'US-25 corridor', 'Mountain Road area', 'Howard Gap edge'],
    landmarks: ['US-25 corridor', 'Mud Creek', 'Henderson County line', 'Fletcher edge'],
    issues: [
      {
        title: 'Storm and ice outages',
        body: 'Naples sees the same ice and summer-storm outages as the rest of Henderson County, and wooded lots mean lines come down. A standby generator with an automatic transfer switch restores the home within seconds, so an outage barely interrupts you.',
      },
      {
        title: 'Newer homes wanting whole-house backup',
        body: 'Newer Naples homes with heat pumps and full panels often want the whole house to keep running in an outage. We size whole-house generators for the heat pump startup and the full load so the home runs normally when the grid is down.',
      },
      {
        title: 'Rural homes on a well and septic',
        body: 'Toward the rural edges of Naples, homes run on a well and septic pump, so an outage cuts your water and wastewater. We size generators to keep both pumps and the heat running through a storm.',
      },
    ],
    nearby: ['fletcher', 'hendersonville', 'mills-river'],
    faqs: [
      {
        q: 'Do you serve Naples?',
        a: 'Yes. We cover Naples and the surrounding communities along US-25 between Hendersonville and Fletcher. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'Can a generator run my heat pump and the whole home?',
        a: 'Yes, when it is sized for it. We include the heat pump compressor and any backup heat strips in the load calculation so a whole-house unit carries your Naples home’s heating, cooling, and full panel through an outage.',
      },
      {
        q: 'Do you offer maintenance plans to keep the unit ready?',
        a: 'Yes. We offer service plans that keep your generator on a maintenance schedule — oil, filters, a battery test, and a load test — so it actually starts when a storm hits, and so the maintenance stays documented for your warranty.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
