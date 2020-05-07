/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let insertionsIntoStack = 0, deletionsFromStack=0;
    let strLen = s.length;
    if(!s){
        return true;
    }
    for(let i=0; i<strLen; i++){
        if( (s[i]==='(') || (s[i]==='{') || (s[i]==='[') ){
            stack.push(s[i]);
            insertionsIntoStack++;
        } else if ((s[i]===')' && stack[stack.length - 1] === '(') || 
                  (s[i]==='}' && stack[stack.length - 1] === '{') ||
                  (s[i]===']' && stack[stack.length - 1] === '[') ){
            stack.pop();
            deletionsFromStack++;
        }
    }
    if( insertionsIntoStack === deletionsFromStack && (insertionsIntoStack +        deletionsFromStack) === strLen) {
        return true;
    }
    return false;
};