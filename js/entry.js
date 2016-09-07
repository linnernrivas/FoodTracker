$(function(){
	var $submit = $('#submit');
	var $food = $('#food');
	var $foodList = $('#foodList');
	var $foodEntry = $('#foodEntry');
	var $warning = $('#warning');

	$food.focus();
	$warning.addClass('hidden');

	$submit.on('click', function(e){
		addFood();
		e.preventDefault();
		$food.val('');
	});

	function addFood(){
		var $foodVal = $food.val();

		if($foodVal !== ''){
			$foodList.append('<li>' + $foodVal + '</li>');
			$warning.removeClass('hidden');	
		} else {
			$warning.addClass('hidden');
		}
	};
});