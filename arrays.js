// Find the last element of the following arrays

let arr1 = [3,7,34,90,12]
console.log('arr1', arr1.slice(-1));

let arr2 = [true, "green", "where",12,56]
console.log('arr2', arr2.length - 1);



// Write a JS program that will join the following array elements into a string

let myPets = ["Cow", "Bird", "Snake", "Dog"];
let joinPets = myPets.join();
console.log({joinPets});


// Write a JS script to sort the following array items

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

console.log(arr3.sort(function(a, b){return a -b}));


//console.log('sort', arr3.sort());
//or
//console.log('toSort', arr3.toSorted());



// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

//fiter() method: 
 function removeDuplicates(arr) {
   return arr.filter((item,
         index) => arr.indexOf(item) === index);
 }
 console.log(removeDuplicates(arr));
 
 
 
// //method 2: set(); 
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
 //console.log(removeDuplicates(arr));



// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"

let priNeeds = ["shelter", "clothing", "food", "education"];
let w = priNeeds.includes("food");
if(w==true){
    console.log("food")
}
else{
console.log("the search word was not found")
}



// Write a JS script to sort the following string:

let word = "renniw";
let word2 = word.split("").reverse("").join("")

console.log('sorted', word);