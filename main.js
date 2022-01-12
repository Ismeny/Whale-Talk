// variable that holds the text you want to translate
const input = 'i love my husband';
// variable that holds the vowels excluding y
const vowels = ['a','e','i','o','u'];
// variable that will hold vowels from the input string
let resultArray = [];

//for loop to iterate through each letter of the input variable text
for (let i = 0; i < input.length; i++) {
    // console.log(`i is ${i}`);
    //create nested loop to iterate through the vowels array each time the outer loop runs
    for (let j = 0; j < vowels.length; j++) {
        // console.log(`j is  ${j}`)
        //comparing input string to vowels array
        if (input[i] === vowels[j]) {
            //checking input string for vowel 'e' if there is one then push 'ee' to result array
            if (input[i] === 'e') {
                resultArray.push('ee');
                //checking input string for vowel 'u' if there is one then push 'uu' to result array
            } else if (input[i] === 'u') {
                resultArray.push('uu');
            }
            //else just push single vowel from input string
            else {
                resultArray.push(input[i]);
            }
        }  
    }
}
console.log(resultArray.join('').toUpperCase());

