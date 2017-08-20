'use strict'

function mnozenie(tablicaLiczb) {
    var iloczyn = 1;
    tablicaLiczb.forEach(function(element, index){
        iloczyn *= element;
    });
     
    // element - dany element w tablicy, na ktorym obecnie znajduje się pętla (dla pierwszego obiegu jest to pierwszy element, dla drugiego obiegu drugi element tablicy itd.)
    
    // index - indeks danego elementu w tablicy, na którym obecnie znaduje się pętla (dla pierwszego obiegu jest to indeks 0, dla drugiego indeks 1)
    
    return iloczyn;
}

var tablica = [4, 5, 10, 8];

console.log(mnozenie(tablica)); 