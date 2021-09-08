// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”
function arrWithinARange(arr, a, b) {
    var result = [];
    if (isNaN(a) || isNaN(b) || a> b || b>arr.length) {
        return null;
    } else {
        for(let i = 0; i < arr.length; i++) {
            if (i > a && i < b) {
                result.push(arr[i]);
            } 
        }
        return result;
    }
};

var arr = ["a", "b", "c", "d", "e", "f", "g"];
console.log(arrWithinARange(arr, 2, 5));