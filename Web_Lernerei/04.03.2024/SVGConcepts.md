## SVG Concepts

### Wozu wird eine viewBox verwendet? (SVG)

Die `viewBox` ist ein Attribut in SVG (Scalable Vector Graphics), das dazu dient, den sichtbaren Bereich eines SVG-Grafikbereichs festzulegen. Es definiert, welcher Teil des SVG-Inhalts im Anzeigebereich erscheinen soll. Die `viewBox` ist besonders nützlich, wenn Sie skalierbare Grafiken erstellen, da sie es ermöglicht, den sichtbaren Bereich und die Koordinaten im Koordinatensystem genau zu steuern.

Das `viewBox`-Attribut hat das folgende Format:

```html
<svg viewBox="min-x min-y width height">
   <!-- SVG-Inhalt hier -->
</svg>
```

- `min-x` und `min-y` sind die minimalen x- und y-Koordinaten des sichtbaren Bereichs.
- `width` und `height` sind die Breite und Höhe des sichtbaren Bereichs.

Hier sind einige Anwendungsfälle und Gründe, warum die `viewBox` verwendet wird:

1. **Skalierbarkeit:** Die `viewBox` ermöglicht es, SVG-Grafiken skalierbar zu machen, da Sie den sichtbaren Bereich definieren können, unabhängig von der tatsächlichen Größe des SVG-Elements im HTML-Dokument. Dies ist besonders wichtig, wenn Sie responsive oder skalierbare Grafiken erstellen möchten.

2. **Ausschnitt erstellen:** Mit der `viewBox` können Sie einen Ausschnitt aus einer umfassenderen Grafik erstellen, indem Sie den sichtbaren Bereich definieren. Dadurch können Sie nur einen Teil der Grafik anzeigen und den Rest ausblenden.

3. **Koordinatensystem steuern:** Sie ermöglicht es Ihnen, das Koordinatensystem innerhalb des SVG-Grafikbereichs zu steuern. Dies ist wichtig, wenn Sie genau festlegen möchten, welche Koordinaten im Anzeigebereich liegen.

Ein Beispiel:

```html
<svg viewBox="0 0 100 100" width="200" height="200">
   <!-- Ein Quadrat mit den Koordinaten (10,10) und der Breite/Höhe 80 -->
   <rect x="10" y="10" width="80" height="80" fill="blue" />
</svg>
```

In diesem Beispiel wird die `viewBox` auf `0 0 100 100` gesetzt, was bedeutet, dass der sichtbare Bereich von (0,0) bis (100,100) geht. Das Quadrat mit den Koordinaten (10,10) und der Breite/Höhe 80 wird innerhalb dieses Bereichs dargestellt. Das SVG-Element selbst hat jedoch eine Breite und Höhe von 200x200, was die Skalierbarkeit ermöglicht.

