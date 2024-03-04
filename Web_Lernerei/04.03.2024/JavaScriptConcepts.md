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
