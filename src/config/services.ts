/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

// TODO: placeholder service photos — copied from template stock and reused across slugs.
// Replace each with a real, relevant generator photo before launch.
import generatorServicesImg from '../assets/services/generator-services.jpg';
import standbyInstallImg from '../assets/services/standby-generator-installation.jpg';
import wholeHouseImg from '../assets/services/whole-house-generator-installation.jpg';
import generatorRepairImg from '../assets/services/generator-repair.jpg';
import generatorMaintenanceImg from '../assets/services/generator-maintenance.jpg';
import transferSwitchImg from '../assets/services/transfer-switch-installation.jpg';
import generatorReplacementImg from '../assets/services/generator-replacement.jpg';
import emergencyGeneratorImg from '../assets/services/emergency-generator-service.jpg';

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
  name: string; // Full service name, e.g. "Standby Generator Installation"
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
    slug: 'generator-services',
    name: 'Standby Generator Services',
    short: 'Generator Services',
    blurb: 'Standby generator installation, repair, maintenance, and replacement — one local crew that keeps the power on across Henderson County.',
    description:
      'We are a full-service standby generator company covering Henderson County and the surrounding mountains, from Hendersonville and Flat Rock out to the rural roads around Mills River, Etowah, and Edneyville. If it has to do with a home standby generator, we handle it: sizing and installing a new Generac or comparable unit, wiring in an automatic transfer switch, repairing a generator that will not start or runs but makes no power, keeping units on a maintenance plan so they actually work when the grid drops, and replacing tired old generators that are past their service life. Out here in the NC mountains the power goes out — ice storms, summer thunderstorms, and trees on lines knock it out several times a year — and a lot of homes sit on a well and septic, so when the power quits you lose water and your septic pump too. A properly installed standby generator on propane or natural gas brings the whole house back online automatically, within seconds, whether you are home or not. You call, you tell us what you have or what you need, and we give you a straight answer and a real price. No pressure, no scare tactics — just a crew that knows mountain backup power.',
    sections: [
      {
        h: 'One crew for the whole generator',
        body: 'A lot of folks buy a generator from one place, hire an electrician to wire it, a plumber to run the gas, and then have nobody to call when it throws a code. We do all of it. Load calculation and sizing, the concrete or composite pad, the automatic transfer switch, the gas hookup coordination, startup and commissioning, and the maintenance and repairs after — it is one phone call and one crew that already knows your installation. That continuity matters: the people who installed your generator are the people who know how it was set up when it needs service three winters from now.',
      },
      {
        h: 'Built for mountain homes that lose power',
        body: 'Western North Carolina is hard on the grid. Ice loads bring down limbs and lines, summer storms roll through the ridges, and a single tree across a rural feeder can leave a cove dark for hours or days. Many Henderson County homes are also on a private well and a septic pump, so an outage does not just kill the lights — it stops your water and your wastewater. A whole-house standby generator sized for your home keeps the well pump, the septic pump, the heat, the fridge, and the essentials running automatically. We size and install for real mountain outage conditions, not a best-case afternoon.',
      },
      {
        h: 'Straight answers, honest pricing',
        body: 'Generators are easy to oversell — a bigger unit, more circuits, an upgraded transfer switch you may not need. We do not work that way. We do a real load calculation, tell you what your home actually needs to ride out an outage, and quote it up front. If a smaller air-cooled unit covers you, we say so. If your old generator is worth repairing instead of replacing, we tell you that too — so you can plan instead of getting pushed into the biggest invoice.',
      },
    ],
    points: [
      'Installation, repair, maintenance, and replacement — one crew',
      'Generac and comparable standby generators for Henderson County homes',
      'Propane and natural-gas units sized by a real load calculation',
      'Automatic transfer switches so the home comes back without you lifting a finger',
      'Honest, up-front pricing with no surprise add-ons',
      'Keeps your well pump, septic pump, heat, and essentials running through an outage',
    ],
    faqs: [
      {
        q: 'What size standby generator does my home need?',
        a: 'It depends on what you want to keep running. A whole-house unit covers everything; a smaller unit can cover the essentials — well pump, septic pump, heat, refrigerator, and key circuits. We do a load calculation based on your actual home and how you use it, then recommend a size honestly instead of just selling you the biggest unit.',
      },
      {
        q: 'Do you handle the whole job or just the generator?',
        a: 'The whole job. We size and supply the generator, set the pad, wire in the automatic transfer switch, coordinate the propane or natural-gas hookup, commission the unit, and service it afterward. One call covers it, and the crew that installs it is the crew that knows it when it needs maintenance or a repair.',
      },
      {
        q: 'Why does a generator matter so much for mountain homes here?',
        a: 'Because outages in Henderson County are frequent and can last — ice storms and summer thunderstorms regularly take down power for hours or days. And many homes run on a well and septic pump, so an outage cuts your water and your wastewater too. A standby generator restores the whole house automatically, usually within seconds, even when nobody is home.',
      },
      {
        q: 'Propane or natural gas — which fuel should I use?',
        a: 'Whatever your home already has. If you are on natural gas, the generator ties into that line for unlimited runtime. Most mountain homes out here are on propane, which works great — we size the connection so the unit runs for days on a typical tank. We will look at what you have and set it up right for your property.',
      },
    ],
    image: generatorServicesImg,
    imageAlt: 'Home standby generator installed beside a house in Henderson County, North Carolina',
    hubOnly: true,
  },
  {
    slug: 'standby-generator-installation',
    name: 'Standby Generator Installation',
    short: 'Generator Installation',
    blurb: 'A new standby generator, sized right and installed to code — automatic backup power for your Henderson County home.',
    description:
      'A standby generator is a permanent unit that sits outside your home, runs on propane or natural gas, and starts automatically the moment the power drops — no cords, no portable to drag out in an ice storm. Installing one right is more than setting a box on the ground. We size the generator to your home with a real load calculation, set it on a proper pad with the clearances the code and the manufacturer require, wire in an automatic transfer switch, coordinate the gas hookup, and commission the unit so it starts, transfers, and runs the way it should. We install Generac and comparable standby generators across Henderson County. Out here the install also has to account for mountain realities — well and septic pumps that need to stay on, propane as the usual fuel, and homes on rural feeders that lose power often. We do it once, do it to code, and leave you with a system that brings the whole house back automatically while you are asleep or away.',
    sections: [
      {
        h: 'Sizing it right — not too big, not too small',
        body: 'The single most important decision is the size. Too small and the generator cannot carry your home; too big and you have paid for capacity you will never use and a unit that burns more fuel. We do a real load calculation: your well pump and septic pump, heat or heat strips, water heater, refrigerator and freezer, and the circuits you actually care about during an outage. From that we recommend a whole-house unit or a right-sized essentials unit and tell you honestly which makes sense for your home.',
      },
      {
        h: 'A code-compliant, permitted install',
        body: 'A standby generator install involves electrical work, a fuel connection, and exhaust clearances, and it needs to be permitted and inspected. We handle the pad, the required distances from windows, doors, and the meter, the automatic transfer switch tied into your panel, and the coordination with your propane or gas supplier. Doing it to code is not red tape — it is what keeps the install safe, keeps your warranty intact, and keeps the generator running when you need it.',
      },
      {
        h: 'Commissioned and ready before we leave',
        body: 'An installed generator is not finished until it has been started, loaded, and proven. We commission the unit: confirm it starts on a simulated outage, transfers the load through the switch within seconds, runs cleanly, and transfers back when utility power returns. We walk you through the weekly self-test, the maintenance schedule, and what the indicator lights mean, so you are not guessing the first time a storm rolls through.',
      },
    ],
    points: [
      'Real load calculation to size the unit to your home',
      'Generac and comparable standby generators supplied and installed',
      'Proper pad and code-required clearances from windows, doors, and the meter',
      'Automatic transfer switch wired into your panel',
      'Propane or natural-gas hookup coordinated and connected',
      'Permitted, inspected, commissioned, and demonstrated before we leave',
    ],
    faqs: [
      {
        q: 'How long does a standby generator installation take?',
        a: 'Most residential installs are completed in one to two days on-site once the unit, the pad, and the permit are in hand. Lead time before that depends on generator availability and the permit and inspection schedule. We give you a realistic timeline up front so you are not left wondering.',
      },
      {
        q: 'Where does the generator have to be placed?',
        a: 'It sits outside on a pad, with manufacturer- and code-required clearances from windows, doors, vents, and combustibles, and within a workable distance of your gas supply and electrical panel. On mountain lots we work with the grade and the space you have. We pick a spot that meets code, keeps noise away from bedrooms where possible, and stays accessible for service.',
      },
      {
        q: 'Do I need a permit, and do you handle it?',
        a: 'Yes, a standby generator install requires electrical and usually gas permits and an inspection in Henderson County. We handle the permitting and the inspection as part of the job. A permitted, inspected install protects your warranty and, more importantly, makes sure the work is safe.',
      },
      {
        q: 'Will it really start on its own when the power goes out?',
        a: 'Yes. The automatic transfer switch senses the outage, signals the generator to start, and transfers your home to generator power — typically within seconds — with no action from you. When utility power returns, it transfers back and shuts the generator down. It also runs a brief self-test each week so you know it is ready.',
      },
    ],
    image: standbyInstallImg,
    imageAlt: 'New standby generator being installed at a home in Henderson County, North Carolina',
  },
  {
    slug: 'whole-house-generator-installation',
    name: 'Whole-House Generator Installation',
    short: 'Whole-House Generator',
    blurb: 'Back up the entire home — every circuit, every essential — with a whole-house standby generator built for mountain outages.',
    description:
      'A whole-house generator backs up your entire home, not just a handful of circuits. When the power drops, the whole panel transfers to generator power: heat and air, the well and septic pumps, the water heater, the kitchen, the office, and every outlet — automatically, within seconds. For Henderson County homes that lose power to ice and storms several times a year, and that depend on a well and septic pump for water, a whole-house unit is the difference between an outage you barely notice and one that empties your fridge and leaves you hauling water. We size, install, and commission whole-house standby generators across Henderson County, on propane or natural gas. We do a full load calculation so the unit can actually carry the entire home, wire in a service-rated automatic transfer switch, and set it all up to code so it runs the way it should when a tree takes down the line at two in the morning.',
    sections: [
      {
        h: 'What "whole-house" really means',
        body: 'A whole-house system is sized and wired to carry your entire electrical panel, so during an outage your home runs essentially as it does on a normal day — central heat and air, both pumps, the water heater, the range, and every outlet. That is different from an "essentials" install that backs up only selected circuits. We will be straight about which one fits your home and budget, but if you want the lights-never-flicker experience, whole-house is what delivers it.',
      },
      {
        h: 'Sizing for a mountain home with a well and septic',
        body: 'Whole-house sizing here has to account for the big loads that matter most when the grid is down: a well pump that draws hard on startup, a septic or lift pump, and electric heat or heat-pump backup strips that pull serious wattage in a cold snap. We calculate those real-world startup and running loads — not just a nameplate total — so the generator does not stumble when the well kicks on during a winter outage. That is exactly where an undersized unit fails homeowners.',
      },
    ],
    points: [
      'Backs up the entire electrical panel, not just selected circuits',
      'Load calculation sized for well-pump and heat-strip startup surges',
      'Service-rated automatic transfer switch for whole-home transfer',
      'Propane or natural-gas units for days of unattended runtime',
      'Keeps water, wastewater, heat, and the full home running through an outage',
      'Permitted, inspected, and commissioned to manufacturer spec',
    ],
    faqs: [
      {
        q: 'What is the difference between whole-house and an essential-circuits generator?',
        a: 'A whole-house generator carries your entire panel, so the home runs normally during an outage. An essential-circuits setup backs up only selected loads — usually the well pump, septic pump, heat, and the fridge — on a smaller, less expensive unit. Both are valid; we help you weigh comfort against budget and size the right one.',
      },
      {
        q: 'Can a whole-house generator run my central heat and air?',
        a: 'Yes, when it is sized for it. Heat pumps, AC compressors, and electric heat strips are large startup loads, so the load calculation has to include them. We size the unit to carry your HVAC along with the rest of the home so you keep heat in an ice storm and cooling in a summer outage.',
      },
      {
        q: 'How long can it run during a multi-day outage?',
        a: 'On natural gas, indefinitely — it draws from the utility line. On propane, runtime depends on tank size and load, but a typical residential tank carries a whole-house unit through several days of normal use. We size the gas connection and advise on tank capacity so a long mountain outage does not catch you short.',
      },
    ],
    image: wholeHouseImg,
    imageAlt: 'Whole-house standby generator backing up a mountain home in Henderson County, North Carolina',
  },
  {
    slug: 'generator-repair',
    name: 'Generator Repair',
    short: 'Generator Repair',
    blurb: 'Won’t start, runs but makes no power, or throwing an error code? We diagnose and repair standby generators of any brand.',
    description:
      'A standby generator only earns its keep if it works the moment you need it — and the worst time to find out it does not is during an outage. We diagnose and repair home standby generators across Henderson County: units that crank but will not start, units that start but produce no power, units stuck on an error code, hard-starting engines, dead batteries, failed transfer switches, and generators that have quietly stopped running their weekly self-test. We work on Generac and comparable brands. A real repair starts with a real diagnosis — we read the controller, check the fuel and gas pressure, test the battery and charger, inspect the transfer switch, and find the actual fault instead of throwing parts at it. Then we fix it and prove it under load. Out here, where an outage can mean no water and no heat, a generator that does not start is not a someday problem, so we get you back to a unit you can count on.',
    sections: [
      {
        h: 'The failures we see most',
        body: 'Most no-start calls come down to a handful of things: a dead or weak battery (the most common cause by far), a fuel or gas-pressure problem, a controller fault or error code, fouled or worn spark plugs, a clogged carburetor on a unit that has sat, or a failed automatic transfer switch that never tells the generator to start. We carry the common parts and diagnose the actual fault before we replace anything, so you are not paying for guesses.',
      },
      {
        h: 'Runs but no power — and the transfer switch',
        body: 'A generator that starts and runs but does not power the house usually points to the transfer switch or the controls rather than the engine. The switch may not be transferring the load, a control board may have failed, or a fault may be holding the output offline. We test the switch operation, the controls, and the output so we fix the real link in the chain — a running engine is useless if the switch never hands your home over to it.',
      },
    ],
    points: [
      'Diagnosis of no-start, no-power, hard-start, and error-code faults',
      'Battery, charger, fuel, gas-pressure, and ignition testing',
      'Automatic transfer switch and control-board repair',
      'Generac and comparable brands serviced',
      'Real diagnosis first — we fix the actual fault',
      'Repair proven under load before we call it done',
    ],
    faqs: [
      {
        q: 'My generator won’t start during an outage — what’s the most likely cause?',
        a: 'A dead or weak battery, by a wide margin. Standby generators sit idle between outages and the battery is the first thing to fail. After that it is usually fuel or gas pressure, a fouled plug, or a controller fault. We test the battery and charger first, then work through fuel and ignition, and find the real cause rather than guessing.',
      },
      {
        q: 'It runs but the house has no power — is the engine bad?',
        a: 'Usually not. When a generator runs but the home stays dark, the problem is most often the automatic transfer switch or the controls not handing the load over, not the engine. We test the switch, the control board, and the output to find the break in the chain and repair it.',
      },
      {
        q: 'My generator is showing an error code — what should I do?',
        a: 'Note the code and the indicator lights, and call us with them — it helps us arrive prepared. Some codes are simple (low battery, a tripped maintenance reminder); others point to a fault that should not be reset and run without diagnosis. We read the controller, interpret the code, and fix the underlying issue.',
      },
      {
        q: 'Do you repair generators you didn’t install?',
        a: 'Yes. We service Generac and comparable standby generators regardless of who installed them. If your installer is gone or unresponsive, we can take over diagnosis, repair, and ongoing maintenance so you have a local crew to call.',
      },
    ],
    image: generatorRepairImg,
    imageAlt: 'Technician repairing a home standby generator in Henderson County, North Carolina',
  },
  {
    slug: 'generator-maintenance',
    name: 'Generator Maintenance & Service Plans',
    short: 'Maintenance & Plans',
    blurb: 'A generator only helps if it starts. Scheduled maintenance and service plans keep yours ready before the next storm.',
    description:
      'A standby generator spends almost all of its life sitting idle, and that is exactly why it needs maintenance. Oil breaks down, batteries weaken, filters clog, and small fuel or connection problems go unnoticed for months — until an ice storm hits and the unit will not start. Routine maintenance is the single best thing you can do to make sure your generator actually runs when the power drops. We service home standby generators across Henderson County and offer service plans that keep yours on a schedule so you never have to remember it. A proper service covers an oil and filter change, a new air filter and spark plugs as needed, a battery test, a check of the fuel and gas connections, a controller and fault-log review, and a real load test to confirm the unit starts, transfers, and carries power. We work on Generac and comparable brands. Manufacturers also require regular maintenance to keep the warranty valid — so a service plan protects both your generator and your coverage.',
    sections: [
      {
        h: 'Why maintenance is not optional on a standby unit',
        body: 'Unlike a car you drive every day, a standby generator gives you almost no warning when something is wrong — it just sits there looking fine until the day it has to perform. Oil degrades over time even with low hours, batteries lose capacity, and rodents and weather get at fuel lines and connections on units that live outside. Annual service catches all of that on a calm day instead of leaving you to discover it in the dark during an outage.',
      },
      {
        h: 'What a service plan covers — and why it protects your warranty',
        body: 'Our service plans put your generator on a regular schedule: oil and filter changes, air filter and spark plugs as needed, a battery test and replacement when it is weak, an inspection of fuel and gas connections, a controller and fault-log review, and a load test to prove it runs under real load. Most manufacturers also require documented maintenance to keep the warranty valid — so a plan is not just peace of mind, it is what keeps your coverage intact and your unit dependable through the WNC storm seasons.',
      },
    ],
    points: [
      'Oil and filter change, air filter and spark plugs as needed',
      'Battery test and replacement before it leaves you stranded',
      'Fuel and gas-connection inspection',
      'Controller and fault-log review for problems before they strand you',
      'Load test confirming the unit starts, transfers, and carries power',
      'Service plans that keep maintenance on schedule and the warranty valid',
    ],
    faqs: [
      {
        q: 'How often does a standby generator need maintenance?',
        a: 'At least once a year, plus an oil change based on run hours if it has seen a lot of outage time. Annual service — oil, filters, plugs as needed, a battery test, and a load test — keeps the unit dependable and satisfies most manufacturers’ warranty requirements. A service plan handles the scheduling so you never miss it.',
      },
      {
        q: 'What does a service plan include?',
        a: 'A scheduled visit that covers the oil and filter change, air filter and spark plugs as needed, a battery test, an inspection of fuel and gas connections, a controller and fault-log review, and a load test to confirm the generator starts, transfers, and carries power. You get documented service that keeps the unit ready and the warranty valid.',
      },
      {
        q: 'My generator runs its weekly self-test — isn’t that enough?',
        a: 'No. The weekly self-test runs the engine briefly with no real load, so it will not catch a weak battery under strain, degraded oil, a fuel problem, or a transfer switch that fails to carry the house. Only a real service and load test confirms the unit will actually perform during an outage.',
      },
      {
        q: 'Will skipping maintenance void my warranty?',
        a: 'It can. Most manufacturers require documented, regular maintenance to honor the warranty, and an unmaintained unit that fails may not be covered. Our service plans keep the maintenance current and documented, which protects both your coverage and your confidence that the generator will start.',
      },
    ],
    image: generatorMaintenanceImg,
    imageAlt: 'Technician performing maintenance on a home standby generator in Henderson County, North Carolina',
  },
  {
    slug: 'transfer-switch-installation',
    name: 'Transfer Switch Installation',
    short: 'Transfer Switch',
    blurb: 'The brain of a backup system — an automatic transfer switch that moves your home to generator power safely and on its own.',
    description:
      'The automatic transfer switch is the part of a standby system that makes it automatic. It constantly watches your utility power, and the moment it drops, it signals the generator to start and safely switches your home from the grid to generator power — then switches back and shuts the generator down when utility power returns. Without a proper transfer switch, a generator cannot back up your home safely; it is the device that prevents dangerous backfeed onto the utility lines and protects line workers and your equipment. We install and replace automatic transfer switches across Henderson County, sized and wired to your panel and your generator. We install service-rated whole-house switches and essential-circuit (load-managed) switches, wire them to code, and commission the transfer so it happens cleanly within seconds. If you have a generator without an automatic switch, or an aging switch that is failing to transfer, this is the piece that makes the whole system trustworthy.',
    sections: [
      {
        h: 'Why the transfer switch matters as much as the generator',
        body: 'A generator is only as good as the switch that connects it. The automatic transfer switch isolates your home from the grid before it puts generator power on your wiring, which is what prevents backfeed — power flowing back onto the utility lines, where it can injure or kill a lineworker and damage your generator when the grid returns. It also makes the whole thing automatic, so the house comes back on its own whether you are home or not. Cutting corners here is exactly where unsafe, unreliable backup setups go wrong.',
      },
      {
        h: 'Whole-house vs. load-managed switches',
        body: 'A service-rated whole-house transfer switch hands your entire panel to the generator. A load-managed or essential-circuit switch backs up selected circuits and can shed lower-priority loads so a smaller generator is never overwhelmed — useful when you want a right-sized unit to still cover the well pump, septic pump, and heat. We help you choose, size the switch to the generator and panel, and wire it so the transfer is clean and the priorities are right.',
      },
    ],
    points: [
      'Automatic transfer switches installed and replaced',
      'Service-rated whole-house and load-managed essential-circuit options',
      'Prevents dangerous backfeed onto utility lines',
      'Sized and wired to match your generator and panel',
      'Clean, automatic transfer within seconds of an outage',
      'Permitted, inspected, and commissioned with the generator',
    ],
    faqs: [
      {
        q: 'Do I really need a transfer switch — can’t I just plug the generator in?',
        a: 'For a permanent standby generator, yes, you need an automatic transfer switch, and backfeeding power through an outlet is dangerous and illegal. The switch isolates your home from the grid before energizing your wiring, which protects line workers and your equipment, and it makes the whole system automatic. It is not optional — it is what makes backup power safe.',
      },
      {
        q: 'What’s the difference between a whole-house and an essential-circuit transfer switch?',
        a: 'A whole-house switch transfers your entire panel to the generator. An essential-circuit (load-managed) switch backs up selected circuits and can shed lower-priority loads so a smaller generator is never overloaded. We size and wire whichever fits your generator, your panel, and what you need to keep running.',
      },
      {
        q: 'Can you add an automatic transfer switch to a generator I already have?',
        a: 'Often, yes — as long as the switch is compatible with your generator and properly sized to your panel. We assess what you have, recommend a compatible switch, and wire and commission it so your existing generator finally becomes the automatic, hands-off system it should be.',
      },
    ],
    image: transferSwitchImg,
    imageAlt: 'Automatic transfer switch installed next to an electrical panel in Henderson County, North Carolina',
  },
  {
    slug: 'generator-replacement',
    name: 'Generator Replacement',
    short: 'Generator Replacement',
    blurb: 'Old unit past its prime or beyond economical repair? We remove the old generator and install a reliable new one.',
    description:
      'Standby generators do not last forever. After enough years and enough outages, parts get hard to find, repairs start to cost more than they are worth, and the unit you bought to protect your home becomes the thing you cannot trust. We handle full generator replacements across Henderson County: we assess your old unit, recommend a right-sized modern replacement, remove and dispose of the old generator, reuse or upgrade the pad and transfer switch as needed, connect the fuel and electrical, and commission the new unit so it starts, transfers, and runs the way it should. We replace Generac and comparable brands. A replacement is also the right moment to fix anything the original install got wrong — an undersized unit that always struggled with the well pump, a transfer switch that should have been whole-house, or a placement that violated clearances. We size and set the new system up properly so the next ten-plus years are dependable.',
    sections: [
      {
        h: 'When replacement beats another repair',
        body: 'There comes a point where pouring money into an old generator stops making sense: parts are discontinued, the engine is worn, repairs are stacking up, or the unit was undersized for the home from the start. If you are calling for repair every season, or a major component like the engine or controller has failed on an older unit, replacement usually costs less over time than chasing the next breakdown. We give you the honest call — repair when it is worth it, replace when it is not.',
      },
      {
        h: 'A clean swap done right',
        body: 'A replacement is more than dropping in a new box. We remove and responsibly dispose of the old generator, evaluate whether the existing pad, transfer switch, and gas connection meet current code and your new unit’s needs, and upgrade what should be upgraded. We size the new generator to your home as it is today — which often means correcting an original install that was undersized for the well pump and heat — and commission it under load so you start fresh with a system you can trust.',
      },
    ],
    points: [
      'Honest assessment of repair vs. replace on your old unit',
      'Right-sized modern replacement matched to your home today',
      'Old generator removed and responsibly disposed of',
      'Pad, transfer switch, and gas connection evaluated and upgraded as needed',
      'Original install mistakes corrected — sizing, switch, and placement',
      'New unit connected, commissioned, and proven under load',
    ],
    faqs: [
      {
        q: 'How long do standby generators last?',
        a: 'A well-maintained home standby generator typically lasts in the range of 15 to 25 years or a few thousand run hours, though that varies with brand, usage, and maintenance. An unmaintained unit, or one that ran many outage hours, can wear out sooner. We assess yours and tell you honestly whether it has life left or is due for replacement.',
      },
      {
        q: 'Should I repair my old generator or replace it?',
        a: 'Repair when the unit is sound and the fix is reasonable; replace when parts are discontinued, the engine or controller has failed on an older unit, repairs are recurring, or it was undersized from the start. We give you the numbers both ways and a straight recommendation rather than defaulting to the bigger sale.',
      },
      {
        q: 'Can you reuse my existing pad and transfer switch?',
        a: 'Sometimes. If the pad is sound and the transfer switch is the right type and capacity for the new generator and meets current code, we can reuse them and save you money. If they are undersized, outdated, or non-compliant, we will tell you and upgrade them so the new system is safe and reliable.',
      },
    ],
    image: generatorReplacementImg,
    imageAlt: 'Old standby generator being replaced with a new unit at a home in Henderson County, North Carolina',
  },
  {
    slug: 'emergency-generator-service',
    name: 'Emergency Generator Service',
    short: 'Emergency Service',
    blurb: 'Storm rolling in or generator down during an outage? Fast emergency service to get your backup power running.',
    description:
      'When the power is out — or about to be — a generator that will not run is an emergency, especially in the mountains where an outage can also mean no water from the well, no septic pump, and no heat in a cold snap. If your standby generator failed to start when the grid dropped, shut down mid-outage, is alarming, or you have a storm bearing down on a unit you are not sure about, that is what we treat as urgent. We provide emergency generator service across Henderson County. We come out, diagnose why the unit will not run — a dead battery, a fuel or gas-pressure problem, a controller fault, or a transfer switch that never handed over the load — and get your backup power online so your home is functional again. The first priority is getting you running; then we tell you straight what failed and what it takes to keep it from happening next time the lights go out.',
    sections: [
      {
        h: 'When a generator problem can’t wait',
        body: 'Some situations mean call now: your generator did not start when the power went out, it ran for a while and then quit, it is throwing an alarm during an outage, or a major ice or wind storm is forecast and you are not confident the unit will perform. In a mountain home on a well and septic, a dead generator during an outage means no water, no wastewater, and no heat — so getting it running is genuinely urgent, not a next-week errand.',
      },
      {
        h: 'What we do first, and what comes next',
        body: 'On an emergency call the first job is to get your backup power running. We work fast through the usual culprits — battery, fuel and gas pressure, ignition, controller, and the transfer switch — to find why the unit is down and restore power to your home. With the immediate problem solved, we tell you honestly what failed and lay out the fix and the maintenance that keeps it from repeating, so you are not back in the dark during the next storm.',
      },
    ],
    points: [
      'Fast response when the generator fails during or before an outage',
      'Diagnosis of no-start, mid-outage shutdown, and alarm conditions',
      'Battery, fuel, gas-pressure, controller, and transfer-switch checks',
      'Backup power restored so your well, septic, and heat run again',
      'Honest plan to prevent a repeat, not just a band-aid',
      'Ask about availability ahead of a forecast storm',
    ],
    faqs: [
      {
        q: 'My generator didn’t start when the power went out — what now?',
        a: 'Call us, and if you can, note any error code or alarm and whether the battery indicator is lit. Most no-start emergencies trace to a dead battery, a fuel or gas-pressure issue, or a control fault. We respond, diagnose on-site, and get your backup power running — important when an outage also means no water or heat on a mountain property.',
      },
      {
        q: 'A storm is coming and I’m not sure my generator will run — can you check it first?',
        a: 'Yes, and that is the smart move. Ahead of a forecast ice or wind storm we can test the battery, run a load test, check fuel and connections, and confirm the unit and transfer switch are ready — so you are not finding out it failed after the lights are already off. Call early; pre-storm demand fills up fast.',
      },
      {
        q: 'My generator ran for a while and then shut down — is that an emergency?',
        a: 'During an outage, yes. A mid-outage shutdown often points to fuel or gas-pressure starvation, overheating, an overload, or a fault that tripped the unit offline. Leaving it down means no power until it is fixed, so call us — we find why it quit and get it carrying your home again.',
      },
      {
        q: 'How fast can you get to me during an outage?',
        a: 'Call with your location and what the unit is doing and we will give you a real time, not a runaround. Generators down during an active outage get priority because of what is at stake — water, wastewater, and heat. Ask about availability when you call, and call ahead of a forecast storm if you can.',
      },
    ],
    image: emergencyGeneratorImg,
    imageAlt: 'Emergency generator service technician restoring backup power during an outage in Henderson County, North Carolina',
    emergency: true,
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
