/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    const binaryOfA = `0b${a}`
    const binaryOfB = `0b${b}`
    
    const sum = BigInt(binaryOfA) + BigInt(binaryOfB)
    return sum.toString(2)
};  
console.log(addBinary("11100", "111100"))