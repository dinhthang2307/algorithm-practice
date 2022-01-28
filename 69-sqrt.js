/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = (x) => {
    let ans = 1;
    if (x < 2) {
        return x;
    }
    else {
        let low = 2;
        let high = x;
        let mid;

        while (low <= high) {
            mid = Math.trunc((low + high) / 2);
            if (mid * mid <= x) {
                ans = mid;
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
    }
    return Math.trunc(ans);
};


console.log(mySqrt(10));
console.log(mySqrt(11));
console.log(mySqrt(12));
console.log(mySqrt(13));
console.log(mySqrt(14));
console.log(mySqrt(15));
console.log(mySqrt(16));