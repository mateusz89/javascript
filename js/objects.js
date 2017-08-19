'use strict'

/*var wojtek = {
    imie: "Wojtek", 
    wzrost: 181,
    przedstawOsobe: function() {
        console.log("Cześć jestem " + this.imie + ", mam " + this.wzrost + " wzrostu. ");
    }
}

var kaja = {
    imie: "Kaja", 
    wzrost: 160,
    przedstawOsobe: function() {
        console.log("Cześć jestem " + this.imie + ", mam " + this.wzrost + " wzrostu. ");
    }
}


console.log(wojtek.imie);
console.log(wojtek.wzrost);


console.log(wojtek["imie"]);
console.log(wojtek["wzrost"]);

wojtek.przedstawOsobe();

console.log(kaja.imie);
console.log(kaja.wzrost);


console.log(kaja["imie"]);
console.log(kaja["wzrost"]);

kaja.przedstawOsobe();*/

class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost;
        this.oczy;
    }

    wyswietlInfo() {
        console.log("Imię: " 
                    + this.imie 
                    + "\n" 
                    + "Nazwisko: " 
                    + this.nazwisko 
                    + "\n" + "Wzrost: " 
                    + this.wzrost 
                    + "\n" 
                    + "Oczy: " 
                    + this.oczy);
    }
}

var wojtek = new Osoba("Wojtek", "Potocki");

wojtek.wzrost = 180;
wojtek.oczy = "niebieskie";

var Karol = new Osoba("Karol", "Młodawski");

wojtek.wyswietlInfo();
Karol.wyswietlInfo();