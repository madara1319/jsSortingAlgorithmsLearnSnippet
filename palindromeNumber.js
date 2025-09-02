// @leet start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //let stringNumber=Math.abs(x).toString()
    let stringNumber = x.toString()
    let isTrue=true
    //console.log(typeof(x))
    //console.log(typeof(stringNumber))
    while (isTrue) {
        for (let i = 0; i <= stringNumber.length / 2; i++) {
           // console.log("string number i = " + stringNumber[i])
           // console.log("string number length - i = " + stringNumber[stringNumber.length-1-i])
//            if (stringNumber[i] === stringNumber[stringNumber.length - 1 - i]) {
//                isTrue=true
//            }
//            else {
//                isTrue=false
//            }
            if(stringNumber[i]-stringNumber[stringNumber.length-1-i]!=0){
                isTrue=false
                return false
            }
        }
        return isTrue;
    }
    return isTrue;
};
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(1000021))
// @leet end


