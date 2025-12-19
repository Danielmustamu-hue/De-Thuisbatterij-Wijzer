
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
  { q: "Hoeveel bespaar ik met een dynamisch contract?", a: "Gemiddeld €300 tot €600 extra per jaar. U koopt stroom in bij negatieve prijzen en verbruikt uw eigen stroom tijdens dure avondpieken.", blogSlug: "dynamisch-slim-laden-2025" },
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
    content: `## Introductie: 2025 als het Kanteljaar voor de Thuisbatterij\n\nIn 2025 is de Nederlandse energiemarkt definitief veranderd. \n\n[ComparisonTable]\n\nBereken nu uw persoonlijke winst met onze Rendementscalculator.`
  },
  {
    id: 'g2',
    slug: 'kosten-rendement-formule-2025',
    title: 'Kosten & Rendement: Wat levert een thuisbatterij écht op in 2025?',
    excerpt: 'Een diepgaande financiële analyse van de rekensom in 2025.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '40 min',
    content: `## De Nieuwe Rekensom: Waarom 2025 Alles Verandert\n\n| Kenmerk | Scenario A: Salderen | Scenario B: Post-Saldering | Scenario C: Dynamisch + Onbalans |\n| :--- | :--- | :--- | :--- |\n| **Besparing** | ± €650 | ± €900 | ± €1.250 |\n\n[Halt: Hier later affiliate link naar bol invoegen]`
  },
  {
    id: 'g3',
    slug: 'saldering-2027-politiek',
    title: 'Thuisbatterij en de Salderingsregeling: Wat verandert er na 2027?',
    excerpt: 'Een diepe duik in de politieke besluiten, het einde van salderen en waarom wachten tot 2027 een financieel risico is.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '42 min',
    content: `## De Politieke Realiteit: Het Einde van de Salderingsregeling\n\nHet kabinet stopt met salderen per 2027. Wat betekent dit voor u?\n\n[Start de Rendementscalculator]`
  },
  {
    id: 'g4',
    slug: 'dynamisch-slim-laden-2025',
    title: 'Dynamische Energiecontracten & Slim Laden: Maak van je Thuisbatterij een Geldmachine',
    excerpt: 'Ontdek hoe je met EPEX-uurprijzen en onbalanssturing je batterij laat handelen als een pro. Geld verdienen terwijl je slaapt.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## De Revolutie van de Energiemarkt: Van Consument naar Trader\n\nStelt u zich voor: u wordt betaald om uw batterij op te laden. In 2025 is dit de realiteit.\n\n[Halt: Hier later affiliate link naar bol invoegen voor energieverbruiksmanagers]`
  },
  {
    id: 'g5',
    slug: 'capaciteit-kwh-advies',
    title: 'Hoe kies je de juiste capaciteit (kWh)? De Gids voor Maatwerk Opslag',
    excerpt: 'Technisch onderbouwde gids over het berekenen van de ideale batterijgrootte voor jouw woning. Voorkom over-investering.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    readingTime: '35 min',
    content: `## Introductie: De Wet van de Verminderde Meeropbrengst\n\nIn de wereld van de thuisbatterijen is er één fout die vaker wordt gemaakt dan alle andere: het kopen van een te groot systeem.\n\n[Start de Rendementscalculator]`
  },
  {
    id: 'g6',
    slug: 'installatiegids-checklist',
    title: 'Installatiegids: Waar moet u op letten bij een Gecertificeerd Installateur?',
    excerpt: 'De meest complete gids over veiligheid, normen en het installatieproces. Inclusief een 20-punts checklist voor uw offertegesprek.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## Introductie: Waarom de Installateur Belangrijker is dan de Batterij\n\nKwaliteit en veiligheid gaan voor alles bij de installatie van een hoogwaardig chemisch systeem.\n\n[Vergelijk 3 Installateurs]`
  },
  {
    id: 'g7',
    slug: 'onbalanssturing-algoritmes',
    title: 'Onbalanssturing: Geld Verdienen met je Thuisbatterij Terwijl je Slaapt',
    excerpt: 'De ultieme gids over de onbalansmarkt. Leer hoe AI-software je batterij laat handelen op het net en de terugverdientijd verlaagt naar onder de 5 jaar.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## De Geboorte van een Nieuwe Energiemarkt\n\nWelkom in de toekomst van het Nederlandse energienet. We bevinden ons op een historisch kantelpunt. De traditionele manier waarop we stroom verbruikten – passief afnemen van een groot nutsbedrijf – is definitief voorbij. In 2025 is uw woning niet langer alleen een plek om te wonen, maar een actieve speler op de wereldwijde energiemarkt. De drijvende kracht achter deze revolutie? **Onbalanssturing**.\n\nIn deze uitgebreide gids duiken we diep in de techniek en de economie van de onbalansmarkt. We leggen uit waarom netbeheerders bereid zijn u grof geld te betalen voor uw batterijcapaciteit, hoe slimme algoritmes het zware werk voor u doen, en waarom dit de sleutel is tot een terugverdientijd van minder dan 5 jaar.\n\n## Het Probleem: Een Net uit Balans\n\nOm te begrijpen hoe u geld kunt verdienen, moeten we eerst naar de bron van het probleem kijken. Het elektriciteitsnet in Nederland (en de rest van Europa) moet altijd exact op een frequentie van **50 Hertz** draaien. Als er meer stroom wordt opgewekt dan verbruikt, stijgt de frequentie. Als er meer wordt verbruikt dan opgewekt, daalt de frequentie. Beiden zijn gevaarlijk en kunnen leiden tot schade aan apparatuur of zelfs een totale blackout.\n\n### De Chaos van Duurzame Energie\nVroeger was de balans makkelijk te handhaven: als we meer stroom nodig hadden, gooiden we een extra schep kolen in de centrale. Vandaag de dag zijn we afhankelijk van de grillen van de natuur. Als er plotseling een zware wolk voor de zon schuift boven een grote zonnepark-regio, valt er in milliseconden gigantisch veel vermogen weg. Dit is wat we noemen: **onbalans**.\n\n## Wat is Onbalanssturing? (Technisch vs. Simpel)\n\nNetbeheerder **TenneT** heeft de taak om deze 50 Hertz te bewaken. Hiervoor kopen zij 'regelvermogen' in. Partijen die heel snel stroom kunnen toevoegen of afnemen, krijgen hiervoor een vergoeding die vele malen hoger ligt dan de reguliere stroomprijs.\n\n### Het Verschil met de EPEX (Day-ahead) Markt\nVeel mensen kennen de dynamische uurprijzen (EPEX). Deze prijzen worden een dag van tevoren vastgesteld op basis van voorspellingen. Onbalansprijzen daarentegen zijn **real-time**. Ze worden per kwartier bepaald en reageren op de werkelijke chaos op het net. Hierdoor kunnen onbalansprijzen soms pieken naar €1,00 per kWh of dalen naar -€0,50 per kWh, terwijl de reguliere prijs die dag misschien maar €0,20 was.\n\nOnbalanssturing is de techniek waarbij uw thuisbatterij razendsnel reageert op deze kwartierprijzen. Uw batterij 'luistert' naar TenneT en helpt het net te stabiliseren.\n\n## Het Verdienmodel: De Onbalans-Turbo op je Rendement\n\nHet verdienmodel van onbalanssturing rust op twee pijlers: **negatieve prijzen** en **piekvergoedingen**.\n\n### 1. Laden bij Overschot (Geld Toe!)\nWanneer er te veel windenergie is en het net overbelast raakt, dalen de onbalansprijzen diep in de min. Op dat moment krijgt u geld betaald om uw batterij op te laden. U helpt TenneT door stroom 'weg te poetsen'.\n\n### 2. Ontladen bij Tekort (De Hoofdprijs)\nWanneer de vraag onverwacht piekt, stijgen de prijzen naar extreme hoogtes. Uw batterij injecteert dan razendsnel stroom in het net. U verkoopt uw opgeslagen kWh's niet voor de normale prijs, maar tegen het onbalans-tarief.\n\n[Halt: Hier later affiliate link naar bol invoegen voor HomeWizard P1-meters om dit live te volgen]\n\n## De Kracht van EMS: Het Brein van de Installatie\n\nU hoeft natuurlijk niet zelf 24/7 naar grafieken te staren. Het geheim van een rendabel systeem zit in het **Energie Management Systeem (EMS)**. Dit is slimme software die is verbonden met uw batterij-omvormer.\n\n### AI en Algoritmes\nModerne EMS-software (zoals van Bliq, Zonneplan of speciale Victron-configuraties) maakt gebruik van kunstmatige intelligentie. Het algoritme kijkt naar:\n* De weersvoorspelling (wanneer gaan uw eigen panelen leveren?).\n* Uw historische verbruik (hoeveel stroom heeft u vanavond nodig?).\n* De live onbalansprijzen van TenneT.\n\nHet systeem maakt elke minuut een nieuwe berekening: "Is het nu slimmer om de zonnestroom te bewaren voor de koffiemachine vanavond, of kan ik de batterij nu beter leegtrekken voor €0,80 per kWh op de onbalansmarkt?"\n\n## Rendement: De ROI naar Onder de 5 Jaar\n\nLaten we eerlijk zijn: zonder onbalanssturing is de terugverdientijd van een thuisbatterij in Nederland vaak 7 tot 9 jaar. Met actieve onbalanssturing verandert alles.\n\n### Een Rekenvoorbeeld (10 kWh Systeem)\n* **Besparing via Zelfconsumptie:** €450 per jaar.\n* **Vermeden Terugleverkosten:** €300 per jaar.\n* **Netto Winst uit Onbalanshandel:** €400 - €700 per jaar.\n* **Totaal Jaarlijks Voordeel:** **€1.150 - €1.450**.\n\nBij een investering van ca. €6.000 (na BTW-teruggave/0%-tarief) ziet u dat de terugverdientijd daalt naar **4 tot 5 jaar**. Gezien de levensduur van 15+ jaar is dit een van de beste investeringen die u op dit moment kunt doen.\n\nWilt u weten wat uw specifieke winst is inclusief onbalanshandel? Onze Rendementscalculator simuleert dit scenario voor u.\n\n## Risico's & Slijtage: De Impact op de Levensduur\n\nEen veelgehoorde vraag is: "Slijt mijn batterij niet sneller door al dat handelen?" Het korte antwoord is: ja, hij maakt meer laadcycli, maar nee, het is geen probleem.\n\n### LFP-Technologie is de Redder\nOudere batterijen (zoals in uw laptop) kunnen ca. 500 keer laden. Moderne thuisbatterijen gebruiken **LiFePO4 (LFP)** technologie. Deze cellen kunnen 6.000 tot 10.000 keer volledig laden en ontladen voordat de capaciteit onder de 80% zakt. \n\nZelfs als uw EMS de batterij 1,5 keer per dag 'gebruikt' voor handel, komt u na 15 jaar pas op ca. 8.000 cycli. Bovendien zijn slimme algoritmes geprogrammeerd om de batterij te ontzien; ze zullen nooit handelen voor een paar cent winst als de 'slijtagekosten' hoger zijn.\n\n## Hardware Checklist: Wat Heb Je Nodig?\n\nOm mee te doen aan de onbalans-revolutie heb je meer nodig dan alleen een 'domme' accu.\n\n1. **Onbalans-compatibele Omvormer:** De omvormer moet snelle commando's (laden/ontladen binnen seconden) kunnen verwerken. Tesla, Victron en Huawei zijn hier marktleiders in.\n2. **Smart Meter Koppeling:** Een real-time uitlezing van je hoofdaansluiting. [Halt: Hier later affiliate link naar bol invoegen voor P1-dongles]\n3. **Stabiele Internetverbinding:** Bij voorkeur een LAN-kabel. Elke seconde vertraging is gemiste winst.\n4. **EMS-Abonnement:** De meeste software-aanbieders vragen een kleine maandelijkse fee (SaaS) voor de slimme aansturing. Dit verdient zich echter ruimschoot terug.\n\n## FAQ: Alles over Onbalans\n\n### Is onbalanssturing hetzelfde als dynamische prijzen?\nNee. Dynamische prijzen (EPEX) staan 24 uur van tevoren vast. Onbalansprijzen reageren op de actuele noodsituaties op het net en zijn veel extremer en winstgevender.\n\n### Kan ik dit ook zonder zonnepanelen?\nJa! Dit is het mooie van de huidige markt. Zelfs zonder zonnepanelen kunt u winst maken door simpelweg goedkope stroom van het net te trekken en dure stroom terug te leveren. De batterij wordt hiermee een op zichzelf staande investering.\n\n### Heb ik een specifiek energiecontract nodig?\nJa, u heeft een contract nodig bij een dynamische leverancier die handelen op de onbalansmarkt ondersteunt of toestaat via een externe aggregator.\n\n## Conclusie: De Vroege Vogel Winst\n\nOnbalanssturing is de 'turbo' op de thuisbatterij. Het lost een maatschappelijk probleem op (netcongestie) en beloont de burger die hieraan bijdraagt. In een tijd waarin de salderingsregeling onder druk staat, is dit het nieuwe fundament onder uw duurzame rendement. Wacht niet tot de massa beweegt; de grootste winsten op de onbalansmarkt worden nu behaald door de pioniers.\n\n[Halt: Hier later affiliate link naar bol invoegen voor energie-displays]\n\nBent u klaar om uw huis te transformeren in een winstgevende energiecentrale? Gebruik onze Rendementscalculator voor een volledige simulatie en vergelijk direct de beste installateurs die deze techniek aanbieden.\n\n[Start de Rendementscalculator]`
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
