## Javascript concepts

### Javascript primitive Datentypen

In JavaScript gibt es sieben primitive Datentypen, die grundlegende Werte repräsentieren. Hier sind die primitive Datentypen in JavaScript:

1. **Number:** Repräsentiert numerische Werte. Beispiele sind ganze Zahlen und Dezimalzahlen.

   ```javascript
   let myNumber = 42;
   let pi = 3.14;
   ```

2. **String:** Repräsentiert Zeichenketten (Text). Zeichenketten werden durch einfache ('') oder doppelte ("") Anführungszeichen erstellt.

   ```javascript
   let greeting = "Hello, World!";
   ```

3. **Boolean:** Repräsentiert Wahrheitswerte, entweder `true` oder `false`.

   ```javascript
   let isTrue = true;
   let isFalse = false;
   ```

4. **Null:** Repräsentiert die Abwesenheit eines Werts oder einen leeren Wert.

   ```javascript
   let myNull = null;
   ```

5. **Undefined:** Wird verwendet, wenn eine Variable deklariert wurde, aber keinen Wert hat.

   ```javascript
   let myUndefined;
   ```

6. **Symbol:** Eine eindeutige und unveränderliche Datenart, die in bestimmten Fällen nützlich ist, beispielsweise bei der Definition von Objekteigenschaften.

   ```javascript
   const mySymbol = Symbol("mySymbol");
   ```

7. **BigInt:** Repräsentiert ganze Zahlen beliebiger Länge. Es wird durch das Hinzufügen eines "n" oder "N" am Ende einer Zahl erstellt.

   ```javascript
   const bigNumber = 1234567890123456789012345678901234567890n;
   ```

Diese primitive Datentypen sind unveränderlich (immutable), was bedeutet, dass Werte dieser Typen nicht verändert werden können. Wenn Änderungen vorgenommen werden, wird in der Regel eine neue Variable mit dem neuen Wert erstellt.

### Was ist ein Versprechen (promise) in Javascript und wird es angewandt?

Ein Versprechen (Promise) ist ein Konzept in JavaScript, das verwendet wird, um asynchrone Operationen zu handhaben. Es repräsentiert den erfolgreichen Abschluss oder das Scheitern einer asynchronen Aufgabe und ermöglicht die Verkettung von Aktionen, die nach dem Abschluss der Aufgabe durchgeführt werden sollen. Promises bieten eine sauberere und effizientere Möglichkeit, mit asynchronem Code umzugehen, als es zuvor mit Callback-Funktionen allein möglich war.

Ein Promise hat drei Zustände:

1. **Pending (ausstehend):** Der Ausgangszustand, wenn das Versprechen erstellt wurde, aber noch nicht abgeschlossen ist.

2. **Fulfilled (erfüllt):** Das Versprechen wurde erfolgreich erfüllt, und der asynchrone Vorgang wurde erfolgreich abgeschlossen.

3. **Rejected (abgelehnt):** Das Versprechen wurde nicht erfüllt, und der asynchrone Vorgang ist fehlgeschlagen.

Die grundlegende Struktur eines Versprechens sieht so aus:

```javascript
const myPromise = new Promise((resolve, reject) => {
    // Asynchrone Operationen werden hier durchgeführt
    // Wenn erfolgreich, rufe resolve mit dem Ergebnis auf
    // Wenn fehlgeschlagen, rufe reject mit dem Fehler auf
});
```

Die Anwendung von Versprechens in JavaScript besteht darin, asynchrone Operationen zu handhaben und sicherzustellen, dass der Code lesbar und gut wartbar bleibt. Hier sind einige typische Anwendungen von Versprechens:

1. **Asynchrone Daten laden:** Versprechens werden häufig verwendet, um Daten asynchron von einem Server zu laden.

    ```javascript
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            // Code zum Abrufen von Daten
            if (/* Daten erfolgreich erhalten */) {
                resolve(data);
            } else {
                reject(error);
            }
        });
    };

    fetchData()
        .then((data) => {
            // Erfolgreiche Verarbeitung der Daten
        })
        .catch((error) => {
            // Fehlerbehandlung
        });
    ```

2. **Timeouts und Intervalle:** Promises können verwendet werden, um Zeitverzögerungen oder periodische Aufgaben asynchron zu steuern.

    ```javascript
    const delay = (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    };

    delay(2000)
        .then(() => {
            // Wird nach einer Verzögerung von 2 Sekunden ausgeführt
        });
    ```

3. **Verkettung von Aktionen:** Durch die Verkettung von `.then()`- und `.catch()`-Methoden können mehrere asynchrone Operationen nacheinander ausgeführt werden.

    ```javascript
    asyncFunction1()
        .then((result1) => asyncFunction2(result1))
        .then((result2) => asyncFunction3(result2))
        .catch((error) => {
            // Fehlerbehandlung
        });
    ```

Versprechens machen asynchronen Code leichter lesbar und bieten eine klare Struktur für die Handhabung von Erfolgs- oder Fehlerfällen. Mit der Einführung von ES6 (ECMAScript 2015) und späteren JavaScript-Versionen sind Versprechens zu einem integralen Bestandteil der JavaScript-Entwicklung geworden.



