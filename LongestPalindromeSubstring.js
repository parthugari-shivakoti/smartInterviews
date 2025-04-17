const string = "rarararararbdcds";

function palind(string) {
    let mL = 0, i = 0, j = 1;
    let palin = "";

    while (j <= string.length) {
        let ss = string.slice(i, j);
        if (isPalindrome(ss) && ss.length > mL) {
            mL = ss.length;
            palin = ss;
        }
        j++;

        // reset window if needed
        if (j - i > string.length) {
            i++;
            j = i + 1;
        }
    }

    console.log("Longest Palindromic Substring:", palin);
}

function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); 
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

palind(string);
