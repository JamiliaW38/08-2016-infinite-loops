(function() {
  'use strict';

var loop = function(collection, callback){
    // ultimate side-effects function
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
};

// 1. countVowels
var countVowels = function(string){
	var counter = 0;
	loop(string, function(index){
		// console.log(index);
		if(index === "a" || index === "e" || index === "i" || index === "o" || index === "u"){
			counter = counter + 1
		}
	})
	return counter;
};

console.log("Testing countVowels. We should expect nine vowels:", countVowels("axexixoxuxaxexixox"));

// 2. stringReversal
var stringReversal = function(string){
	var results = [];
	loop(string, function(element){
		results.unshift(element);
	})
	console.log(results);
	return results.join('');
};

console.log("Testing stringReversal. We should expect \"olleh\":", stringReversal("hello"));

// 3. isPalindrome
var isPalindrome = function(string){
	var results = [];
	loop(string, function(element){
		results.unshift(element);
	})
	var reversedString = results.join('');
	if(reversedString === string){
		return true;
	}
	else {
		return false;
	}
};

console.log("Testing isPalindrome. We should expect true:", isPalindrome("hannah"));
console.log("Testing isPalindrome. We should expect false:", isPalindrome("hello"));

// 4. largestNumber
var largestNumber = function(array){
	
	loop(array, function(element){

	})

};

console.log("Testing largestNumber. We should expect 100:", largestNumber([1, 2, 3, 100, 90, 70]));

// 5. multBy
var multBy = function(array, num){
	var results = [];
	loop(array, function(element){
		// console.log(element);
		results.push(element * num);
	})
	return results;
};

var inputMultBy = [1, 2, 3];
console.log("Testing multBy. We should expect [3, 6, 9]", multBy(inputMultBy, 3))

// 6. powerOf
var powerOf = function(array, num){
	var results = [];
	loop(array, function(element){
		// console.log(element)
		results.push(element ** num);
	})
	return results;
};

var inputPowerOf = [1, 2, 3, 4, 5];
console.log("Testing powerOf. We should expect [1, 8, 27, 64, 125]", powerOf(inputPowerOf, 3));

// 7. capitalizeFirstLetters 

// 8. collectValues 

// 9. containsValue 

// 10. copyObj 

// 11. extendObj 

// 12. swapShuffle 


var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
console.dir(sampleCarList);


// 13. findBlueCars

// 14. findCarsByColor

// 15. findCarsByYear

// 16. findCarsBetweenYears

// 17. findCarsByMake

// 18. findCarsByMakeAndModel

// 19. Random Price Generator

// 20. VerySpecificSearch



}());


