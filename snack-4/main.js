// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].



function alter(arr1, arr2) {
    var group = [];
    if(arr1.length > arr2.length) {
        for (let i = 0; i<arr2.length; i++) {
            group.push(arr1[i]);
            group.push(arr2[i]);
        }
    } else {
        for (let i = 0; i<arr1.length; i++) {
            group.push(arr1[i]);
            group.push(arr2[i]);
        }
    }

    return group;
}

var letters = ["a","b","c"];
var numbers = [1,2,3];
var newGroup = alter(letters, numbers);
console.log(newGroup);