webpackJsonp([123,374],{1364:function(e,s,n){e.exports={frontmatter:n(466),content:n(2195)}},2195:function(e,s,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I denne leksjonen vil vi se litt nærmere på hvordan Python jobber med tall, og vi vil lage et enkelt mattespill. Vi vil også se hvordan vi kan gjøre ting tilfeldige.</p> <figure><img src="+n(2795)+" alt=\"\"/></figure> </section> <section class=activity id=steg-1-en-kalkulator> <h1 class=activity id=steg-1-en-kalkulator>Steg 1: En kalkulator!</h1> <p>Python er, som de fleste programmeringsspråk, veldig glad i å regne. La oss se hvordan vi kan få Python til å regne for oss.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Lag et nytt IDLE-vindu ved å velge <code>File &gt; New File</code>.</p> </li> <li> <p>Vi begynner med å utforske hvordan vi kan bruke Python til å regne ut enkle mattestykker. Skriv det følgende nye programmet:</p> <pre><code class=language-python>print(<span class=hljs-number>2</span> + <span class=hljs-number>3</span>)\nprint(<span class=hljs-number>17</span> - <span class=hljs-number>8</span>)\nprint(<span class=hljs-number>3</span> * <span class=hljs-number>4</span>)\nprint(<span class=hljs-number>22</span> / <span class=hljs-number>7</span>)\n</code></pre> <p>Lagre programmet med navnet <code>kalkulator.py</code> og kjør det.</p> </li> <li> <p>Når programmet kjører vil det skrive ut 4 tall. Kjenner du igjen disse tallene? Skjønner du hva symbolene <code>*</code> og <code>/</code> betyr? Endre gjerne på programmet og kjør det flere ganger til du skjønner hvordan Python bruker pluss, minus, gange og dele.</p> </li> </ul> </section> </section> <section class=activity id=steg-2-vi-kaster-terning> <h1 class=activity id=steg-2-vi-kaster-terning>Steg 2: Vi kaster terning</h1> <p>For å lage et mattespill vil vi bruke tilfeldige tall. Tilfeldige tall blir omtrent som å slå terning for å finne et tall.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>For å lage tilfeldige tall skal vi bruke en ny Python-funksjon som heter <code>randint</code> (her er <code>rand</code> en forkortelse for <em>random</em> som betyr tilfeldig, og <code>int</code> en forkortelse for <em>integer</em> som betyr heltall). Denne funksjonen er ikke med i grunnpakken til Python, men ligger i stedet i et bibliotek kalt <code>random</code>. Vi må derfor fortelle Python at vi vil bruke dette biblioteket. Lag et nytt program, <code>terning.py</code> som ser slik ut:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\nprint(randint(<span class=hljs-number>1</span>, <span class=hljs-number>6</span>))\n</code></pre> <p>Når du kjører programmet vil det skrive ut et tilfeldig tall mellom 1 og 6. Kjør programmet flere ganger. Forandrer tallet seg?</p> </li> <li> <p>Prøv selv å forandre programmet slik at det skriver ut tilfeldige tall mellom 1 og 20! Eller mellom -1 og 1.</p> </li> <li> <p>Programmet <code>terning.py</code> viser hvordan vi kan late som om vi slår èn terning i Python. Men hvordan kan vi late som om vi slår to terninger, og ser summen av dem?</p> </li> <li> <p>Vi kan også utvide programmet slik at det slår terning mange ganger. Dette gjør vi enklest med <strong>for-løkker</strong>. Hvis du for eksempel utvider programmet ditt som følger vil det se ut som om du slår to terninger 25 ganger:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n\n<span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(<span class=hljs-number>25</span>):\n    print(randint(<span class=hljs-number>1</span>, <span class=hljs-number>6</span>) + randint(<span class=hljs-number>1</span>, <span class=hljs-number>6</span>))\n</code></pre> </li> </ul> </section> </section> <section class=activity id=steg-3-en-liten-matteprove> <h1 class=activity id=steg-3-en-liten-matteprove>Steg 3: En liten matteprøve</h1> <p>Vi kan nå bruke tilfeldige tall til å lage et enkelt mattespill.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Lag et nytt program som heter <code>mattespill.py</code>. Vi begynner med å trekke to tilfeldige tall, og la Python gange dem sammen:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n\ntall1 = randint(<span class=hljs-number>2</span>, <span class=hljs-number>12</span>)\ntall2 = randint(<span class=hljs-number>2</span>, <span class=hljs-number>12</span>)\n</code></pre> </li> <li> <p>Vi vil nå at Python skal gi oss en matteoppgave, kan vi bli spurt om å gange sammen <code>tall1</code> og <code>tall2</code>? Prøv å legg til denne linjen nederst i programmet ditt:</p> <pre><code class=language-python>print(<span class=hljs-string>'Hva er '</span> + tall1 + <span class=hljs-string>' ganger '</span> + tall2 + <span class=hljs-string>'?'</span>)\n</code></pre> <p>Hva skjer når du prøver å kjøre programmet?</p> </li> <li> <p>Du husker kanskje at vi kan bruke <code>+</code> for å sette sammen tekst? Men vi bruker også <code>+</code> for å plusse sammen tall. I linjen over prøver vi å bruke <code>+</code> på både tekst og tall, og da skjønner ikke Python helt hva vi mener.</p> <p>For å fortelle Python at her vil vi egentlig sette sammen tekst må vi bruke funksjonen <code>str</code> for å gjøre om tallene til tekststrenger. Endre den siste linjen slik at den ser slik ut i stedet:</p> <pre><code class=language-python>print(<span class=hljs-string>'Hva er '</span> + str(tall1) + <span class=hljs-string>' ganger '</span> + str(tall2) + <span class=hljs-string>'?'</span>)\n</code></pre> <p>Virker programmet ditt bedre nå? Prøv å kjøre programmet flere ganger. Blir du stilt forskjellige spørsmål?</p> </li> <li> <p>Neste steg er at vi vil kunne svare på mattestykket. Til dette bruker vi igjen funksjonen <code>input</code>. Legg til linjen</p> <pre><code class=language-python>svar = input()\n</code></pre> <p>nederst i programmet.</p> </li> <li> <p>Vi skal nå få programmet til å sjekke at vi har svart riktig. For å gjøre dette skal vi bruke noe som heter <strong>if-tester</strong>. Disse kan sjekke om noe er sant, og vi vil bruke dem for å sjekke om det er sant at svaret ditt er likt med det faktiske svaret. Legg til en <strong>if-test</strong> nederst i programmet ditt slik som dette:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n\ntall1 = randint(<span class=hljs-number>2</span>, <span class=hljs-number>12</span>)\ntall2 = randint(<span class=hljs-number>2</span>, <span class=hljs-number>12</span>)\n\nprint(<span class=hljs-string>'Hva er '</span> + str(tall1) + <span class=hljs-string>' ganger '</span> + str(tall2) + <span class=hljs-string>'?'</span>)\nsvar = input()\n\n<span class=hljs-keyword>if</span> svar == tall1 * tall2:\n    print(<span class=hljs-string>'Ja, svaret er '</span> + svar)\n<span class=hljs-keyword>else</span>:\n    print(<span class=hljs-string>'Nei, det riktige svaret er '</span> + str(tall1 * tall2))\n</code></pre> <p>Pass på at som i <strong>for-løkker</strong> må du skyve koden i <strong>if-testen</strong> inn mot høyre.</p> </li> <li> <p>Kjør programmet ditt. Virker det? Hva skjer om du svarer feil på en oppgave? Hva skjer om du svarer riktig?</p> <p>Hmm ... det er et problem med programmet vårt. Programmet sier at vi svarer feil selv om vi svarer riktig!</p> </li> </ul> <section class=protip id=bugs> <h3 class=protip id=bugs>Bugs</h3> <p>Dette er et eksempel på noe vi kaller en bug i et program. Programmet kjører, men det gjør ikke slik som vi hadde ment og forventet. Selve ordet <em>bug</em> betyr insekt, og grunnen til at dette ordet brukes er at i gamle dager var det faktisk et problem at insekter fløy inn i datamaskiner og ødela programmer!</p> </section> </section> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <p>Problemet med programmet vårt er ikke helt lett å finne, men siden programmet alltid sier at svaret vårt er feil må det bety at <code>svar</code> aldri er helt lik <code>tall1 * tall2</code>. Igjen er problemet at Python mener at tekst og tall er forskjellige ting.</p> <p>Når vi bruker <code>input</code> til å lese inn <code>svar</code> vil dette alltid være tekst, selv om vi bare skriver inn tall. På samme måte som vi kan bruke <code>str</code> for å gjøre om tall til tekst kan vi bruke <code>int</code> for å gjøre om tekst til tall (husk at <code>int</code> er en forkortelse for <em>integer</em> som betyr heltall).</p> <p>Endre <code>if</code>-linjen i programmet ditt til</p> <pre><code class=language-python><span class=hljs-keyword>if</span> int(svar) == tall1 * tall2:\n</code></pre> <p>Virker programmet bedre nå?</p> </li> </ul> </section> </section> <section class=activity id=steg-4-telle-riktige-svar> <h1 class=activity id=steg-4-telle-riktige-svar>Steg 4: Telle riktige svar</h1> <p>Det er litt kjedelig å alltid starte programmet på nytt. La oss prøve å stille flere mattestykker etter hverandre.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul> <li> <p>Hvordan kan vi lage en løkke slik at programmet stiller oss for eksempel 5 mattestykker på rad før det avsluttes. Prøv litt selv før du går videre.</p> </li> <li> <p>Til slutt vil vi at programmet også skal telle hvor mange riktige svar vi klarer. For å gjøre dette skal vi bruke en variabel som vi for eksempel kan kalle <code>ant_rett</code>. Når vi begynner spillet passer vi på at denne er <code>0</code> siden vi ikke har svart noenting enda. Hver gang vi svarer riktig kan vi så øke verdien av variabelen med 1. Om vi også legger til en melding til slutt om hvor mange riktige svar spilleren klarte vil programmet se omtrent ut som følger:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> random <span class=hljs-keyword>import</span> randint\n\nant_stykker = <span class=hljs-number>5</span>\nant_rett = <span class=hljs-number>0</span>\n\n<span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(ant_stykker):\n    tall1 = randint(<span class=hljs-number>2</span>, <span class=hljs-number>12</span>)\n    tall2 = randint(<span class=hljs-number>2</span>, <span class=hljs-number>12</span>)\n\n    print(<span class=hljs-string>'Hva er '</span> + str(tall1) + <span class=hljs-string>' ganger '</span> + str(tall2) + <span class=hljs-string>'?'</span>)\n    svar = input()\n\n    <span class=hljs-keyword>if</span> int(svar) == tall1 * tall2:\n        print(<span class=hljs-string>'Ja, svaret er '</span> + svar)\n        ant_rett = ant_rett + <span class=hljs-number>1</span>\n    <span class=hljs-keyword>else</span>:\n        print(<span class=hljs-string>'Nei, det riktige svaret er '</span> + str(tall1 * tall2))\n\nprint(<span class=hljs-string>'Du fikk '</span> + str(ant_rett) + <span class=hljs-string>' av '</span> + str(ant_stykker))\n</code></pre> </li> </ul> </section> </section> <section class=activity id=steg-5-rekursjon-hva-er-det> <h1 class=activity id=steg-5-rekursjon-hva-er-det>Steg 5: Rekursjon, hva er det?</h1> <p>Vi avslutter med å se på noe som heter rekursjon. Dette er en veldig stilig ide, som brukes en del i programmering.</p> <p>Vi vil skrive et program som kan regne ut fakultetet av et tall. Fakultetet finner man ved å gange tallet med alle tall som er mindre enn seg. For eksempel er fakultetet av 4</p> <pre><code>fakultet(<span class=hljs-number>4</span>) = <span class=hljs-number>4</span> * <span class=hljs-number>3</span> * <span class=hljs-number>2</span> * <span class=hljs-number>1</span> = <span class=hljs-number>24</span>\n</code></pre> <p>Trikset med rekursjon er at vi kan redusere oppgaven til noe som er veldig likt, men litt enklere. For eksempel kan vi her se at hvis vi hadde visst fakultetet av 3 kunne vi funnet fakultetet av 4 bare ved å gange med 4:</p> <pre><code>fakultet(<span class=hljs-number>4</span>) = <span class=hljs-number>4</span> * <span class=hljs-number>3</span> * <span class=hljs-number>2</span> * <span class=hljs-number>1</span> = <span class=hljs-number>4</span> * fakultet(<span class=hljs-number>3</span>)\n</code></pre> <p>Videre kan vi finne fakultetet av 3 hvis vi vet fakultetet av 2 og så videre:</p> <pre><code>fakultet(<span class=hljs-number>3</span>) = <span class=hljs-number>3</span> * <span class=hljs-number>2</span> * <span class=hljs-number>1</span> = <span class=hljs-number>3</span> * fakultet(<span class=hljs-number>2</span>)\nfakultet(<span class=hljs-number>2</span>) = <span class=hljs-number>2</span> * <span class=hljs-number>1</span> = <span class=hljs-number>2</span> * fakultet(<span class=hljs-number>1</span>)\nfakultet(<span class=hljs-number>1</span>) = <span class=hljs-number>1</span>\n</code></pre> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul> <li> <p>La oss se om vi kan skrive et program som jobber på denne måten. Lag et nytt program som du kaller <code>fakultet.py</code>:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>fakultet</span><span class=hljs-params>(tall)</span>:</span>\n    <span class=hljs-keyword>if</span> tall == <span class=hljs-number>1</span>:\n        <span class=hljs-keyword>return</span> <span class=hljs-number>1</span>\n\nprint(fakultet(<span class=hljs-number>1</span>))\n</code></pre> <p>Her bruker vi flere ting du har sett tidligere. Husk at <code>def</code> brukes for å lage egne funksjoner. Her lager vi funksjonen <code>fakultet</code> som vi etterpå kaller inne i <code>print</code>-funksjonen.</p> </li> <li> <p>Foreløbig har vi bare sagt at vi vet at fakultetet av 1 er 1. Men nå kommer det stilige. Vi kan regne ut fakultetet av <strong>alle</strong> andre tall ved å legge på en enkelt kodelinje:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>fakultet</span><span class=hljs-params>(tall)</span>:</span>\n    <span class=hljs-keyword>if</span> tall == <span class=hljs-number>1</span>:\n        <span class=hljs-keyword>return</span> <span class=hljs-number>1</span>\n    <span class=hljs-keyword>return</span> tall * fakultet(tall-<span class=hljs-number>1</span>)\n\nprint(fakultet(<span class=hljs-number>4</span>))\n</code></pre> <p>Denne linjen sier at fakultetet til et tall er tallet selv ganget med fakultetet til tallet som er en mindre.</p> <p>Prøv å regne ut fakultetet av andre tall. Skjønner du hvordan dette virker? Det er en litt merkelig måte å tenke på, så du må kanskje venne deg til det?</p> </li> </ul> </section> </section> "},2795:function(e,s,n){e.exports=n.p+"_/oppgaver/src/python/mattespill/mattespill.486310.png"}});