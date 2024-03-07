## JS Concepts

### JS Spread operator
Der Spread-Operator (`...`) in JavaScript wird in verschiedenen Kontexten verwendet und ermöglicht es, Elemente einer Datenstruktur (wie einem Array oder Objekt) an verschiedenen Stellen zu verteilen bzw. zu kopieren. Hier sind einige häufige Anwendungen:

### 1. **Array-Spread:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]
```
Der Spread-Operator kopiert die Elemente des ursprünglichen Arrays `arr1` und fügt sie zu einem neuen Array `arr2` hinzu.

### 2. **Funktionsargumente:**
```javascript
function exampleFunction(a, b, c) {
  console.log(a, b, c);
}

const args = [1, 2, 3];
exampleFunction(...args); // Output: 1 2 3
```
Der Spread-Operator kann in Funktionen verwendet werden, um ein Array in separate Argumente umzuwandeln.

### 3. **Objekt-Spread:**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // Output: { a: 1, b: 2, c: 3 }
```
Für Objekte wird der Spread-Operator verwendet, um die Eigenschaften eines Objekts zu kopieren oder neue Eigenschaften hinzuzufügen.

### 4. **Array-Kopieren:**
```javascript
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // Output: [1, 2, 3]
```
Der Spread-Operator wird auch verwendet, um ein Array zu kopieren, anstatt es zu referenzieren.

### 5. **Rest-Parameter:**
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```
In Funktionsparametern kann der Spread-Operator als Rest-Parameter verwendet werden, um eine variable Anzahl von Argumenten in ein Array zu sammeln.

Der Spread-Operator macht den Code lesbarer, reduziert Duplikationen und erleichtert das Arbeiten mit Arrays und Objekten.
