// 1-using + operator combine your partner first and last name .
'lachheb'+ 'ranoua'
// 2-find if the number 13 is a multiple of 3 or not.
function multiple(n) {
	if (13/3 === 0) {
		return '13 is multiple of 3'
	} else{ 
		return '13 is not multiple of 3'
	}
	
}
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function average (arr){
    var i = 0 
    var result = 0
	var sum = arr.length ; 
	while (i<arr.length)  { 
    var average = (arr[i]+ arr[i++]) / sum  ;
		result = result + average ;
     i ++;
	}
	return result ; 
}


// 4-calculate your age in seconds.
	// 20*365*24*60*60 


// your code is here
