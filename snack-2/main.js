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

let zucchinaPiccole= [];
let zucchinaGrande= [];
let zucchinePiccolePeso = 0;
let zucchineGrandePeso = 0;

for (let i = 0; i< orto.length; i++) {
    if(orto[i].lunghezza <15) {
        zucchinaPiccole.push(orto[i]);
        zucchinePiccolePeso += zucchinaPiccole[i].peso;
        for (let i = 0; i< zucchinaPiccole.length; i++) {
        }
    } else {
        zucchinaGrande.push(orto[i]);
        zucchineGrandePeso += zucchinaGrande[i].peso;
        for (let i = 0; i< zucchinaGrande.length; i++) {
        }
    }
}
console.log(`zucchinePiccolePeso`, zucchinePiccolePeso);
console.log(`zucchineGrandePeso`, zucchineGrandePeso);
