webpackJsonp([5,262],{862:function(e,t,r){e.exports={frontmatter:r(243),content:r(1465)}},1465:function(e,t,r){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne oppgaven skal vi lage et veldig enkelt spill med litt animasjon. Det som skal skje er at en muldvarp hopper rundt på spillbrettet mens du prøver å trykke på muldvarpen før den hopper videre. Hvis du klarer å treffe muldvarpen får du poeng og mobilen vil vibrere. Om du trykker på restartknappen, starter spillet på nytt.</p> <p>Vi skal nå lære litt om animasjon, hendelser og prosedyrer.</p> <figure><img src="+r(2005)+" alt=spillbrettet /></figure> </section> <section class=activity id=steg-1-gjore-klart-spillbrettet> <h1 class=activity id=steg-1-gjore-klart-spillbrettet>Steg 1: Gjøre klart spillbrettet</h1> <p>Det første vi trenger er en <em>Canvas</em>-komponent som tegner selve spillbrettet. Dette vil være området hvor muldvarpen hopper rundt på skjermen. En canvas er bare en komponent som inneholder grafikk, den synes ikke selv, men vi kan legge til streker, sirkler, tekst, firkanter og bilder på canvasen.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <figure>Logg inn på App Inventor og lag et nytt prosjekt som heter <code>KlaskEnMuldvarp</code>.</figure> </li> <li> <p>Last ned gresset vi vil ha i bakgrunnen fra lenken <a href=gress.png>gress.png</a>.</p> </li> <li> <p>Gå til <strong>Palette</strong> og <strong>Drawing and Animation</strong>. Der velger du <img src="+r(1993)+" alt=canvas />, og drar den over til skjermen i <strong>Viewer</strong>. Under <strong>Components</strong>, trykk på <strong>Rename</strong> og gi den navnet <code>Spillbrettet</code>. Legg merke til at spillbrettet vises på skjermen.</p> </li> <li> <p>Gå til <strong>Properties</strong> og sett høyden og bredden for spillbrettet:</p> <p>Trykk på <strong>Height</strong> og skriv inn <code>300</code> ved siden av pixels og trykk <strong>OK</strong>.</p> <p>Trykk på <strong>Width</strong> og skriv inn <code>340</code> ved siden av pixels og trykk <strong>OK</strong>.</p> </li> </ul> <ul> <li>Gå til <strong>BackgroundImage</strong> og trykk på <strong>None...</strong>. Trykk <strong>Upload File</strong>. Trykk på <strong>Velg Fil</strong> og velg bildet <code>gress.png</code> du nettopp lastet ned. Trykk <strong>OK</strong>. Sjekk at gresset vises i firkanten øverst på skjermen.</li> </ul> </section> </section> <section class=activity id=steg-2-legge-til-poengtelleren-og-restartknappen> <h1 class=activity id=steg-2-legge-til-poengtelleren-og-restartknappen>Steg 2: Legge til poengtelleren og restartknappen</h1> <p>For å vite hvor mange poeng spilleren har, må vi legge til en tekst som oppdateres hver gang spilleren treffer muldvarpen. Restartknappen lar spilleren starte spillet på nytt.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Gå til <strong>Palette</strong> og <strong>User Interface</strong>. Der velger du <img src="+r(2001)+" alt=label />, og drar den over til skjermen i <strong>Viewer</strong>. Under <strong>Components</strong>, trykk på <strong>Rename</strong> og gi den navnet <code>PoengTekst</code>. Pass på at teksten vises under spillbrettet.</p> </li> <li> <p>Gå til <strong>Properties</strong> og forandre verdien under <strong>Text</strong> til <code>Poeng: 0</code>.</p> </li> <li> <p>Trykk på <strong>Width</strong>, velg <strong>Fill parent</strong> og trykk <strong>OK</strong>.</p> </li> <li> <p>Gå til <strong>Palette</strong> og <strong>User Interface</strong>. Der velger du <img src="+r(1999)+" alt=button />, og drar den over til skjermen i <strong>Viewer</strong>. Under <strong>Components</strong>, trykk på <strong>Rename</strong> og gi den navnet 'RestartKnapp'. Pass på at knappen vises under spillbrettet.</p> </li> <li> <p>Gå til <strong>Properties</strong> og forandre verdien under <strong>Text</strong> til <code>Start på nytt</code>.</p> </li> </ul> </section> </section> <section class=activity id=steg-3-fa-mobilen-til-a-vibrere> <h1 class=activity id=steg-3-fa-mobilen-til-a-vibrere>Steg 3: Få mobilen til å vibrere</h1> <p>For å få mobilen til å vibrere når spilleren får poeng, må vi legge til en lyd.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li>Gå til <strong>Palette</strong> og <strong>Media</strong>. Der velger du <img src="+r(2002)+" alt=sound />, og drar den over til skjermen i <strong>Viewer</strong>. Under <strong>Components</strong>, trykk på <strong>Rename</strong> og gi den navnet <code>Brrr</code>.</li> </ul> </section> </section> <section class=activity id=steg-4-ta-tiden> <h1 class=activity id=steg-4-ta-tiden>Steg 4: Ta tiden</h1> <p>For at muldvarpen skal kunne hoppe rundt på brettet over tid, trenger vi å legge til en klokke. Klokken hjelper oss å jobbe med tid, for eksempel vite hvilken dato det er eller hva klokken er. Her skal vi bruke den til å fortelle spillet at det skal gjøre noe hvert halvsekund.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Gå til <strong>Palette</strong> og <strong>Sensors</strong>. Der velger du <img src="+r(1998)+" alt=clock />, og drar den over til skjermen i <strong>Viewer</strong>. Under <strong>Components</strong>, trykk på <strong>Rename</strong> og gi den navnet <code>Klokken</code>.</p> </li> <li> <p>Gå til <strong>Properties</strong> og forandre verdien under <strong>TimerInterval</strong> til <code>500</code>.</p> </li> <li> <figure>Pass på at <img src="+r(2006)+" alt=timerenabled /> er krysset av.</figure> </li> </ul> </section> </section> <section class=activity id=steg-5-muldvarpen> <h1 class=activity id=steg-5-muldvarpen>Steg 5: Muldvarpen!</h1> <p>Den siste komponenten vi mangler nå er selve muldvarpen. For å få en muldvarp som beveger seg, må vi legge til en <strong>ImageSprite</strong>. En sprite er en figur som kan bevege seg på skjermen inne i en canvas. Canvasen vår er spillbrettet som vi la til helt først.</p> <p>Hver figur har en fart (<em>Speed</em>), retning (<em>Heading</em>) og intervall (<em>Interval</em>). Disse sier hvor fort den beveger seg, i hvilken retning og hvor ofte. En figur vet også når den blir trykket på. I spillet vårt, er farten satt til 0, så den vil ikke bevege seg selv. Istedet setter vi posisjonen ved hjelp av klokken.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Gå til <strong>Palette</strong> og <strong>Drawing and Animation</strong>. Der velger du <img src="+r(1992)+" alt=imagesprite />, og drar den over til skjermen i <strong>Viewer</strong>. Pass på at du drar den oppå spillbrettet (gresset). Under <strong>Components</strong>, trykk på <strong>Rename</strong> og gi den navnet <code>Muldvarpen</code>.</p> </li> <li> <p>Last ned muldvarpbildet fra lenken <a href=mole.png>mole.png</a>.</p> </li> <li> <p>Gå til <strong>Properties</strong> og trykk på <strong>None...</strong> under <strong>Picture</strong>. Trykk <strong>Upload File</strong>. Trykk på <strong>Velg Fil</strong> og velg bildet du nettopp lastet ned. Trykk <strong>OK</strong>. Sjekk at muldvarpen har kommet opp på skjermen.</p> </li> </ul> <p>Skjermbildet ditt burde nå se slik ut:</p> <figure><img src="+r(2e3)+" alt=komponenteneinne /></figure> </section> </section> <section class=activity id=steg-6-fa-ting-til-a-skje> <h1 class=activity id=steg-6-fa-ting-til-a-skje>Steg 6: Få ting til å skje!</h1> <p>Vi har nå lagt til alle delene i appen vår. Du kan teste den på mobilen din, men du vil se at ingenting skjer. For å få noe til å skje på skjermen må vi legge til logikk, altså kode.</p> <figure>Koden er den magiske biten som gir applikasjonen din liv. Helt enkelt forteller koden spillet hva det skal gjøre med alle tingene vi har puttet på skjermen. I AppInventor skriver vi kode ved hjelp av klosser. Disse klossene er kommandoer som settes sammen og ber applikasjonen å gjøre ting, for eksempel tegne et bilde eller vise en tekst.</figure> <p>Vi skal nå lage prosedyrer til spillet. Dette er en samling av flere kommandoer som har et navn og er satt sammen før de kalles. Hvis du har en samling av klosser som trenger å bli kalt flere ganger i et program, kan du definere det som en prosedyre. Da trenger du ikke sette sammen de samme klossene flere ganger. I stedet kan du kalle dem ved å legge inn en enkelt kloss.</p> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>Trykk på Blocks øverst i høyre hjørne.</p> </li> <li> <p>Trykk på den lilla knappen som heter <strong>Procedures</strong>. Vi ser at det er to forskjellige prosedyre-klosser vi kan legge til: <strong>to procedure do</strong> og <strong>to procedure result</strong>. Velg <strong>to procedure do</strong>:</p> <figure><img src="+r(2003)+" alt=procedure /></figure> </li> <li> <p>Trykk på <code>procedure</code> og gi den navnet <code>FlyttMuldvarp</code>.</p> </li> </ul> <p>Klossen <code>FlyttMuldvarp</code> har et område i midten som sier <code>do</code>. Det er her vi putter inn klossene som sier hva som skal skje når prosedyren kjører.</p> <ul> <li> <p>Vi vil nå plassere muldvarpen et tilfeldig sted på spillbrettet. Det gjør vi ved å sette muldvarpens X- og Y-posisjon til to forskjellige tilfeldige tall:</p> <p>Muldvarpens X-posisjon skal være et tilfeldig tall mellom 0 og bredden på spillbrettet. Vi passer på å trekke fra muldvarpens bredde slik at hele muldvarpen får plass på gresset.</p> <p>Muldvarpens Y-posisjon skal på samme måte være et tilfeldig tall mellom 0 og høyden på spillbrettet minus høyden på muldvarpen.</p> <figure>Klossen <code>random fraction</code> gir et tilfeldig tall mellom 0 og 1. Vi kan derfor gange denne med spillbrettets størrelse minus muldvarpens størrelse for å sette posisjonen slik vi vil.</figure> </li> <li> <p>Gå til <strong>Blocks</strong> og se hva du får fram når du trykker på de forskjellige fargene.</p> </li> <li> <p>Klossene du trenger vil være under <strong>Math</strong>, og på muldvarpen og spillbrettet.</p> </li> <li> <p>Lag en prosedyre som flytter muldvarpen slik beskrevet.</p> <figure><img src="+r(1995)+" alt=flyttmuldvarp /></figure> </li> </ul> <p>Se hvordan klossene kobler sammen. Den første delen bruker Muldvarp.X til å sette muldvarpens horisontale posisjon. Verdien den får er resultatet av å gange en tilfeldig verdi mellom 0 og 1 med resultatet av spillbrettets bredde minus muldvarpens bredde.</p> <ul> <li> <figure>Lag en variabel som holder styr på hvor mange poeng spilleren har. Denne kan vi kalle <code>Poeng</code>.</figure> <figure><img src="+r(1997)+" alt=initpoeng /></figure> </li> <li> <p>Lag en prosedyre som du kaller <code>OppdaterPoeng</code> på samme måte som du lagde <code>FlyttMuldvarp</code>. Velg den lilla <strong>Procedures</strong> og velg en <strong>to procedure do</strong>. Denne prosedyren skal oppdatere tekstfeltet med poengene når poengene endres.</p> </li> </ul> <figure>Det vi vil at skal skje er PoengTeksten blir oppdatert med en tekst satt sammen av <code>Poeng:</code> og hvor mange poeng spilleren har.</figure> <ul> <li> <p>Legg til en kloss som setter verdien til PoengTekst sin <strong>Text</strong> verdi. Koble denne til <code>do</code> feltet i prosedyren.</p> </li> <li> <p>Gå til rosa <strong>Text</strong> og ta ut en <code>join</code>-kloss som du kobler til den forrige klossen slik at den setter poengteksten. Denne vil gjøre at du legger sammen to tekster.</p> </li> <li> <p>Ta ut en tekstkloss under rosa <strong>Text</strong> og forandre den slik at den sier <code>Poeng:</code> og koble denne øverst i <code>join</code>-klossen slik at denne teksten kommer først. Pass på at du skriver et mellomrom etter kolonet.</p> </li> <li> <p>Under <code>Poeng:</code> legger du til en kloss fra orange <strong>Variables</strong> som heter <code>get</code>, og forandrer den til <code>get global Poeng</code>.</p> <figure><img src="+r(1996)+" alt=initOppdater /></figure> </li> </ul> </section> </section> <section class=activity id=steg-7-flytt-muldvarpen-etterhvert-som-tiden-gar> <h1 class=activity id=steg-7-flytt-muldvarpen-etterhvert-som-tiden-gar>Steg 7: Flytt muldvarpen etterhvert som tiden går</h1> <p>Neste steg er å få muldvarpen til å flytte seg. Dette er hvor vi skal bruke Klokken.</p> <figure>Klokken har en timer, denne timeren gir beskjed med jevne mellomrom bestemt av hva vi satte i TimerInterval i klokken. Derfor vil den sende en hendelse hvert halvsekund, eller 500 millisekunder. Hendelser er ting som kan skje i appen din som for eksempel et tastetrykk eller at en timer går som her.</figure> <p>For å få noe til å skje når en hendelse sendes bruker vi en <em>event handler</em>. Denne sier hvilke klosser som skal kjøre når en hendelse sendes. Klokken vår har en kloss som er <em>event handleren</em> for timeren: <strong>when Klokken.Timer do</strong>.</p> <section class=check id=sjekkliste-7> <h2 class=check id=sjekkliste-7>Sjekkliste</h2> <ul> <li> <figure>Sett timeren til å kalle <code>FlyttMuldvarp</code>:</figure> <figure><img src="+r(2007)+" alt=initOppdater /></figure> </li> </ul> </section> </section> <section class=activity id=steg-8-klask-muldvarpen> <h1 class=activity id=steg-8-klask-muldvarpen>Steg 8: Klask muldvarpen!</h1> <p>Den viktigste biten er å vite når noen trykker på muldvarpen, slik at vi vet når spilleren skal få poeng. Hvis du husker fra tidligere så sa vi at figurer vet når de blir trykket på. Alt vi trenger å gjøre er å fortelle hva som skal skje ved å bruke <em>event handleren</em> for dette på muldvarpen. Denne hendelsen kalles <strong>Touched</strong>.</p> <section class=check id=sjekkliste-8> <h2 class=check id=sjekkliste-8>Sjekkliste</h2> <ul> <li> <p>Legg til <strong>when Muldvarpen.Touched do</strong>.</p> <p>Videre vil vi at:</p> <ul> <li>Poengvariabelen økes med 1 poeng.</li> <li>Mobilen vibrerer i 1/10 sekund (100 millisekunder).</li> <li><code>OppdaterPoeng</code> blir kalt slik at poengene opdaterer seg på skjermen.</li> <li><code>FlyttMuldvarp</code> blir kalt slik at muldvarpen fortsetter spillet.</li> </ul> <figure><img src="+r(1994)+" alt=event /></figure> </li> </ul> </section> </section> <section class=activity id=steg-9-start-spillet-pa-nytt> <h1 class=activity id=steg-9-start-spillet-pa-nytt>Steg 9: Start spillet på nytt</h1> <p>Den siste biten vi trenger å få på plass nå er å kunne starte spillet på nytt når vi trykker på restartknappen. Knapper har en hendelse som heter <strong>click</strong> som sendes når knappen trykkes på.</p> <section class=check id=sjekkliste-9> <h2 class=check id=sjekkliste-9>Sjekkliste</h2> <ul> <li> <p>Legg til <em>event handleren</em> <strong>when RestartKnapp.Click do</strong>, som finnes på restartknappen.</p> <p>Videre vil vi at når knappen trykkes skal:</p> <ul> <li>Poengvariabelen gå ned til 0.</li> <li>Poengteksten bli oppdatert.</li> <li><code>FlyttMuldvarp</code> bli kalt slik at muldvarpen fortsetter spillet.</li> </ul> <p>Dette kan se slik ut:</p> <figure><img src="+r(2004)+" alt=restart /></figure> </li> </ul> </section> <section class=flag id=test-appen-pa-mobiltelefonen> <h2 class=flag id=test-appen-pa-mobiltelefonen>Test appen på mobiltelefonen</h2> <p>Installer appen på mobilen din og prøv spillet.</p> <p>Virker spillet slik du ville?</p> </section> <section class=challenge id=utfordring-dine-egne-tilpasninger> <h2 class=challenge id=utfordring-dine-egne-tilpasninger>Utfordring: Dine egne tilpasninger</h2> <p>Hvordan kan du lage spillet enda bedre?</p> <p>Kan du gjøre spillet vanskeligere?</p> </section> <section class=try id=ting-a-prove> <h2 class=try id=ting-a-prove>Ting å prøve</h2> <p>Prøv å sette timeren til en lavere verdi. Hva skjer?</p> </section> </section>"},1992:function(e,t){e.exports="data:image/png;base64,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"},1993:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAaCAYAAADygtH/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAS0SURBVGhD7ZhfTFtVHMe//GkLRVyzUWCWaBkBY1Hnv25ogyMz94VFbYjjYX2wPHQm+MKDmLgaqVk6TfpgfYAH+gBLLCYsIY0GYmhMWLQk0kXLsBjLEkukZFIcbFAm/Xc95/TWwcLFS3khrJ/k5J7+zp/c+73f3znntoAnIM+eKBSuefZAXrQcyIuWA3nRckB0I/B6vUJtb3AcJ9QOLzuKRgXb+vD3k8vwzfdgM3EPfDoJzZFmvKjpFFoBPnkffGyB1T3fz6CtrY3VDyuS0vOv9V8QT62TGo/iQiWerX6XxdMrNxGf+Ryb/g+wOePEP9NOFt8fqwgM2mAxtaO93QSLzY1gTGg6IEgSLUEE49NpVmpUr0NWVIbU4hgSc/1IE4f959V9n/jiCLq60bvKwT4wjOHhAdj0s7hiHUVE6HEQkLYREFV4PsWKrLAUfPwOkpGxjFhby36J+eHxNsLSaUClnAbk0Jyz4LwsgLkl1uNAIEk0nqcuSyFNSqlMTdJy+oFQRSUofLyelYLiUtY/Z8KzmK3XQcsEy6KF0WFFSyWtL2Gq1wqzkLpdTh+JZOLjVuLQQSe6aJvJDKsnRHwLhAbNsE2ssl7UyVNOExw+mu9ic5F3F3LDZjGReDtMXU74HnphEkXjmWBUvCMlWqSiPzGXFSg1ULx0GYrnuqA42YWS05eFEbmTEK47sroBeUsnet00dfthlrnw5XhWkHksyoyw07beC5ANXYOfaNPAGRH1TmUEiQcw6dfjjL5sl7mW4Ls6AW23m8SH8YUxhj6XD1uXVUmiRddmmNOOKZ9BeSLJ1jGkgeKa1m3u2rfTCDLhuiMqFeB3ZdzU3oEr1zdIkPqJUo8znBZEDtJPAw02EKNPqtGjNXYdAaJaPDCJINeKU9TJonOpoNWp4P3UApvTjYDKjH6rITOvwK6iLa//ih9ufUxEm0a54kk01V5CcmGMCYbCEhQdPYmVtU14b0RY+fHm7czAXNHqoJubRTirAyMMT7cd4/ShpwbhmNPDxjaJYfRIOhJqYDDKMOYPITAZhOG1BhYVn0uOBpMD7gE7zJwGUY8NFx0Snfbb7a8RXZ9BxWONOF37Ec7W9gC33EjfDRHXkaPH8bO48fsyPvsqAK9/gZVvfPPC6Bwp08PIBeHqy64vcURGXbiWeAGNZE1LJMitq1VQUafEwgiEWaf/RaXnoPb2YShsBJfRTHyu+BScJitGo8RxjS04f6EFqtWYNNHqVpZQdydTKuYnsPnzJ0j+PU0EI4OUNUhUNONbn8S7lowcjRYH3leN4UMhbWx+HS7ZzxG/EE0NFnQmhnCRLtBWDzbUakQWs2vaLpCXwWmjKGvVs3lYSGwu+SlYenTw2zrYRtDRF8XbFrKbC+Mool8Eb7xchdS9OXLS/zNztKCQa3FlE4qqmpirdkrHpqrIof8iEBVtTVGPV0lOHD+mFKIPCP6xgqvfhYRf23mkRbsrq2NrVvVRJU48UY5SRTFrW1yOMdGylCqK8KbhKRaj5VEQTXRNe6flBElRDROJpmF2sX9YsPfe0uGVp9Vofr5aiB5+RP8aGhkZEWp747C7jCIqWh5xJH0R5NlOXrQcyIuWA3nR9gzwL7AXM7vu3SvzAAAAAElFTkSuQmCC"},1994:function(e,t,r){e.exports=r.p+"_/tjesi_oppgaver/src/appinventor/KlaskEnMuldvarp/event.c61d18.png"},1995:function(e,t,r){e.exports=r.p+"_/tjesi_oppgaver/src/appinventor/KlaskEnMuldvarp/flyttmuldvarp.da8e55.png"},1996:function(e,t,r){e.exports=r.p+"_/tjesi_oppgaver/src/appinventor/KlaskEnMuldvarp/initOppdaterPoeng.ffa2f6.png"},1997:function(e,t){e.exports="data:image/png;base64,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"},1998:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAdCAIAAACCOW1pAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOXSURBVFhH7ZhPSNtQGMBb/2RiGMTBFBS0G1qhQ+aGRXAHZaCXInpYhdlLx2gvY9DD9NAeloPtYR5WEAWbQ3OYHpShO1SwlznQwjbGnLQFddDgFLErXdRGMWq7L81zq7Npq2PQuv4Oyfe+fIX++r730kQei8Vkl5cCdL6k5PVymf9bzxEHDU5ImsxOJPXSOqQtyAaS6yV+b6PRiKITEjMXMmQXadKg6+np0RnIMR8XzwXdFos7GA8zwkf1UD4US5N+7YEATdMzMzMej8flckH8d5PG+6i+Ybbd6pyYmHCSar/N4tpAl/4BcFtPgdPpXFpa2t7e3tnZgSPLssFgcH5+fnR0FFWcl8j8gPbl+wM0isUCU88G3m7FYluzZvMsnDPF69A6vCiWJtXswSw1Nzc3NDTgOA6lYhI7Ct0u/dzU1HTBOWT8/jqVAkMjmUzRPWhpK0cDkeCC3aSH3tXpLSetyzFuuynezib7wukWhq7Wk26JBkilV19fX11xlWcZnudhKBge7Rd9ey3n2ZqamsrKSrHsvByiswQrtIXG9fYxaF1ri99mExbkyiQ5iesd0M4OPU7bfncz+8Fu87S+IDuqUOIPUu2coBfb+Xr0ZfA4MAVikCxiXsn5H3zNQ4jB8GITWIzOyVnxzBHdXY0EhFiVprdt9d0iC7nrkMMhhzcahq3togzroSwUbiA7Tk9+IpJ6ZWVlpaWl0Wt3j6sfFIQ/FS4PFS0PySMB/ubjaDEBM4lhWElJCarOHIVKtepnhG4QYab7rOl2TJwQzM7AVnY91zIjFGrgZEjqFRcLvzJogOGh8inE8v3NKH7j+EpF/LpAYWEhijIHV3e3+6gRcQHxGy5q8rDxVsLPr2xpY6ffLLJCvOEan6trbSSqVOrvkBMsOB/db5pkhKsyhaK8vKOvNzgyLikoqQfrDdwQGHFccV9wK7sDlyABx93d3YvoybBbhsEnxEy/sFE8Ij+qzFbNqYWj1Fv1HC3sIzqLR2U2C62n1JJajjbCJ4wUq7XqFKgWIO6ZDLw9vkKTIPm8B+tKo9FAf4rDuKVQKR739vbW19e9Xu/Zm35Wkepx1u12q9XqRCvxGI1G19bWNjc3Ozs7hbosJtWNgWGYQCAASr+ApOjGcRzoiWXZTJqXEdCitbW1SqUSNsmDg4NIJBIKhcLhMLhleVuKZPSuBSThj4sYw7zlhJhI/lVSLpPXy2XyerlMXi93kcl+AggSbhVM76uqAAAAAElFTkSuQmCC"},1999:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAZCAYAAACb1MhvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAOmSURBVFhH7Zg/TFNRFMa/FiHQBsU/ECIxspREMJFFY+jCUgcdNCR0sAsm4gKJzHagDLiwMMBiSWDRoSQkDjjAwlIGGayJNYZGgwmg4h8K5dHSltZz7r1F6CtIoTGGvl96eu95992X9Mt3Tm9rShMwODRmNRocEkOwPDEEyxNdD5uenlaz/HA4HGp2stkjGIuVPncVly5YaEVd3MXmVhKL3zeR2SKHNOKJFEpX36CtrU1cP8noSvLi+QpUWktx2qKP2rMVsJafgtlshtlkotGExDYJlkyp3UclCK/TCWcmXB1wjwUQVqv/EzrBYvFtaS5+oyBdKPgN2CJhvq/F8IPiaziGb6tRrEbi0GJJ3nFMbHg45IPPRzHaj5bQALx+Ta3txwqm3E54gyrV5YVHJxiLML+4jo/LG/hE8fHLBt5/DuP1h5/wv1tBNM5uMqGE3CWcpsaCUlaH5pZqhLW/Cfbv0X1S/vDspM2tbRE/1+NY/hVFJJqkbgUhVEkJC2aWY4kcC4oWpH6qwVZfI9KgN5eLuIy7MRKi3tvnhHvKn5WviLu1+efwdLpEqbt6BjGzJC7zQ+EcGMNzdwdcas0vtxyIXjDuTaI/AclUChtUbkIcFkqIpOZCtD9xfEIY6VY97EEf/LYu3GtQSzlpQqdvCA9t9A3d60P/LXtWTmKH/Rjse4/rnlFR6sMdVhLIi2BcPSIYRv1jEo3WnjQF4H01rxb2J4fDOExUdCbhKhaD8z1jRjQlZGFKclcP8z1DV9kwPJMZOxwNLTiDty3tuFNXJvKq5rtor5vBLLlQYHfALk2M6st12EwkZHIAOQSTfYnLkZu9EIYEEiLtCCVFyvQvzgtLFfWwG1ieDVIB/l/kEMwkzlfx7dSOWBmRcuYUvKew0JfMjB8WWz3YAKWlFgQCC2ppAaEs48WzjJHJrU2tuDY7jsklWYNa4CXGl1rRQmV7VHSCbVAZyr6VJY7qWbIs5XV2nXRZgXuYqwcvEvfhaZdNrOF2J2xzblpzocMzh0S9uEzUoNnRiNmn3OT51JaVV9nR09uIOc8D8dxHYxpc/Z1okhV6JHQn/Yj1iihFbvz0EohzmIJv5w1ipEkqxWMa5pW54jzpR5W7Ms7ZcRk5bE+uehjPo/STqVjQOWw6VIkzleV8sBen+32hXXJjGmuRLdysXS5OhzFrkRjCHOsHBK3zfSxWMaH7e2diYkLN8qMY3MXoBDM4mJwlabA/hmB5YgiWJ4ZgeQH8BmPnmPcHL7F6AAAAAElFTkSuQmCC"},2e3:function(e,t,r){e.exports=r.p+"_/tjesi_oppgaver/src/appinventor/KlaskEnMuldvarp/komponenteneinne.f26d86.png"},2001:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAcCAYAAAAz+aIrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAMzSURBVGhD7Zg/TBNRHMe/5V/QYsJgUSEiIQEjOkgiiZFEulQTJ0JCTSxDHWRAhzLg0kEd6qCDZcCBmgADDiUhXWRoByWmMaELgzTQ+qcIbbSYcA1cwV7/+N71zhTTvl6NkFDuk/z6Xt/vXpv75vv73ctpMgSo5KVCGlXyoIrDQBWHgSoOA2ZD9ng80qw0DAaDNDvcFBSHCqPX60HTcqTT6bzj32terxd9fX3SLx1emGWVe/O5QZFHSr61f2cJDqMV7qj0VQlRN6xWN0rZkv0fB/ksDFMcerO5AlG4HeDtRw4flrk96/JYTihyDh1pUD5FtrG+wSMQjmN7J1nWApXknMrKSnwObyGVyiCZShGB+D85GvtOdAFjVjNMRiOMJgvs3pxCSgQxZ7eIOZPZhjchXkqQbV47LGYTjEYTLHY3clJMFDuHjms/d8HvCuhoPkHEycC/ti1ed1DicPEa6IfGMO10wjluRrVjFG5OSkYi0PU/E3Pjlga4bC6E6HpgEk/m2jAyPg2ncwIjbfOwucRMURQ7h/L1O09ESePCWS1az9Rhc0vARuzXgQhDqa8HfI6sO4x3n2I+ThYT2RxaetDVVCNOtZd70C34ESDGCvt92AhOYXiA7DEOYHgqiJg/AFlTFoqdk8pUYPlbDIKQxoR7Ff7QpijU0mrWPftPAguTzxHseowJ6hznIyg5TfEcD92dF+R6ukcK2w0QnYui2Dmh6A5pwAJxzXEM3myC2dCMZDKFlfWDEkeAQHqFjtiH+oMPLWbLRiY0D184ayNuwYN31R1obwDar+nBuybhDospJKJLWFTYdBQ5R6PRILi+RVyTQlvjMXGttiqN8831iPFJRDnZ2/+LIF49oGUgBz33aNF9bwjC60GxsVpdceh0YUTk+mhsxMbMQ7Hk7r/k0G/tRQtdbzfDZtZizpptyIOjPlKfWnFLMZgn5M7OTlEI+pSaeR9BTZUGt66clK4AvvzYhW+Fw8VzdbhEQuZInZAFQUDvVd0eYSitp2px+/rpPcKUE0V7TgFjHQmY4hx1mK8sZmdnpVlplEO/oagv2BmoZcVAFYeBKg4DVRwGqjgMVHEKAvwGaWUDC0UCLXwAAAAASUVORK5CYII="},2002:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAcCAYAAAAk2zLiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAQFSURBVGhD7ZlPbNtUHMe/LTRMszqSiUasgVGE0mnNgSGWgpLLQOp2KBKTpuTQHEjRGokBai7jgIUIh3FYL+HADvGmBrRUIr2MP+HgSiw9pIeFSe1oJpZIzNKWjaW0Ne3c0Pzl2XlRp42YxMvERP2RIr/fe88Hf/z7vefYHVUCdFqikx51WkCXpgFdmgZ0aRrQpWlAl6YBTdJCoRC4c2EabT9akibLmvwmhmf2vYGOHSbau4U83g4kgUfQ74Hb7YbH60eQFyDRsUdLDjzLgs/RsAFNSTs7+TXOX7gI6+BbODjoxCv79pDeB5+JfT7fw4uTEjjDzqLHH0I0GkUkeAI9syy4SwU64b9HVdo5Imvquzj6Dw7h9UE7Xuo1orOzA7/eWMP9/yPalWVYEpDudWCoj6nFxn4cHRkBU1yqxY8BDaWdn/4e+weP4DW7HS8++zTyhTKuXF/F5cwybi9vPCCtzkNnW58dTnEKE9w8cjS5GNswxpwWpS2lIwiM0dL1BxHPKt2ksniwLE8KjJLi4KZxinNjIhwB65XP88AfTGzNyyXoUuCBl/0KSZH2q9BQWvcuE543d0O8u4lfBFERtrJeQKlcRblSJcVZs1YX1JbSVOiHN3gaR7sugB0lF0LE8AJd0URygZ9dhT0wqZTul14GEZZDqonKTYl9GCfiotGPYZvn8GNa7s0i9vkZLA2dJv0RhMcdYJpYPBtKy2+W8HN6BddurmFlbROlUoUIq6BMf/VMa5+se2AscHoD4CKTCJ4YwMIpPzhiRkrFseBwYdhiUKYZD7wNlyWOuYwSquIccsKstHrwgmUDxSJpSgLmbzngGq5lMcxWDNCmGirSyribL6JIZBWJJFlYXZycbY/q5YiUioFL1GvOQJa0w3jHZcZMM2Y0YUAXbTVLQ2nLooS5y9fx5/pfNVkNMk3OMjnb2gXTtYRLXBh8ltZcIYvkrIBesgkxtkN4eW4aMTomzX+L6ewhOKwkYBjszCwgo5RXAVlBkBvqMFbYrXFMxehNymVwtX6/VGgo7cnKBn6/s4IfZhZxMZHGjVurNNuqyrGeaXVhbZPX70XwpA3JCR88ZLF3jwaQtJ5EQC4hoxP+TweQDIwqG4EvLMFzagw2uVoZO1wjIjgfOcfzPsJCDynEf8OMw+PkkWbmo9pG8MUcJLppq6H6EjJ0Now7+W4s3nwCf6zmseOpLlj2mLD3ud0wln7DB+8eozO3pLU78x5HGmaajO+4F598eAxvWkUceXUnTLsMuJa5Df6nRVTuc/1/F3UvLb3ulrNovWrCYtaAA3sLGD/uoiM1tkOWyWj6RiDLKZM95z3fKO3ZXugfVjSguqbp/DO6NA3o0jSgS9OALk0DurSWAf4G7tDG3P7/7FgAAAAASUVORK5CYII="},2003:function(e,t){e.exports="data:image/png;base64,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";
},2004:function(e,t,r){e.exports=r.p+"_/tjesi_oppgaver/src/appinventor/KlaskEnMuldvarp/restart.15a2ca.png"},2005:function(e,t,r){e.exports=r.p+"_/tjesi_oppgaver/src/appinventor/KlaskEnMuldvarp/spillbrettet.98a0ff.png"},2006:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAmCAIAAADV4ytcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMySURBVGhD7ZXRS9tAHMf3t6mPBZ9SSB8SQQXz0L70oXlQQQQVsVSHKKMi7kGHSkErlZkOzMPSQhEtrANbsdnadK2YyrSM4dt+l6SxuVwdK8URkx9fjsvvfr/f3efuen3z+/HBtfLg3SoP3qrzdQo3PlmBoVbj3hrZk3JrRlHD1vJYQHcpSV5fyV+ddpHCnjl5WGUkpZifVWGanpcaHQG9CSv7L/p/8P2SM+Hh54CuKFQJx+LRYICiAuxMqpTb4hnUDy2eGsHl02iQRa7g0nFBBY+WsjbLBND0JPj8KrXwDq+jiCuaB9URy5rHMvVBSbuGT1S2eR8fKuJiCHkYfmGG6w98IHIgI8/1YYRq9y/fBwPrOeh82ZjgD4vodWgVD/jRrZKZ0tTqQNkO0xcE8KzBfL7OsBsX0KmXpHNZw7uTVthI6sZSR82tjo1tXsJoG54wr5wItZcHu8D2B96sAovu7CP44j5ncOnGH1ctKd1OXts4UOU4YvRvpPj0KDp5ZFqKpc5FHHbkyUmYVxVnqLeSXtaaa6jv8LCmiX1ts5/UC3zzc5Q2TtJMeQ6eMC+Cb5d9GXi4fgw7m7xGzmYlL13e9QbfOJ2ll0R07dXSJm/Ct699XYqx+LUnzfuy1x76RcF4eBh+Q6qDB4e3GKpJgIesT/McTVF0KLq6xDHxr1qd5x4827wac28P3uuXB+9WefBulQfvVnnwNrV+/cxkMqlUKmkzcMIQBGApThQZPpORstlss4vBEARgKU4UGR5OWFXV29vbzvbs7Gx8fBxa6B8dHWEpThQZfm9vT1GUWq1mtldXVzRNDw0NDQ8P5/N5CMBSnCgy/Pb2tizL5XLZbDmOGxwcHBgYWF5eBs/Ozg6W4kR1hQfCQqEwNTUF7dzcHGCDhcNh8INBAJbiRHWFB+aRkREA9vv9OjnLsuB0BTwQTk5O6thgPp9PFEWdHOz1w4OZ/IlEQvfo9prhd3d3DUqNPxaLGR9tgwAsxYkiwwvCiSAIBqjN0uk0BGApThQZvlKVT04+wvF+sBn8w8NQVZGxFCeKDH/fUn80vleUMlG1+jcIwFKcKDK8S+TBu1Uuhn98+AMBRTEbh62fwwAAAABJRU5ErkJggg=="},2007:function(e,t){e.exports="data:image/png;base64,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"}});