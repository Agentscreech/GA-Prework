var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];

var findContact = function(index) {
  return contacts[index];
};
var addContact = function(name) {
  contacts.push(name);
  return contacts;
};
var updateLastContact = function(newName) {
  contacts.length = i;
  contacts[i] = newName;
  return contacts;
};


var cups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ounces = [];
var convertToOunces = function() {
  for (var i = 0; i < cups.length; i++){
    ounces.push(cups[i]*4);
   }
  return ounces;
};

convertToOunces();
console.log(ounces);

var scores = [83, 40, 55, 72, 59, 88, 99];

var passOrFail = function(){
  for (var i = 0; i < scores.length; i++){
      if (scores[i] >= 60) {
        scores[i] = "pass";
      } else {
        scores[i] = "fail";
    }

  }
  return scores;
};
passOrFail();
console.log(scores);
var pet = {
  'species' : 'iguana',
  'gender' : 'female',
  'age' : 12,
  'name' : 'Godzilla'
  };

console.log(pet['name']);

pet['age'] = 13;
console.log(pet["age"]);
pet['favoriteFood'] = "crickets";
console.log(pet['favoriteFood']);
