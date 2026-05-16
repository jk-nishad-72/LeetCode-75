

console.log('Day 22 Of leetcode 75  challange')


var decodeStirng =  function (s) {
    

    let stack = [];

    let curS = "";
    let curNum = 0;

    for(let i = 0;i< s.length;i++){

        if (s[i] >= '0' && s[i] <= '9') {
        curNum = curNum * 10 + Number(s[i]);
    }
    else if (s[i] === '[') {
        stack.push([curS, curNum]);
        curS = "";
        curNum = 0;
    }
    else if (s[i] === ']') {
        let [lastS, lastNum] = stack.pop();
        curS = lastS + curS.repeat(lastNum);
    }
    else {
        curS += s[i];
    }
}

  return curS
}

console.log(decodeStirng(s = "3[a]2[bc]"));
