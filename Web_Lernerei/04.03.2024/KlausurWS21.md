### 1) Welche möglichen Längen (in Bytes) kann die Codierung eines Zeichens in UTF-8 haben? (Unicode)

  Die UTF-8-Codierung kann ein einzelnes Zeichen mit unterschiedlichen Byte-Längen darstellen, abhängig von dem zugrunde liegenden Unicode-Zeichen. Hier sind die möglichen Längen in Bytes für die UTF-8-Codierung:
  
  - 1 Byte: Für Zeichen im ASCII-Bereich (U+0000 bis U+007F) entspricht die UTF-8-Codierung der ASCII-Codierung.
  
  - 2 Bytes: Für Zeichen im Bereich U+0080 bis U+07FF.
  
  - 3 Bytes: Für Zeichen im Bereich U+0800 bis U+FFFF.
  
  - 4 Bytes: Für Zeichen im Bereich U+10000 bis U+10FFFF.
  
  Die UTF-8-Codierung ermöglicht eine effiziente Darstellung von Zeichen aus verschiedenen Bereichen des Unicode-Zeichensatzes und ist daher weit verbreitet in der internationalen Zeichenkodierung.

### 2) Welche zwei Elemente werden bei ungeordneten Listen verwendet?

  Bei ungeordneten Listen in HTML werden in der Regel zwei Hauptelemente verwendet: `<ul>` (Unordered List) und `<li>` (List Item).
  
  1. **`<ul>` (Unordered List)**: Das `<ul>`-Element wird verwendet, um den Container für die gesamte ungeordnete Liste zu definieren. Innerhalb dieses Elements werden die einzelnen Listenelemente (`<li>`) platziert.
  
     Beispiel:
  
     ```html
     <ul>
         <li>Element 1</li>
         <li>Element 2</li>
         <li>Element 3</li>
     </ul>
     ```
  
  2. **`<li>` (List Item)**: Das `<li>`-Element wird innerhalb des `<ul>`-Elements verwendet, um jedes einzelne Element der Liste zu repräsentieren. Jedes `<li>`-Element enthält den eigentlichen Text oder Inhalt des Listenelements.
  
     Beispiel:
  
     ```html
     <ul>
         <li>Erstes Element</li>
         <li>Zweites Element</li>
         <li>Drittes Element</li>
     </ul>
     ```
  
  Zusammen ermöglichen diese beiden Elemente die Definition und Darstellung einer ungeordneten Liste in HTML. Ungeordnete Listen werden standardmäßig mit Bulletpunkten dargestellt, aber das visuelle Erscheinungsbild kann über CSS angepasst werden.

### Was ist ein shadow host? (Webkomponenten)

In Bezug auf Webkomponenten bezieht sich der Begriff "Shadow Host" auf das Element, das die Shadow DOM (Document Object Model) einschließt. Das Shadow DOM ist ein Teil des Webkomponentenstandards, der es ermöglicht, eingekapselte DOM-Bäume und Styles zu erstellen.

Der Shadow Host ist das Element, auf das die Shadow DOM-Anwendung angewendet wird. Es ist das "Wirtselement" oder das "Container-Element", in dem der Shadow DOM erstellt und gerendert wird. Das Shadow Host selbst ist ein reguläres DOM-Element, auf das Sie mit JavaScript, CSS und anderen Techniken zugreifen können.

Um den Shadow DOM auf einem Element anzuwenden, wird die `attachShadow`-Methode verwendet. Hier ist ein einfaches Beispiel:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shadow DOM Beispiel</title>
</head>
<body>
    <div id="myShadowHost">Shadow Host</div>
    <script>
        const shadowHost = document.getElementById('myShadowHost');
        const shadowRoot = shadowHost.attachShadow({mode: 'open'});

        // Hier können Sie dem Shadow DOM Elemente und Styles hinzufügen
        const shadowElement = document.createElement('p');
        shadowElement.textContent = 'Hello from Shadow DOM!';
        shadowRoot.appendChild(shadowElement);

        const style = document.createElement('style');
        style.textContent = 'p { color: blue; }';
        shadowRoot.appendChild(style);
    </script>
</body>
</html>
```

In diesem Beispiel wird dem `div`-Element mit der ID "myShadowHost" ein Shadow DOM angefügt. Der `shadowRoot` ist der DOM-Baum des Shadow DOM. Alles, was innerhalb des Shadow DOM hinzugefügt wird, bleibt vom Rest des Dokuments isoliert. Dies ermöglicht die Schaffung von wiederverwendbaren und isolierten Webkomponenten.

Die `mode: 'open'`-Option in der `attachShadow`-Methode gibt an, dass der Shadow DOM von außen zugänglich ist. Dies ermöglicht es, auf den `shadowRoot` des Shadow Hosts zuzugreifen und mit dem Shadow DOM zu interagieren.

### 3) Ein XML-Dokument enthält Informationen zu Seminar-Teilnehmern. Jeder Teilnehmer kann bei der Anmeldung bis zu drei Wunschthemen aus einer Liste auswählen und diesen Wünschen Prioritäten (1, 2 oder 3) zuweisen. Das XML-Element "teilnehmer" kann beliebig viele Kindelemente "stud" haben. Das "stud"-Element hat als Kindelemente "vorname" und "nachname", gefolgt von ein, zwei oder drei "wunsch"-Elementen. Das Attribut "matrikel" von "stud" enthält die Matrikelnummer des Studierenden und besteht aus dem Zeichen "m" gefolgt von 7 Ziffern. Das "wunsch"-Element ist ein leeres Element mit den Attributen "prio" für die Priorität (1, 2 oder 3) und "thema" für das ausgewählte Thema. Es wird darum gebeten, eine (Teil-)DTD für diese XML-Elemente und Attribute zu erstellen.

````xml
<!DOCTYPE seminar [
  <!ELEMENT seminar (themen,teilnehmer)>
  <!ATTLIST seminar name CDATA #REQUIRED>
  <!ELEMENT themen (thema+)>
  <!ELEMENT thema (#PCDATA)>
  <!ATTLIST thema nr ID #REQUIRED>
  <!-- Beginn der Lösung von Aufgabe 2 -->
  <!ELEMENT teilnehmer (stud*)>
  <!ELEMENT stud (vorname, nachname, wunsch, wunsch?, wunsch?)>
  <!ATTLIST stud matrikel ID #REQUIRED>
  <!ELEMENT wunsch EMPTY>
  <!ATTLIST wunsch
    prio (1|2|3) #REQUIRED
    thema CDATA #REQUIRED
  >
  <!-- Ende der Lösung von Aufgabe 2 -->
  <!ELEMENT vorname (#PCDATA)>
  <!ELEMENT nachname (#PCDATA)>
]>
````

### 4) Gegeben sei das untenstehende body-Element einer HTML-Datei. 
````html
<body id="1">
 <p id="2">Brettspiele</p>
 <ul id="3">
 <li id="4">
 <p id="5">Schach</p>
 <ul id="6">
 <li id="7">Schnellschach</li>
 <li id="8">
 <p id="9">Blitzschach</p>
 <ul id="10">
 <li id="11">3 Minuten</li>
 <li id="12">5 Minuten</li>
 </ul>
 </li>
 <li id="13">Blindschach</li>
 </ul>
 </li>
 <li id="14">Go</li>
 <li id="15">Gobang</li>
 <li id="16">
 <p id="17">Dame</p>
 <ol id="18">
 <li id="19">normale Dame</li>
 <li id="20">Laskerdame</li>
 </ol>
 </li>
 </ul>
</body>
````

### a) Geben Sie unter den zwei Selektoren auf der rechten Seite die id’s der durch die Selektoren selektierten Elemente an.
- body>*>li>p: Id = 5, 17
- ul>li:nth-child(4n-1) Id = 13, 15

### b) Geben Sie je einen Selektor an, der nur das Element mit der id 7 bzw. 20 selektiert und nichts anderes. Dabei dürfen Sie nicht auf das Attribut id zugreifen.
- Selektor für 7:  body>ul>li>ul>li:first-child
- Selektor für 20: body>ul>li>ol>li:last-child

#### Beispiel Impl
````html
<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="utf-8" />
  <title>Selektoren</title>
  <style>
    * {
      color: initial;
      font-size: initial;
    }

    body>*>li>p {
      color: red;
      font-size: larger;
    }

    ul>li:nth-child(4n-1) {
      color: blue;
      font-size: larger;
    }

    body>ul>li>ul>li {
      color: green;
      font-size: larger;
    }

    body>ul>li>ol>li:last-child {
      color: orange;
      font-size: larger;
    }

  </style>
</head>

<body id="1">
  <p id="2">Brettspiele</p>
  <ul id="3">
    <li id="4">
      <p id="5">Schach</p>
      <ul id="6">
        <li id="7">Schnellschach</li>
        <li id="8">
          <p id="9">Blitzschach</p>
          <ul id="10">
            <li id="11">3 Minuten</li>
            <li id="12">5 Minuten</li>
          </ul>
        </li>
        <li id="13">Blindschach</li>
      </ul>
    </li>
    <li id="14">Go</li>
    <li id="15">Gobang</li>
    <li id="16">
      <p id="17">Dame</p>
      <ol id="18">
        <li id="19">normale Dame</li>
        <li id="20">Laskerdame</li>
      </ol>
    </li>
  </ul>
</body>

</html>
````

### 5) Geben Sie den Wert der vier Konstanten r1,r2,r3,r4 an.
````javascript
  const f = (g, x) => g(g(g(x)))
  const h = x => x + 5
  const r1 = f(h, 1)
  const cities = ['Berlin', 'Hamburg', 'Trier', 'Saarlouis', 'Bamberg']
  const r2 = cities.slice(1, 3).map(v => v.length)
  const r3 = cities.filter(v => /a[b-n]/.test(v)).reduce((r, v) => r + v.length, 0)
  cities.pop()
  cities.shift()
  const r4 = cities.map(v => v[0]).join('=')
````

Lassen Sie uns den Code schrittweise durchgehen und die Werte der Konstanten r1, r2, r3 und r4 bestimmen:

### Code:

```javascript
const f = (g, x) => g(g(g(x)));
const h = x => x + 5;
const r1 = f(h, 1);

const cities = ['Berlin', 'Hamburg', 'Trier', 'Saarlouis', 'Bamberg'];
const r2 = cities.slice(1, 3).map(v => v.length);
const r3 = cities.filter(v => /a[b-n]/.test(v)).reduce((r, v) => r + v.length, 0);

cities.pop();
cities.shift();
const r4 = cities.map(v => v[0]).join('=');
```

### Schritt-für-Schritt-Erklärung:

1. **r1:**
   - Die Funktion `f` wird mit den Argumenten `h` und `1` aufgerufen. Die Funktion `f` wendet die Funktion `h` dreimal auf `1` an.
   - `h(x)` addiert 5 zu `x`. Also ist `h(1) = 1 + 5 = 6`.
   - Daher ist `f(h, 1) = h(h(h(1))) = h(h(6)) = h(11) = 11 + 5 = 16`.
   - Der Wert von `r1` ist also `16`.

2. **r2:**
   - `cities.slice(1, 3)` wählt die Elemente mit den Indizes 1 und 2 aus (`['Hamburg', 'Trier']`).
   - `map(v => v.length)` wendet die Funktion `length` auf jedes Element an.
   - Also ist `r2 = [7, 5]`.

3. **r3:**
   - `cities.filter(v => /a[b-n]/.test(v))` filtert die Städte, die den regulären Ausdruck `/a[b-n]/` erfüllen (enthält 'a' gefolgt von einem Buchstaben zwischen 'b' und 'n').
   - Das ergibt `['Hamburg', 'Bamberg']`.
   - `reduce((r, v) => r + v.length, 0)` summiert die Längen dieser Städte. Also ist `r3 = 7 + 7 = 14`.

4. **r4:**
   - `cities.pop()` entfernt das letzte Element aus dem Array ('Bamberg').
   - `cities.shift()` entfernt das erste Element aus dem Array ('Berlin').
   - Das Array ist jetzt `['Hamburg', 'Trier', 'Saarlouis']`.
   - `map(v => v[0])` wählt den ersten Buchstaben jeder Stadt aus, was `['H', 'T', 'S']` ergibt.
   - `join('=')` verbindet die Buchstaben mit '='. Daher ist `r4 = 'H=T=S'`.

Zusammengefasst:
- `r1 = 16`
- `r2 = [7, 5]`
- `r3 = 23`
- `r4 = 'H=T=S'`

### Aufgabe6 gelöst SVG Komponente
![image](https://github.com/KmerPro237/Social-Media-Dashboard/assets/118595893/0cabd36a-3c23-4641-8eb3-9a6e74db7b6d)

