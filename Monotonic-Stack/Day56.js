

/**739. Daily Temperatures
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    let st = [];
   let ans = [];
   for(let i = t.length-1;i>=0;i--){
      while(st.length !=0 && t[st[st.length-1]] <= t[i]){
           st.pop()
      }
      if(st.length == 0 ) ans[i] = 0
      else  ans[i] = st[st.length-1] - i
      st.push(i) 
   }
   return ans
};