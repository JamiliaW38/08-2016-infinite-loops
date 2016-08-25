(function() {
  'use strict';

var loop = function(collection, callback){
    // ultimate side-effects function
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
};

// 0. countLetter
// take in a string and a letter, and count how many times that letter appears in the string!

var countLetter = function(string, letter){
	var counter = 0; 
	//created within the function because it will reset when you call the function
	//counter, if not declared and used, will have global scope and retain its value
	loop(string, function(index){
		if(index === letter){
			counter++;
		}
	})
	return counter;
}

console.log("Testing countLetter. We expect: 6",countLetter("heeeleleoe", "e"));

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

console.log("Testing countVowels. We expect nine vowels:", countVowels("axexixoxuxaxexixox"));

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

var obj = {};
	obj.name = 'Albrey';
	obj.favoriteMovie = 'Inception';
	obj.favoriteColor = 'Blue';
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

var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};

// 10. copyObj 
var copyObj = function(obj){
	var newObj = {};
	loop(obj, function(value, key){
		newObj[key] = value; // use bracket notation, key acts like a variable.
	})						 // dot notation will create a prop named key and overwrite its' value after each iteration
	return newObj;
};


// console.log("Testing copyObj. We expect a carbon copy of Obj:", copyObj(obj));

// 11. extendObj 
var extendObj = function(obj1, obj2){
	loop(obj2, function(value, key){
		// console.log(value, key);
		obj1[key] = value;
	})
	return obj1;
}

var myObjOne = {};
	myObjOne.name = "Nathan";
	myObjOne.age = "25";

var myObjTwo = {};
	myObjTwo.favoriteColor = "Blue";
	myObjTwo.hungry = false;

// console.log("Testing extendObj. We expect obj2's props/values to be merged with obj1's:", extendObj(myObjOne, myObjTwo));
// console.log(myObjOne)

// 12. swapShuffle 


 var swapShuffle = function(array){
	// does not make a new array
	var temp = 0;
	loop(array, function(element, index){
		temp = element;
		element = array[Math.floor(Math.random() * index)]
		array[Math.floor(Math.random() * index)] = temp;
	})
	return array;
};

var myArray = [30, 11, 35, "A", "Z", [], {}, true, false];

console.log("Testing swapShuffle. We expect array to be shuffled:", swapShuffle(myArray));


var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
console.dir(sampleCarList);


// 13. findBlueCars
var findBlueCars = function(carList){
	var allBlueCars = [];
	loop(carList, function(element, index){
		loop(element, function(value, key){
			if(value === "blue"){
				allBlueCars.push(element);
			}
		})
	})	
	return allBlueCars;
};

// console.log(findBlueCars(sampleCarList));

// 14. findCarsByColor
var findCarsByColor = function(carList, color){
	var allCarsByColor = [];
	loop(carList, function(element, index){
		loop(element, function(value, key){
			if(value === color){
				allCarsByColor.push(element);
			}
		})
	})	
	return allCarsByColor;
};

// console.log(findCarsByColor(sampleCarList, "red"));

// 15. findCarsByYear
var findCarsByYear = function(carList, year){
	var allCarsByYear = [];
	loop(carList, function(element, index){
		loop(element, function(value, key){
			if(value === year){
				allCarsByYear.push(element);
			}
		})
	})	
	return allCarsByYear;
};

// console.log(findCarsByYear(sampleCarList, 2002));

// 16. findCarsBetweenYears
var findCarsBetweenYears = function(carList, startYear, endYear){
	var allCarsBetweenYears = [];
	loop(carList, function(element, index){
		loop(element, function(value, key){
			if(value >= startYear && value <= endYear){
				allCarsBetweenYears.push(element);
			}
		})
	})	
	return allCarsBetweenYears;
};

// console.log(findCarsBetweenYears(sampleCarList, 2002, 2003));

// 17. findCarsByMake
var findCarsByMake = function(carList, make){
	var allCarsByMake = [];
	loop(carList, function(element, index){
		loop(element, function(value, key){
			if(value === make){
				allCarsByMake.push(element);
			}
		})
	})	
	return allCarsByMake;
};

// console.log(findCarsByMake(sampleCarList, "BMW"));

// 18. findCarsByMakeAndModel
var findCarsByMakeAndModel = function(carList, make, model){
	var allCarsByMakeAndModel = [];
	loop(carList, function(element, index){
		if(element.make === make && element.model === model) {
			allCarsByMakeAndModel.push(element);
		}
	})
	return allCarsByMakeAndModel;
};


console.log(findCarsByMakeAndModel(sampleCarList, "BMW", "3 Series"));

// EC

// 19. Random Price Generator

// 20. VerySpecificSearch



}());


