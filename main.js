const findFrequency = function(userInput){
  let inputArray = userInput
  var counts = {};
  var compare = 0;
  var most;
  var least;
  for (let i = 0; i < inputArray.length; i++) {
    var letter = inputArray[i];
    if (counts[letter] === undefined){
      counts[letter] = 1;
    }
    else{
      counts[letter] = counts[letter] + 1;
    }
    if (counts[letter] > compare){
      compare = counts[letter];
      most = inputArray[i];
    }
  } 
  var numBasket = Object.values(counts) 
  let smallestNum =  Math.min(...numBasket)
  var keyValPairs = Object.keys(counts)
  
  for (let j = 0; j < keyValPairs.length; j++) {
    var currentKey = keyValPairs[j]
    if (counts[currentKey] === smallestNum){
      least = currentKey
    }
  }
  return { most, least}
};
