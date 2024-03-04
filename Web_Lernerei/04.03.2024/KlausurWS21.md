### Welche möglichen Längen (in Bytes) kann die Codierung eines Zeichens in UTF-8 haben? (Unicode)

Die UTF-8-Codierung kann ein einzelnes Zeichen mit unterschiedlichen Byte-Längen darstellen, abhängig von dem zugrunde liegenden Unicode-Zeichen. Hier sind die möglichen Längen in Bytes für die UTF-8-Codierung:

- 1 Byte: Für Zeichen im ASCII-Bereich (U+0000 bis U+007F) entspricht die UTF-8-Codierung der ASCII-Codierung.

- 2 Bytes: Für Zeichen im Bereich U+0080 bis U+07FF.

- 3 Bytes: Für Zeichen im Bereich U+0800 bis U+FFFF.

- 4 Bytes: Für Zeichen im Bereich U+10000 bis U+10FFFF.

Die UTF-8-Codierung ermöglicht eine effiziente Darstellung von Zeichen aus verschiedenen Bereichen des Unicode-Zeichensatzes und ist daher weit verbreitet in der internationalen Zeichenkodierung.
