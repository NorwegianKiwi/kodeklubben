webpackJsonp([177,262],{977:function(s,e,n){s.exports={frontmatter:n(358),content:n(1580)}},1580:function(s,e){s.exports='<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <figure>I denne oppgaven skal vi repetere litt Python-syntaks, det er en god blanding av alle tingene du har lært i Python til nå.</figure> </section> <section class=activity id=kodeblokker> <h1 class=activity id=kodeblokker>Kodeblokker</h1> <figure>I oppgavene er noen eksempler så korte at vi kan skrive de direkte inn i Python. Her er en kodeblokk som illustrerer et kort eksempel:</figure> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span><span class=hljs-number>1</span> == <span class=hljs-number>2</span>\n<span class=hljs-keyword>False</span>\n</code></pre> <p>Her betyr <code>&gt;&gt;&gt;</code> at Python er klar til å ta imot kode, <code>1 == 2</code> er koden, mens <code>False</code> er svaret.</p> <p>I andre eksempler er det ikke noe svar, men en utskrift av tekst isteden:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>print(<span class=hljs-string>"Hei!"</span>)\nHei!\n</code></pre> <p>Når vi ikke bruker <code>&gt;&gt;&gt;</code> i kodeblokkene, er det fordi koden er flere linjer lang. Da er det bedre å bruke en fil:</p> <pre><code class=language-python><span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(<span class=hljs-number>5</span>):\n    <span class=hljs-keyword>if</span> i == <span class=hljs-number>3</span>:\n        print(i)\n    <span class=hljs-keyword>else</span>:\n        print(<span class=hljs-number>2</span>*i)\n</code></pre> <p>Og når vi kjører denne filen i IDLE får vi utskriften:</p> <pre><code class=language-python>&gt;&gt;&gt;\n<span class=hljs-number>0</span>\n<span class=hljs-number>2</span>\n<span class=hljs-number>4</span>\n<span class=hljs-number>3</span>\n<span class=hljs-number>8</span>\n</code></pre> <figure>Noen ganger har vi eksempler med input fra brukeren. Da vil teksten brukeren skriver være grønn, mens det programmet skriver ut vil være svart:</figure> <pre>\n>>>\nHva heter du? <font color=green>Ada</font>\nHei, Ada!\n</pre> </section> <section class=activity id=input-og-output> <h1 class=activity id=input-og-output>Input og output</h1> <section class=protip id=input-og-print> <h2 class=protip id=input-og-print>input() og print()</h2> <p>Vi kan bruke <code>print()</code> når vi skal skrive ut tekst til brukeren. Koden etter <code>&gt;&gt;&gt;</code> er kode vi skriver inn i f.eks. IDLE, og som kjøres med en gang.</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>print(<span class=hljs-string>"Hei, verden"</span>)\nHei, verden\n</code></pre> <p><code>input()</code> brukes når du ønsker å la brukeren gi input til programmet ditt.</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>number = input(<span class=hljs-string>"Skriv inn et tall: "</span>)\nSkriv inn et tall: <span class=hljs-number>15</span>\n<span class=hljs-prompt>&gt;&gt;&gt; </span>print(<span class=hljs-string>"Du skrev inn: "</span> + str(number))\nDu skrev inn: <span class=hljs-number>15</span>\n</code></pre> </section> </section> <section class=check id=""> <h1 class=check id=""></h1> <figure>Skriv et program som spør om brukerens navn, og så skriver ut en hilsen til brukeren. Det kan for eksempel fungere slik:</figure> <pre>\n>>>\nHei! Hva er navnet ditt?\n<font color=green>Per</font>\nHyggelig å treffe deg, Per!\n</pre> <p>Dette må du gjøre:</p> <ul> <li>Spør om brukerens navn.</li> <li>Lagre brukerens navn i en variabel.</li> <li>Skriv ut en hilsen til brukeren som inneholder navnet brukeren skrev inn.</li> </ul> </section> <section class=activity id=if-elif-else> <h1 class=activity id=if-elif-else>if-elif-else</h1> <section class=protip id=-2> <h2 class=protip id=-2></h2> <p>Vi bruker <code>if</code>, <code>elif</code> og <code>else</code> for å bestemme hva som skjer i et program. Etter <code>if</code> og <code>elif</code> kommer en test og deretter <code>:</code>, mens etter <code>else</code> kommer alltid <code>:</code> uten noen test. På linjen under <code>:</code> skrives kodeblokken som skal kjøres dersom testen er sann (<code>if</code> eller <code>elif</code>), eller dersom alle testene usanne (<code>else</code>).</p> <p>Husk at du alltid må starte med en <code>if</code>-setning, og må ha alle <code>elif</code>-setningene før en <code>else</code>-blokk. Du <em>trenger ikke</em> å bruke verken <code>elif</code>-setninger eller <code>else</code>-blokk dersom du ikke ønsker det.</p> <p>For eksempel slik:</p> <pre><code class=language-python>name = <span class=hljs-string>"Ada"</span>\n<span class=hljs-keyword>if</span> name == <span class=hljs-string>"Per"</span>:\n    print(<span class=hljs-string>"Per er et guttenavn"</span>)\n<span class=hljs-keyword>elif</span> name == <span class=hljs-string>"Ada"</span>:\n    print(<span class=hljs-string>"Ada er et jentenavn"</span>)\n<span class=hljs-keyword>elif</span> name == <span class=hljs-string>"Kim"</span>:\n    print(<span class=hljs-string>"Kim kan være både guttenavn og jentenavn."</span>)\n<span class=hljs-keyword>else</span>:\n    print(<span class=hljs-string>"Jeg vet ikke om "</span> + navn + <span class=hljs-string>" er en gutt eller ei jente."</span>)\n</code></pre> </section> </section> <section class=check id=-3> <h1 class=check id=-3></h1> <p>Du skal nå lage et program som finner ut hvilken aldersgruppe brukeren er i; barn, ungdom, voksen eller pensjonist. Du kan selv bestemme hvor aldersgrensene skal gå. Det kan for eksempel fungere slik:</p> <pre>\n>>>\nHei! Hva er alderen din?\n<font color=green>77</font>\nDu er visst en pensjonist.\n</pre> <p>Det du trenger å gjøre er:</p> <ul> <li>Spør om brukerens alder.</li> <li>Lagre alderen til en variabel.</li> <li>Test om alderen er barn, ungdom, voksen eller pensjonist.</li> <li>Skriv ut hvilken aldersgruppe brukeren er i.</li> </ul> </section> <section class=activity id=lokker> <h1 class=activity id=lokker>Løkker</h1> <section class=protip id=for-lokker> <h2 class=protip id=for-lokker>for-løkker</h2> <p><code>for</code>-løkker brukes når vi ønsker å gjøre ting flere ganger.</p> <pre><code class=language-python><span class=hljs-comment># print Hello three times</span>\n<span class=hljs-keyword>for</span> i <span class=hljs-keyword>in</span> range(<span class=hljs-number>3</span>):\n    print(<span class=hljs-string>"Hello"</span>)\n</code></pre> <p>Da får vi ut:</p> <pre><code><span class=hljs-prompt>&gt;&gt;</span>&gt;\n<span class=hljs-constant>Hello</span>\n<span class=hljs-constant>Hello</span>\n<span class=hljs-constant>Hello</span>\n</code></pre> <figure>Vi kan også bruke <code>for</code>-løkker når vi ønsker å gå igjennom ei liste:</figure> <pre><code class=language-python><span class=hljs-comment># print all elements in the list food_list</span>\nfood_list = [<span class=hljs-string>"eggs"</span>, <span class=hljs-string>"ham"</span>, <span class=hljs-string>"spiced ham"</span>, <span class=hljs-string>"jam"</span>]\n<span class=hljs-keyword>for</span> food <span class=hljs-keyword>in</span> food_list:\n    print(food)\n</code></pre> <p>Dette programmet vil skrive ut:</p> <pre><code><span class=hljs-prompt>&gt;&gt;</span>&gt;\neggs\nham\nspiced ham\njam\n</code></pre> </section> </section> <section class=check id=-4> <h1 class=check id=-4></h1> <figure>Du skal nå lage ei liste med navn, og skrive ut alle navnene i lista. Resultatet kan se omtrent slik ut:</figure> <pre><code><span class=hljs-prompt>&gt;&gt;</span>&gt;\n<span class=hljs-constant>Per</span>\n<span class=hljs-constant>Ada</span>\n<span class=hljs-constant>Kim</span>\n</code></pre> <p>Dette du må gjøre:</p> <ul> <li>Lag ei liste med navn.</li> <li>Bruk ei løkke for å gå igjennom lista med navn.</li> <li>Skriv ut hvert navn.</li> </ul> </section> <section class=protip id=range> <h1 class=protip id=range>range()</h1> <p><code>range()</code> lager en rekke med tall. Rekken kan brukes til å gjøre noe mange ganger med hjelp av en <code>for</code>- eller <code>while</code>-løkke. <code>range()</code> tar inn tre argumenter <code>start</code>, <code>stop</code>, <code>step</code>:</p> <ul> <li><code>start</code> forteller hva vi skal telle fra.</li> <li><code>stop</code> forteller hva vi skal telle til, merk at vi <strong>ikke</strong> teller med slutt-tallet.</li> <li><code>step</code> forteller hvor store steg vi skal telle med. Vi kan for eksempel telle med steg på <code>2</code> eller steg på <code>100</code>.</li> </ul> <p>Ettersom rekken lages etterhvert som man teller over den, må man konvertere rekken til en liste dersom vi ønsker å se tallene i rekken. Rekken konverteres til en liste med <code>list()</code>. Her er noen eksempler:</p> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>list(range(<span class=hljs-number>1</span>, <span class=hljs-number>10</span>, <span class=hljs-number>1</span>))\n[<span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>, <span class=hljs-number>5</span>, <span class=hljs-number>6</span>, <span class=hljs-number>7</span>, <span class=hljs-number>8</span>, <span class=hljs-number>9</span>]\n<span class=hljs-prompt>&gt;&gt;&gt; </span>list(range(<span class=hljs-number>10</span>))\n[<span class=hljs-number>0</span>, <span class=hljs-number>1</span>, <span class=hljs-number>2</span>, <span class=hljs-number>3</span>, <span class=hljs-number>4</span>, <span class=hljs-number>5</span>, <span class=hljs-number>6</span>, <span class=hljs-number>7</span>, <span class=hljs-number>8</span>, <span class=hljs-number>9</span>]\n<span class=hljs-prompt>&gt;&gt;&gt; </span>list(range(<span class=hljs-number>200</span>, <span class=hljs-number>500</span>))\n[<span class=hljs-number>200</span>, <span class=hljs-number>201</span>, <span class=hljs-number>202</span>, ..., <span class=hljs-number>497</span>, <span class=hljs-number>498</span>, <span class=hljs-number>499</span>]\n<span class=hljs-prompt>&gt;&gt;&gt; </span>list(range(<span class=hljs-number>0</span>, <span class=hljs-number>50</span>, <span class=hljs-number>5</span>))\n[<span class=hljs-number>0</span>, <span class=hljs-number>5</span>, <span class=hljs-number>10</span>, <span class=hljs-number>15</span>, <span class=hljs-number>20</span>, <span class=hljs-number>25</span>, <span class=hljs-number>30</span>, <span class=hljs-number>35</span>, <span class=hljs-number>40</span>, <span class=hljs-number>45</span>]\n</code></pre> <p><code>range()</code> kan brukes på mange måter, vi kan for eksempel gå igjennom den og summere alle tallene fra 1 til 100:</p> <pre><code class=language-python>sum = <span class=hljs-number>0</span>\n<span class=hljs-keyword>for</span> number <span class=hljs-keyword>in</span> range(<span class=hljs-number>1</span>, <span class=hljs-number>101</span>):\n    sum += number\nprint(sum)\n</code></pre> </section> <section class=protip id=while-lokker> <h1 class=protip id=while-lokker>while-løkker</h1> <p><code>while</code>-løkker har mange ulike bruksområder. De kan for eksempel brukes når du vil kjøre kode inntil noe inntreffer:</p> <pre><code class=language-python>word = <span class=hljs-string>""</span>\n<span class=hljs-keyword>while</span> word != <span class=hljs-string>"exit"</span>:\n    print(word)\n    word = input(<span class=hljs-string>"Please write a word: "</span>)\n</code></pre> <p>Den samme løkken kan også skrive slik:</p> <pre><code class=language-python><span class=hljs-keyword>while</span> <span class=hljs-keyword>True</span>:\n    word = input(<span class=hljs-string>"Please write a word: "</span>)\n    <span class=hljs-keyword>if</span> word == <span class=hljs-string>"exit"</span>:\n        <span class=hljs-keyword>break</span>\n    print(word)\n</code></pre> </section> <section class=check id=-5> <h1 class=check id=-5></h1> <p>Skriv et program som summerer alle tallene fra <code>1</code> til <code>100</code> ved hjelp av ei <code>while</code>-løkke. Pass på at du får <code>5050</code> som svar.</p> <p>Dette må du gjøre:</p> <ul> <li>Lag en variabel som inneholder summen.</li> <li>Lag en tellevariabel som inneholder tallet du er kommet til.</li> <li>Så lenge tellevariabelen ikke er større enn 100: <ul> <li>Oppdater summen.</li> <li>Inkrementer tellevariabelen din.</li> </ul> </li> </ul> </section> <section class=activity id=funksjoner> <h1 class=activity id=funksjoner>Funksjoner</h1> </section> <section class=protip id=-6> <h1 class=protip id=-6></h1> <figure>Funksjoner lar oss gjenbruke kode, og er svært nyttig når vi skal programmere mer enn noen få linjer. En funksjon er på formen:</figure> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>greet</span><span class=hljs-params>(name)</span>:</span>\n    print(<span class=hljs-string>"Hei, "</span> + name + <span class=hljs-string>"!"</span>)\n\ngreet(<span class=hljs-string>"Per"</span>)\n</code></pre> <p>Her har vi en funksjon med navn <code>greet</code>, som skriver ut en hilsen. <code>name</code> er et <strong>parameter</strong>, det vil si at <code>name</code> er en variabel som funksjonen <code>greet</code> tar imot. Når vi <strong>kaller</strong> funksjonen <code>greet</code>, med <code>greet(&quot;Per&quot;)</code> er <code>&quot;Per&quot;</code> et <strong>argument</strong> til funksjonen. Et argument er den variabelen vi gir til funksjonen når vi kaller den.</p> <p>Vi kan også lage funksjoner som returnerer en verdi. Det vil se slik ut:</p> <pre><code class=language-python><span class=hljs-function><span class=hljs-keyword>def</span> <span class=hljs-title>multiply</span><span class=hljs-params>(x, y)</span>:</span>\n    product = x*y\n    <span class=hljs-keyword>return</span> product\n</code></pre> </section> <section class=check id=-7> <h1 class=check id=-7></h1> <figure>Nå skal vi lage en funksjon som adderer to tall. Test at funksjonen din fungerer som dette:</figure> <pre><code class=language-python><span class=hljs-prompt>&gt;&gt;&gt; </span>sum = add(<span class=hljs-number>3</span>, <span class=hljs-number>4</span>)\nFikk inn <span class=hljs-number>3</span> og <span class=hljs-number>4</span>\n<span class=hljs-prompt>&gt;&gt;&gt; </span>print(sum)\n<span class=hljs-number>7</span>\n</code></pre> <p>Dette må du gjøre:</p> <ul> <li>Definer en funksjon som tar inn to tall som parametre.</li> <li>Skriv ut tallene du fikk inn.</li> <li>Regn ut summen.</li> <li>Returner summen.</li> </ul> </section>'}});