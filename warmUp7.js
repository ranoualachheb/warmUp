// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
//answer :
function comparison(a,b){
	 if ((a===5) && (b===7)){
	 	return a<b
	 }
}
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'
function helloWorld(str){
	var result = "";
	switch(str) {
		case "fr":
		result = "bonjour tout le monde";
		break;
		case "esp": 
		result = "hola mundo";
		break;
		default:
		result= "hello world";
		break;

	}
	return result;
}

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverse(array){
	var arr=[]
	var i = 0 ;
	while( i < array.length ) {
		arr.unshift(array[i])
		i++;
	}
	return arr;
}