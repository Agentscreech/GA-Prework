var toChange = document.getElementsByClassName("current");


// So the instructions said use a for loop to iterate, but since the var is a live element, it changes the length after the first item is changed, and what started in the [1] spot then moves to the [0] but loop var increments to 1 and stopps since toChange[1] would return undefined.  Therefore a while loop works better, which we haven't been offcially taught.
while(toChange.length > 0){
     toChange[0].className = "finished";
}

document.getElementById('next').className = "current";
document.getElementById('next').removeAttribute("id");
document.getElementsByTagName('li')[3].setAttribute('id', "next");

var chilled = function () {
  var toChill = document.getElementsByTagName('li');
  for (var i = 0; i < toChill.length; i++){
      toChill[i].className = "cool";
  }
};

var button = document.querySelector('button');
button.addEventListener('click', chilled);

var addLine = function (){
    var newLine = document.createElement('li');
    newLine.textContent = "JavaScript is fun!";
    document.getElementsByTagName('ul')[0].appendChild(newLine);
};

var liClick = document.querySelector('.finished');
liClick.addEventListener('click', addLine);
