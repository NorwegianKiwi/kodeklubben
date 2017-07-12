webpackJsonp([16,418],{1685:function(s,e,l){s.exports={frontmatter:l(712),content:l(2854)}},2854:function(s,e,l){s.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Denne oppgaven viser deg hvordan du kan lage et spill med JavaScript og dele det med vennene dine. Spillet kalles <em>Trykkomania</em> fordi det handler om å trykke på en ball flest mulig ganger før tiden renner ut.</p> <p>Før du starter på denne oppgaven bør du har endel erfaring med variabler, funksjoner og eventListeners i JavaScript. Dersom du ikke har det, så anbefaler vi å gjøre noen av de enklere oppgavene først.</p> <figure><img src="+l(3615)+' alt=""></figure> </section> <section class=activity id=steg-1-apne-js-bin> <h1 class=activity id=steg-1-apne-js-bin>Steg 1: Åpne JS Bin</h1> <p>Vi skal bruke JS Bin (<a href=http://jsbin.com>http://jsbin.com</a>) for å lage spillet. Hvis du aldri har brukt JS Bin før, ta en titt på oppgaven <a href=../hei_js/hei_js.html>Hei JavaScript</a>. Dersom du heller vil lage spillet i en egen fil på PCen din, så er det bare å åpne din favoritt teksteditor og hoppe til steg 2.</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_0><label for=cbx_0> Åpne adressen <a href=http://jsbin.com>jsbin.com</a> i ett eget vindu.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_1><label for=cbx_1> Velg å vise <strong>JavaScript</strong> og <strong>Output</strong>. Skjul de andre fanene ved å trykke på de.</label></p> <figure><img src='+l(3608)+" alt=\"\"></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_2><label for=cbx_2> I <strong>JavaScript</strong> skriver vi koden.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_3><label for=cbx_3> I <strong>Output</strong> vises websiden.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_4><label for=cbx_4> Når du starter er begge fanene tomme.</label></p> </li> </ul> </section> </section> <section class=activity id=steg-2-lage-en-ball> <h1 class=activity id=steg-2-lage-en-ball>Steg 2: Lage en ball</h1> <p>Vi skal bruke JavaScript til å lage innholdet på websiden. Dette betyr at vi skal bruke JavaScript til å lage <em>HTML</em>. Du trenger ikke kunne noe spesielt om HTML, men om du ønsker lære om HTML, se <a href=../introduksjon_til_web/introduksjon_til_web.html>oppgaven Introduksjon til web</a>.</p> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_5><label for=cbx_5> Vi begynner med å lage en funksjon som heter <code>Ball</code>:</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_6><label for=cbx_6> Inni funksjonen lager vi ett nytt <code>div</code>-element:</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_7><label for=cbx_7> <code>var el</code> betyr at elementet får navn <code>el</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_8><label for=cbx_8> Vi kan nå gi elementet en stil:</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n  el.style.backgroundColor = <span class=hljs-string>'black'</span>;\n  el.style.width = <span class=hljs-string>'60px'</span>;\n  el.style.height = <span class=hljs-string>'60px'</span>;\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_9><label for=cbx_9> <code>el.style.backgroundColor = 'black'</code> gjør ballen svart.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_10><label for=cbx_10> <code>el.style.width = '60px'</code> gjør ballen 60 <a href=https://no.wikipedia.org/wiki/Piksel>piksler</a> bred.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_11><label for=cbx_11> <code>el.style.height = '60px'</code> gjør ballen 60 piksler høy.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_12><label for=cbx_12> La oss legge ballen til siden:</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n  el.style.backgroundColor = <span class=hljs-string>'black'</span>;\n  el.style.width = <span class=hljs-string>'60px'</span>;\n  el.style.height = <span class=hljs-string>'60px'</span>;\n  <span class=hljs-built_in>document</span>.body.appendChild(el);\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_13><label for=cbx_13> For at ballen skal vises, må vi kjøre funksjonen ved hjelp av denne koden:</label></p> <pre><code class=js>Ball();\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_14><label for=cbx_14> Vises en &quot;ball&quot; i <strong>Output</strong>?</label></p> <figure><img src="+l(3609)+" alt=\"\"></figure> </li> </ul> <p>Ok, så den var ikke akkurat rund. Vi kan bruke <code>el.style.borderRadius</code> for å runde av hjørnene. Siden ballen er <code>60px</code> bred og høy, så avrunder vi kantene med <code>30px</code>, altså halvparten av 60.</p> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_15><label for=cbx_15> Legg koden under de andre <code>el.style</code>-setningene:</label></p> <pre><code class=js>el.style.borderRadius = <span class=hljs-string>'30px'</span>;\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_16><label for=cbx_16> Fikk du en rund ball?</label></p> </li> </ul> </section> <section class=challenge id=utforsk> <h2 class=challenge id=utforsk>Utforsk</h2> <p>Om du ønsker en annen form, prøv andre verdier enn <code>30px</code> for avrundingen. Hvordan ser <code>5px</code> ut?</p> </section> <section class=protip id=tips> <h2 class=protip id=tips>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/pozova/1/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-3-flytte-ballen> <h1 class=activity id=steg-3-flytte-ballen>Steg 3: Flytte ballen</h1> <p>Akkurat nå vises ballen helt øverst til venstre i <strong>Output</strong>. La oss flytte den rundt omkring.</p> <p>Vi bruker <code>el.style.position = 'fixed'</code> for å fortelle at vi ønsker plassere ballen i forhold til kantene i vinduet. 50% fra toppen blir da <code>el.style.top = '50%'</code>.</p> <section class=check id=sjekkliste-3> <h2 class=check id=sjekkliste-3>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_17><label for=cbx_17> Legg til en posisjon for ballen:</label></p> <pre><code class=js>el.style.position = <span class=hljs-string>'fixed'</span>;\nel.style.top = <span class=hljs-string>'80%'</span>;\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_18><label for=cbx_18> Flyttet ballen seg ned?</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_19><label for=cbx_19> Flytt ballen ut fra venstre kant:</label></p> <pre><code class=js>el.style.left = <span class=hljs-string>'30%'</span>;\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_20><label for=cbx_20> Prøv andre verdier mellom <code>0%</code> og <code>100%</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_21><label for=cbx_21> Klarer du å finne ut når ballen forsvinner ut av vinduet?</label></p> </li> </ul> </section> <section class=protip id=tips-2> <h2 class=protip id=tips-2>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/pozova/2/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-4-flytte-ballen-med-en-funksjon> <h1 class=activity id=steg-4-flytte-ballen-med-en-funksjon>Steg 4: Flytte ballen med en funksjon</h1> <p>Ettersom vi ønsker at ballen skal flytte seg underveis i spillet, skal vi lage en funksjon som flytter ballen.</p> <section class=check id=sjekkliste-4> <h2 class=check id=sjekkliste-4>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_22><label for=cbx_22> Inni <code>Ball</code>, lag en funksjon som heter <code>el.posisjon</code>. Denne funksjonen skal ta inn en x- og en y-verdi, plassere elementet og returnere elementet.</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  ...\n  el.posisjon = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params>x, y</span>) </span>{\n\n  };\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_23><label for=cbx_23> Funksjonen skal bestemme <code>el.style.top</code> og <code>el.style.left</code>.</label></p> <pre><code class=js>el.posisjon = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params>x, y</span>) </span>{\n  el.style.left = x;\n  el.style.top = y;\n};\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_24><label for=cbx_24> Returner <code>el</code>, slik at vi kan bruke funksjonene til ballen. Når elementet <code>el</code> returneres så vil <code>el</code> oppdateres med ny plassering.</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  ...\n  el.posisjon = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params>x, y</span>) </span>{\n    el.style.left = x;\n    el.style.top = y;\n  };\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_25><label for=cbx_25> Du kan nå flytte ballen slik som dette:</label></p> <pre><code class=js><span class=hljs-keyword>var</span> ball = Ball();  <span class=hljs-comment>// lager ballen</span>\nball.posisjon(<span class=hljs-string>'10%'</span>, <span class=hljs-string>'20%'</span>);  <span class=hljs-comment>// flytter til x = 10% og y = 20%</span>\n</code></pre> </li> </ul> </section> <section class=protip id=tips-3> <h2 class=protip id=tips-3>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/hipepuy/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-5-velg-en-tilfeldig-plassering> <h1 class=activity id=steg-5-velg-en-tilfeldig-plassering>Steg 5: Velg en tilfeldig plassering</h1> <p>I JavaScript kan vi bruke <code>Math.random()</code> for å få en tilfeldig verdi mellom 0 og 1. La oss bruke denne slik at ballen blir plassert på et tilfeldig sted.</p> <section class=check id=sjekkliste-5> <h2 class=check id=sjekkliste-5>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_26><label for=cbx_26> Trykk på fanen <strong>Console</strong>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_27><label for=cbx_27> Skriv inn <code>Math.random()</code> og trykk enter.</label></p> <figure><img src="+l(3613)+' alt=""></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_28><label for=cbx_28> Fikk du et tall mellom 0 og 1?</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_29><label for=cbx_29> Vi kan gjøre dette tallet om til prosent ved å gange med 100, prøv det ut:</label></p> <figure><img src='+l(3611)+" alt=\"\"></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_30><label for=cbx_30> Vi kan legge til prosenttegnet med <code>+ '%'</code>:</label></p> <figure><img src="+l(3612)+" alt=\"\"></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_31><label for=cbx_31> Legg merke til at hver gang kommandoen kjøres, får vi nye tall. Det er dette som kalles <em>tilfeldig</em>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_32><label for=cbx_32> Lukk <strong>Console</strong> ved å trykke på den.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_33><label for=cbx_33> La oss bruke <code>Math.random</code> til å plassere ballen:</label></p> <pre><code class=js><span class=hljs-keyword>var</span> x = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>100</span> + <span class=hljs-string>'%'</span>;\n<span class=hljs-keyword>var</span> y = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>100</span> + <span class=hljs-string>'%'</span>;\nball.posisjon(x, y);\n</code></pre> </li> </ul> <p>Her har vi laget 2 variabler <code>x</code> og <code>y</code> som begge holder på hvert sitt tilfeldige tall. Dette tallet sendes inn i funksjonen <code>posisjon(x,y)</code> som vi lagde i sted.</p> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_34><label for=cbx_34> Hvis du trykker på knappen <button>Run with JS</button>, flytter ballen på seg?</label></p> <figure><img src="+l(3614)+" alt=\"\"></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_35><label for=cbx_35> Hvis du har haket av <strong>Auto-run JS</strong> vil også koden kjøres hver gang du endrer koden.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_36><label for=cbx_36> Trykker du nok antall ganger, legger du merke til at ballen noen ganger kommer utenfor bunnen og høyre side.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_37><label for=cbx_37> For å unngå dette kan vi begrense forflytningen til 80%:</label></p> <pre><code class=js><span class=hljs-keyword>var</span> x = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>80</span> + <span class=hljs-string>'%'</span>;\n<span class=hljs-keyword>var</span> y = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>80</span> + <span class=hljs-string>'%'</span>;\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_38><label for=cbx_38> Siden <code>Math.random()</code> maksimalt er 1 og vi ganger med 80, vil aldri ballen flytte seg lenger ut fra toppen eller venstre side enn 80%.</label></p> </li> </ul> </section> <section class=protip id=tips-4> <h2 class=protip id=tips-4>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/digiqa/1/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-6-flytte-ballen-hvert-andre-sekund> <h1 class=activity id=steg-6-flytte-ballen-hvert-andre-sekund>Steg 6: Flytte ballen hvert andre sekund</h1> <p>Vi ønsker at ballen hele tiden skal flytte seg. Nå skal vi bruke <code>setInterval</code> til å flytte ballen hvert andre sekund.</p> <pre><code class=js>setInterval(<span class=hljs-function><span class=hljs-keyword>function</span>(<span class=hljs-params></span>)</span>{\n    <span class=hljs-comment>//koden som skal kjøres i intervall</span>\n}, antall_millisekunder); <span class=hljs-comment>// Hvor ofte den skal kjøre</span>\n</code></pre> <section class=check id=sjekkliste-6> <h2 class=check id=sjekkliste-6>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_39><label for=cbx_39> Bruk <code>setInterval</code> til å flytte ballen hvert andre sekund:</label></p> <pre><code class=js>setInterval(<span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> x = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>80</span> + <span class=hljs-string>'%'</span>;\n  <span class=hljs-keyword>var</span> y = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>80</span> + <span class=hljs-string>'%'</span>;\n  ball.posisjon(x, y);\n}, <span class=hljs-number>2000</span>);\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_40><label for=cbx_40> <code>setInterval(function ..., 2000)</code> betyr kjør <code>function</code> hvert <code>2000</code> millisekund.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_41><label for=cbx_41> 2000 millisekund er 2 sekunder, altså tegnes ballen på et nytt sted hvert andre sekund.</label></p> </li> </ul> </section> <section class=protip id=tips-5> <h2 class=protip id=tips-5>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/lecamej/1/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-7-poeng> <h1 class=activity id=steg-7-poeng>Steg 7: Poeng</h1> <p>Nå har du en ball som spretter rundt. La oss legge til poeng. Vi har laget en poeng-komponent som du kan bruke, så kommer du raskere i gang. <code>Poeng</code> er bygd opp likt som <code>Ball</code>, så du må gjerne lese gjennom og se om du forstår den.</p> <section class=check id=sjekkliste-7> <h2 class=check id=sjekkliste-7>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_42><label for=cbx_42> Legg til koden for komponenten <code>Poeng</code>:</label></p> <pre><code class=js><span class=hljs-comment>/**\n * Poeng - viser poengsum nede i venstre hjørne.\n *\n * Bruk:\n *   var poeng = Poeng();  // viser poengsummen\n *   poeng.øk();  // øker poengsummen med 100\n *   poeng.nullstill();  // setter poengsummen til 0\n *\n */</span>\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Poeng</span>(<span class=hljs-params></span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n  \n  <span class=hljs-comment>// CSS til \"el\"</span>\n  el.style.position = <span class=hljs-string>'fixed'</span>;\n  el.style.bottom = <span class=hljs-string>'5px'</span>;\n  el.style.left = <span class=hljs-string>'8px'</span>;\n  el.style.padding = <span class=hljs-string>'5px'</span>;\n  el.style.backgroundColor = <span class=hljs-string>'black'</span>;\n  el.style.color = <span class=hljs-string>'white'</span>;\n  \n  <span class=hljs-comment>// Viser poengsum på skjermen, samt lager variabelen \"_poeng\"</span>\n  <span class=hljs-keyword>var</span> _poeng = <span class=hljs-number>0</span>;\n  el.innerHTML = _poeng + <span class=hljs-string>' poeng'</span>;\n  <span class=hljs-built_in>document</span>.body.appendChild(el);\n\n  <span class=hljs-comment>// To funksjoner som øker eller nullstiller poengene</span>\n  el.øk = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    _poeng += <span class=hljs-number>100</span>;\n    el.innerHTML = _poeng + <span class=hljs-string>' poeng'</span>;\n  };\n  el.nullstill = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    _poeng = <span class=hljs-number>0</span>;\n    el.innerHTML = _poeng + <span class=hljs-string>' poeng'</span>;\n  };\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_43><label for=cbx_43> For at poengsummen skal vises, må vi kjøre <code>Poeng()</code> en gang, slik vi også gjorde med <code>Ball()</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_44><label for=cbx_44> Legg denne linjen over <code>Ball()</code>:</label></p> <pre><code class=js><span class=hljs-keyword>var</span> poeng = Poeng();\n<span class=hljs-keyword>var</span> ball = Ball();\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_45><label for=cbx_45> Vises &quot;<strong>Poeng 0</strong>&quot;?</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_46><label for=cbx_46> For å holde orden på programmet er det lurt å ha det som skjer i toppen. Funksjoner kan brukes likevel om de ikke står først, så flytt <code>function Ball</code> og <code>function Poeng</code> ned til bunnen.</label></p> <pre><code class=js><span class=hljs-keyword>var</span> poeng = Poeng();\n<span class=hljs-keyword>var</span> ball = Ball();\nsetInterval(<span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n  ...\n}, <span class=hljs-number>2000</span>);\n\n\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  ...\n}\n\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Poeng</span>(<span class=hljs-params></span>) </span>{\n  ...\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_47><label for=cbx_47> Nå står det som skjer i toppen:</label></p> <ul> <li>Vis poengene: <code>var poeng = Poeng()</code></li> <li>Vis ballen: <code>var ball = Ball()</code></li> <li>Flytt ballen hvert andre sekund: <code>setInterval(..., 2000)</code></li> </ul> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_48><label for=cbx_48> Vi velger nå å kjøre funksjonen <code>poeng.øk</code> hver gang ballen trykkes.</label></p> <pre><code class=js>ball.onclick = poeng.øk;\n</code></pre> <p><strong>Obs:</strong> Det skal <strong>ikke</strong> være <code>()</code> på slutten av <code>poeng.øk</code>. Dette er fordi funksjonen ikke kjøres her, men hver gang noen klikker på ballen.</p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_49><label for=cbx_49> <code>ball.onclick = poeng.øk;</code> betyr at funksjonen <code>poeng.øk()</code> kjøres når noen klikker på ballen.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_50><label for=cbx_50> Sjekk at du får poeng når du treffer ballen med et klikk.</label></p> <figure><img src="+l(3610)+' alt=""></figure> </li> </ul> </section> <section class=protip id=tips-6> <h2 class=protip id=tips-6>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/mewole/1/edit?js,output>fasiten så langt</a>.</p> </section> <section class=flag id=teste-spillet> <h2 class=flag id=teste-spillet>Teste spillet</h2> <p>Du er nå kommet så langt at det kan være kult å teste spillet. Ettersom spillet handler om å trykke flest mulig ganger på ballen, egner det seg for å prøve på mobiltelefonen.</p> </section> <section class=check id=sjekkliste-8> <h2 class=check id=sjekkliste-8>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_51><label for=cbx_51> Noen mobiltelefoner zoomer når en dobbeltklikker på skjermen, derfor skal vi slå av zooming.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_52><label for=cbx_52> Åpne fanen <strong>HTML</strong> ved å trykke på den.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_53><label for=cbx_53> Finn linjen med <code>&lt;meta name=&quot;viewport&quot; ...</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_54><label for=cbx_54> Endre linjen til:</label></p> <pre><code class=html><span class=hljs-tag>&lt;<span class=hljs-name>meta</span> <span class=hljs-attr>name</span>=<span class=hljs-string>"viewport"</span> <span class=hljs-attr>content</span>=<span class=hljs-string>"width=device-width, user-scalable=no"</span>&gt;</span>\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_55><label for=cbx_55> Lukk fanen <strong>HTML</strong> ved å trykke på den.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_56><label for=cbx_56> Øverst i nettleseren din står adressen til siden.</label></p> <figure><img src='+l(3607)+" alt=\"\"></figure> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_57><label for=cbx_57> Adressen du trenger å taste inn på mobilen er det <em>før</em> <code>/edit?js,output</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_58><label for=cbx_58> I eksempelet over er adressen <code>jsbin.com/dutebe</code>.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_59><label for=cbx_59> Tast <em>din</em> adresse inn på mobiltelefonen.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_60><label for=cbx_60> Spill!</label></p> </li> </ul> </section> </section> <section class=activity id=steg-8-begrense-tiden> <h1 class=activity id=steg-8-begrense-tiden>Steg 8: Begrense tiden</h1> <p>Akkurat nå er det ubegrenset tid i spillet. La oss legge til en nedtelling av tid, slik at man kan konkurrere om hvem som klarer flest klikk på 10 sekunder.</p> <section class=check id=sjekkliste-9> <h2 class=check id=sjekkliste-9>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_61><label for=cbx_61> Legg til koden for nedtelling i bunnen av programmet.</label></p> <pre><code class=js><span class=hljs-comment>/**\n * Nedtelling - En linje som viser at tiden renner ut.\n *\n * Bruk:\n *   var nedtelling = Nedtelling(slutt);  // funksjonen `slutt` kjøres når tiden er utløpt\n *   nedtelling.tellNed(10);  // teller ned 10 sekunder\n *\n */</span>\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Nedtelling</span> (<span class=hljs-params>ferdig</span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'div'</span>);\n  \n  <span class=hljs-comment>// CSSen til elementet \"el\"</span>\n  el.style.position = <span class=hljs-string>'fixed'</span>;\n  el.style.left = <span class=hljs-string>'0'</span>;\n  el.style.bottom = <span class=hljs-string>'0'</span>;\n  el.style.height = <span class=hljs-string>'100%'</span>;\n  el.style.width = <span class=hljs-string>'3px'</span>;\n  el.style.backgroundColor = <span class=hljs-string>'red'</span>;\n  <span class=hljs-built_in>document</span>.body.appendChild(el);\n\n  <span class=hljs-comment>// Regner ut prosenten av hvor lang tid det er igjen</span>\n  <span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>prosent</span> (<span class=hljs-params>slutt, tid</span>) </span>{\n    <span class=hljs-keyword>return</span> (slutt - <span class=hljs-built_in>Date</span>.now()) / tid / <span class=hljs-number>10</span>;\n  }\n  \n  <span class=hljs-comment>// Funksjon som teller ned og stopper når den har kommet til null</span>\n  el.tellNed = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params>tid</span>) </span>{\n    <span class=hljs-keyword>var</span> slutt = <span class=hljs-built_in>Date</span>.now() + tid * <span class=hljs-number>1000</span>;\n    <span class=hljs-keyword>var</span> intervall = setInterval(tegn, <span class=hljs-number>20</span>);\n    \n    <span class=hljs-comment>// Tegner streken på venstre side til tiden er ute</span>\n    <span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>tegn</span> (<span class=hljs-params></span>) </span>{\n      <span class=hljs-keyword>var</span> p = prosent(slutt, tid);\n      <span class=hljs-keyword>if</span> (p &lt; <span class=hljs-number>0</span>) {\n        el.style.height = <span class=hljs-string>'0%'</span>;\n        clearInterval(intervall);\n        ferdig();\n      }\n      el.style.height = p + <span class=hljs-string>'%'</span>;\n    }\n  }\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_62><label for=cbx_62> I toppen starter vi nedtellingen.</label></p> <pre><code class=js><span class=hljs-keyword>var</span> nedtelling = Nedtelling();\nnedtelling.tellNed(<span class=hljs-number>10</span>);\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_63><label for=cbx_63> Dette lager en nedtelling på 10 sekunder.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_64><label for=cbx_64> Hvis du trykker på <button>Run with JS</button> ser du nedtellingen, men ingenting skjer når tiden er ute.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_65><label for=cbx_65> Lag funksjonen <code>stopp</code> som forteller hva som skal skje når tiden er ute.</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>stopp</span>(<span class=hljs-params></span>) </span>{\n  ball.skjul();\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_66><label for=cbx_66> Vi har ikke laget funksjonen <code>ball.skjul</code> enda. Vi trenger <code>ball.vis</code> også.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_67><label for=cbx_67> Lag <code>ball.skjul</code> og <code>ball.vis</code> inni <code>function Ball</code>.</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Ball</span>(<span class=hljs-params></span>) </span>{\n  ...\n  el.skjul = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    el.style.display = <span class=hljs-string>'none'</span>;\n  };\n  el.vis = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    el.style.display = <span class=hljs-string>''</span>;\n  };\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_68><label for=cbx_68> Nå kan vi fortelle nedtellingen at den skal kjøre <code>stopp()</code> når tiden er ute.</label></p> <pre><code class=js><span class=hljs-keyword>var</span> nedtelling = Nedtelling(stopp);\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_69><label for=cbx_69> Forsvinner ballen når tiden er ute?</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_70><label for=cbx_70> Hvor mange poeng klarer du på mobiltelefonen innen tiden?</label></p> </li> </ul> </section> <section class=protip id=tips-7> <h2 class=protip id=tips-7>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/tukiwu/1/edit?js,output>fasiten så langt</a>.</p> </section> </section> <section class=activity id=steg-9-omstarte-spillet> <h1 class=activity id=steg-9-omstarte-spillet>Steg 9: Omstarte spillet</h1> <p>Så langt kan spillet omstartes ved å oppdatere nettleseren. Er det ikke stiligere med en knapp som starter spillet?</p> <section class=check id=sjekkliste-10> <h2 class=check id=sjekkliste-10>Sjekkliste</h2> <ul class=task-list> <li class=task-list-item> <p><input type=checkbox id=cbx_71><label for=cbx_71> Lag en funksjon <code>start</code>.</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>start</span>(<span class=hljs-params></span>) </span>{\n\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_72><label for=cbx_72> Funksjonen skal bestemme hva som skjer når spillet skal starte. Vi må nullstille poengsummen, vise nedtellingen og vise ballen.</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>start</span>(<span class=hljs-params></span>) </span>{\n  poeng.nullstill();\n  nedtelling.tellNed(<span class=hljs-number>10</span>);\n  ball.vis();\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_73><label for=cbx_73> <code>start</code> skal kjøres hver gang en knapp klikkes, så vi trenger en knapp.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_74><label for=cbx_74> Legg til koden for knappen i bunnen av programmet.</label></p> <pre><code class=js><span class=hljs-comment>/**\n * En knapp som ligger midt på siden.\n *\n * Bruk:\n *   var knapp = Knapp('trykk på meg');  // lager en knapp som ligger midt på siden\n *   knapp.vis();  // viser knappen\n *   knapp.skjul();  // skjuler knappen\n */</span>\n<span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>Knapp</span>(<span class=hljs-params>tekst</span>) </span>{\n  <span class=hljs-keyword>var</span> el = <span class=hljs-built_in>document</span>.createElement(<span class=hljs-string>'button'</span>);\n  el.style.display = <span class=hljs-string>'none'</span>;\n  el.innerText = tekst;\n  el.style.position = <span class=hljs-string>'fixed'</span>;\n  el.style.top = <span class=hljs-string>'50%'</span>;\n  el.style.left = <span class=hljs-string>'50%'</span>;\n  el.style.padding = <span class=hljs-string>'20px'</span>;\n  el.style.border = <span class=hljs-string>'solid 1px'</span>;\n  <span class=hljs-built_in>document</span>.body.appendChild(el);\n\n  el.skjul = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    el.style.display = <span class=hljs-string>'none'</span>;\n  };\n  el.vis = <span class=hljs-function><span class=hljs-keyword>function</span> (<span class=hljs-params></span>) </span>{\n    el.style.display = <span class=hljs-string>''</span>;\n    <span class=hljs-comment>// plasser akkurat på midten</span>\n    <span class=hljs-comment>// midten av skjermen er 50% minus halvparten av størrelsen til knappen</span>\n    <span class=hljs-keyword>var</span> w = el.offsetWidth / <span class=hljs-number>2</span>;\n    <span class=hljs-keyword>var</span> h = el.offsetHeight / <span class=hljs-number>2</span>;\n    el.style.marginLeft = <span class=hljs-string>'-'</span> + w + <span class=hljs-string>'px'</span>;\n    el.style.marginTop = <span class=hljs-string>'-'</span> + h + <span class=hljs-string>'px'</span>;\n  };\n\n  <span class=hljs-keyword>return</span> el;\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_75><label for=cbx_75> I toppen legger vi til knappen.</label></p> <pre><code class=js><span class=hljs-keyword>var</span> knapp = Knapp(<span class=hljs-string>'Prøv en gang til'</span>);\nknapp.onclick = start;\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_76><label for=cbx_76> <code>knapp.onclick</code> bestemmer hva som skal skje når knappen klikkes.</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_77><label for=cbx_77> Knappen vises ikke, så vi må bestemme at den skal vises når spillet er slutt.</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>stopp</span>(<span class=hljs-params></span>) </span>{\n  ...\n  knapp.vis();\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_78><label for=cbx_78> Vises knappen når spillet er ferdig?</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_79><label for=cbx_79> Du legger kanskje merke til at vi har en bug nå? Vi må jo skjule knappen når spillet startes også!</label></p> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_80><label for=cbx_80> Skjul knappen når spillet startes.</label></p> <pre><code class=js><span class=hljs-function><span class=hljs-keyword>function</span> <span class=hljs-title>start</span>(<span class=hljs-params></span>) </span>{\n  ...\n  knapp.skjul();\n}\n</code></pre> </li> <li class=task-list-item> <p><input type=checkbox id=cbx_81><label for=cbx_81> Spillet er nå ferdig! Del adressen med dine venner og se hvem som klarer flest poeng.</label></p> </li> </ul> </section> <section class=protip id=tips-8> <h2 class=protip id=tips-8>Tips</h2> <p>Om du sitter fast, kan du se på <a href=http://jsbin.com/pozova/11/edit?js,output>fasiten</a>.</p> </section> <section class=challenge id=utfordringer> <h2 class=challenge id=utfordringer>Utfordringer</h2> <p>Her er noen utfordringer:</p> <ul class=task-list> <li class=task-list-item><input type=checkbox id=cbx_82><label for=cbx_82> Endre størrelsen på ballen, slik at spillet blir vanskeligere.</label></li> <li class=task-list-item><input type=checkbox id=cbx_83><label for=cbx_83> Endre hvor lang tid man har på seg.</label></li> <li class=task-list-item><input type=checkbox id=cbx_84><label for=cbx_84> Endre fargen på ballen.</label></li> <li class=task-list-item><input type=checkbox id=cbx_85><label for=cbx_85> Øk poengsummen med 1000 istedenfor 100.</label></li> <li class=task-list-item><input type=checkbox id=cbx_86><label for=cbx_86> Klarer du å få ballen til å endre til forskjellig størrelse hver gang den kommer til syne?</label></li> <li class=task-list-item><input type=checkbox id=cbx_87><label for=cbx_87> Klarer du å få frem flere enn én ball?</label></li> </ul> </section> </section> ";
},3607:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/adresse.62359f.png"},3608:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/faner.6b8fe3.png"},3609:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/firkantet_ball.0a77c0.png"},3610:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/poeng.8bb15e.gif"},3611:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/prosent1.8cb52d.png"},3612:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/prosent2.f517bf.png"},3613:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/tilfeldig.b1ba11.png"},3614:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/tilfeldig_plassering.6dfc57.gif"},3615:function(s,e,l){s.exports=l.p+"_/oppgaver/src/web/trykkomania/trykkomania.66d448.gif"}});