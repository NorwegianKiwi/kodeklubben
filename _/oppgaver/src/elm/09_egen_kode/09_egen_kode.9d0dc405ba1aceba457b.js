webpackJsonp([340,385],{1216:function(e,n,s){e.exports={frontmatter:s(344),content:s(2120)}},2120:function(e,n){e.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Denne oppgaven har som hensikt i å lære å skrive sin egen kode, istedenfor å kopiere noe som allerede eksisterer.</p> <p>Når man skal bli god til å programmere er det helt nødvendig å klare å skrive sin egen kode. Det er fristende å prøve å google problemet man har, eller se på noe som noen andre har gjort. Dette fører til at man ikke lærer like mye, så i denne oppgaven skal vi prøve å skrive vår helt egne kode.</p> </section> <section class=activity id=steg-1-fa-noe-pa-skjermen> <h1 class=activity id=steg-1-fa-noe-pa-skjermen>Steg 1: Få noe på skjermen</h1> <p>Mange utviklere synes det å starte på noe nytt er vanskelig. Programmering er ofte lettere når man ser hva man koder, selv om det ikke alltid er noe vi gjør. For å gjøre denne oppgaven litt lettere gir vi dere litt kode slik at dere får startet på oppgaven.</p> <p>Nedenfor er utgangspunktet for dagens oppgave:</p> <pre><code class=language-elm><span class=hljs-import><span class=hljs-keyword>import</span> Html <span class=hljs-keyword>exposing</span> <span class=hljs-container>(text)</span></span>\n\n<span class=hljs-title>fire</span> =\n  <span class=hljs-number>4</span>\n\n<span class=hljs-title>ganger2</span> x =\n  x * <span class=hljs-number>2</span>\n\n<span class=hljs-title>main</span> =\n  text (toString [fire, ganger2 <span class=hljs-number>5</span>])\n</code></pre> <ul> <li>Gå til http://elm-lang.org/try</li> <li>Kopier inn koden som står ovenfor. Ikke trykk <code>Compile</code></li> <li>Hva forventer du at skal stå dersom du trykker <code>Compile</code>?</li> <li>Trykk <code>Compile</code> og se om du hadde rett</li> </ul> </section> <section class=activity id=steg-2-enkle-funksjoner> <h1 class=activity id=steg-2-enkle-funksjoner>Steg 2: Enkle funksjoner</h1> <p>La oss begynne i det små. Vi skal nå prøve å lage noen enkle mattematiske funksjoner.</p> <p>Prøv å lag følgende:</p> <ul> <li>En funksjon som tar inn to tall og plusser de sammen</li> <li>En funksjon som tar inn et tall og ganger det med 3</li> <li>En funksjon som tar inn et tall og ganger det med 10</li> <li>En funksjon som tar inn to tall og deler de på hverandre</li> <li>En funksjon som tar inn to tall og ganger tallene med hverandre</li> <li>En funksjon som tar inn tre tall og ganger tallene med hverandre</li> <li>En funksjon som tar inn åtte tall og ganger tallene med hverandre</li> <li>Test funksjonene dine med og se om du har gjort noe feil</li> </ul> <p>Var det vanskelig? Overraskende mye programmering er å skrive funksjoner som gjør ting som dette.</p> </section> <section class=activity id=steg-3-vanskeligere-funksjoner> <h1 class=activity id=steg-3-vanskeligere-funksjoner>Steg 3: Vanskeligere funksjoner</h1> <p>Matte er gøy, så la oss fortsette å lage noen funksjoner som gjør enkle mattematiske operasjoner. Siden vi allerede har gjort litt gange og dele, kan vi prøve oss på for eksempel kvadratrot. I elm tar man kvadratroten av et tall ved å skrive <code>sqrt</code> og deretter tallet. For eksempel <code>sqrt 16</code>.</p> <p>Prøv å lage følgende:</p> <ul> <li>En funksjon som tar inn et tall og tar kvadratrot av tallet</li> <li>En funksjon som tar inn to tall og tar kvadratoten av det første tallet 4 ganger det andre tallet</li> <li>En funksjon som tar inn to tall og tar kvadratroten av det første tallet for deretter å gange dette med det andre tallet</li> <li>En funksjon som tar inn to tall og tar kvadratroten av det andre tallet for deretter å gange dette med det første tallet</li> <li>Test funksjonene dine med og se om du har gjort noe feil</li> </ul> </section> <section class=activity id=steg-4-if-else-uttrykk> <h1 class=activity id=steg-4-if-else-uttrykk>Steg 4: if-else-uttrykk</h1> <p>Når vi lager funksjoner er vi ofte interessert i å gjøre noe avhengig av hva det vi sender inn er. Dette kaller vi if-else-uttrykk. Dette har du sikkert vært borti flere ganger før, og nesten alle programmeringsspråk har dette.</p> <p>I elm skriver man if-else-uttrykk på følgende måte:</p> <pre><code class=language-elm><span class=hljs-title>sjekkTall</span> tall =\n  <span class=hljs-keyword>if</span> tall &lt; <span class=hljs-number>1</span> <span class=hljs-keyword>then</span>\n    <span class=hljs-string>"tallet er mindre enn 1"</span>\n  <span class=hljs-keyword>else</span> <span class=hljs-keyword>if</span> tall == <span class=hljs-number>1</span> <span class=hljs-keyword>then</span>\n    <span class=hljs-string>"tallet er 1"</span>\n  <span class=hljs-keyword>else</span>\n    <span class=hljs-string>"tallet er større enn 1"</span>\n</code></pre> <p>Her sjekker vi om <code>tallet</code>, som er variabelen i funksjonen vår, er først mindre enn 1, så om den er lik 1. <code>else</code>-linjen til slutt er det som skjer dersom ikke noe av dette stemmer.</p> <p>Spørsmål til funksjonen ovenfor:</p> <ul> <li>Hva slags type returnerer funksjonen?</li> </ul> <p>Vi kan nå lage noen litt mer avanserte funksjoner. Prøv å lag følgende:</p> <ul> <li>En funksjon som tar inn et tall. Dersom tallet er større enn 9000, skal funksjonen returnere &quot;Dette er over 9000!&quot;. Hvis det ikke er over 9000 skal funksjonen returnere &quot;Prøv et høyere tall&quot;</li> <li>Test funksjonen din og se om du har gjort noe feil</li> <li>En funksjon som tar inn to tall. Dersom tallene er like skal vi returnere &quot;Tallene er like&quot;. Hvis tallene ikke er like skal vi returnere &quot;Tallene er ikke like&quot;.</li> </ul> <section class=challenge id=utfordring> <h2 class=challenge id=utfordring>Utfordring</h2> <ul> <li>Lag dine helt egne funksjoner</li> <li>Klarer du å gjøre ukens mattelekse i elm?</li> </ul> </section> <section class=protip id=absoluttverdi> <h2 class=protip id=absoluttverdi>Absoluttverdi</h2> <p>Absoluttverdien til et tall er tallet uten fortegn. Her er noen eksempler:</p> <pre><code class=language-text>&gt; absoluttverdi <span class=hljs-number>3</span>\n<span class=hljs-number>3</span> : number\n&gt; absoluttverdi -<span class=hljs-number>3</span>\n<span class=hljs-number>3</span> : number\n&gt; absoluttverdi <span class=hljs-number>5</span>\n<span class=hljs-number>5</span> : number\n&gt; absoluttverdi -<span class=hljs-number>5</span>\n<span class=hljs-number>5</span> : number\n&gt; absoluttverdi <span class=hljs-number>0</span>\n<span class=hljs-number>0</span> : number\n</code></pre> </section> <section class=challenge id=utfordring-2> <h2 class=challenge id=utfordring-2>Utfordring</h2> <ul> <li>Lag funksjonen <code>absoluttverdi</code>.</li> </ul> <p>Hvordan lagde du funksjonen? Absoluttverdien til et tall kan vi regne ut på flere forskjellige måter. Jeg tipper at du ikke brukte ganger og kvadratrot! Prøv dette nå:</p> <ul> <li>Lag funksjonen <code>absoluttverdi</code> på nytt ved å bare bruke <code>*</code> og <code>sqrt</code>.</li> </ul> </section> </section> '}});