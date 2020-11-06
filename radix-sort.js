// Helper method to get the number in a specific place in a digit
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

// Helper method to figure out the number with the longest digit and return the length
function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper method that would return the longest digit length in array of numbers
function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        //digitCount(nums[i]) > maxDigits ? maxDigits = digitCount(nums[i]) : maxDigits;
        maxDigits = Math.max(maxDigits, digitCount(nums[i ]));
    }
    return maxDigits
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets); 
    }
    return console.log(nums);
}

radixSort([2313213, 241, 10, 42131, 554 , 54352214])
//node radix-sort.js