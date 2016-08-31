(function(){
	document.getElementsByTagName('input')[0].focus();
}())


var submit = document.getElementById('submit');
var elFoodEntry = document.getElementById('food');

submit.addEventListener('click', function(e){
	var foodToAdd = elFoodEntry.value;
	addFood(foodToAdd);

	elFoodEntry.value = '';

	if(e.preventDefault){
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
});

function addFood(e){
	var el = document.getElementById('foodList');
	var newEl = document.createElement('li');
	var newListItem = document.createTextNode(e);

	newEl.appendChild(newListItem);
	el.appendChild(newEl);
}
