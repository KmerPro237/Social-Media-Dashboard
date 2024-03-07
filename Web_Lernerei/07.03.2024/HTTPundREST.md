## HTTP und REST Konzepten

### Welche Rolle spielen HTTP-Methoden (GET, POST, PUT, DELETE) in einer RESTful API und wie werden sie verwendet?

Die HTTP-Methoden (GET, POST, PUT, DELETE) spielen eine zentrale Rolle in einer RESTful API, indem sie die verschiedenen Aktionen oder Operationen definieren, die auf Ressourcen angewendet werden können. Hier ist eine Erklärung für jede Methode:

1. **GET:**
   - **Verwendung:** Lesen von Ressourcendaten oder Durchführung von Abfragen.
   - **Beispiel:** Abrufen von Produktinformationen über `/products/123`.

2. **POST:**
   - **Verwendung:** Erstellen einer neuen Ressource oder Ausführen von Aktionen, die eine Änderung auf dem Server bewirken.
   - **Beispiel:** Hinzufügen eines neuen Produkts zum Warenkorb über `/cart/items`.

3. **PUT:**
   - **Verwendung:** Aktualisieren einer vorhandenen Ressource, wobei die gesamte Ressource durch die neue Daten ersetzt wird.
   - **Beispiel:** Aktualisieren von Produktinformationen über `/products/123`.

4. **PATCH:**
   - **Verwendung:** Aktualisieren einer vorhandenen Ressource, wobei nur bestimmte Teile der Ressource geändert werden.
   - **Beispiel:** Teilaktualisierung von Produktinformationen über `/products/123`.

5. **DELETE:**
   - **Verwendung:** Löschen einer vorhandenen Ressource.
   - **Beispiel:** Löschen eines Produkts über `/products/123`.

Diese Methoden entsprechen den CRUD-Operationen (Create, Read, Update, Delete) und repräsentieren die grundlegenden Operationen, die auf Ressourcen in einer RESTful API angewendet werden können. Die Methoden werden mit den URIs der Ressourcen kombiniert, um die gewünschten Aktionen auszuführen.

Beispiel einer RESTful API-Anwendung:
- **GET:** `GET /products` - Abrufen aller Produkte.
- **POST:** `POST /products` - Erstellen eines neuen Produkts.
- **PUT:** `PUT /products/123` - Vollständige Aktualisierung von Produkt 123.
- **PATCH:** `PATCH /products/123` - Teilaktualisierung von Produkt 123.
- **DELETE:** `DELETE /products/123` - Löschen von Produkt 123.

Die Verwendung von HTTP-Methoden in einer RESTful API folgt dem REST-Prinzip, bei dem Ressourcen über URIs identifiziert werden und die Aktionen über die HTTP-Methoden ausgeführt werden.


