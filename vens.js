let paket = 10;
let pause = "Ich mache eine Pause"
let ausLiferung = "Paket ausgeliefert"

while(paket <= 10){
console.log(ausLiferung);
paket--;

if(paket == 5){
    console.log(pause);
}

if(paket == 0){ break; }
}
console.log("Wagen ist leer");