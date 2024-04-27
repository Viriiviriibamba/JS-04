// Suma de resistencias en serie
/**Calcule la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver ``23,5 ohmios''. (14 + 3,5 + 6 = 23,5)
- `sumResitance([8,15,100])` debería devolver ``123 ohmios''. (8 + 15 + 100 = 123)
Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.Calcule la suma de todas las resistencias conectadas en serie. */

const resistance1 = [-1, 5 , 6, 3];
const resistance2 = [14, 3.5, 6];
const resistance3 = [8, 15, 100];

function sumResistance(arr) {
    const arr2 = [];
    let res = 0;
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach((e) => (res = res + e));
    console.log(`${res} ohms`); 
}

function sumResistance2(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.abs(arr[i]);
    }
    return res;
}

sumResistance(resistance3);
const try2 = sumResistance2(resistance1);
console.log(try2);



//Número dividido en mitades
/**Dado un número, devuelve el número dividido en sus mitades en una matriz.
Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]` .
- `numDiv(10)` debería devolver `[5, 5]` . */

const n = 4;
const n2 = 10;

function numDiv(num) {
    let res = [];
    const half = num / 2;
    res.push(half);
    res.push(half);
    return res;
} 
console.log(numDiv(n));
console.log(numDiv(n2));



/**Sociedad secreta'0
Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.b 
Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .
*/
const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
const member3 = ["Harry", "Ron", "Hermione"];

function secretName(arr) {
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    return res.sort().join();
}
console.log(secretName(member1));
console.log(secretName(member2));
console.log(secretName(member3));



//Estado en línea
/**Muestra el estado en línea de una lista de usuarios.
Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'`*/
const users = ["mockIng99", "J0eyPunch", "glassedFer"];

function displayUsers(arr) {
    const count = users.length;
    let res;
    if (count ===1) {
        res = `${arr[0]} is online`;
    } else if (count ===2) {
        res = `${arr[0]}, ${arr[1]} are online`;
    } else {
        res = `${arr[0]}, ${arr[1]} and ${count -2} more are online`;
    }
    return res;
}
console.log(displayUsers(users));

