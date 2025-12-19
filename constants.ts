
import { Product, TargetGroupInfo, BrandComparison, AdviceStep, FAQ, BlogPost, LegalContent, TechnicalSpec } from './types';

export const COLORS = {
  primary: '#1A202C',
  background: '#F7FAFC',
  ecoMint: '#48BB78',
  actionOrange: '#ED8936',
};

export const TECHNICAL_SPECS: TechnicalSpec[] = [
  { label: 'Basis Capaciteit', tesla: '13.5 kWh', alpha: '5.0 kWh+', victron: 'Variabel', sessy: '5.0 kWh', huawei: '5.0 kWh+' },
  { label: 'Batterij Chemie', tesla: 'LFP (Cobalt-vrij)', alpha: 'LFP (LiFePO4)', victron: 'LFP / Lead', sessy: 'LFP', huawei: 'LFP' },
  { label: 'Type Koppeling', tesla: 'DC (Hybride)', alpha: 'AC of DC', victron: 'AC of DC', sessy: 'AC (Retrofit)', huawei: 'DC (HV)' },
  { label: 'Ontladingsdiepte', tesla: '100%', alpha: '95%', victron: '95-100%', sessy: '95%', huawei: '100%' },
  { label: 'Laadcycli', tesla: '6.000+', alpha: '8.000+', victron: '6.000-10.000', sessy: '6.000+', huawei: '6.000+' },
  { label: 'Garantie (Jaren)', tesla: '10 jaar', alpha: '10 jaar', victron: '5 - 10 jaar', sessy: '10 jaar', huawei: '10 jaar' },
  { label: 'Onbalans-klaar', tesla: 'Ja (Native)', alpha: 'Via EMS', victron: 'Volledig', sessy: 'Ja (P1)', huawei: 'Via Dongle' },
];

export const TARGET_GROUPS: TargetGroupInfo[] = [
  { 
    group: 'Particulier', 
    capacity: '5 - 15 kWh', 
    payback: '6 - 8 jaar', 
    benefit: 'Stop terugleverkosten direct', 
    tax: '0% BTW regeling',
    contractAdvice: 'Dynamisch contract (Aanbevolen)'
  },
  { 
    group: 'Zakelijk / MKB', 
    capacity: '30 - 200 kWh', 
    payback: '4 - 6 jaar', 
    benefit: 'Fiscale aftrek (EIA/KIA)', 
    tax: 'Subsidie beschikbaar',
    contractAdvice: 'Onbalanssturing via aggregator'
  },
  { 
    group: 'VvE / Appartement', 
    capacity: '20 - 100 kWh', 
    payback: '7 - 10 jaar', 
    benefit: 'Gezamenlijke inkoopvoordeel', 
    tax: 'SCE-subsidie',
    contractAdvice: 'Collectief dynamisch contract'
  }
];

export const TOP_5_BRANDS: BrandComparison[] = [
  { name: 'Tesla Powerwall 3', type: 'LFP', warranty: '10 jaar', score: '9.6', bestFor: 'Techniek-fans & Onbalans' },
  { name: 'AlphaESS Smile-B3', type: 'LFP', warranty: '10 jaar', score: '9.2', bestFor: 'Gezinnen & Modulariteit' },
  { name: 'Victron Energy', type: 'LFP/Lead', warranty: '5-10 jaar', score: '9.0', bestFor: 'Off-grid & Maatwerk' },
  { name: 'Sessy Thuisaccu', type: 'LFP', warranty: '10 jaar', score: '8.8', bestFor: 'Plug & Play (NL)' },
  { name: 'Huawei LUNA2000', type: 'LFP', warranty: '10 jaar', score: '8.5', bestFor: 'Prijs/Kwaliteit' }
];

export const RECOMMENDED_PRODUCTS: Product[] = [
  {
    id: 'p1-meter',
    name: 'HomeWizard P1 Meter',
    category: 'Budget',
    description: "De eerste stap naar inzicht. Onmisbaar om te bepalen hoeveel overschot je echt hebt voordat je een accu koopt.",
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800', 
    partnerUrl: 'https://www.bol.com/nl/nl/s/?searchtext=homewizard+p1+meter', 
    partnerName: 'Bekijk dagaanbieding',
  },
  {
    id: 'coolblue-accu',
    name: 'Thuisbatterij incl. Installatie',
    category: 'Modulair',
    description: "Kies voor de zorgeloze installatieservice van Coolblue. Volledig ontzorgd van advies tot aan de meterkast.",
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    partnerUrl: 'https://www.coolblue.nl/zonnepanelen/thuisbatterij',
    partnerName: 'Check huidige voorraad',
  }
];

export const FAQS: FAQ[] = [
  { q: "Wat is de terugleverboete precies?", a: "Dit zijn kosten die energieleveranciers in rekening brengen voor elke kWh die u teruglevert aan het net. Een thuisaccu voorkomt dit door de stroom zelf op te slaan.", blogSlug: "kosten-rendement-formule-2025" },
  { q: "Hoeveel bespaar ik met een dynamisch contract?", a: "Gemiddeld €300 tot €600 extra per jaar. U koopt stroom in bij negatieve prijzen en verbruikt uw eigen stroom tijdens dure avondpieken.", blogSlug: "kosten-rendement-formule-2025" },
  { q: "Wanneer stopt het salderen?", a: "De politieke besluitvorming wijst op een volledige afbouw vanaf 2027. Wachten met een accu kost nu al geld door terugleverkosten.", blogSlug: "saldering-2027-politiek" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'g1',
    slug: 'vergelijking-thuisbatterij-2025',
    title: 'De Ultieme Thuisbatterij Vergelijking 2025: Welk Systeem Past bij Jou?',
    excerpt: 'Een technisch diepgaande analyse van de markt in 2025. Vergelijk Tesla, AlphaESS, Victron, Sessy en Huawei op rendement en techniek.',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## Introductie: 2025 als het Kanteljaar voor de Thuisbatterij\n\nIn 2025 is de Nederlandse energiemarkt definitief veranderd. Waar we voorheen spraken over de thuisbatterij als een 'leuke gadget voor de vroege vogels', is het nu een essentieel onderdeel geworden van een rendabel huishouden. De reden? Een giftige cocktail van **terugleverkosten**, een overbelast stroomnet (netcongestie) en de naderende afbouw van de salderingsregeling.\n\nHuishoudens met zonnepanelen worden tegenwoordig direct gestraft voor hun succes. Energieleveranciers rekenen tot wel 15 cent per kWh aan kosten voor de stroom die u overdag terugstuurt naar het net. Hierdoor verdwijnt uw rendement als sneeuw voor de zon.\n\n### Waarom de Rekensom in 2025 Anders is\nVroeger berekenden we de terugverdientijd puur op basis van de vermeden inkoop van stroom. In 2025 voegen we daar twee cruciale factoren aan toe: de **vermeden terugleverboete** en de winst uit **onbalanssturing**. Als u een slim systeem kiest, kan de batterij handelen op de energiemarkt terwijl u slaapt.\n\n## Deep-Dive: De Top 5 Thuisbatterijen van 2025\n\n### 1. Tesla Powerwall 3: De Onbetwiste Koning van Integratie\nTesla heeft met de Powerwall 3 een systeem neergezet dat de markt in 2025 domineert. Het grootste verschil met zijn voorganger is de volledig geïntegreerde **hybride omvormer**.\n\n### 2. AlphaESS SMILE-B3: De Meester van de Modulariteit\nVoor gezinnen die flexibiliteit zoeken, is de AlphaESS SMILE-B3 vaak de beste keuze. Dit systeem maakt gebruik van **LiFePO4-technologie** (Lithium IJzerfosfaat), wat de veiligste batterijtechniek van dit moment is.\n\n### 3. Victron Energy: De Vrijheid voor de Techneut\nWie geen genoegen neemt met een 'gesloten' systeem, komt uit bij Victron. Dit merk uit Almere is wereldberoemd in de maritieme sector en heeft die robuustheid vertaald naar de thuisbatterijmarkt.\n\n### 4. Sessy: De Nederlandse Plug-and-Play Trots\nSessy is een relatief nieuwe speler die specifiek voor de Nederlandse markt is ontwikkeld. Hun focus ligt op **retrofit**: het toevoegen van een accu aan een bestaande installatie.\n\n### 5. Huawei LUNA2000: Esthetiek ontmoet Efficiëntie\nHuawei heeft met de LUNA2000-serie een systeem dat niet misstaat in een modern interieur of garage.\n\n## Gedetailleerd Technisch Vergelijk 2025\n\n[ComparisonTable]\n\n## Rendement en Financiën: De 0% BTW Kans\nEen cruciaal voordeel in 2025 is de **0% BTW-regeling** voor de aanschaf en installatie van een thuisbatterij. Dit scheelt u direct 21% op de investering. In combinatie met een dynamisch energiecontract kunt u de terugverdientijd terugbrengen naar minder dan 7 jaar.\n\n[Halt: Hier later affiliate link invoegen]\n\n### Conversie-tip: Vergelijk Offertes\nDe installatie van een thuisbatterij is vakwerk. Wij adviseren altijd om minimaal 3 offertes te vergelijken van erkende, gecertificeerde installateurs. Dit bespaart u vaak tot wel 20% op de totale installatiekosten.\n\n## Conclusie: Welk Systeem Moet U Kiezen?\n\n* **Wilt u de beste software en onbalanssturing?** Kies voor de **Tesla Powerwall 3**.\n* **Zoekt u een veilig en modulair systeem voor een gezin?** De **AlphaESS SMILE-B3** is uw beste partner.\n* **Bent u een tech-liefhebber die volledige controle wil?** Ga voor **Victron Energy**.\n\nBereken nu uw persoonlijke winst met onze Rendementscalculator en zorg dat u klaar bent voor de energietoekomst.`
  },
  {
    id: 'g2',
    slug: 'kosten-rendement-formule-2025',
    title: 'Kosten & Rendement: Wat levert een thuisbatterij écht op in 2025?',
    excerpt: 'Een diepgaande financiële analyse van de rekensom in 2025. Inclusief scenario-berekeningen voor salderen en onbalanshandel.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '40 min',
    content: `## De Nieuwe Rekensom: Waarom 2025 Alles Verandert\n\nHet rendement van een thuisbatterij wordt in 2025 niet meer uitsluitend berekend op basis van 'het opslaan van gratis zonnestroom'. We zijn beland in een tijdperk waarin de energieprijs op uurbasis fluctueert en energieleveranciers u factureren voor het terugleveren van stroom. De rekensom is complexer, maar voor wie slim rekent, ook veel interessanter geworden.\n\n### Het Einde van de 'Gratis' Teruglevering\nIn 2024 introduceerden bijna alle grote leveranciers (Vandebron, Eneco, Vattenfall, Essent) de zogenaamde **terugleverkosten**. Voor elke kWh die u overdag het net op stuurt, betaalt u gemiddeld tussen de €0,10 en €0,18. Bij een jaarlijks overschot van 3.000 kWh betekent dit een directe kostenpost van €450. \n\n### Maximalisatie van Zelfconsumptie\nEen gemiddeld huishouden zonder batterij gebruikt direct ongeveer 30% van hun opgewekte zonnestroom. De resterende 70% wordt teruggestuurd. Met een goed gedimensioneerde batterij stijgt deze 'zelfconsumptie' naar 75% tot 85%. U vermijdt hiermee niet alleen de inkoop van dure avondstroom, maar u stopt ook direct de bloeding van de terugleverkosten.\n\n## De Investering: Wat Kost een Thuisbatterij in 2025?\n\nDe prijzen van lithium-ijzerfosfaat (LFP) cellen zijn in 2024 historisch gedaald, wat we nu terugzien in de consumentenprijzen. Toch blijft het een serieuze investering. We maken onderscheid tussen de hardware en de vaak onderschatte installatiekosten.\n\n### Prijsindicaties per Capaciteit (Inclusief BTW-voordeel)\n* **5 kWh Systeem (Basis):** ± €3.500 - €5.500. Ideaal voor kleinere huishoudens met een verbruik tot 3.500 kWh.\n* **10 kWh Systeem (Gemiddeld):** ± €5.000 - €8.000. De standaard voor gezinnen met zonnepanelen en een gemiddeld verbruik.\n* **15 kWh+ Systeem (Groot):** ± €8.000 - €12.000. Voor grootverbruikers, huishoudens met een warmtepomp of elektrische auto.\n\n### Bijkomende Kosten: De Meterkast\nIn 2025 is een stabiele 3-fase aansluiting vaak een vereiste voor krachtige batterij-omvormers. Heeft u nog een 1-fase aansluiting? Houd dan rekening met een investering van €600 tot €900 voor een meterkast-upgrade en de verhoging van het vastrecht bij de netbeheerder.\n\nWilt u weten wat uw specifieke investering zou zijn? Onze Rendementscalculator geeft u direct inzicht.\n\n## Scenario-Analyse: Drie Wegen naar Rendement\n\nOm de winstgevendheid te begrijpen, moeten we kijken naar drie verschillende manieren waarop u uw batterij kunt inzetten.\n\n### Vergelijkingstabel Scenario's 2025\n\n| Kenmerk | Scenario A: Salderen | Scenario B: Post-Saldering | Scenario C: Dynamisch + Onbalans |\n| :--- | :--- | :--- | :--- |\n| **Focus** | Zelfverbruik | Vermijden Terugleverkosten | Actief Handelen |\n| **Jaarlijkse Besparing** | ± €650 | ± €900 | ± €1.250 |\n| **Terugverdientijd** | 8 - 10 jaar | 6 - 8 jaar | 4 - 6 jaar |\n| **Complexiteit** | Laag | Gemiddeld | Hoog (Software vereist) |\n\n### Scenario A: Salderen tot 2027\nIn dit scenario profiteert u nog van de salderingsregeling. De winst komt primair uit de vermeden inkoop en de vermeden terugleverboete. Hoewel salderen nog bestaat, maken de terugleverkosten de batterij nu al rendabel.\n\n### Scenario B: Post-Saldering (2027+)\nZodra salderen stopt, wordt elke zelf-geproduceerde kWh goud waard. U krijgt dan immers nog maar een fractie (bijv. €0,05) terug van de leverancier, terwijl u overdag €0,30 bespaart door uw eigen stroom uit de accu te trekken.\n\n### Scenario C: De 'Turbo' - Dynamisch Contract & Onbalans\nDit is waar de echte winst ligt. Met een dynamisch contract laadt u de batterij op als de stroomprijs negatief is (u krijgt dan geld toe!) en ontlaadt u tijdens de avondpiek. Geavanceerde systemen zoals de Tesla Powerwall 3 of AlphaESS SMILE-B3 kunnen daarnaast handelen op de onbalansmarkt, wat een extra opbrengst van gemiddeld €300 per jaar oplevert.\n\nVoor het monitoren van deze uurtarieven is een slimme energiemanager onmisbaar. [Halt: Hier later affiliate link naar bol invoegen voor HomeWizard P1-meters]\n\n## De 'Echte' ROI: Degradatie en Efficiëntie\n\nVeel verkopers rekenen met ideale omstandigheden. Als onafhankelijk adviseur moeten we eerlijk zijn over de technische verliezen.\n\n### 1. Round-trip Efficiency\nGeen enkele batterij is 100% efficiënt. Bij het laden en ontladen gaat gemiddeld 10% tot 15% aan energie verloren als warmte. Als u 10 kWh in de batterij stopt, haalt u er effectief 8.8 kWh uit. In onze Rendementscalculator hebben we deze verliezen standaard meegenomen.\n\n### 2. Degradatie van de Cellen\nEen batterij verliest over tijd capaciteit. Moderne LFP-batterijen zijn echter extreem robuust. Na 6.000 laadcycli (wat neerkomt op zo'n 16 jaar dagelijks gebruik) heeft een goede batterij nog steeds 80% van de originele capaciteit over. De economische levensduur van 15-20 jaar is hiermee een realistische aanname.\n\n### 3. Onderhoud en Software-updates\nHardwarematig is een thuisaccu nagenoeg onderhoudsvrij. De kosten zitten hem in de software. Voor actieve onbalanssturing betaalt u vaak een klein maandelijks bedrag aan de softwareleverancier (SaaS), maar dit verdient zich dubbel en dwars terug door de hogere handelswinsten.\n\n## Veelgestelde Vragen over Kosten & Rendement\n\n### Kan ik de BTW terugvragen?\nVoor particulieren geldt in principe de 0% BTW-regeling voor de installatie van energiebesparende maatregelen zoals de thuisbatterij. Dit betekent dat u de BTW niet meer achteraf hoeft terug te vragen, maar dat deze direct niet in rekening wordt gebracht door de installateur.\n\n### Is een thuisbatterij verzekerbaar?\nJa, mits deze is geïnstalleerd door een gecertificeerd bedrijf conform de NEN 1010 en bij voorkeur beschikt over een SCIOS Scope 12 keuring. Verzekeraars stellen steeds strengere eisen aan de brandveiligheid, vandaar dat wij adviseren altijd te kiezen voor LFP-cellen.\n\n### Hoeveel bespaar ik op de terugleverboete?\nDit hangt af van uw installatie, maar gemiddeld voorkomt een batterij dat u 2.000 tot 4.000 kWh per jaar 'ongewenst' teruglevert. Dit bespaart u direct tussen de €250 en €600 aan boetes per jaar.\n\n## Conclusie: Is het de Investering Waard?\n\nIn 2025 is de vraag niet meer *of* een thuisbatterij rendabel is, maar *hoe* u deze het slimst inzet. Door de combinatie van vermeden boetes, verhoogde zelfconsumptie en slimme handel op de energiemarkt, is de terugverdientijd voor de meeste huishoudens gedaald tot onder de 8 jaar. Gezien de levensduur van 15+ jaar is dit een investering met een gegarandeerd positief rendement.\n\nWilt u weten wat uw specifieke winst is? Onze Rendementscalculator rekent het binnen 30 seconden voor u uit.\n\n[Halt: Hier later affiliate link naar bol invoegen voor HomeWizard Energy Display]`
  },
  {
    id: 'g3',
    slug: 'saldering-2027-politiek',
    title: 'Gids 3: Saldering 2027 – Waarom Wachten Geld Kost',
    excerpt: 'Bespreek de politieke verschuiving en de financiële risico\'s van het uitstellen van uw investering.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '20 min',
    content: `## Het Politieke Landschap van Energie\n\nDe salderingsregeling wordt vanaf 2027 definitief afgebouwd. Dit is geen 'misschien' meer, maar een voldongen feit.\n\n### Waarom nu handelen?\n1. 0% BTW: Profiteer nu nog van het nultarief.\n2. Netcongestie: In veel wijken wordt de aansluiting voor zonnepanelen en accu's beperkt.\n3. Prijsstijging installatie: Door de stormloop in 2026 zullen installatiekosten exploderen.\n\n[Halt: Hier later affiliate link invoegen]\n\n### De Harde Cijfers\nIeder jaar dat u wacht, betaalt u honderden euro's aan 'boetes' voor uw overschot. De accu van vandaag betaalt zichzelf terug met het geld dat u anders aan de energieleverancier schenkt.\n\n[Vergelijk gratis 3 offertes van erkende installateurs]`
  },
  {
    id: 'g4',
    slug: 'dynamisch-slim-laden-2025',
    title: 'Gids 4: Dynamisch & Slim Laden – Geld Krijgen bij Gebruik',
    excerpt: 'Leg uit hoe laden bij negatieve prijzen werkt en hoe u uw energierekening naar nul brengt.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    readingTime: '24 min',
    content: `## De Revolutie van de Negatieve Energieprijs\n\nIn 2025 komt het steeds vaker voor: de stroomprijs duikt onder nul. Met een slimme accu wordt dit een verdienmodel.\n\n### Hoe het werkt\nUw systeem herkent wanneer er een overschot op het net is (veel wind/zon). De accu laadt dan op, en u wordt hiervoor betaald door de leverancier.\n\n### Benodigdheden\n* Een dynamisch energiecontract.\n* Een P1-meter voor live data.\n* Slimme sturingssoftware (EMS).\n\n[Halt: Hier later affiliate link invoegen voor P1-meters]\n\n### Strategie\nLaad overdag gratis of tegen betaling, en gebruik deze stroom tijdens de dure avonduren (18:00 - 21:00).\n\n[Start Gratis Offerte-check voor slimme systemen]`
  },
  {
    id: 'g5',
    slug: 'capaciteit-kwh-advies',
    title: 'Gids 5: Capaciteit kWh – De Ideale Verhouding Opwek/Opslag',
    excerpt: 'Technisch advies over het dimensioneren van uw systeem om over-investering te voorkomen.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    readingTime: '28 min',
    content: `## Voorkom de Fout van een Te Grote Accu\n\nEen te grote accu verdient zichzelf nooit terug. Een te kleine accu laat winst liggen. Wat is de 'sweet spot'?\n\n### De Gouden Regel voor 2025\nVoor elke 1.000 Wp aan zonnepanelen adviseren wij 1.2 tot 1.5 kWh aan opslagcapaciteit.\n\n### Factoren\n* Nachtverbruik: Hoeveel stroom trekt uw huis tussen zonsondergang en zonsopgang?\n* Toekomstplannen: Komt er een warmtepomp of elektrische auto?\n\n[Halt: Hier later affiliate link invoegen voor rekenmodules]\n\n### Modulaire Systemen\nKies voor merken zoals AlphaESS of Huawei, waarbij u later eenvoudig een extra batterijmodule kunt toevoegen.\n\n[Bereken uw ideale capaciteit met onze tool]`
  },
  {
    id: 'g6',
    slug: 'installatiegids-checklist',
    title: 'Gids 6: De Ultieme Installatie Checklist – Herken de Prof',
    excerpt: 'Maak een checklist voor het herkennen van een gecertificeerd installateur en veilige hardware.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200',
    readingTime: '30 min',
    content: `## Veiligheid en Garantie Boven Alles\n\nEen thuisbatterij is een krachtig elektrisch systeem. Laat u niet verleiden door beunhazen.\n\n### Waar moet u op letten?\n* Certificering: Is de installateur lid van InstallQ of Techniek Nederland?\n* Verzekering: Voldoet de installatie aan de SCIOS Scope 12 eisen?\n* Brandveiligheid: Worden er LFP (Lithium IJzerfosfaat) cellen gebruikt?\n\n[Halt: Hier later affiliate link invoegen voor brandblussers/veiligheid]\n\n### De Checklist\n1. Vraag naar de NEN 1010 keuring.\n2. Controleer of de meterkast geschikt is.\n3. Check de garantievoorwaarden op de omvormer.\n\n[Vergelijk gratis 3 erkende installateurs]`
  },
  {
    id: 'g7',
    slug: 'onbalanssturing-algoritmes',
    title: 'Gids 7: Onbalanssturing – Geld Verdienen Terwijl u Slaapt',
    excerpt: 'Leg uit hoe slimme algoritmes winst maken op de onbalansmarkt zonder dat u er iets voor hoeft te doen.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    readingTime: '30 min',
    content: `## De Echte 'Geldmachine' van 2025\n\nOnbalanssturing is de heilige graal van de thuisbatterij. Hiermee handelt uw accu op de korte termijn energiemarkt.\n\n### Wat is Onbalans?\nHet net moet altijd exact 50Hz zijn. Wanneer er te veel of te weinig stroom is, betaalt TenneT grote bedragen om dit op te lossen. Uw accu doet dit automatisch.\n\n### Rendement Verhoging\nSystemen met onbalanssturing (zoals de Tesla Powerwall i.c.m. slimme software) leveren tot wel 3 keer meer op dan systemen die alleen op zelfconsumptie draaien.\n\n[Halt: Hier later affiliate link invoegen voor EMS-software]\n\n### Passief Inkomen\nTerwijl u slaapt, laadt en ontlaadt de accu soms wel 5 keer per nacht om pieken op te vangen. U ziet de winst direct terug in uw app.\n\n[Ontvang 3 offertes voor systemen met onbalanssturing]`
  }
];

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: { id: 'privacy', title: 'Privacybeleid', content: 'Wij gaan uiterst vertrouwelijk om met uw data conform de AVG richtlijnen van 2025.' },
  cookies: { id: 'cookies', title: 'Cookieverklaring', content: 'Wij gebruiken cookies om de rekenervaring te verbeteren en affiliate links te meten.' },
  voorwaarden: { id: 'voorwaarden', title: 'Voorwaarden', content: 'Onze adviezen zijn indicatief en gebaseerd op de markt van 2025.' }
};

export const ADVICE_STEPS: AdviceStep[] = [
  { title: "Stap 1: Bereken", description: "Vind de ideale kWh voor uw situatie.", icon: "M9 19v-6" },
  { title: "Stap 2: Vergelijk Merken", description: "Bekijk de top 5 batterijen van 2025.", icon: "M16 7a4" },
  { title: "Stap 3: Offerte", description: "Bespaar op installatiekosten door te vergelijken.", icon: "M9 12l2" }
];
