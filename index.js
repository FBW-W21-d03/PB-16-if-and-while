let paketen = 10;
let reduzierst="Paket ausgeliefert";
let pause = "Ich mache eine Pause"
while (paketen>0) {
 if (paketen == 5) {
        console.log(pause);
    }
    console.log(reduzierst);
    paketen--;

    if (paketen == 0) {
        console.log();
    }
    
}
