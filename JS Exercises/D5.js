/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.splice(0, 1);
console.log(pets);
pets.push("redfish");
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
let licensePlate;
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  element.licensePlate = Math.floor(Math.random() * 100000);
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newObject = {
  brand: "fiat",
  model: "tipo",
  color: "grey",
  trims: ["hatchback", "station wagon", "cross"],
};
cars.push(newObject);
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  element.trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  justTrims.push(element.trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  if (element.color.startsWith("b")) {
    console.log("fizz");
  } else console.log("buzz");
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const newarray = [];
for (let index = 0; index < charactersArray.length; index++) {
  const element = charactersArray[index];

  switch (element) {
    case "a":
      newarray.push(1);
      break;
    case "b":
      newarray.push(2);
      break;
    case "c":
      newarray.push(3);
      break;
    case "d":
      newarray.push(4);
      break;
    case "e":
      newarray.push(5);
      break;
    case "f":
      newarray.push(6);
      break;
    case "g":
      newarray.push(7);
      break;
    case "h":
      newarray.push(8);
      break;
    case "i":
      newarray.push(9);
      break;
    case "l":
      newarray.push(10);
      break;
    case "m":
      newarray.push(11);
      break;
    case "n":
      newarray.push(12);
      break;
    case "o":
      newarray.push(13);
      break;
    case "p":
      newarray.push(14);
      break;
    case "q":
      newarray.push(15);
      break;
    case "r":
      newarray.push(16);
      break;
    case "s":
      newarray.push(17);
      break;
    case "t":
      newarray.push(18);
      break;
    case "u":
      newarray.push(19);
      break;
    case "v":
      newarray.push(20);
      break;
    case "z":
      newarray.push(21);
      break;
  }
}
console.log(newarray);
