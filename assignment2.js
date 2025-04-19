let str = "amanaplanacanalpanama";
logestSS(str);
function logestSS(str){
    let ml = 1;
    let ss = str[0];
    let i=0,j=i+1;
    for(let i=0;i<str.length;i++){
        for(let j=i+ml;j<str.length;j++){
            Subs = str.slice(i,j);
            // console.log(Subs);
            if(isPalind(Subs) && ml<Subs.length){
                ml = Subs.length;
                ss = Subs;
            }
        }
    }
    console.log("Palindrome is :",ss," and length is:", ml);
}

function isPalind(str){
    let i=0,j=str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            return false;
        }
        i++;
        j--;
        return true;
    }
}
