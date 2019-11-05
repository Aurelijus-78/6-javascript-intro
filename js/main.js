// skaiciai - number
const PI = 3.141592654;
console.log( PI );
const nulis = 0;

//tekstai - string
const vardas = 'Aurelijus';
const suo = "Aviganis";

// logines reiksmes - boolean
const tiesa = true;
const melas = false;

//sarasas - array
const skaiciai = [1, 2, 3, 4];
const abc = ['a', 'b', 'c', 'd', 'e'];

var kintamasis = 'as kintu';

const mixList = [1, "antras", 3, "forth", [6, 'seven']];
console.log(mixList);

//objektai - object
const zmogus = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    age: 99
}
console.log(zmogus);

console.log('veiksmai su kintamaisiais');

const s1 = 5;
const s2 = 10;
const suma = s1 + s2;
console.log(suma);
const vidurkis = (s1 + s2) / 2;
console.log(vidurkis);
const vidurkioSaknis = Math.sqrt ( vidurkis );
console.log(vidurkioSaknis);

const t1 = 'labas';
const t2 = 'rytas';

const pasisveikinimas = t1 + t2;
console.log(pasisveikinimas);

const gerasPasisveikinimas = t1 + ' ' + t2;
console.log(gerasPasisveikinimas);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[2]);