// Calcule la suma de todas las resistencias conectadas en serie.

const resistance1 = [-1, 5 , 6, 3];
const resistance2 = [14, 3.5, 6];
const resistance3 = [8, 15, 100];

function sumResistance(arr) {
    const arr2 = [];
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach[(e) => (res = res + e)];
    console.log(`${res}homs`); 
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
