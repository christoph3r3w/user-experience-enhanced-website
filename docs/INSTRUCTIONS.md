# Enhanced Website

Ontwerp en maak een website voor een opdrachtgever waarbij je de website verrijkt volgens het principe van progressive enhancement

## Context
Deze leertaak hoort bij sprint 10 "User Experience". Dit is een leertaak die je individueel of in een team uitvoert voor een opdrachtgever.

In het college S10W1-01-Sprintplanning-User-Experience en de workshop S10W1-03-Layout-Shift wordt de opdracht en de werkwijze uitgelegd.


## Doel van deze opdracht

Je leert hoe je een interactieve website kan ontwerpen en maken die je met client-side scripting kan verrijken.

Met Progressive Enhancement kun je er voor zorgen dat een website het altijd doet. 
Eerst bouw je de Core Functionality in HTML, zo nodig met server-side rendering. De content layer. Zodat je website het in de meest eenvoudige vorm goed doet.
Daarna voeg je CSS toe voor de Presentation Layer. 
Tot slot voeg je extra enhancements toe om de User Experience te verbeteren. 

## Werkwijze

Ontwerp en maak een interactieve functionaliteit voor je opdrachtgever. Hiervoor moet je data opslaan met een formulier en POST en ga je client-side de website verrijken met loading states, feedback en success states. 

Deze opdracht gaat over alle fases van de DLC [analyseren](#analyseren), [ontwerpen](#ontwerpen), [bouwen](#bouwen), [integreren](#integreren) en [testen](#testen).

## Analyseren
In de analysefase inventariseer je wat er moet gebeuren om een taak uit te voeren.

Bijvoorbeeld: grip krijgen op een taak door het inventarisatie van bestaande informatie, analyseren van de feedback die je in de sprint review hebt gekregen, planning, maken van een todo lijst en bepalen van definitions of done.

### Sprintplanning
1. Lees de instructies van deze leertaak zorgvuldig door
2. Bekijk de verschillende fases van de DLC en wat je per fase gaat doen
3. Bekijk de [planning van sprint 10](https://programma.fdnd.nl/data-driven-web/user-experience) en wat je per week gaat doen
4. Bespreek met het projectteam wat je aan werk verwacht en maak aantekeningen. (wat komt je bekend voor, wat heb je al vaker gedaan of wat lijkt je lastig)
5. Bedenk en schets met je projectteam hoe je User Generated Content client-side kan posten met een fetch. 



## Ontwerpen
In de ontwerpfase bedenk en schets je eerst wat je gaat maken. 

### Wireflow
Teken de interactie voor de _user story_ in een wireflow. Bedenk en schets verschillende states voor het client-side versturen van data, zoals een loading state, error state en succes state.

### UML Diagram
Schets op basis van de wireflow een UML diagram met pseudo-code voor het client-side scripting, en de routing en pseudo-code voor de POST data en control-flow van de node-code. 

### Bronnen ontwerpfase
* [Wireframing User Flow with Wireflows](https://balsamiq.com/learn/articles/wireflows/)
* [What is a UML diagram?](https://miro.com/diagramming/what-is-a-uml-diagram/)
* [The Form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
* [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)





### Bouwen
In de bouwfase realiseer je de beslissingen uit de ontwerpfase. 

### Inrichten ontwikkelomgeving
1. Fork deze leertaak en clone het naar je systeem.
2. Installeer de Node ontwikkelomgeving en installeer de packages die je nodig hebt. Maak de files en folders aan die je nodig hebt op de Node server.
3. Refactor de code uit sprint 8 en 9 voordat je verder gaat bouwen. Kopieer de code uit voorgaande sprints en refactor je Node en Express, de HTML en CSS:
 
#### Node & Express (server.js)
- Volgorde van routes is hetzelfde als de sitemap
- GET & POST routes van dezelfde route staan bij elkaar

#### HTML (EJS)
- Volgorde van de HTML elementen is hetzelfde als de pagina structuur
- Orden de HTML van groot-naar-klein, eerst de container elementen en daarna de geneste elementen

#### CSS
- Volgorde van de CSS komt overeen met de volgorde van de HTML
- Orden de CSS is van generiek-naar-specifiek, generieke styling staat bovenaan


#### Progressive Enhancement
Je werkt volgens het principe van Progressive Enhancement:
1. Eerst bouw je de core functionality van je website in HTML, met behulp van formulieren en NodeJS, voor het server-side afhandelen van het posten van data. (Content layer)
2. Daarna voeg je CSS toe voor feedback voor de gebruiker en om de huisstijl toe te passen. (Presentation layer)
3. Daarna voeg je client-side JS toe om de User Experience te verbeteren. (Client-side scripting)

#### Performance
Je breidt deze sprint je code uit verschillende technieken om ervoor te zorgen dat de website een goede  Performance heeft, zoals het voorkomen van layout shifts, toepassen van perceived performance en loading hints aan de browser in HTML, en het toepassen van responsive images.


#### Bronnen bouwfase

* [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Frontend Performance Checklist van Smashing Magazine](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/).
- [Frontend Performance Checklist - Assets Optimizations](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#assets-optimizations)
- [Frontend Performance Checklist - Delivery Optimizations](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#delivery-optimizations)



### Integreren
In de integratiefase voer je de aanpassingen door zodat iedereen ze kan zien en er op verder kan bouwen. 

Als je helemaal klaar bent en alles lokaal werkt ga je verder met het publiceren van jouw project op internet. Omdat we met Node werken is dit iets ingewikkelder dan voorheen, er moet namelijk een serveromgeving opgestart worden. Wij gebruiken cyclic.sh als hostingpartij maar je mag natuurlijk je eigen voorkeur volgen als die anders is.

### Testen
In de testfase controleer je of jouw aanpassingen werken zoals bedoeld.

1. Test de performance van jouw project, maak issues aan en documenteer je bevindingen in de wiki.
2. Test jouw project op meerdere devices en browsers, maak issues aan  en documenteer je bevindingen in de wiki.
3. Test de toegankelijkheid van jouw project, maak issues aan  en documenteer je bevindingen in de wiki.
4. Test de bruikbaarheid van jouw project, maak issues aan  en documenteer je bevindingen in de wiki.


## Criteria
*Definitions of done*

Deze opdracht is done als:

Je hebt een website ontworpen en gemaakt met Node, Express en EJS en een REST API
- [ ] Je website is online gepubliceerd
- [ ] Je hebt je proces bijgehouden in de Wiki
- [ ] Je toont aan dat je in de analysefase verschillende methoden en technieken hebt ingezet om te inventariseren wat er moet gebeuren
- [ ] Je toont aan dat je in de ontwerpfase verschillende methoden en technieken hebt ingezet die ervoor zorgen dat je precies weet wat je moet bouwen
- [ ] Je toont aan dat je in de bouwfase verschillende server-side en client-side methoden en technieken hebt ingezet om het ontwerp te realiseren
- [ ] Je toont aan dat je in de testfase verschillende methoden en technieken hebt ingezet om te testen of jouw website voldoet aan standaarden en gebruiksvriendelijk is
- [ ] Je hebt client-side Javascript gebruikt om de interface te verrijken
 
