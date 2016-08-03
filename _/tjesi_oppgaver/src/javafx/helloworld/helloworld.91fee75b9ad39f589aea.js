webpackJsonp([13,262],{559:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/hello-world-app.1f4009.png"},913:function(e,s,n){e.exports={frontmatter:n(294),content:n(1516)}},1516:function(e,s,n){e.exports="<section class=intro id=introduksjon> <h1 class=intro id=introduksjon>Introduksjon</h1> <p>Formålet til denne leksjonen er å lære hvordan man får satt opp et Java-prosjekt i Eclipse og kjørt et JavaFX-program. I tillegg skal du lære litt om sammenhengen mellom JavaFX-koden og innholdet i app-vindeuet en får opp.</p> </section> <section class=activity id=steg-1-sette-opp-java-prosjekt-og-lage-app-mappe-og-app-klasse> <h1 class=activity id=steg-1-sette-opp-java-prosjekt-og-lage-app-mappe-og-app-klasse>Steg 1: Sette opp Java-prosjekt, og lage app-mappe og app-klasse</h1> <p>Eclipse strukturerer koden i såkalt prosjekter. Vanligvis har en ett Java-prosjekt for hver app en lager, men hvis en for det meste lager små app-er, så er det greit å samle dem i ett Java-prosjekt. Da blir det mindre arbeid med oppsett.</p> <p>Et prosjekt er enkelt sagt en mappe med innhold/oppsett tilpasset typen app en skal lage. Først og fremst handler det om å velge programmeringsspråk, så når du skal lage en ny app med JavaFX, så må du lage et <em>Java-prosjekt</em>. Du vil da få en mappe med flere under-mapper, og en av disse heter <code>src</code> og vil inneholde all koden din. For at de ikke skal bli for uoversiktlig, spesielt hvis du har flere app-er i samme prosjekt, så bør du så lage en Java-mappe for app-en din. Når det er gjort så kan lage Java-filen for app-en din!</p> <section class=check id=sjekkliste> <h2 class=check id=sjekkliste>Sjekkliste</h2> <ul> <li> <p>Lag et nytt Java-prosjekt ved å velge <code>File &gt; New &gt; Java Project</code> (altså <code>New &gt; Java Project</code> fra <code>File</code>-menyen). Du vil da få opp et skjema hvor du bl.a. kan fylle inn navnet på prosjektet. Skriv <code>kodeklubben</code> eller et annet passende navn. Merk at du bør holde deg til de engelske bokstavene a-z og A-Z, ellers får du lett problemer siden. De andre innstillingene lar du være.</p> <figure><img src="+n(2080)+' alt="" title="Skjema for New Java Project"/></figure> <p>I <code>Package Explorer</code>-panelet vil du se at det dukker opp en mappe med navnet du valgte. Inne mappa vil du ha en <code>src</code>-mappe og en mappe som heter <code>JRE System Library [JavaSE-1.8]</code>. <code>src</code>-mappe er der du legger koden din, mens <code>JRE System Library [JavaSE-1.8]</code> viser at prosjektet er satt for å bruke Java 8, som vi trenger for å bruke JavaFX. Skjermutklippet under viser omtrent hvordan det vil bli seende ut.</p> <figure><img src='+n(2076)+' alt="" title="Etter New Java Project"/></figure> </li> <li> <p>Lag en ny Java-<em>mappe</em> for app-en i denne leksjonen. Java kaller slike mapper for <em>pakker</em>, men du kan tenke på dem som mapper. Pass først på at du har valgt (klikket på) riktig Java-prosjekt i <code>Package Exporer</code>-panelet. Velg så <code>File &gt; New &gt; Package</code> eller ikonet som ser ut som en pakke med et pluss-tegn i hjørnet. Alternativt kan du høyre-klikke på src-mappa og velge <code>New &gt; Package</code>.</p> <p>Du vil da få opp et skjema hvor du kan skrive inn hvilken kode-mappe (<code>Source Folder</code>) som pakken skal puttes i og pakke-navnet. Kode-mappen skal være <code>kodeklubben/src</code> (eller prosjektnavnet du skrev inn tidligere etterfulgt av <code>/src</code>. Pakkenavn inneholder som regel bare små bokstaver, altså bokstaven a-z. Derfor kan du kalle mappa <code>helloworld</code>.</p> <figure><img src='+n(2079)+' alt="" title="New Java Package"/></figure> <p>Skjermutklippet under viser omtrent hvordan det vil bli seende ut.</p> <figure><img src='+n(2075)+' alt="" title="Etter New Java Package"/></figure> </li> <li> <p>Lag en ny Java-klasse (Java-filer kalles <em>klasser</em>) ved å høyre-klikke på <code>helloworld</code>-pakka du nettopp lagde og velge <code>New &gt; Class</code>.</p> <figure><img src='+n(2077)+' alt="" title="Meny for New Java Class"/></figure> <p>Du vil da få opp et skjema hvor kode-mappa og pakken allerede er fylt inn, mens navnet (<code>Name</code>) må fylles inn. Klassenavn starter alltid med stor forbokstav, og hvert delord som navnet består av, begynner også med stor forbokstav. Så når vi nå skal lage en app vi kaller Hello World-app, så blir navnet klassenavnet <code>HelloWorldApp</code>.</p> <figure><img src='+n(2078)+' alt="" title="New Java Class"/></figure> <p>Skjermutklippet under viser omtrent hvordan det vil bli seende ut.</p> <figure><img src='+n(2074)+' alt="" title="Etter New Java Class"/></figure> </li> </ul> </section> </section> <section class=activity id=steg-2-skrive-og-kjore-helloworldapp-klassen> <h1 class=activity id=steg-2-skrive-og-kjore-helloworldapp-klassen>Steg 2: Skrive og kjøre HelloWorldApp-klassen</h1> <p>En Hello World-app er ment å være den enkleste app-en en kan tenke seg som viser Hello World på skjermen. F.eks. slik som dette:</p> <figure><img src='+n(559)+' alt="" title="Hello World-appen"/></figure> <p>En slik app må inneholde følgende elementer:</p> <ul> <li> <p>Den må bygge på <code>Application</code>-klassen (i pakken <code>javafx.application</code>) ved at du skriver <code>extends Application</code> i klassedefinisjonen. Uten det, er klassen rett og slett ikke en app-klasse.</p> </li> <li> <p>Den <strong>må</strong> inneholde en metode (Java-funksjoner kalles <em>metoder</em>) kalt <code>start</code> som lager og putter skjermbilde-elementene inn i app-vinduet (som den får som argument).</p> </li> <li> <p>Den <em>kan</em> inneholde en <code>init</code>-metode som typisk brukes for å initialisere variabler i app-en. Koden under har ikke en slik metode.</p> </li> <li> <p>Oppstartsfunksjonen <code>main</code>, som kjøres når klassen din startes som et program, må kalle <code>launch</code>-metoden med klassen din som argument. Når du kjører koden vil følgende skje:</p> <ul> <li>App-en din vil bli laget. App-en vil være et <strong>HelloWorldApp</strong>-<code>objekt</code>, også kalt en <em>instans</em> av <strong>HelloWorldApp</strong>-klassen.</li> <li><code>init</code>-metoden vil bli kalt (hvis du har en, og det har ikke koden vår)</li> <li>App-vinduet vil bli laget (automatisk av JavaFX, ikke av vår kode)</li> <li>start-metoden blir kalt med app-vinduet som argument (det er derfor det står <code>(Stage primaryStage)</code> bak start-navnet)</li> </ul> </li> </ul> <p>Her er den nødvendige koden, med kommentarer:</p> <pre><code class=language-java><span class=hljs-comment>// klassen ligger i pakken helloworld, og</span>\n<span class=hljs-comment>// det må stemme med package-deklarasjonen</span>\n<span class=hljs-keyword>package</span> helloworld;\n\n<span class=hljs-comment>// med en import-setning, så slipper en å skrive hele navnet på klassene vi bruker</span>\n<span class=hljs-comment>// vi har like godt en import-setning for hver av klassene vi bruker</span>\n<span class=hljs-keyword>import</span> javafx.application.Application;\n<span class=hljs-keyword>import</span> javafx.scene.Scene;\n<span class=hljs-keyword>import</span> javafx.scene.layout.Pane;\n<span class=hljs-keyword>import</span> javafx.scene.text.Font;\n<span class=hljs-keyword>import</span> javafx.scene.text.Text;\n<span class=hljs-keyword>import</span> javafx.stage.Stage;\n\n<span class=hljs-comment>// bygg på Application-klassen med extends</span>\n<span class=hljs-comment>// det er det som gjør at vår klasse kan fungere som en JavaFX-app</span>\n<span class=hljs-keyword>public</span> <span class=hljs-class><span class=hljs-keyword>class</span> <span class=hljs-title>HelloWorldApp</span> <span class=hljs-keyword>extends</span> <span class=hljs-title>Application</span> </span>{\n\n  <span class=hljs-comment>// her er metoden som kalles med app-vinduet</span>\n  <span class=hljs-comment>// den tar inn app-vinduet som argument</span>\n  <span class=hljs-function><span class=hljs-keyword>public</span> <span class=hljs-keyword>void</span> <span class=hljs-title>start</span><span class=hljs-params>(Stage primaryStage)</span> </span>{\n    <span class=hljs-comment>// vi lager oss det grafiske tekst-objektet, av typen Text</span>\n    Text helloWorldText = <span class=hljs-keyword>new</span> Text(<span class=hljs-string>"Hello world"</span>);\n    <span class=hljs-comment>// så sier vi hvor i vindet den skal plasseres, x- og y-posisjon</span>\n    helloWorldText.setLayoutX(<span class=hljs-number>10</span>);\n    helloWorldText.setLayoutY(<span class=hljs-number>50</span>);\n    <span class=hljs-comment>// vi lager oss et font-objekt, av typen Font</span>\n    Font font = Font.font(<span class=hljs-string>"Arial"</span>, <span class=hljs-number>36</span>);\n    <span class=hljs-comment>// og setter den som teksten font</span>\n    helloWorldText.setFont(font);\n\n    <span class=hljs-comment>// vi mnå også lage et panel, av typen Pane</span>\n        Pane root = <span class=hljs-keyword>new</span> Pane();\n        <span class=hljs-comment>// vi setter ønsket størrelse, bredde og høyde</span>\n        root.setPrefWidth(<span class=hljs-number>300</span>);\n        root.setPrefHeight(<span class=hljs-number>200</span>);\n        <span class=hljs-comment>// og putter teksten inni</span>\n    root.getChildren().add(helloWorldText);\n\n    <span class=hljs-comment>// til slutt legges panelet inn i app-vinduet</span>\n        primaryStage.setScene(<span class=hljs-keyword>new</span> Scene(root));\n        <span class=hljs-comment>// og vises frem</span>\n        primaryStage.show();\n  }\n\n  <span class=hljs-comment>// dette er den egentlig oppstartsmetoden</span>\n  <span class=hljs-function><span class=hljs-keyword>public</span> <span class=hljs-keyword>static</span> <span class=hljs-keyword>void</span> <span class=hljs-title>main</span><span class=hljs-params>(String[] args)</span> </span>{\n    <span class=hljs-comment>// kall den innebygde funksjonen launch, med app-klassen vår som argument</span>\n    launch(HelloWorldApp.class, args);\n  }\n}\n</code></pre> <section class=check id=sjekkliste-2> <h2 class=check id=sjekkliste-2>Sjekkliste</h2> <ul> <li> <p>Skriv inn koden over, ved å kopiere og lime inn linjene i din egen <strong>HelloWorldApp.java</strong>-fil. Legg merke til at ulike ord får ulik farge. Innebygde Java-nøkkelord som <code>package</code>, <code>class</code>, <code>extends</code> og <code>new</code> blir lilla, variabler er brune, tekst-verdier er blå osv. Dette hjelper oss å skjønne hvordan Eclipse har forstått koden. Hvis mye av koden plutselig blir blå, så har vi kanskje glemt en &quot; som avslutter en tekst-verdi.</p> </li> <li> <figure>Kjør koden ved å høyreklikke på fila eller i editoren og velge <code>Run as &gt; Java Application</code>. Du skal da få opp følgende vindu:</figure> <figure><img src='+n(559)+' alt="" title="Hello World-appen"/></figure> </li> <li> <p>Lek litt med koden over. Prøv f.eks. å endre verdiene som styrer teksten (<code>new Text(...)</code>), plassering (<code>setLayoutX(...)</code> og <code>setLayoutY(...)</code>), skriftstypen (<code>Font.font(...)</code>), og vindusstørrelsen (<code>setPrefWidth(...)</code> og <code>setPrefHeight(...)</code>):</p> <ul> <li>Skriv inn en annen tekst, f.eks. navnet ditt.</li> <li>Endre posisjonen slik at teksten kommer lenger ned og til høyre ved å øke <code>layoutX</code>- og <code>layoutY</code>-verdiene.</li> <li>Finn en annen skriftstype du liker og se hva som skjer når du velger en kjempestor font. Hva må du endre for å unngå at toppen av teksten kuttes?</li> <li>Velg en kjempestor font og skriv en laaaaang tekst. Øk vindusstørrelsen så hele teksten fortsatt vises.</li> <li>Deklarer en variabel <strong>windowHeight</strong> med <code>int windowHeight = ...;</code> (bytt ut ... med et tall) og prøv å lage en formel som beregner y-posisjonen du setter med <code>setLayoutX(...)</code>, slik at teksten havner pent i bunnen av vinduet.</li> </ul> </li> <li> <p>Legg merke til at det er ulike måter å sette ulike verdier på:</p> <ul> <li>Teksten settes direkte når en lager <strong>Text</strong>-objektet med <code>new Text(...)</code></li> <li>De fleste verdier settes med egen metoder som begynner med <code>set</code></li> <li>Skriftstypen settes også når den lages, men den lages med funksjonen (<code>Font.font(...)</code>) og ikke med <code>new Font(...)</code>.</li> </ul> </li> </ul> </section> </section> <section class=activity id=steg-3-bruke-kode-kompletteringsfunksjonen-i-eclipse> <h1 class=activity id=steg-3-bruke-kode-kompletteringsfunksjonen-i-eclipse>Steg 3: Bruke kode-kompletteringsfunksjonen i Eclipse</h1> <p>Eclipse inneholder mange nyttige funksjoner for å gjøre koding mer effektivt. Eclipse kjenner til alt Java har av muligheter, og kan både <em>foreslå</em> kode du kan skrive og <em>rette</em> enkle feil i koden.</p> <ul> <li> <p>Eclipse holder rede på hvilke navn (på variabler, klasser og pakker) som gjelder hvor og kan foreslå alternativer basert på hva du har skrevet inn. Lag en ny linje under der skriftstypen settes med <code>setFont(...)</code>. Skriv inn begynnelsen på variablen for Text-objektet f.eks. <code>hello</code>. Så holder du nede ctrl-tasten og trykker mellomrom. Eclipse vil da vise en liste over alle navn som begynner med <strong>hello</strong>:</p> <figure><img src='+n(2072)+' alt="" title="Komplettering av navn"/></figure> </li> </ul> <p>Her ser du at Eclipse foreslår et variabelnavn (<strong>helloWorldText</strong>), et pakkenavn (<strong>helloworld</strong>) og et klassenavn (<strong>HelloWorldApp</strong>). Hvis du velger <strong>helloWorldText</strong>, så legges denne teksten inn. Denne funksjonen kalles <em>kode-komplettering</em> (eng: <em>code completion</em>) og gjør det bl.a. greit å bruke lange navn på variabler, klasser og pakker.</p> <ul> <li> <p>Eclipse vet hvilke verdier du kan sette for ulike typer grafiske objekter og kan hjelpe deg å skrive (og lære) dem. Skriv et punktum (<code>.</code>) etter <strong>helloWorldText</strong>-navnet. Eclipse vil automatisk aktivere kode-kompletteringsfunksjonen og vise en liste over alle metodene til <strong>Text</strong>-objektet. Hvis du skriver inn <code>setF</code> så vil Eclipse begrense lista til metodene som begynner med nettopp <strong>setF</strong>:</p> <figure><img src='+n(2073)+' alt="" title="Komplettering av metodenavn"/></figure> </li> </ul> <p>Der finner du bl.a. <strong>setFill</strong> og <strong>setFont</strong>. <strong>fill</strong> og <strong>font</strong> kalles <em>egenskaper</em> (eng: <em>properties</em>) og i Java setter du slike egenskaper med metoder som har <strong>set</strong> foran egenskapsnavnet.</p> <p>Argument-typen viser hva slags verdi du må gi inn. F.eks. tar <strong>setFill</strong> et argument av typen <strong>Paint</strong> (egentlig <strong>javafx.scene.paint.Paint</strong>). Velg setFill fra lista og skriv inn <code>Color.BLUE</code>. Igjen ser du at Eclipse foreslår navn tilsvarende det du har skrevet.</p> <ul> <li>Kjør app-en din igjen, så ser du effekten av kallet til setFill-metoden.</li> </ul> </section> <section id=hva-har-du-laert> <h1 id=hva-har-du-laert>Hva har du lært?</h1> <ul> <li>lage nye Java-prosjekter med <code>New &gt; Java Project</code></li> <li>lage nye Java-pakker med <code>New &gt; Package</code></li> <li>lage nye Java-klasser med <code>New &gt; Class</code></li> <li>hva en klasse må ha av kode for å bli en app-klasse</li> <li>kjøre app-klassen som en Java-applikasjone</li> <li>hvordan plassere en tekst i et vindu</li> <li>hvordan endre verdier for plassering, skriftstype, farge og vindusstørrelse</li> <li>hvordan bruke kode-kompletteringsfunksjonen</li> </ul> <p>I leksjonen <a href=../fxmllogo/fxmllogo.html>FXML-logo</a> vil du lære hvordan lage skjerminnhold med FXML og tegne med JavaFX Scene Builder.</p> </section>'},2072:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/code-completion1.7531a8.png"},2073:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/code-completion2.be9a0a.png"},2074:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/etter-new-java-class.c44068.png"},2075:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/etter-new-java-package.bebc21.png"},2076:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/etter-new-java-project.e4f2ce.png"},2077:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/new-java-class-menuitem.c8150a.png"},2078:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/new-java-class.1affd1.png"},2079:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/new-java-package.e873e5.png"},2080:function(e,s,n){e.exports=n.p+"_/tjesi_oppgaver/src/javafx/helloworld/new-java-project.8fd910.png"}});