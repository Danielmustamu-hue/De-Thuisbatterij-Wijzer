
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
    content: `## Introductie: 2025 als het Kanteljaar voor de Thuisbatterij\n\nIn 2025 is de Nederlandse energiemarkt definitief veranderd. Waar we voorheen spraken over de thuisbatterij als een 'leuke gadget voor de vroege vogels', is het nu een essentieel onderdeel geworden van een rendabel huishouden. De reden? Een giftige cocktail van **terugleverkosten**, een overbelast stroomnet (netcongestie) en de naderende afbouw van de salderingsregeling.\n\nHuishoudens met zonnepanelen worden tegenwoordig direct gestraft voor hun succes. Energieleveranciers rekenen tot wel 15 cent per kWh aan kosten voor de stroom die u overdag terugstuurt naar het net. Hierdoor verdwijnt uw rendement als sneeuw voor de zon.\n\n### Waarom de Rekensom in 2025 Anders is\nVroeger berekenden we de terugverdientijd puur op basis van de vermeden inkoop van stroom. In 2025 voegen we daar twee cruciale factoren aan toe: de **vermeden terugleverboete** en de winst uit **onbalanssturing**. Als u een slim systeem kiest, kan de batterij handelen op de energiemarkt terwijl u slaapt.\n\n## Deep-Dive: De Top 5 Thuisbatterijen van 2025\n\n### 1. Tesla Powerwall 3: De Onbetwiste Koning van Integratie\nTesla heeft met de Powerwall 3 een systeem neergezet dat de markt in 2025 domineert. Het grootste verschil met zijn voorganger is de volledig geïntegreerde **hybride omvormer**.\n\n### 2. AlphaESS SMILE-B3: De Meester van de Modulariteit\nVoor gezinnen die flexibiliteit zoeken, is de AlphaESS SMILE-B3 vaak de beste keuze. Dit systeem maakt gebruik van **LiFePO4-technologie** (Lithium IJzerfosfaat), wat de veiligste batterijtechniek van dit moment is.\n\n### 3. Victron Energy: De Vrijheid voor de Techneut\nWie geen genoegen neemt met een 'gesloten' systeem, komt uit bij Victron. Dit merk uit Almere is wereldberoemd in de maritieme sector en heeft die robuustheid vertaald naar de thuisbatterijmarkt.\n\n### 4. Sessy: De Nederlandse Plug-and-Play Trots\nSessy is een relatief nieuwe speler die specifiek voor de Nederlandse markt is ontwikkeld. Hun focus ligt op **retrofit**: het toevoegen van een accu aan een bestaande installatie.\n\n### 5. Huawei LUNA2000: Esthetiek ontmoet Efficiëntie\nHuawei heeft met de LUNA2000-serie een systeem dat niet misstaat in een modern interieur of garage.\n\n## Gedetailleerd Technisch Vergelijk 2025\n\n[ComparisonTable]\n\n## Rendement en Financiën: De 0% BTW Kans\nEen cruciaal voordeel in 2025 is de **0% BTW-regeling** voor de aanschaf en installatie van een thuisbatterij. Dit scheelt u direct 21% op de investering. In combinatie met een dynamisch energiecontract kunt u de terugverdientijd terugbrengen naar minder dan 7 jaar.\n\n[Halt: Hier later affiliate link invoegen]\n\n### Conversie-tip: Vergelijk Offertes\nDe installatie van een thuisbatterij is vakwerk. Wij adviseren altijd om minimaal 3 offertes te vergelijken van erkende, gecertificeerde installateurs. Dit bespaart u vaak tot wel 20% op de totale installatiekosten.\n\n## Conclusie: Welk Systeem Moet U Kiezen?\n\n* **Wilt u de beste software en onbalanssturing?** Kies voor de **Tesla Powerwall 3**.\n* **Zoekt u een veilig en modulair systeem voor een gezin?** De **AlphaESS SMILE-B3** is uw beste partner.\n* **Bent u een tech-liefhebber die volledige controle wil?** Ga voor **Victron Energy**.\n\nBereken nu uw persoonlijke winst met onze Rendementscalculator en zorg dat u klaar bent voor de energietoekomst.`
  },
  {
    id: 'g2',
    slug: 'kosten-rendement-formule-2025',
    title: 'Kosten & Rendement: Wat levert een thuisbatterij écht op in 2025?',
    excerpt: 'Een diepgaande financiële analyse van de rekensom in 2025. Inclusief scenario-berekeningen voor salderen en onbalanshandel.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '40 min',
    content: `## De Nieuwe Rekensom: Waarom 2025 Alles Verandert\n\nHet rendement van een thuisbatterij wordt in 2025 niet meer uitsluitend berekend op basis van 'het opslaan van gratis zonnestroom'. We zijn beland in een tijdperk waarin de energieprijs op uurbasis fluctueert en energieleveranciers u factureren voor het terugleveren van stroom. De rekensom is complexer, maar voor wie slim rekent, ook veel interessanter geworden.\n\n### Het Einde van de 'Gratis' Teruglevering\nIn 2024 introduceerden bijna alle grote leveranciers (Vandebron, Eneco, Vattenfall, Essent) de zogenaamde **terugleverkosten**. Voor elke kWh die u overdag het net op stuurt, betaalt u gemiddeld tussen de €0,10 en €0,18. Bij een jaarlijks overschot van 3.000 kWh betekent dit een directe kostenpost van €450. \n\n### Maximalisatie van Zelfconsumptie\nEen gemiddeld huishouden zonder batterij gebruikt direct ongeveer 30% van hun opgewekte zonnestroom. De resterende 70% wordt teruggestuurd. Met een goed gedimensioneerde batterij stijgt deze 'zelfconsumptie' naar 75% tot 85%. U vermijdt hiermee niet alleen de inkoop van dure avondstroom, maar u stopt ook direct de bloeding van de terugleverkosten.\n\n## De Investering: Wat Kost een Thuisbatterij in 2025?\n\nDe prijzen van lithium-ijzerfosfaat (LFP) cellen zijn in 2024 historisch gedaald, wat we nu terugzien in de consumentenprijzen. Toch blijft het een serieuze investering. We maken onderscheid tussen de hardware en de vaak onderschatte installatiekosten.\n\n### Prijsindicaties per Capaciteit (Inclusief BTW-voordeel)\n* **5 kWh Systeem (Basis):** ± €3.500 - €5.500. Ideaal voor kleinere huishoudens met een verbruik tot 3.500 kWh.\n* **10 kWh Systeem (Gemiddeld):** ± €5.000 - €8.000. De standaard voor gezinnen met zonnepanelen en een gemiddeld verbruik.\n* **15 kWh+ Systeem (Groot):** ± €8.000 - €12.000. Voor grootverbruikers, huishoudens met een warmtepomp of elektrische auto.\n\n### Bijkomende Kosten: De Meterkast\nIn 2025 is een stabiele 3-fase aansluiting vaak een vereiste voor krachtige batterij-omvormers. Heeft u nog een 1-fase aansluiting? Houd dan rekening met een investering van €600 tot €900 voor een meterkast-upgrade en de verhoging van het vastrecht bij de netbeheerder.\n\nWilt u weten wat uw specifieke investering zou zijn? Onze Rendementscalculator geeft u direct inzicht.\n\n## Scenario-Analyse: Drie Wegen naar Rendement\n\n| Kenmerk | Scenario A: Salderen | Scenario B: Post-Saldering | Scenario C: Dynamisch + Onbalans |\n| :--- | :--- | :--- | :--- |\n| **Focus** | Zelfverbruik | Vermijden Terugleverkosten | Actief Handelen |\n| **Jaarlijkse Besparing** | ± €650 | ± €900 | ± €1.250 |\n| **Terugverdientijd** | 8 - 10 jaar | 6 - 8 jaar | 4 - 6 jaar |\n| **Complexiteit** | Laag | Gemiddeld | Hoog (Software vereist) |\n\n## Conclusie: Is het de Investering Waard?\n\nIn 2025 is de vraag niet meer *of* een thuisbatterij rendabel is, maar *hoe* u deze het slimst inzet. Door de combinatie van vermeden boetes, verhoogde zelfconsumptie en slimme handel op de energiemarkt, is de terugverdientijd voor de meeste huishoudens gedaald tot onder de 8 jaar. Gezien de levensduur van 15+ jaar is dit een investering met een gegarandeerd positief rendement.\n\n[Halt: Hier later affiliate link naar bol invoegen for HomeWizard Energy Display]`
  },
  {
    id: 'g4',
    slug: 'dynamisch-slim-laden-2025',
    title: 'Dynamische Energiecontracten & Slim Laden: Maak van je Thuisbatterij een Geldmachine',
    excerpt: 'Ontdek hoe je met EPEX-uurprijzen en onbalanssturing je batterij laat handelen als een pro. Geld verdienen terwijl je slaapt.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200',
    readingTime: '45 min',
    content: `## De Revolutie van de Energiemarkt: Van Consument naar Trader\n\nStelt u zich voor: u wordt betaald om uw batterij op te laden. Het klinkt als een utopie, maar in de Nederlandse energiemarkt van 2025 is dit de realiteit van bijna elk weekend. We zijn getuige van een fundamentele verschuiving. De tijd dat we passief stroom afnamen tegen een vast tarief is voorbij. Wie een thuisbatterij combineert met een dynamisch energiecontract, stapt in de wereld van de 'prosumer': een actieve handelaar die profiteert van de grillen van zon en wind.\n\nIn deze uitgebreide gids duiken we diep in de techniek achter dynamische prijzen, het fenomeen van negatieve stroomprijzen en de heilige graal van de thuisbatterij: **onbalanssturing**.\n\n## De EPEX-Markt: Hoe Uw Stroomprijs Per Uur Wordt Bepaald\n\nOm te begrijpen hoe u geld kunt verdienen, moeten we kijken naar de EPEX SPOT markt. Dit is de Europese beurs waar energiebedrijven hun stroom voor de volgende dag inkopen. \n\n### Vraag en Aanbod in Real-time\nDe prijs op deze beurs wordt bepaald door de verwachte opwekking en consumptie. Op een zonnige zondag met veel wind is er een overschot aan groene stroom. De fossiele centrales kunnen niet snel genoeg afschakelen, waardoor de prijs keldert. Bij een dynamisch contract (zoals van Frank Energie, Tibber of Zonneplan) wordt deze beursprijs 1-op-1 aan u doorgegeven.\n\n### Het Fenomeen van Negatieve Prijzen\nIn 2024 zagen we honderden uren met negatieve prijzen. Dit betekent dat de stroomprijs bijvoorbeeld -€0,05 per kWh is. Als u op dat moment uw batterij oplaadt, krijgt u letterlijk geld toe op uw volgende factuur. Uw batterij fungeert hier als een 'spons' die de overtollige energie van het net zuigt en u daarvoor beloont.\n\n## Onbalanssturing: De Echte Geldmachine\n\nNaast de dagelijkse EPEX-prijzen is er een nog lucratievere markt: de **onbalansmarkt**. Dit is het terrein waar netbeheerder TenneT opereert om het stroomnet exact op 50 Hertz te houden.\n\n### Wat is Onbalans?\nSoms wijkt de werkelijke vraag of het werkelijke aanbod af van de voorspelling (bijvoorbeeld als een wolk onverwacht voor de zon schuift). TenneT moet dan razendsnel ingrijpen om een blackout te voorkomen. Hiervoor gebruiken ze 'regelvermogen'. Ze betalen partijen die heel snel stroom kunnen leveren óf juist stroom kunnen opnemen.\n\n### De Rol van Slimme Software\nUw thuisbatterij is de perfecte partner voor TenneT. Met software van partijen als **Bliq, Zonneplan of Victron (Dynamic ESS)** wordt uw batterij onderdeel van een netwerk. Het algoritme ziet wanneer TenneT een probleem heeft en reageert binnen milliseconden. \n\n* **Bij te veel stroom op het net:** Uw batterij laadt razendsnel op tegen een hoge vergoeding.\n* **Bij te weinig stroom op het net:** Uw batterij injecteert stroom in het net, ook tegen een premium tarief.\n\nDit handelen gebeurt volledig autonoom. U hoeft zelf niets te doen, behalve af en toe in de app kijken hoeveel winst er die dag is gemaakt.\n\n## Hardware Eisen: Is Uw Batterij Slim Genoeg?\n\nNiet elke batterij kan fungeren als handelsinstrument. Voor actief onbalans-beheer zijn er drie technische vereisten:\n\n### 1. Een Snelle Communicatiemodule\nHet systeem moet realtime data kunnen ontvangen van de beurs en de netbeheerder. Een trage wifi-verbinding is niet voldoende; vaak is een bekabelde LAN-verbinding of een speciale gateway (zoals een Dongle of Energy Manager) vereist.\n\n### 2. Koppeling met de Slimme Meter\nOm te weten wat er gebeurt, moet het systeem 'zien' wat de actuele status van uw hoofdaansluiting is. [Halt: Hier later affiliate link invoegen voor HomeWizard P1-meters]\n\n### 3. Hoge C-rate\nHandelen op de onbalansmarkt vraagt veel van de omvormer. U moet in korte tijd veel vermogen kunnen laden of ontladen. Goedkope systemen hebben vaak een beperkt laadvermogen, waardoor ze minder winst kunnen maken tijdens korte prijs-pieken.\n\n## Rekenvoorbeeld: De Winst van Onbalanshandel\n\nLaten we kijken naar een realistisch scenario voor een gemiddeld huishouden met een 10 kWh batterij in 2025.\n\n| Type Opbrengst | Alleen Zelfconsumptie | Dynamisch + Onbalans |\n| :--- | :--- | :--- |\n| **Besparing Inkoop** | €450 | €450 |\n| **Vermeden Boetes** | €300 | €300 |\n| **Handelswinst (Netto)** | €0 | €480 |\n| **Totale Opbrengst** | **€750** | **€1.230** |\n\nIn dit voorbeeld ziet u dat de handelswinst de jaarlijkse opbrengst bijna verdubbelt. De meerprijs voor de slimme sturing (vaak een paar euro per maand aan servicekosten) verdient zich binnen enkele weken terug.\n\n## FAQ: Slijtage en Levensduur bij Intensief Gebruik\n\nEen veelgehoorde zorg is: "Slijt mijn batterij niet sneller als hij de hele dag door handelt?"\n\n### Lithium IJzerfosfaat (LFP) is de Sleutel\nModerne thuisbatterijen gebruiken bijna allemaal LFP-technologie. Deze cellen zijn ontworpen voor 6.000 tot 10.000 laadcycli. Zelfs als uw batterij door onbalanssturing twee keer per dag een 'cyclus-equivalent' maakt, gaat hij nog steeds 15 tot 20 jaar mee. De software-algoritmes zijn bovendien zo geprogrammeerd dat ze de 'gezondheid' (State of Health) van de cellen bewaken; ze zullen nooit handelen als de winst kleiner is dan de marginale slijtagekosten.\n\n## Conclusie: Word de Regisseur van Je Eigen Energie\n\nDynamisch laden en onbalanssturing transformeren de thuisbatterij van een passieve opslagbak naar een actieve inkomstenbron. In een wereld met steeds meer grillige groene stroom, bent u de partij die het net stabiel houdt én daarvoor beloond wordt. Wacht niet tot de saldering volledig is afgebouwd; de markt voor slim laden is nú open voor de vroege vogels.\n\nWilt u weten welk dynamisch contract en welke batterij-software het beste bij uw situatie past? Gebruik onze calculator voor een op maat gemaakt advies.\n\n[Halt: Hier later affiliate link invoegen voor energieverbruiksmanagers]`
  },
  {
    id: 'g3',
    slug: 'saldering-2027-politiek',
    title: 'Thuisbatterij en de Salderingsregeling: Wat verandert er na 2027?',
    excerpt: 'Een diepe duik in de politieke besluiten, het einde van salderen en waarom wachten tot 2027 een financieel risico is.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    readingTime: '42 min',
    content: `## De Politieke Realiteit: Het Einde van de Salderingsregeling\n\nHet hoge woord is eruit: het Nederlandse kabinet heeft besloten om de salderingsregeling voor kleinverbruikers per 1 januari 2027 in één keer volledig af te bouwen. Waar voorheen spraken over een geleidelijke afbouw, is er nu gekozen voor een harde streep. Dit betekent dat vanaf die datum de stroom die u overdag teruglevert aan het net, niet meer 1-op-1 weggestreept mag worden tegen de stroom die u op een ander moment afneemt.\n\nDeze wetswijziging heeft een gigantische impact op de ruim twee miljoen huishoudens met zonnepanelen. De grid, die we jarenlang hebben gebruikt als een 'gratis accu', wordt vanaf 2027 een marktplaats waar u uw eigen stroom tegen een zeer laag tarief verkoopt en tegen een hoog tarief inkoopt. Dit maakt de thuisbatterij niet langer een optie, maar een noodzaak voor wie zijn energierekening laag wil houden.\n\n## Het 'Wacht-risico': Waarom nu Investeren Verstandiger is\n\nVeel mensen hebben de neiging om te wachten tot de wet daadwerkelijk van kracht is. 'Ik kijk in 2027 wel weer verder', is een veelgehoorde uitspraak. Echter, vanuit een financieel en technisch oogpunt is dit een riskante strategie.\n\n### 1. De Huidige Marktsituatie (2025)\nOp dit moment bevinden we ons in een unieke markt. Door de onzekerheid van vorig jaar zijn de voorraden bij leveranciers groot en de prijzen van hardware historisch laag. Bovendien hebben installateurs momenteel capaciteit, waardoor u binnen enkele weken een systeem kunt laten plaatsen. \n\n### 2. De Stormloop van 2026\nZodra 2027 nadert, zal de massa in beweging komen. De geschiedenis leert ons dat dergelijke marktverschuivingen leiden tot enorme wachttijden en prijsstijgingen door schaarste aan personeel en materiaal. Wie wacht tot de laatste minuut, betaalt de hoofdprijs voor de installatie en loopt het risico maandenlang te moeten wachten terwijl de terugleverkosten intussen doorlopen.\n\n### 3. Profiteren van de 0% BTW\nDe huidige fiscale regels rondom de 0% BTW op energiebesparende maatregelen zijn in 2025 gunstig. Politieke winden kunnen draaien; een investering die u vandaag doet, is zekergesteld tegen de huidige voorwaarden.\n\nWilt u weten hoe de rekensom voor uw situatie verandert na 2027? Gebruik direct onze Rendementscalculator.\n\n## Zelfconsumptie als Nieuwe Standaard\n\nIn de wereld zonder saldering draait alles om één term: de **gelijktijdigheidsfactor**. Dit is het percentage van uw opgewekte stroom dat u op exact hetzelfde moment verbruikt als het wordt opgewekt. Zonder batterij ligt dit bij de meeste huishoudens op slechts 30%. \n\n### Fysiek Bewaren vs. Wegstrepen\nVoorheen maakte het niet uit *wanneer* u stroom gebruikte, zolang de jaarbalans maar klopte. Na 2027 wordt de fysieke locatie van het elektron doorslaggevend. De stroom die uw zonnepanelen om 13:00 uur opwekken, moet u ofwel direct gebruiken (wasmachine aan), ofwel fysiek bewaren in een batterij. Doet u dat niet, dan wordt de stroom het net op geduwd tegen een magere vergoeding van misschien €0,05, terwijl u om 19:00 uur diezelfde kWh weer moet inkopen voor €0,30.\n\nDoor een thuisbatterij te installeren, verhoogt u de gelijktijdigheidsfactor naar 75% tot 85%. U creëert een gesloten circuit binnen uw eigen woning.\n\n## De Rol van Terugleverkosten: De Prikkel voor Nu\n\nHoewel de saldering pas in 2027 stopt, hebben energieleveranciers de facto de afbouw al ingezet via de **terugleverkosten**. Door boetes te rekenen voor het injecteren van stroom, hebben zij de financiële waarde van salderen al voor een deel uitgehold. \n\nDe thuisbatterij is in 2025 het enige instrument dat u als consument hebt om deze kostenpost direct te elimineren. Door de stroom 'achter de meter' te houden, merkt de leverancier niet dat u overschot produceert en kan hij u dus ook geen kosten in rekening brengen voor het gebruik van het net voor injectie.\n\nVoor het nauwkeurig in kaart brengen van uw injectie en verbruik raden wij een slimme meter koppeling aan. [Halt: Hier later affiliate link invoegen voor HomeWizard P1-meters]\n\n## Toekomstvisie 2030: Het Slimme Energienet\n\nKijken we verder vooruit, dan zien we dat de rol van de thuisbatterij alleen maar groter wordt. Het energienet in Nederland loopt tegen zijn grenzen aan (netcongestie). De overheid en netbeheerders zullen in de nabije toekomst burgers moeten stimuleren om het net te ontlasten.\n\n### Netstabiliteit als Verdienmodel\nIn 2030 zal uw thuisbatterij waarschijnlijk onderdeel zijn van een 'Virtual Power Plant' (VPP). Hierbij worden duizenden batterijen door software gekoppeld om pieken en dalen in het landelijke net op te vangen. Voor dit 'balanceren' krijgt u een vergoeding. De thuisbatterij verandert hiermee van een besparingsmiddel in een actieve inkomstenbron.\n\n### Voorkomen van Netcongestie\nIn sommige nieuwbouwwijken wordt nu al gekeken naar een verplichting voor energie-opslag om te voorkomen dat de lokale transformatorhuisjes overbelast raken. Door nu al te investeren in een robuust systeem, bent u voorbereid op een wereld waarin stroomtoevoer niet meer onbeperkt gegarandeerd is.\n\n## Conclusie: Wacht niet tot de Massa Beweegt\n\nDe wetgeving van 2027 is een onomkeerbaar proces. De 'gouden tijden' van het salderen lopen ten einde, maar daarvoor in de plaats komt een nieuw model van autonomie en slimme handel. Het risico van wachten is drieledig: u betaalt nu al onnodige terugleverkosten, u riskeert hogere prijzen in de toekomst, en u mist de kans om uw systeem rustig en weloverwogen te optimaliseren.\n\nOnze boodschap is helder: informeer uzelf nu, bereken uw rendement met de kennis van 2027 in het achterhoofd, en kies voor een systeem dat klaar is voor de toekomst.\n\n[Halt: Hier later affiliate link invoegen voor energiemonitoring-apps]\n\nBent u benieuwd welk systeem het beste aansluit bij deze nieuwe realiteit? Bekijk onze Top 5 Vergelijking of start direct een berekening.\n\n[Start de Rendementscalculator]`
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
