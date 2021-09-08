// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// orto
var orto = [
    {
        "varietà": "v1",
        "peso": 100,
        "lunghezza": 15,
    },
    {
        "varietà": "v4",
        "peso": 200,
        "lunghezza": 10,
    },
    {
        "varietà": "v4",
        "peso": 120,
        "lunghezza": 13,
    },
    {
        "varietà": "v1",
        "peso": 130,
        "lunghezza": 20,
    },
    {
        "varietà": "v2",
        "peso": 50,
        "lunghezza": 12,
    },
    {
        "varietà": "v1",
        "peso": 100,
        "lunghezza": 15,
    },
    {
        "varietà": "v2",
        "peso": 55,
        "lunghezza": 22,
    },
    {
        "varietà": "v3",
        "peso": 125,
        "lunghezza": 12,
    },
    {
        "varietà": "v1",
        "peso": 143,
        "lunghezza": 14,
    },
    {
        "varietà": "v5",
        "peso": 110,
        "lunghezza": 19,
    },
    
];

let zuccPc= [];
let zuccGd= [];
let zuccPcPeso = 0;
let zuccGdPeso = 0;

for (let i = 0; i< orto.length; i++) {
    if(orto[i].lunghezza >15) {
        zuccGd.push(orto[i]);
        zuccGdPeso += orto[i].peso;
    } else {
        zuccPc.push(orto[i]);
        zuccPcPeso += orto[i].peso;
    }
}
console.log(`zuccGd`, zuccGd);
console.log(`zuccPc`, zuccPc);
console.log(`zuccSmallWeight`, zuccPcPeso, `g`);
console.log(`zuccGdWeight`, zuccPcPeso, `g`);
