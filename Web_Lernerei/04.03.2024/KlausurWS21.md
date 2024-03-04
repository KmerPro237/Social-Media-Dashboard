### Welche möglichen Längen (in Bytes) kann die Codierung eines Zeichens in UTF-8 haben? (Unicode)

  Die UTF-8-Codierung kann ein einzelnes Zeichen mit unterschiedlichen Byte-Längen darstellen, abhängig von dem zugrunde liegenden Unicode-Zeichen. Hier sind die möglichen Längen in Bytes für die UTF-8-Codierung:
  
  - 1 Byte: Für Zeichen im ASCII-Bereich (U+0000 bis U+007F) entspricht die UTF-8-Codierung der ASCII-Codierung.
  
  - 2 Bytes: Für Zeichen im Bereich U+0080 bis U+07FF.
  
  - 3 Bytes: Für Zeichen im Bereich U+0800 bis U+FFFF.
  
  - 4 Bytes: Für Zeichen im Bereich U+10000 bis U+10FFFF.
  
  Die UTF-8-Codierung ermöglicht eine effiziente Darstellung von Zeichen aus verschiedenen Bereichen des Unicode-Zeichensatzes und ist daher weit verbreitet in der internationalen Zeichenkodierung.

### Welche zwei Elemente werden bei ungeordneten Listen verwendet?

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

