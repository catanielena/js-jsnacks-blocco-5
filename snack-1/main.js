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
        "lunghezza": 15,
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
        "lunghezza": 10,
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
        "lunghezza": 13,
    },
    
];

var pesoTot = 0;
for(var i=0; i<orto.length; i++) {
    pesoTot += orto[i].peso;
    console.log(orto[i].peso)
}
console.log(`pesoTot`, pesoTot);

