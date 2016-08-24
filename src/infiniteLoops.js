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

// console.log("Testing countVowels. We expect nine vowels:", countVowels("axexixoxuxaxexixox"));

// 2. stringReversal
var stringReversal = function(string){
	var results = [];
	loop(string, function(element){
		results.unshift(element);
		// console.log(results);
	})
	console.log(results);
	return results.join('');
};

// console.log("Testing stringReversal. We expect olleh:", stringReversal("hello"));

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

// console.log("Testing isPalindrome. We expect true:", isPalindrome("hannah"));
// console.log("Testing isPalindrome. We expect false:", isPalindrome("hello"));

// 4. largestNumber
var largestNumber = function(array){
	var largestNum = array[0];
	loop(array, function(element){
		// console.log(element);
		if(element > largestNum){
			largestNum = element;
		}
	})
	return largestNum;
}

// console.log("Testing largestNumber. We expect 73:", largestNumber([30, 11, 35, 23, 9, 73]));

// 5. multBy
var multBy = function(array, num){
	var results = [];
	loop(array, function(element){
		// console.log(element);
		results.push(element * num);
	})
	return results;
};

// var inputMultBy = [1, 2, 3];
// console.log("Testing multBy. We expect [3, 6, 9]:", multBy(inputMultBy, 3))

// 6. powerOf
var powerOf = function(array, num){
	var results = [];
	loop(array, function(element){
		// console.log(element);
		results.push(element ** num);
	})
	return results;
};

// var inputPowerOf = [1, 2, 3, 4, 5];
// console.log("Testing powerOf. We expect [1, 8, 27, 64, 125]:", powerOf(inputPowerOf, 3));

// 7. capitalizeFirstLetters 
var capitalizeFirstLetters = function(string){
	var stringArr = string.split(' ');
	console.log(stringArr);
	var results = [];
	loop(stringArr, function(element){
		var newWord = element.charAt(0).toUpperCase() + element.slice(1)
		results.push(newWord);
	})
	return results.join(' ');
}

// console.log("Testing capitalizeFirstLetters. We expect How Are You Doing M8?:", capitalizeFirstLetters("how are you doing m8?"))

var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key]);
    }
  }
};

// 8. collectValues 
var collectValues = function(object){
	var results = [];
	loop(object, function(keyValue){
		results.push(keyValue)
	})
	return results;
};

// var obj = {};
// 	obj.name = 'Albrey';
// 	obj.favoriteMovie = 'Inception';
// 	obj.favoriteColor = 'Blue';
// console.log("Testing collectValues. We should expect [\"Albrey\", \"Inception\", \"Blue\"]:", collectValues(obj));

// 9. containsValue 
var containsValue = function(object, targetValue){
	var state = false;
	loop(object, function(keyValue){
		if(targetValue === keyValue){
			state = true;
		}
	})
	return state;
};

// console.log("Testing containsValue. We expect true:", containsValue(obj, "Blue"));
// console.log("Testing containsValue. We expect false:", containsValue(obj, "Red"));

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


