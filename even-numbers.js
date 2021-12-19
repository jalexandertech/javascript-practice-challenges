//Print all even numbers


// Create an array with numbers
// Loop through the array to find even numbers only
// Add the even numbers in a new array

// Variables
const allNums = [5, 13, 14, 2, 9, 8, 17, 6, 18, 3]

// Functions 
const findEvenNums = () => {
    let evenNums = [];

    for (let i = 0; i < allNums.length; i++) {
        if (allNums[i] % 2 === 0) {
            evenNums.push(allNums[i])
        }
    }
    return evenNums;
}


console.log(findEvenNums(allNums));
