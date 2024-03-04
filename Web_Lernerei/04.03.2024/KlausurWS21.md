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

