'use strict';

var imiona = ["Monika", "Krystian", "Łukasz"];
console.log(imiona);

imiona[3] = "Maria";
console.log(imiona);

imiona[2] = "Ela";
console.log(imiona);

var ileElementow = imiona.push("Geralt");
console.log(imiona);
console.log(ileElementow);

var usunietyElement = imiona.pop();
console.log(imiona);
console.log(usunietyElement);

console.log(imiona.unshift("Robert"));
console.log(imiona);

console.log(imiona.shift());
console.log(imiona);

console.log("Ilosc elementow w tablicy: " + imiona.length);

var imie = "Adam";
console.log(imie[0]);

console.log("===========================================");
console.log(imiona);
console.log(imiona.join(" - "));

console.log("===========================================");
console.log(imiona.reverse());

console.log("===========================================");
imiona.sort();
console.log(imiona);

var imionaMeskie = ['Wojtek', 'Michal', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);
console.log("Tablica imiona meskie: " + imionaMeskie);


console.log(zbiorImion.indexOf("Michal"));

console.log(Array.isArray(zbiorImion));

console.log(zbiorImion.slice(2,5));
console.log(zbiorImion);

zbiorImion.splice(2, 3, "Zenek", "Grzegorz", "Ania", "Tomasz", "Franek");
console.log(zbiorImion);

console.log(zbiorImion.toString());


























