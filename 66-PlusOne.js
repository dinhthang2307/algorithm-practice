/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let len=digits.length;
    if(digits[len-1]+1<10){
        digits[len-1] +=1;
    }
    else{
        let x =1;
        for(let i = len -1;i>=0; i--){
            let buff = digits[i] + x;
            digits[i] = buff % 10;
            x = Math.trunc(buff/10);
        }
        if(digits[0]===0){
            let result = [...digits];
            result.unshift(1);
            for(let i = 1; i< digits.length; i++){
                result[i] = digits[i-1]
            }
            return result
        }
    }
    return digits;
};

console.log(plusOne([1,1]))
console.log(plusOne([9,9,9,9]))
console.log(plusOne([9,8,9]))