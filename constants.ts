import { Product, EnergyPartner, BrandComparison, AdviceStep, FAQ, BlogPost, LegalContent } from './types';

export const COLORS = {
  primary: '#1A202C',
  background: '#F7FAFC',
  ecoMint: '#48BB78',
  actionOrange: '#ED8936',
};

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: {
    id: 'privacy',
    title: 'Privacybeleid',
    content: `Laatst bijgewerkt: 1 mei 2025\n\nBij De Thuisbatterij Wijzer nemen we uw privacy uiterst serieus. Uw gegevens worden uitsluitend gebruikt voor het genereren van objectief advies en het koppelen aan erkende installateurs.`
  },
  cookies: {
    id: 'cookies',
    title: 'Cookieverklaring',
    content: `Wij gebruiken cookies voor functionele doeleinden en om onze affiliate partners (zoals bol en Daisycon) te informeren over doorverwijzingen.`
  },
  voorwaarden: {
    id: 'voorwaarden',
    title: 'Algemene Voorwaarden',
    content: `Onze adviezen zijn indicatief. Wij zijn niet aansprakelijk voor de uiteindelijke installatie of de prestaties van de hardware geleverd door derden.`
  }
};

export const RECOMMENDED_PRODUCTS: Product[] = [
  {
    id: 'particulier-pakket',
    name: 'Residentieel Systeem',
    category: 'Modulair',
    description: 'Voor huishoudens die hun eigen zonnestroom optimaal willen benutten en onafhankelijk willen worden van variabele tarieven.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800', 
    partnerUrl: '#', 
    partnerName: 'Bekijk dagaanbiedingen bij bol',
  },
  {
    id: 'high-demand-pakket',
    name: 'Warmtepomp & EV',
    category: 'Premium',
    description: 'Ontworpen voor woningen met hoge piekbelastingen door elektrische voertuigen of hybride verwarmingssystemen.',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    partnerUrl: '#',
    partnerName: 'Vergelijk A-merken bij bol',
  },
  {
    id: 'vve-pakket',
    name: 'Collectieve Systemen',
    category: 'Budget',
    description: 'Compacte en schaalbare oplossingen voor gedeelde aansluitingen, ideaal voor appartementen en kleine kantoorpanden.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800',
    partnerUrl: '#',
    partnerName: 'Ontdek bespaaropties bij bol',
  }
];

export const BRAND_COMPARISON: BrandComparison[] = [
  { name: 'Tesla Powerwall 3', type: 'LFP (Geïntegreerd)', warranty: '10 jaar', score: '9.3', bestFor: 'Smart Homes' },
  { name: 'Victron Energy', type: 'LFP (Modulair)', warranty: '5-10 jaar', score: '9.1', bestFor: 'Off-grid & Profs' },
  { name: 'AlphaESS', type: 'LFP (Alles-in-één)', warranty: '10 jaar', score: '8.8', bestFor: 'Gezinnen' },
  { name: 'BYD Battery-Box', type: 'LFP (High Voltage)', warranty: '10 jaar', score: '8.7', bestFor: 'Grote systemen' },
  { name: 'Sessy', type: 'LFP (Nederlands)', warranty: '5 jaar', score: '8.5', bestFor: 'Compact wonen' }
];

export const FAQS: FAQ[] = [
  { q: "Wat is de ideale opslagcapaciteit voor mijn zonnepanelen?", a: "Gemiddeld adviseren wij 1.2 tot 1.5 kWh opslag per kWp aan zonnepanelen om een volledige dagcyclus te dekken.", blogSlug: "optimale-capaciteit" },
  { q: "Is een thuisbatterij in 2025 financieel rendabel?", a: "Ja, mits gecombineerd met een dynamisch contract. De winst komt uit het vermijden van terugleverkosten en handel op de onbalansmarkt.", blogSlug: "rendement-thuisbatterij-2025" },
  { q: "Welk energiecontract moet ik kiezen voor mijn accu?", a: "Voor een batterij is een dynamisch contract essentieel. Hiermee profiteer je van negatieve stroomprijzen en uurlijkse handel.", blogSlug: "energiecontract-kiezen-2025" },
  { q: "Hoe verandert mijn situatie als salderen stopt in 2027?", a: "Zodra de salderingsregeling stopt, wordt de batterij cruciaal om te voorkomen dat je stroom bijna gratis teruglevert aan het net.", blogSlug: "wetgeving-en-salderen-2027" },
  { q: "Zijn moderne thuisbatterijen brandveilig?", a: "LFP-batterijen (Lithium IJzerfosfaat) zijn de standaard in 2025 en zijn extreem stabiel. Professionele installatie is echter vereist.", blogSlug: "technische-gids-onbalanssturing" },
  { q: "Kan ik geld verdienen door stroom te verkopen aan het net?", a: "Zeker. Via de onbalansmarkt helpt jouw batterij het net te stabiliseren, waarvoor je een vergoeding ontvangt.", blogSlug: "technische-gids-onbalanssturing" },
  { q: "Heb ik een nieuwe omvormer nodig voor een batterij?", a: "Niet altijd. Bij een AC-gekoppeld systeem kan de batterij op bijna elke bestaande installatie worden aangesloten.", blogSlug: "optimale-capaciteit" },
  { q: "Wat is de levensduur van een A-merk thuisaccu?", a: "Reken op 15 tot 20 jaar, gebaseerd op gemiddeld 6.000 tot 8.000 volledige laadcycli voor LFP-systemen.", blogSlug: "optimale-capaciteit" },
  { q: "Zijn er subsidies beschikbaar voor particulieren?", a: "Landelijke subsidies ontbreken, maar de 0% BTW regeling en zakelijke EIA/MIA bieden grote financiële voordelen.", blogSlug: "wetgeving-en-salderen-2027" },
  { q: "Hoeveel bespaar ik gemiddeld per jaar met een 10 kWh accu?", a: "Een gemiddeld huishouden bespaart tussen de €800 en €1.250 per jaar door slimme aansturing en hogere zelfconsumptie.", blogSlug: "rendement-thuisbatterij-2025" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'rendement-thuisbatterij-2025',
    title: 'Thuisbatterij Rendement 2025: De Volledige Financiële Analyse',
    excerpt: 'Is een thuisbatterij een slimme investering of een dure hobby? We duiken diep in de cijfers van 2025.',
    imageUrl: 'https://images.unsplash.com/photo-1592833159155-c62df1b35624?auto=format&fit=crop&q=80&w=1200',
    content: `## De Nieuwe Economie van Energie-opslag\n\nIn 2025 is de vraag niet meer *of* je een thuisbatterij moet kopen, maar *wanneer*. De markt is fundamenteel veranderd door drie factoren: de invoer van terugleverkosten door bijna alle leveranciers, de grilligheid van de onbalansmarkt en de historisch lage prijzen van LFP-cellen.\n\n### Terugleverkosten: De Stille Rendementsmoordenaar\nEnergieleveranciers rekenen inmiddels tot wel €0,15 per teruggeleverde kWh aan 'boete'. Voor een huishouden met 12 zonnepanelen betekent dit een directe kostenpost van honderden euro's per jaar. Een thuisbatterij fungeert hier als een 'schokdemper'. Door de stroom zelf op te slaan en 's avonds te verbruiken, vermijd je deze kosten volledig.\n\n### Rekenvoorbeeld Rendement\nStel, u verbruikt jaarlijks 4.000 kWh en wekt 4.500 kWh op. Zonder batterij verbruikt u direct slechts 30% (1.350 kWh). De rest levert u terug tegen kosten. Met een 10 kWh batterij verhoogt u dit naar 75% (3.375 kWh).\n\n| Post | Zonder Batterij | Met 10 kWh Batterij |\n|---|---|---|\n| Zelfconsumptie | 30% | 75% |\n| Terugleverkosten | €340 | €45 |\n| Inkoopbesparing | €0 | €680 |\n| **Totale Jaarwinst** | **€0** | **€975** |\n\n[AFFILIATE LINK HIER]\n\n### ROI en Terugverdientijd\nDe gemiddelde investering voor een kwalitatief 10 kWh systeem ligt rond de €6.500 (inclusief montage). Met een jaarlijkse besparing van bijna €1.000 komt de terugverdientijd uit op ca. 6,5 jaar. Gezien de levensduur van 15-20 jaar is dit een uiterst solide investering.\n\n### Conclusie\nHet rendement in 2025 wordt niet meer alleen bepaald door het vermijden van inkoop, maar door de combinatie van drie inkomstenstromen: besparing op inkoop, vermijden van terugleverkosten en actieve handel via een dynamisch contract bij partners zoals bol.`
  },
  {
    id: 'b2',
    slug: 'energiecontract-kiezen-2025',
    title: 'Dynamisch vs Vast: Het Ultieme Duel voor de Batterij-bezitter',
    excerpt: 'Waarom een vast contract het rendement van je accu vernietigt en hoe je profiteert van negatieve prijzen.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    content: `## De Motor van je Rendement: Het Contract\n\nEen thuisbatterij zonder dynamisch contract is als een sportwagen met een snelheidsbegrenzer. Je hebt de hardware, maar de software (het contract) laat je niet toe om de volle potentie te benutten.\n\n### De Kracht van Dynamische Prijzen\nBij een dynamisch contract betaal je de actuele inkoopprijs van de beurs (EPEX Spot). In 2024 waren er meer dan 300 uren met **negatieve stroomprijzen**. Op dat moment wordt je batterij een geldmachine: hij laadt op en je krijgt daarvoor betaald.\n\n### Waarom Vast/Variabel nadelig is\nBij een vast contract betaal je een gemiddelde prijs waarin de leverancier zijn risico's heeft ingecalculeerd. Je batterij kan hier alleen 'zelfconsumptie' optimaliseren. Je mist de handel.\n\n### Stappenplan voor de overstap\n1. Controleer of je een slimme meter hebt (versie SMR 4.0 of hoger).\n2. Kies een aanbieder met een open API (Zonneplan, Tibber, ANWB).\n3. Koppel je batterij-omvormer aan de prijsfeed van de aanbieder.\n\n[AFFILIATE LINK HIER]\n\n### Benodigde Hardware bij bol\nOm dit proces te automatiseren heb je vaak een 'Energy Management System' (EMS) nodig. Kijk op bol voor P1-dongles en Home Automation controllers die dit naadloos ondersteunen.`
  },
  {
    id: 'b3',
    slug: 'wetgeving-en-salderen-2027',
    title: 'De Afbouw van Salderen: Een Strategisch Vooruitzicht naar 2027',
    excerpt: 'Wat de politieke besluiten betekenen voor jouw zonnepanelen en waarom wachten tot 2027 een dure fout is.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    content: `## Het Einde van de 'Gratis Batterij'\n\nNederland heeft jarenlang genoten van de salderingsregeling: het energienet als gratis accu. Die tijd is officieel voorbij. Vanaf 2027 wordt de regeling stapsgewijs afgebouwd naar nul in 2031.\n\n### Wat betekent dit voor de waarde van je stroom?\nZodra je niet meer mag salderen, krijg je voor de stroom die je overdag over hebt slechts een 'redelijke vergoeding' van ca. €0,03 tot €0,05. Terwijl je 's avonds voor diezelfde kWh weer €0,30 betaalt. Dit verschil van €0,25 per kWh is de directe winst voor je thuisbatterij.\n\n### De 0% BTW Kans in 2025\nMomenteeel profiteer je in Nederland van 0% BTW op de installatie van energiebesparende maatregelen als ze onderdeel zijn van een integraal systeem. Dit voordeel kan oplopen tot meer dan €1.500 op een gemiddeld systeem.\n\n### Waarom nu investeren?\n1. **Zekerheid**: Je bent voorbereid op de afbouw vóór de grote run op installateurs begint.\n2. **Directe Besparing**: Terugleverkosten zijn er nú al, salderen stopt pas later.\n3. **Waardestijging Woning**: Huizen met een A+++ label en energie-opslag zijn gewilder op de woningmarkt.\n\n[AFFILIATE LINK HIER]\n\n### Advies\nWacht niet tot de markt verzadigd is in 2026. Bekijk nu de mogelijkheden bij bol voor modulaire systemen die je later makkelijk kunt uitbreiden.`
  },
  {
    id: 'b4',
    slug: 'optimale-capaciteit',
    title: 'Dimensionering Gids: Hoeveel kWh is Perfect voor Jouw Woning?',
    excerpt: 'Voorkom dat je te veel betaalt voor ongebruikte capaciteit. De wetenschap achter de ideale accu-grootte.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    content: `## Grootte is niet Alles\n\nEen veelgemaakte fout is het kopen van een zo groot mogelijke batterij. In de praktijk leidt dit vaak tot een lagere ROI. Een batterij moet namelijk 'werken' (cycli maken) om zichzelf terug te verdienen.\n\n### De Gulden Snede\nIn Nederland hanteren we de regel: **1.2 kWh per 1.000 Wp**. \n\n| Zonnepanelen (Wp) | Ideale Accu (kWh) | Maximaal Advies |\n|---|---|---|\n| 3.000 | 4 | 5 |\n| 5.000 | 6 | 8 |\n| 8.000 | 10 | 12 |\n| 12.000+ | 15+ | 20 |\n\n### Seizoensgebonden Factoren\nIn de zomer is je batterij om 10:00 's ochtends al vol. In de winter wordt hij door de zon zelden volledig geladen. Het rendement in de winter moet daarom komen uit 'handel' op de prijsverschillen van het net, niet uit je eigen panelen.\n\n[AFFILIATE LINK HIER]\n\n### Modulair vs All-in-one\nKies bij voorkeur voor een modulair systeem (zoals BYD of AlphaESS). Hierbij begin je met bijvoorbeeld 5 kWh en kun je, als je later een elektrische auto of warmtepomp koopt, simpelweg een extra module bijplaatsen. Vind deze uitbreidingssets bij bol.`
  },
  {
    id: 'technische-gids-onbalanssturing',
    slug: 'technische-gids-onbalanssturing',
    title: 'Onbalanssturing: De Technologie die je Rijk Maakt',
    excerpt: 'Een diepe duik in netstabilisatie, frequentie-sturing en hoe jouw batterij onderdeel wordt van een Virtual Power Plant.',
    imageUrl: 'https://images.unsplash.com/photo-1611288875054-3a510600742e?auto=format&fit=crop&q=80&w=1200',
    content: `## De Batterij als Actieve Speler\n\nDe tijd dat een batterij alleen maar stroom opsloeg voor later is voorbij. In 2025 is de meest winstgevende functie van een accu de **onbalanssturing**. \n\n### Wat is Netonbalans?\nHet elektriciteitsnet moet exact op 50Hz draaien. Wijkt dit af door te veel of te weinig aanbod, dan ontstaat er 'onbalans'. Netbeheerders betalen grote sommen geld aan partijen die dit binnen seconden kunnen corrigeren.\n\n### Virtual Power Plants (VPP)\nJouw batterij wordt via internet gekoppeld aan duizenden anderen. Samen vormen jullie een 'virtuele centrale'. Een centrale computer stuurt alle batterijen tegelijk aan om stroom op te nemen of af te geven. Jij krijgt hiervoor een maandelijkse vergoeding of een winstdeel.\n\n### Welke hardware is geschikt?\nNiet elke omvormer kan onbalanssturing aan. Je hebt een systeem nodig met een reactietijd van minder dan 1 seconde. \n- **Tesla Powerwall**: Heeft eigen VPP software.\n- **Victron MultiPlus**: De favoriet van de techneut voor maatwerk-handel.\n- **AlphaESS**: Volledig ontzorgd systeem inclusief handels-algoritmes.\n\n[AFFILIATE LINK HIER]\n\n### Brandveiligheid en LFP\nBij actieve handel wordt de batterij vaker belast. Daarom is de keuze voor **LFP (Lithium IJzerfosfaat)** cruciaal. Deze chemie kan duizenden cycli meer aan dan de NMC varianten en is onbrandbaar bij beschadiging. Vergelijk de beste LFP-modellen bij bol.`
  }
];

export const ADVICE_STEPS: AdviceStep[] = [
  { title: "Systeemanalyse", description: "Start met een objectieve berekening van uw benodigde opslag en verwachte winst.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { title: "Vergelijking", description: "Bekijk welke merken en technologieën (LFP vs NMC) passen bij uw profiel.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { title: "Plan Advies", description: "Ontvang 3 maatwerk offertes van gecertificeerde installateurs voor een definitief plan.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
];
