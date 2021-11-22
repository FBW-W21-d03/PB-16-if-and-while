// Am Anfang habe ich 10 Pakete in meinem Auto.
let anzahlPakete = 10;

// Solange ich Pakete im Auto habe, liefere ich sie aus.
while (anzahlPakete > 0) {
  // Wenn ich nurnoch 5 Pakete habe, mache ich eine Pause.
  if (anzahlPakete == 5) {
    console.log("Ich mache eine Pause.");
  }
  // Liefere Paket aus
  anzahlPakete--; // anzahlPakete = anzahlPakete - 1;
  // Während der Programmierung Ausgabe von Variable "anzahlPakete"
  // um zu sehen, was in der Schleife passiert...
  // console.log("Paket ausgeliefert. Pakete übrig:", anzahlPakete);
  console.log("Paket ausgeliefert.");
}

// Nicht Teil der Aufgabe.
console.log("Ich bin fertig und mache Feierabend.");
