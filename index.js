/*
let auto = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log ("packet ist ausgeliefert");
for (auto = 0; auto < 5; auto++) {
console.log('packet ist ausgeliefert');
  }
  
if (auto > 5) {
} else if (auto > 10) {
} else {console.log("pause");
}
*/
let paket = 10;
let pause = "pause"
let ausgeliefert = "paket ausgeliefert"

while(paket <= 10){
console.log(ausgeliefert);
paket--;

if(paket == 5){
    console.log(pause);
}

if(paket == 0){ break; }
}
console.log("Fertig");