webpackJsonp([59,262],{1071:function(e,l,n){e.exports={frontmatter:n(452),content:n(1674)}},1674:function(e,l,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>En eller annen variant av Snake har eksistert på nesten alle personlige datamaskiner helt siden slutten av 1970-tallet. Ekstra populært ble spillet da det dukket opp i Nokias mobiltelefoner i 1997, og de seneste årene har spillet til og med blitt innlemmet i New Yorks Museum of Modern Arts samling.</p> <p>Selve spillet går enkelt og greit ut på å styre en slange rundt på skjermen, mens slangen må unngå å krasje i kanten av skjermen eller seg selv. Slangen vokser ved å spise epler som dukker opp tilfeldige steder på skjermen. Snake kan videreutvikles på mange måter, enten ved å lage ekstra hindringer på skjermen, ved forskjellige typer bonusepler, eller for eksempel ved at to slanger konkurrerer om å spise eplene og om å stenge hverandre inne.</p> <figure><img src="+n(2323)+' alt=""/></figure> </section> <section class=activity id=oversikt-over-prosjektet> <h1 class=activity id=oversikt-over-prosjektet>Oversikt over prosjektet</h1> <p><em>Mesteparten av kodingen av Snake skal du gjøre selv. I Snake bruker vi kloner på en litt spesiell og ganske smart måte. Vi vil derfor fokusere på kloning i begynnelsen av denne leksjonen.</em></p> <section class=check id=plan> <h2 class=check id=plan>Plan</h2> <ul> <li> <p>Slangen flytter på seg ... eller?</p> </li> <li> <p>Styr slangen til den krasjer!</p> </li> <li> <p>Epler og annet snadder.</p> </li> <li> <p>Vegger, bonusepler, flere slanger og andre utfordringer.</p> </li> </ul> </section> </section> <section class=activity id=steg-1-slangen-flytter-pa-seg-eller> <h1 class=activity id=steg-1-slangen-flytter-pa-seg-eller>Steg 1: Slangen flytter på seg ... eller?</h1> <p><em>Snake er i prinsippet et enkelt spill å lage. Men en utfordring er hvordan selve slangen skal flyttes rundt. Først virker det kanskje som om man trenger en eller annen liste som husker hvor hver del av slangen er slik at man kan flytte den.</em></p> <p>I stedet for å bruke lister skal vi bruke kloning på en litt spesiell måte. Husk at når vi kloner kopierer vi både utseendet og oppførselen til en figur. Vi vil starte med en enkel boks som vil være en del av kroppen til slangen. Denne boksen vil vi flytte, klone, flytte, klone og så videre. Trikset for at det skal se ut som om slangen flytter på seg er at de gamle klonene sletter seg selv etter litt tid.</p> <p>I figuren er den blå boksen hodet til slangen, de grønne boksene er kroppen til slangen, mens de hvite boksene indikerer hvor slangen har vært (men er egentlig slettede klonede bokser).</p> <figure><img src='+n(2324)+' alt=""/></figure> <p>For å vite når vi skal slette kloner bruker vi tre variabler: <code class=blockdata>lengde</code> er lengden på slangen, <code class=blockdata>teller</code> er en enkel teller som passer på hvor mange steg slangen har gått siden begynnelsen av spillet. Til slutt vil <code class=blockdata>min id</code> være et tall som forteller hvilket nummer i rekken en gitt klone er. Over er <code class=blockdata>min id</code> skrevet i hver boks, <code class=blockdata>teller</code> er 16 siden slangen har gått 16 steg, og <code class=blockdata>lengde</code> er 6.</p> <p>Trikset er nå ganske enkelt. Hver klone sletter seg selv hvis <code class=blockdata>min id</code> er mindre enn <code class=blockdata>teller</code> - <code class=blockdata>lengde</code>. La oss prøve dette ut i praksis.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Start et nytt prosjekt. Slett kattefiguren.</p> </li> <li> <p>Lag en boksfigur. Tegn denne selv. Du bør lage den ganske liten slik at du får plass til en lang slange på skjermen. Pass også på at boksen blir like bred som høy. Et sted mellom <code>10 x 10</code> og <code>20 x 20</code> er en fin størrelse.</p> <figure><img src='+n(2322)+' alt=""/></figure> </li> <li> <p>Lag så de tre variablene: <code class=blockdata>lengde</code> og <code class=blockdata>teller</code> skal gjelde for alle figurer, mens <code class=blockdata>min id</code> må gjelde kun for denne figuren siden den skal være forskjellig for hver klon.</p> </li> <li> <p>Vi skal nå lage hovedløkken i spillet. Først setter vi de nødvendige variablene, deretter bruker vi en løkke til å lage stadig nye slangebokser.</p> <pre class=blocks>når jeg mottar [Nytt spill v]\nsett [teller v] til [0]\nsett [lengde v] til [5]\ngjenta til &lt;berører [kant v]&gt;\n    sett [min id v] til (teller)\n    endre [teller v] med (1)\n    vent (0.1) sekunder\n    lag klon av [meg v]\n    gå (10) steg\nslutt\n</pre> <p>Her må <code>10</code>-tallet i <code class=blockmotion>gå 10 steg</code>-klossen være likt med størrelsen på din boks.</p> </li> <li> <figure>Selve kloneboksene trenger nå bare vente til de skal slette seg selv. Det er ganske enkelt.</figure> <pre class=blocks>når jeg starter som klon\nvent til &lt;((teller) - (lengde)) &gt; (min id)&gt;\nslett denne klonen\n</pre> <figure>Sammenlign disse skriptene med figuren og forklaringen ovenfor. Skjønner du hvordan de fungerer?</figure> </li> <li> <p>Prøv spillet ditt. Det kan være greit å lage et skript på scenen som sender ut meldingen <code>Nytt spill</code> når det grønne flagget klikkes. Du skal se en slange som beveger seg over skjermen, du kan selvsagt ikke styre den enda!</p> </li> </ul> </section> </section> <section class=activity id=steg-2-styr-slangen-til-den-krasjer> <h1 class=activity id=steg-2-styr-slangen-til-den-krasjer>Steg 2: Styr slangen til den krasjer!</h1> <figure><em>Vi skal nå kontrollere slangen med piltastene.</em></figure> <p>Det er lett å bruke piltastene til å kontrollere slangen. Siden den går av seg selv trenger vi bare å endre retningen når piltastene trykkes.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Lag et nytt skript som også starter på <code>Nytt spill</code>-meldingen. Lag en <code class=blockcontrol>for alltid</code>-løkke hvor du tester om hver piltast er trykket og endrer hvilken retning figuren peker tilsvarende.</p> </li> <li> <p>Legg til en <code class=blockmotion>gå til x: y:</code>- og en <code class=blockmotion>pek i retning</code>-kloss først i skriptet ditt slik at slangen starter et fornuftig sted i begynnelsen av spillet.</p> </li> <li> <p>Du kan markere hodet til slangen ved å lage en ekstra drakt. Lag for eksempel en kopi av den boksen du allerede har tegnet, og endre fargen på denne. Kall en av draktene <code>hode</code> og den andre <code>kropp</code>. Du kan da bruke <code>hode</code>-drakten i hovedløkken hvor du genererer klonen. I skriptet for hver klon endrer du så drakten til <code>kropp</code> før <code class=blockcontrol>vente</code>-klossen.</p> </li> <li> <p>Legg også inn en sjekk på om slangen krasjer i seg selv. Dette kan du for eksempel gjøre ved å utvide testen i <code class=blockcontrol>gjenta til</code>-klossen med <code class=blockoperators>eller</code> og <code class=blocksensing>berører fargen</code>.</p> </li> <li> <figure>Prøv spillet ditt. Du skal nå kunne styre slangen din rundt på skjermen, helt til du krasjer i kanten eller i deg selv.</figure> </li> </ul> </section> </section> <section class=activity id=steg-3-epler-og-annet-snadder> <h1 class=activity id=steg-3-epler-og-annet-snadder>Steg 3: Epler og annet snadder</h1> <p><em>Nå skal vi gi slangen litt mål og mening. Ved å spise epler kan slangen vokse seg stor og sterk!</em></p> <p>Eplene er ganske enkle å lage da vi bare trenger en figur som blir borte når slangen spiser dem. For å enklere kunne utvide med flere epler og slikt senere bruker vi kloner av eplene også.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Lag en ny eplefigur. Denne bør være omtrent like stor som slangen. For eksempel en rød fyllt sirkel som er omtrent <code>10 x 10</code> passer bra.</p> </li> <li> <p>Lag et skript som starter på en ny melding <code>Lag eple</code>. Dette skriptet skal flytte eplet til et tilfeldig sted på skjermen, og deretter lage en klon. Men vi vil være litt nøye med at eplet havner i samme &quot;rutenett&quot; som slangen. For eksempel, om slangeboksene dine er <code>10 x 10</code> kan du bruke noe som dette:</p> <pre class=blocks>gå til x: ((10) * (tilfeldig tall fra (-23) til (23))) y: ((10) * (tilfeldig tall fra (-16) til (16)))\n</pre> <p>Husk at skjermen har koordinater fra <code>-240</code> til <code>240</code> i x-retning, og <code>-180</code> til <code>180</code> i y-retning. Pass på at eplene dine lander godt innenfor skjermen slik at slangen kan spise dem.</p> </li> <li> <p>Nå trenger vi et skript som sender ut slike <code>Lag eple</code>-meldinger. Lag et skript som starter når det mottar <code>Nytt spill</code>. Dette skriptet skal <code class=blocklooks>skjule</code> eplet og deretter sende en <code>Lag eple</code>-melding.</p> </li> <li> <p>Til slutt lager vi oppførselen for et slikt kloneeple. Lag et nytt skript som starter med <code class=blockcontrol>når jeg starter som klon</code>. Dette skriptet må <code class=blocklooks>vise</code> eplet, <code class=blockcontrol>vente til</code> det <code class=blocksensing>berører slangen</code>, øke <code class=blockdata>lengden</code> på slangen, deretter <code class=blockevents>sende</code> en <code>Lag eple</code>-melding og til slutt <code class=blockcontrol>slette denne klonen</code>.</p> </li> <li> <p>Legg på noen enkle lydeffekter! For eksempel passer lyden <code>chomp</code> ganske bra når et eple blir spist. Hvilken lyd passer når slangen krasjer?</p> </li> </ul> </section> </section> <section class=activity id=steg-4-videreutvikling-av-spillet> <h1 class=activity id=steg-4-videreutvikling-av-spillet>Steg 4: Videreutvikling av spillet</h1> <p><em>Du står helt fritt i hvordan du vil jobbe videre med spillet ditt, men her er noen ideer som kan gjøre spillet enda morsommere å spille:</em></p> <section class=check id=ideer-til-videreutvikling> <h2 class=check id=ideer-til-videreutvikling>Ideer til videreutvikling</h2> <ul> <li> <p>Legg til en poeng-teller. Det enkleste er bare å bruke <code class=blockdata>lengde</code> som poeng. Vis denne variabelen på skjermen. Høyreklikk på den og velg <code>stor</code>.</p> </li> <li> <p>La hastigheten øke etterhvert i spillet. Vanligvis gjør vi dette ved å forandre hvor mange steg en figur går. Det kan vi ikke gjøre her siden hver boks i slangekroppen må henge sammen. I stedet kan du forandre på hvor lenge det ventes mellom hver klon som lages.</p> </li> <li> <p>Kanskje du kan videreutvikle hele konseptet, slik at det er mulig å plukke opp forskjellige bonusepler underveis. For eksempel kan du ha epler som øker lengden på slangen med mer enn 1, epler som lager flere epler, ekstra store epler, eller noe helt annet.</p> </li> <li> <p>Det trenger jo ikke bare være ett eple om gangen. Om du for eksempel lager tre epler i starten av spillet vil det være litt mindre leting etter eplene og spillet kan være litt morsommere. Du kan gjøre dette ved hjelp av kloning, bare pass på at ikke klonene lager nye kloner igjen!</p> </li> <li> <p>La eplene flytte seg om det går en viss tid uten at de blir spist. For å holde styr på tiden kan du bruke <code class=blocksensing>tid</code>-klossen i <code class=blocksensing>Sansning</code>-kategorien.</p> </li> <li> <p>I stedet for at slangen bare kan krasje i seg selv eller i kanten, kan du også lage hindringer på selve brettet. Disse kan du for eksempel tegne på bakgrunnen i en spesiell farge og deretter undersøke om slangen <code class=blocksensing>berører fargen</code>. Du kan til og med ha flere brett med dører mellom.</p> </li> <li> <p>Hva med å lage en to-spiller versjon? Spillerene styrer hver sin slange, og samtidig som de konkurrerer om å spise eplene prøver de å sperre hverandre inne.</p> </li> <li> <p>Spillet ditt fortjener også en forside og en meny som kan starte spillet. Her kan du også la spillerene velge vanskelighetsgrad ved å endre på ting som lengde, hastighet, hinder i banen og så videre.</p> </li> </ul> </section> </section>'},2322:function(e,l,n){e.exports=n.p+"_/tjesi_oppgaver/src/scratch/snake/boks.a8c0ec.png"},2323:function(e,l){e.exports="data:image/png;base64,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"},2324:function(e,l,n){e.exports=n.p+"_/tjesi_oppgaver/src/scratch/snake/teller.82f432.png"}});