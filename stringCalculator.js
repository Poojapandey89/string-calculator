//Created a function file

export function add(numbers) {
    // Check empty string
    if (!numbers) return 0;
    // Create delimiter
    let delimiter = ',';
    let numericString = numbers;
    //Check for other delimiters and extact numeric values
    if (numbers && numbers.startsWith('//')) {
      let delimiterIndex = numbers.indexOf('\n');
      delimiter = numbers.slice(2, delimiterIndex);
      numericString = numbers.slice(delimiterIndex + 1);
    }

   // Replace newlines with delimiter
    numericString = numericString.replace(/\n/g, delimiter);  
    // Split by delimiter
    let numArray = numericString.split(delimiter);

   // Check for negative numbers and throw error
    let negativeNumbers = numArray.filter(num => parseInt(num, 10) < 0);
    if (negativeNumbers.length > 0) {
     // throw new Error(`Negative numbers not allowed ${negativeNumbers.join(', ')}`);
     return `Negative numbers not allowed ${negativeNumbers.join(', ')}`;
    }

    // Return the sum
    return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

// console.log("Output 1 ===>",add());
// console.log("Output 2 ===>",add("1,5"));
//console.log("Output 3 ===>",add("//;\n1;2"));
// console.log("Output 4 ===>",add("//;\n-1;2"));