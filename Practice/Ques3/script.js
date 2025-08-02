//ques 1
function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElements(arr, num);

//ques2
function getUnique(str) {
    let ans = "";
    for (i = 0; i < str.legth; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
        return ans;
    }
}

//ques3
function largestName() {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
largestName(country);

//ques4
function vowelCount(str) {
    let count = 0;
    for (i = 0; i < str.legth; i++) {
        if (str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ) {
            count++;
        }
    }
    return count;

}


//ques5
let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}