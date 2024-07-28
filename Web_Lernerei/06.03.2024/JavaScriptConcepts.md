## Some JS Concepts

### JS push vs shift functions/methods

`push` und `shift` sind zwei Methoden, die in JavaScript mit Arrays verwendet werden. Hier sind ihre grundlegenden Funktionen:

1. **`push`:**
   - Die `push`-Methode fügt ein oder mehrere Elemente am Ende eines Arrays hinzu.
   - Der Rückgabewert ist die neue Länge des Arrays.
   - Beispiel:

     ```javascript
     const fruits = ['apple', 'banana'];
     const newLength = fruits.push('orange', 'grape');
     console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
     console.log(newLength); // Output: 4
     ```

2. **`shift`:**
   - Die `shift`-Methode entfernt das erste Element aus einem Array und verschiebt alle nachfolgenden Elemente einen Index nach vorne.
   - Der Rückgabewert ist das entfernte Element.
   - Beispiel:

     ```javascript
     const fruits = ['apple', 'banana', 'orange', 'grape'];
     const removedElement = fruits.shift();
     console.log(fruits); // Output: ['banana', 'orange', 'grape']
     console.log(removedElement); // Output: 'apple'
     ```

**Unterschiede:**

- `push` fügt Elemente am Ende hinzu, während `shift` das erste Element entfernt.
- `push` gibt die neue Länge des Arrays zurück, während `shift` das entfernte Element zurückgibt.
- Beide Methoden ändern das ursprüngliche Array.

**Wann zu verwenden:**

- Verwende `push`, wenn du Elemente am Ende des Arrays hinzufügen möchtest.
- Verwende `shift`, wenn du das erste Element aus dem Array entfernen möchtest.

Die Verwendung dieser Methoden hängt von den spezifischen Anforderungen deines Codes ab.
