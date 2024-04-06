// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function arrayOfNumbers(number) {
    let newArr = []
        for (let i = 0; i < number.length; i++) {
            if(i < 4){
            let results = number[i] *number[i];;{
                newArr.push(results)}
                 console.log(newArr);
        }
    else if(i < number.slice(-2)){
        let results = number[i] + 10
        newArr.push(results)
        console.log(newArr);
    }
}
        return newArr
    
}
    console.log(arrayOfNumbers([1, 2, 4, 7, 9, 12, 3, 14]))

    





// Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :
let arrNum = [1,2,3,4,5,6,7,8,9];
let i = 0;
let final =[]
while (i < arrNum.length) {
    if (i === 4) {
        break;
    }
    console.log(arrNum[i]);
    i++

    final.push(arrNum[i])
    console.log(final);
}






// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function arrayOfStrings(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        if (i === 2) {
            continue;
        }
        console.log(fruits[i]);
    }
}

arrayOfStrings(['apple','plum','banana','strawberries','kiwi']);


// Write a function that accepts an array of strings and console.logs each element using a for loop.

function acceptStringArray(cities) {
    let i = 0
    for(i=0; i<cities.length; i++)
    console.log(cities[i]);
    
}
acceptStringArray(["Atlanta", "Shanghai", "Hangzho", "Ramshiel"])





// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function reversedStrings(holiday) {
    // let newString = " "
    // let i = holiday.length -1
    // // let reversedHoliday = holiday.reverse()
    // while (i <= 0) {
    //   newString += holiday[i].split("").reverse("").join("");
    //   i--;
    //   console.log(newString);
    //  break;   
    // }
    // return newString;
    let newString = holiday.split("").reverse("").join("")
    while (newString){
        // console.log({newString});
        return newString;
        
    }
    

}

 console.log(reversedStrings("Halloween"))


