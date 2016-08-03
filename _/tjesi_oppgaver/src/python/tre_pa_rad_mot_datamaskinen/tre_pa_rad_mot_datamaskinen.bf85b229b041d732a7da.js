webpackJsonp([168,262],{990:function(s,n,a){s.exports={frontmatter:a(371),content:a(1593)}},1593:function(s,n){s.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>I dag skal vi prøve å skrive kode slik at datamaskinen kan spille tre på rad mot oss. Datamaskinen vil ikke spille så bra i begynnelsen, men etterhvert som den lærer noen triks vil den kanskje klare å vinne mot deg!</p> </section> <section class=activity id=steg-1-vi-fortsetter-fra-forrige-gang> <h1 class=activity id=steg-1-vi-fortsetter-fra-forrige-gang>Steg 1: Vi fortsetter fra forrige gang</h1> <p>I leksjon 6 skrev vi et tre-på-rad spill for to spillere. Vi brukte <em>Tk lerretet</em> fra <code>tkinter</code>-biblioteket for å tegne på skjermen. La oss se på hva vi allerede har før vi begynner å skrive ny kode.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Åpne IDLE. Åpne filen fra forrige leksjon og lagre den med et nytt navn. Eller om du ikke kan finne den filen kan du kopiere inn følgende:</p> <pre><code class=language-python><span class=hljs-keyword>from</span> tkinter <span class=hljs-keyword>import</span> *\n\nmain = Tk()\n\nc = Canvas(main, width=<span class=hljs-number>600</span>, height=<span class=hljs-number>600</span>)\nc.pack()\n\nc.create_line(<span class=hljs-number>200</span>, <span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>)\nc.create_line(<span class=hljs-number>400</span>, <span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>)\n\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>, <span class=hljs-number>200</span>)\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>, <span class=hljs-number>400</span>)\n\ngrid = [\n    <span class=hljs-string>"0"</span>, <span class=hljs-string>"1"</span>, <span class=hljs-string>"2"</span>,\n    <span class=hljs-string>"3"</span>, <span class=hljs-string>"4"</span>, <span class=hljs-string>"5"</span>,\n    <span class=hljs-string>"6"</span>, <span class=hljs-string>"7"</span>, <span class=hljs-string>"8"</span>,\n]\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    shape = choose_shape()\n    across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n    square = across + (down * <span class=hljs-number>3</span>)\n\n    <span class=hljs-keyword>if</span> grid[square] == <span class=hljs-string>"X"</span> <span class=hljs-keyword>or</span> grid[square] == <span class=hljs-string>"O"</span>:\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> winner():\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> shape == <span class=hljs-string>"O"</span>:\n        c.create_oval(across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>)\n        grid[square] = <span class=hljs-string>"O"</span>\n    <span class=hljs-keyword>else</span>:\n        c.create_line(across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>)\n        c.create_line(across * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>)\n        grid[square] = <span class=hljs-string>"X"</span>\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>choose_shape</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>if</span> grid.count(<span class=hljs-string>"O"</span>) &gt; grid.count(<span class=hljs-string>"X"</span>):\n        <span class=hljs-keyword>return</span> <span class=hljs-string>"X"</span>\n    <span class=hljs-keyword>else</span>:\n        <span class=hljs-keyword>return</span> <span class=hljs-string>"O"</span>\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>winner</span><span class=hljs-params>()</span>:</span>\n    <span class=hljs-keyword>for</span> across <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        row = across * <span class=hljs-number>3</span>\n        line = grid[row] + grid[row+<span class=hljs-number>1</span>] + grid[row+<span class=hljs-number>2</span>]\n        <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    <span class=hljs-keyword>for</span> down <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        line = grid[down] + grid[down+<span class=hljs-number>3</span>] + grid[down+<span class=hljs-number>6</span>]\n        <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    line = grid[<span class=hljs-number>0</span>] + grid[<span class=hljs-number>4</span>] + grid[<span class=hljs-number>8</span>]\n    <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    line = grid[<span class=hljs-number>2</span>] + grid[<span class=hljs-number>4</span>] + grid[<span class=hljs-number>6</span>]\n    <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\nc.bind(<span class=hljs-string>"&lt;Button-1&gt;"</span>, click)\n\nmainloop()\n</code></pre> </li> <li> <p>Lagre, og kjør programmet, slik at du er sikker på at det virker!</p> <p>Du skal kunne klikke i rutene for å plassere sirkler og kryss inntil noen får tre på rad.</p> </li> <li> <p>Før vi begynner med dagens kode vil vi gjøre en liten opprydning i koden for at vi enklere skal kunne lese hva som skjer i prosedyren <code>click</code>. Vi flytter koden som tegner sirkler og kryss til en egen prosedyre. Bytt prosedyren <code>click</code> ut med disse to prosedyrene:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    shape = choose_shape()\n    across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n    square = across + (down * <span class=hljs-number>3</span>)\n\n    <span class=hljs-keyword>if</span> grid[square] == <span class=hljs-string>"X"</span> <span class=hljs-keyword>or</span> grid[square] == <span class=hljs-string>"O"</span>:\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> winner():\n        <span class=hljs-keyword>return</span>\n\n    grid[square] = shape\n    draw_shape(shape, across, down)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>draw_shape</span><span class=hljs-params>(shape, across, down)</span>:</span>\n    <span class=hljs-keyword>if</span> shape == <span class=hljs-string>"O"</span>:\n        c.create_oval(across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>)\n    <span class=hljs-keyword>else</span>:\n        c.create_line(across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>)\n        c.create_line(across * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>)\n</code></pre> <p>Kjør koden og test at den fortsatt fungerer på samme måte som tidligere. Dette er et eksempel på noe som kalles refaktorering. Vi har endret på selve koden, men ikke endret hvordan programmet fungerer.</p> </li> </ul> </section> </section> <section class=activity id=steg-2-spill-tilfeldig> <h1 class=activity id=steg-2-spill-tilfeldig>Steg 2: Spill tilfeldig</h1> <p>Før vi kan lære datamaskinen hvordan den gjør gode trekk vil vi lære den hvordan den gjør trekk i det hele tatt. Vi begynner med å la datamaskinen finne en tilfeldig ledig rute, og deretter spille der.</p> <p>Husk at vi har en variabel som heter <code>grid</code> som kan fortelle oss hvordan brettet ser ut. Det er en liste som starter som <code>[&quot;0&quot;, &quot;1&quot;, &quot;2&quot;, ... ]</code>, hvor vi putter inn <code>&quot;X&quot;</code> og <code>&quot;O&quot;</code> etterhvert som vi spiller. Vi begynner med å finne ledige ruter i denne listen for deretter å spille en slik rute.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Vi vil først lage en ny prosedyre, <code>free_squares</code>, som kan finne ledige ruter. Legg til denne koden nedenfor prosedyren <code>winner</code>, men over linjen <code>c.bind(...)</code>:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>free_squares</span><span class=hljs-params>()</span>:</span>\n    output = []\n    <span class=hljs-keyword>for</span> position, square <span class=hljs-keyword>in</span> enumerate(grid):\n        <span class=hljs-keyword>if</span> square != <span class=hljs-string>"X"</span> <span class=hljs-keyword>and</span> square != <span class=hljs-string>"O"</span>:\n            output.append(position)\n    <span class=hljs-keyword>return</span> output\n</code></pre> <p>Denne prosedyren lager en tom liste. Deretter går den gjennom hele rutenettet og sjekker hver rute om den er tom.</p> <p>Kommandoen <code>enumerate</code> kan fortelle oss posisjonen til hvert element i <code>grid</code>-listen. For eksempel vil <code>enumerate</code> gjøre om en liste <code>[\'A\',\'B\',\'C\']</code> til parene <code>(0, \'A\'), (1,\'B\'), (2, \'C\')</code> slik at vi ikke trenger å telle elementene selv.</p> </li> <li> <figure>På toppen av filen vil vi importere <code>random</code>-biblioteket, som vi vil bruke for å tilfeldig velge et trekk</figure> <pre><code class=language-python><span class=hljs-keyword>from</span> tkinter <span class=hljs-keyword>import</span> *\n<span class=hljs-keyword>import</span> random\n</code></pre> <figure>Du husker kanskje at vi brukte <code>random.choice</code> i en tidligere leksjon om Hangman.</figure> </li> <li> <p>Nå skriver vi en prosedyre <code>play_move()</code> som kan spille i en tilfeldig tom rute. Legg til denne prosedyren etter <code>free_squares</code> men før linjnen <code>c.bind(...)</code></p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>play_move</span><span class=hljs-params>()</span>:</span>\n    moves = free_squares()\n    square = random.choice(moves)\n\n    across = square % <span class=hljs-number>3</span>\n    down = square // <span class=hljs-number>3</span>\n\n    grid[square] = <span class=hljs-string>"X"</span>\n    draw_shape(<span class=hljs-string>"X"</span>, across, down)\n</code></pre> <p>Først bruker vi <code>free_squares</code> til å lage en liste over de tomme rutene. Deretter velger vi en tilfeldig av disse rutene. Vi vil nå oversette dette rutenummeret til rad- og kolonne-nummer. Dette gjør vi ved å bruke <code>%</code> og <code>//</code> operatorene. La oss se litt nærmere på hvordan dette virker:</p> <pre><code>    <span class=hljs-number>0</span> <span class=hljs-number>1</span> <span class=hljs-number>2</span>\n    -----\n<span class=hljs-number>0</span> | <span class=hljs-number>0</span> <span class=hljs-number>1</span> <span class=hljs-number>2</span>\n<span class=hljs-number>1</span> | <span class=hljs-number>3</span> <span class=hljs-number>4</span> <span class=hljs-number>5</span>\n<span class=hljs-number>2</span> | <span class=hljs-number>6</span> <span class=hljs-number>7</span> <span class=hljs-number>8</span>\n</code></pre> <p>For eksempel er rute nummer 5 i rad 1 og kolonne 2. Hvis vi deler 5 på 3 får vi 1 med 2 i rest.</p> <p><code>5 // 3</code> er 1, <code>6 // 3</code> er 2, og så videre. Operatoren <code>//</code> forteller oss hvor mange ganger et tall deler et annet, men ser bort i fra resten. Siden vi har 3 kolonner forteller <code>5 // 3</code> oss i hvilken rad rute 5 er.</p> <p><code>5 % 3</code> er 2, <code>6 % 3</code> er 0. Operatoren <code>%</code> forteller oss hva resten er når vi deler et tall med et annet. Dette gir oss kolonnenummeret.</p> <p>Legg merke til at de to linjene</p> <pre><code class=language-python>across = square % <span class=hljs-number>3</span>\ndown = square // <span class=hljs-number>3</span>\n</code></pre> <p>gjør den motsatte utregningen av</p> <pre><code class=language-python>square = across + (down * <span class=hljs-number>3</span>)\n</code></pre> <figure>som vi allerede har brukt i <code>click</code>.</figure> </li> <li> <p>Til slutt endrer vi <code>click</code>-prosedyren slik at den kaller <code>play_move</code>. På denne måten vil først spilleren gjøre sitt trekk, og deretter gjør datamaskinen sitt trekk.</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n    square = across + (down * <span class=hljs-number>3</span>)\n\n    <span class=hljs-keyword>if</span> grid[square] == <span class=hljs-string>"X"</span> <span class=hljs-keyword>or</span> grid[square] == <span class=hljs-string>"O"</span>:\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> winner():\n        <span class=hljs-keyword>return</span>\n\n    grid[square] = <span class=hljs-string>"O"</span>\n    draw_shape(<span class=hljs-string>"O"</span>, across, down)\n\n    <span class=hljs-keyword>if</span> winner():\n        <span class=hljs-keyword>return</span>\n\n    play_move()\n</code></pre> <p>Vi sjekker først om spilleren har vunnet, og hvis ikke lar vi datamaskinen gjøre sitt trekk.</p> </li> <li> <p>Lagre programmet og kjør det. Datamaskinen vil nå trekke etter deg. Den vil ikke spille spesielt bra siden den bare gjør tilfeldige trekk.</p> </li> </ul> </section> </section> <section class=activity id=steg-3-velg-et-trekk-som-vinner> <h1 class=activity id=steg-3-velg-et-trekk-som-vinner>Steg 3: Velg et trekk som vinner</h1> <p>Datamaskinen spiller nå tre på rad, men den er ikke spesielt flink. La oss hjelpe den litt. I stedet for å bare velge trekk helt tilfeldig, la datamaskinen velge trekk som gjør at den vinner om de finnes. Ideen er at vi kan sjekke alle de mulige trekkene til datamaskinen, og om ett av disse vil vinne spillet lar vi datamaskinen spille det.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul> <li> <p>Endre prosedyren <code>winner</code> slik at den tar et argument <code>grid</code>:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>winner</span><span class=hljs-params>(grid)</span>:</span>\n    <span class=hljs-keyword>for</span> across <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        row = across * <span class=hljs-number>3</span>\n        line = grid[row] + grid[row+<span class=hljs-number>1</span>] + grid[row+<span class=hljs-number>2</span>]\n        <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    <span class=hljs-keyword>for</span> down <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        line = grid[down] + grid[down+<span class=hljs-number>3</span>] + grid[down+<span class=hljs-number>6</span>]\n        <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    line = grid[<span class=hljs-number>0</span>] + grid[<span class=hljs-number>4</span>] + grid[<span class=hljs-number>8</span>]\n    <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    line = grid[<span class=hljs-number>2</span>] + grid[<span class=hljs-number>4</span>] + grid[<span class=hljs-number>6</span>]\n    <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n</code></pre> <p>Du trenger bare å endre den første linjen i prosedyren. Dette betyr at <code>winner</code> vil bruke en liste vi sender til den, i stedet for <code>grid</code> som husker hvordan dette spillet ser ut. Dermed kan <code>winner</code> også undersøke trekk som ikke er blitt spilt enda.</p> </li> <li> <figure>Nå må vi forandre <code>click</code> så den sender inn riktig liste.</figure> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n     across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n    square = across + (down * <span class=hljs-number>3</span>)\n\n    <span class=hljs-keyword>if</span> grid[square] == <span class=hljs-string>"X"</span> <span class=hljs-keyword>or</span> grid[square] == <span class=hljs-string>"O"</span>:\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> winner(grid):\n        <span class=hljs-keyword>return</span>\n\n    grid[square] = <span class=hljs-string>"O"</span>\n    draw_shape(<span class=hljs-string>"O"</span>, across, down)\n\n    <span class=hljs-keyword>if</span> winner(grid):\n        <span class=hljs-keyword>return</span>\n\n    play_move()\n</code></pre> <p>Alle steder vi har <code>winner()</code> i koden bytter vi det ut med <code>winner(grid)</code>.</p> </li> <li> <p>Kjør koden, den skal fortsatt virke akkurat som før for vi har enda ikke endret hvordan datamaskinen spiller.</p> </li> <li> <figure>La oss hjelpe datamaskinen ved å legge til noen linjer i <code>play_move</code> som kan lete etter vinnende trekk!</figure> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>play_move</span><span class=hljs-params>()</span>:</span>\n    moves = free_squares()\n    square = random.choice(moves)\n\n    <span class=hljs-comment># Bruk et vinnende trekk om det eksisterer</span>\n    <span class=hljs-keyword>for</span> possible <span class=hljs-keyword>in</span> moves:\n        new_grid = list(grid)\n        new_grid[possible] = <span class=hljs-string>"X"</span>\n        <span class=hljs-keyword>if</span> winner(new_grid):\n            square = possible\n            <span class=hljs-keyword>break</span>\n\n    across = square % <span class=hljs-number>3</span>\n    down = square // <span class=hljs-number>3</span>\n\n    grid[square] = <span class=hljs-string>"X"</span>\n    draw_shape(<span class=hljs-string>"X"</span>, across, down)\n</code></pre> <p>For hver ledige rute lager vi en kopi av <code>grid</code>-listen med kommandoen <code>list(grid)</code>. Deretter plasserer vi en X i denne ledige ruten og bruker <code>winner</code> for å undersøke om dette vil være et vinnende trekk!</p> </li> </ul> <ul> <li>Kjør programmet ditt og test det flere ganger. Datamaskinen skal ha blitt litt flinkere til å spille nå.</li> </ul> </section> </section> <section class=activity id=steg-4-velg-et-trekk-som-blokkerer> <h1 class=activity id=steg-4-velg-et-trekk-som-blokkerer>Steg 4: Velg et trekk som blokkerer</h1> <p>Den andre strategien vi vil lære datamaskinen er å blokkere trekk som gjør at vi vil vinne. Dette gjør vi på nesten samme måte, men nå ser vi hva som skjer om vi plasserer ut O i de ledige rutene.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul> <li> <figure>Legg til litt mer kode i <code>play_move</code> som blokkerer trekk som gjør at spilleren kan vinne.</figure> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>play_move</span><span class=hljs-params>()</span>:</span>\n    moves = free_squares()\n    square = random.choice(moves)\n\n    <span class=hljs-comment># Bruk et blokkerende trekk om det eksisterer</span>\n    <span class=hljs-keyword>for</span> possible <span class=hljs-keyword>in</span> moves:\n        new_grid = list(grid)\n        new_grid[possible] = <span class=hljs-string>"O"</span>\n        <span class=hljs-keyword>if</span> winner(new_grid):\n            square = possible\n            <span class=hljs-keyword>break</span>\n\n    <span class=hljs-comment># Bruk et vinnende trekk om det eksisterer</span>\n    <span class=hljs-keyword>for</span> possible <span class=hljs-keyword>in</span> moves:\n        new_grid = list(grid)\n        new_grid[possible] = <span class=hljs-string>"X"</span>\n        <span class=hljs-keyword>if</span> winner(new_grid):\n            square = possible\n            <span class=hljs-keyword>break</span>\n\n    across = square % <span class=hljs-number>3</span>\n    down = square // <span class=hljs-number>3</span>\n\n    grid[square] = <span class=hljs-string>"X"</span>\n    draw_shape(<span class=hljs-string>"X"</span>, across, down)\n</code></pre> <p>Legg merke til at datamaskinen først plukker en tilfeldig ledig rute. Deretter sjekker den om den kan blokkere, og hvis den kan det så ombestemmer den seg. Til slutt sjekker den om den kan vinne, og dersom den kan det så ombestemmer den seg en gang til!</p> </li> <li> <p>Kjør koden og se om du klarer å vinne mot datamaskinen! Det har nå blitt mye vanskeligere.</p> </li> </ul> </section> </section> <section class=activity id=hele-programmet> <h1 class=activity id=hele-programmet>Hele programmet</h1> <p>Det ferdige programmet ditt vil nå se omtrent ut som dette!</p> <pre><code class=language-python><span class=hljs-keyword>from</span> tkinter <span class=hljs-keyword>import</span> *\n<span class=hljs-keyword>import</span> random\n\nmain = Tk()\n\nc = Canvas(main, width=<span class=hljs-number>600</span>, height=<span class=hljs-number>600</span>)\nc.pack()\n\nc.create_line(<span class=hljs-number>200</span>, <span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>)\nc.create_line(<span class=hljs-number>400</span>, <span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>)\n\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>200</span>, <span class=hljs-number>600</span>, <span class=hljs-number>200</span>)\nc.create_line(<span class=hljs-number>0</span>, <span class=hljs-number>400</span>, <span class=hljs-number>600</span>, <span class=hljs-number>400</span>)\n\ngrid = [\n    <span class=hljs-string>"0"</span>, <span class=hljs-string>"1"</span>, <span class=hljs-string>"2"</span>,\n    <span class=hljs-string>"3"</span>, <span class=hljs-string>"4"</span>, <span class=hljs-string>"5"</span>,\n    <span class=hljs-string>"6"</span>, <span class=hljs-string>"7"</span>, <span class=hljs-string>"8"</span>,\n]\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>click</span><span class=hljs-params>(event)</span>:</span>\n    across = int(c.canvasx(event.x) / <span class=hljs-number>200</span>)\n    down = int(c.canvasy(event.y) / <span class=hljs-number>200</span>)\n    square = across + (down * <span class=hljs-number>3</span>)\n\n    <span class=hljs-keyword>if</span> grid[square] == <span class=hljs-string>"X"</span> <span class=hljs-keyword>or</span> grid[square] == <span class=hljs-string>"O"</span>:\n        <span class=hljs-keyword>return</span>\n\n    <span class=hljs-keyword>if</span> winner(grid):\n        <span class=hljs-keyword>return</span>\n\n    grid[square] = <span class=hljs-string>"O"</span>\n    draw_shape(<span class=hljs-string>"O"</span>, across, down)\n\n    <span class=hljs-keyword>if</span> winner(grid):\n        <span class=hljs-keyword>return</span>\n\n    play_move()\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>draw_shape</span><span class=hljs-params>(shape, across, down)</span>:</span>\n    <span class=hljs-keyword>if</span> shape == <span class=hljs-string>"O"</span>:\n        c.create_oval(across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>)\n    <span class=hljs-keyword>else</span>:\n        c.create_line(across * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>)\n        c.create_line(across * <span class=hljs-number>200</span>, (down+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>,\n            (across+<span class=hljs-number>1</span>) * <span class=hljs-number>200</span>, down * <span class=hljs-number>200</span>)\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>winner</span><span class=hljs-params>(grid)</span>:</span>\n    <span class=hljs-keyword>for</span> across <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        row = across * <span class=hljs-number>3</span>\n        line = grid[row] + grid[row+<span class=hljs-number>1</span>] + grid[row+<span class=hljs-number>2</span>]\n        <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    <span class=hljs-keyword>for</span> down <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n        line = grid[down] + grid[down+<span class=hljs-number>3</span>] + grid[down+<span class=hljs-number>6</span>]\n        <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n            <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    line = grid[<span class=hljs-number>0</span>] + grid[<span class=hljs-number>4</span>] + grid[<span class=hljs-number>8</span>]\n    <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n        <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n    line = grid[<span class=hljs-number>2</span>] + grid[<span class=hljs-number>4</span>] + grid[<span class=hljs-number>6</span>]\n    <span class=hljs-keyword>if</span> line == <span class=hljs-string>"XXX"</span> <span class=hljs-keyword>or</span> line == <span class=hljs-string>"OOO"</span>:\n        <span class=hljs-keyword>return</span> <span class=hljs-keyword>True</span>\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>free_squares</span><span class=hljs-params>()</span>:</span>\n    output = []\n    <span class=hljs-keyword>for</span> position, square <span class=hljs-keyword>in</span> enumerate(grid):\n        <span class=hljs-keyword>if</span> square != <span class=hljs-string>"X"</span> <span class=hljs-keyword>and</span> square != <span class=hljs-string>"O"</span>:\n            output.append(position)\n    <span class=hljs-keyword>return</span> output\n\n<span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>play_move</span><span class=hljs-params>()</span>:</span>\n    moves = free_squares()\n    square = random.choice(moves)\n\n    <span class=hljs-comment># Bruk et blokkerende trekk om det eksisterer</span>\n    <span class=hljs-keyword>for</span> possible <span class=hljs-keyword>in</span> moves:\n        new_grid = list(grid)\n        new_grid[possible] = <span class=hljs-string>"O"</span>\n        <span class=hljs-keyword>if</span> winner(new_grid):\n            square = possible\n            <span class=hljs-keyword>break</span>\n\n    <span class=hljs-comment># Bruk et vinnende trekk om det eksisterer</span>\n    <span class=hljs-keyword>for</span> possible <span class=hljs-keyword>in</span> moves:\n        new_grid = list(grid)\n        new_grid[possible] = <span class=hljs-string>"X"</span>\n        <span class=hljs-keyword>if</span> winner(new_grid):\n            square = possible\n            <span class=hljs-keyword>break</span>\n\n    down = square // <span class=hljs-number>3</span>\n    across = square % <span class=hljs-number>3</span>\n\n    grid[square] = <span class=hljs-string>"X"</span>\n    draw_shape(<span class=hljs-string>"X"</span>, across, down)\n\nc.bind(<span class=hljs-string>"&lt;Button-1&gt;"</span>, click)\n\nmainloop()\n</code></pre> <section class=challenge id=utfordring> <h2 class=challenge id=utfordring>Utfordring</h2> <p>Det er fortsatt mulig å vinne mot datamaskinen. Kan du gjøre endringer som gjør at den spiller enda bedre? Kanskje du kan lære datamaskinen å spille perfekt?</p> </section> </section>'}});