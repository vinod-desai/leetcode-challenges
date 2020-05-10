/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i;
    for (i = 0; i * i < num; i++) {
        
    }
	if (num === i*i) { 
            return true; 
       } 
    return false; 
};

/* Using Binary Search */
var isPerfectSquare = function(num) {
    
    let high = 100000;
	let low = 0;
	let mid, square;
	
	while(low <= high){
		mid = parseInt(low + (high - low)/2);
		square = mid * mid;
		if(square === num){
			return true;
		} else if(square < num){
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
    return false; 
};