# CMD-Enquête-WebDev

![](./docs/header.png)


## Over CMD-Enquête-WebDev
CMD-Enquête-WebDev is een serverside gerenderde website waarbij de gebruiker een enquête over de eerste vier vakken uit de CMD minor Web Development kan invullen. Nadat de gebruiker de enquête heeft ingevuld is het mogelijk voor de gebruiker om zijn of haar antwoorden in te zien

## Table of contents

-   User Story
-   Features
-   Live demo
-   Todo's
-   Wireflow
-   Browsers getest
-   Testverslag
-   Progressive enhancement
-   License

## User Story
Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Na afloop wil ik mijn antwoorden kunnen inzien.

## Features
-   Enquête invullen
-   antwoorden visueel inzien
-   Mobiele & desktop versie

## Wireflow
 
 <p float="left">
<img src="./docs/wireflow.jpeg" width="48%" />
<img src="./docs/wireflow2.jpeg" width="48%" />
</p>

## Browsers

De enquête is in de volgende browsers getest:
-   Brave/Chrome MacOS
-   Microsoft Edge
-   Safari MacOS
-   Firefox MacOS


## Live demo

Probeer de applicatie zelf uit op: https://node-poll-bt.herokuapp.com/

## ✅ Todo's

-   Tussentijds opslaan van informatie 
-   Betere from validation

## Testverslag

Allereerst ben ik aan de slag gegaan op mijn macbook met chrome macOS als browser, ik zorgde er voor dat ik alleen  html schreef in eerste instantie. hierbij lette ik er op dat de core functies bleven werken, namelijk het invullen van de enquête. Toen dit eenmaal werkte ben ik CSS gaan toevoegen, nadat ik dit had gedaan ben ik pas aan de slag gegaan met andere devices en browsers. 

### CSS

Op oudere devices bleek dat mijn CSS niet overal even goed ondersteunt werd, zo gebruikte ik de css `:not()` selector, dit werd niet ondersteund op oudere browsers, dit heb ik opgelost door elementen op een andere manier aan te spreken, dit kostte meer regels css maar het werkt wel. Ook werd `@supports` niet ondersteunt op de windows surface, hierdoor dacht ik dat flex niet ondersteund werd waarna ik mijn pagina's ook zonder flex ben gaan positioneren. Later kwam ik er achter dat flex wel werd ondersteund en heb ik een andere property op mijn @support gezet om het toch te laten werken.

Ook is het met microsoft Edge niet mogelijk om de css selector `:valid` te gebruiken op een fieldset. ik gebruikte dit om te kijken of alles was ingevuld in een fieldset waarna het volgende stuk van de enquête geladen werd. Om dit op te lossen moest ik gaan checken of elke input wel valid was. Omdat ik veel radio buttons gebruik was dit geen handige oplossing. Daarom heb ik alsnog `@supports` gebruikt om te kijken of `fieldset:valid` ondersteund word, zo niet dan is de hele enquête in een keer zichtbaar.

### JavaScript

Toen ik mijn workarounds voor mijn css had geschreven ging ik met clientside javascript aan de gang waarvan ik nog niks had geschreven. Toen ik ging testen werkte niks meer, dit kwam omdat ik alles in javascript es6 had geschreven. oude browsers kunnen `const` en `let` niet lezen, ook worden arrow functions niet ondersteund. Il had vrij snel door dat mijn javascript om deze reden niet werktte. Door mijn arrow function om te schrijven naar es5 functions en `const` en `let` om te zetten naar `var` werkte mijn script wel. 
Daarna moest ik alleen nog mijn `forEach` functie omschrijven naar een `for` loop, de forEach functie werd namelijk ook niet ondersteund.


## Progressive enhancement

### 📄 HTML

<p float="left">
<img src="./docs/html2.png" width="24%" />
<img src="./docs/html3.png" width="24%" />
<img src="./docs/html4.png" width="24%" />
<img src="./docs/html1.png" width="24%" />
</p>

Met Alleen HTML is de applicatie goed te gebruiken. Alle velden van het formulier zijn nog steeds required en het is voor de gebruiker nog steeds mogelijk om de volledige enquête in te vullen en versturen. Qua vormgeving is het niet mooi maar toch is nog steeds heel duidelijk een visuele onderscheidt tussen de verschillende stukken op de pagina. de afbeelding in de header blijft dezelfde grote omdat ik deze vanuit de HTML een `width` en `height` attribute heb meegegeven.

### HTML + CSS

Wanneer CSS wordt aangezet wordt de huisstijl van CMD Amsterdam zichtbaar, ook wordt een deel van het formulier niet meer zichtbaar waardoor de gebruiker niet een enorm lange pagina krijgt. Radio buttons worden weg gestopt in labels zodat dit er visueel ook aantrekkelijker uit ziet. Wanneer alle inputs in een fieldset zijn ingevuld zal het volgende stuk van de enquête te voorschijn komen. Wanneer alles is ingevuld verschijnt de submit knop waarmee de enquête verstuurd kan worden.

### HTML + CSS + JS

Wanneer JavaScript aan wordt de ervaring van de gebruiker nog meer verbeterd. Aan de zijkant van de enquête verschijnen blokjes die bijhouden hoe ver je in de enquête bent. Hierdoor weet de gebruiker hoe veel deze nog moet invullen, de pagina geeft nu dus meer feedback af naar de gebruiker.

## 🔏 License

MIT