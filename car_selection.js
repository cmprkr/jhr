var button_78 = document.getElementById('button_78');
var button_77 = document.getElementById('button_77');
var leftSlider = document.getElementById('left_slider');
var rightSlider = document.getElementById('right_slider');
var car_77 = document.getElementById('car_77');
var car_78 = document.getElementById('car_78');
var car_77_flip = document.getElementById('car_77_flip');
var car_78_flip = document.getElementById('car_78_flip');
var animationId_78, animationId_77;
var currentPosition_78 = 50; // Initially set to 50
var currentPosition_77 = 50; // Initially set to 50
var title = document.getElementById('title');
var choose_c = document.querySelector('.word_choose.letter_c');

button_78.addEventListener('mouseover', function() {
  	cancelAnimationFrame(animationId_78); // Cancel any existing animation
  	var start = currentPosition_78; // Get current position
  	button_78.style.left = "-80" + '%';
  	button_78.style.height = "100" + "vh";
  	button_78.style.width = "180" + "%";
  	button_77.style.display = "none"
  	animateSlider78(start, 90, 850, easeInOutQuad); // Adjust duration and easing function here
});

button_78.addEventListener('mouseout', function() {
  	cancelAnimationFrame(animationId_78); // Cancel the animation if it's running
  	var start = currentPosition_78; // Get current position
  	button_78.style.left = "0" + '%';
  	button_78.style.height = "1000" + "px";
  	button_78.style.width = "20" + "%";
  	animateSlider78(start, 50, 650, easeInOutQuad); // Adjust duration and easing function here
  	setTimeout(function() {

		button_77.style.display = "block"

	}, 500);
});

button_77.addEventListener('mouseover', function() {
  	cancelAnimationFrame(animationId_77); // Cancel any existing animation
  	var start = currentPosition_77; // Get current position
  	button_77.style.right = "-80" + '%';
  	button_77.style.height = "100" + "vh";
  	button_77.style.width = "180" + "%";
  	button_78.style.display = "none"
  	animateSlider77(start, 90, 850, easeInOutQuad); // Adjust duration and easing function here
});

button_77.addEventListener('mouseout', function() {
  	cancelAnimationFrame(animationId_77); // Cancel the animation if it's running
  	var start = currentPosition_77; // Get current position
  	button_77.style.right = "0" + '%';
  	button_77.style.height = "1000" + "px";
  	button_77.style.width = "20" + "%";
  	animateSlider77(start, 50, 650, easeInOutQuad); // Adjust duration and easing function here
  	setTimeout(function() {

		button_78.style.display = "block"
		
	}, 500);
});

function animateSlider78(start, end, duration, easing) {
  	var startTime = null;

  	function step(timestamp) {
	    if (!startTime) startTime = timestamp;
	    var progress = timestamp - startTime;
	    var percentage = Math.min(progress / duration, 1);
	    var easedPercentage = easing(percentage);

	    var value = start + (end - start) * easedPercentage;
	    leftSlider.style.right = value + '%';
	    currentPosition_78 = value; // Update current position

	    if (percentage < 1) {
	      	animationId_78 = requestAnimationFrame(step);
	    }
  	}

  	animationId_78 = requestAnimationFrame(step);
}

function animateSlider77(start, end, duration, easing) {
  	var startTime = null;

  	function step(timestamp) {
	    if (!startTime) startTime = timestamp;
	    var progress = timestamp - startTime;
	    var percentage = Math.min(progress / duration, 1);
	    var easedPercentage = easing(percentage);

	    var value = start + (end - start) * easedPercentage;
	    rightSlider.style.left = value + '%';
	    currentPosition_77 = value; // Update current position

	    if (percentage < 1) {
	      	animationId_77 = requestAnimationFrame(step);
	    }
  	}

  	animationId_77 = requestAnimationFrame(step);
}

function easeInOutQuad(t) {
	  t /= 0.5;
	  if (t < 1) return 0.5 * t * t;
	  t--;
	  return -0.5 * (t * (t - 2) - 1);
}

window.addEventListener('load', function() {

	var prevWidth = window.innerWidth;
	var prevHeight = window.innerHeight;

	var car_77_width = car_77.offsetWidth;
	var newHeight = car_77_width / 2.216494845;
	car_77.style.height = newHeight + 'px';
	car_78.style.height = newHeight + 'px';
	car_77_flip.style.height = newHeight + 'px';
	car_78_flip.style.height = newHeight + 'px';

	title.style.left = (prevWidth * .025) + "px"
	title.style.top = (prevWidth * .025) + "px"

	var containers = document.querySelectorAll(".word_pixel_container");
	var spacers = document.querySelectorAll(".word_pixel_spacer");

	containers.forEach(function(container) {
		var cHeight = choose_c.offsetHeight;
	  	var containerWidth = container.offsetWidth;
	  	var containerHeight = container.offsetHeight
	  	container.style.height = (containerWidth / 6) + "px";

	  	spacers.forEach(function(spacer) {
	  		spacer.style.height = (cHeight / 5) + "px";
	  	});
	});
});

window.addEventListener('resize', function() {

	var prevWidth = window.innerWidth;
	var prevHeight = window.innerHeight;

	var car_77_width = car_77.offsetWidth;
	var newHeight = car_77_width / 2.216494845;
	car_77.style.height = newHeight + 'px';
	car_78.style.height = newHeight + 'px';
	car_77_flip.style.height = newHeight + 'px';
	car_78_flip.style.height = newHeight + 'px';

	title.style.left = (prevWidth * .025) + "px"
	title.style.top = (prevWidth * .025) + "px"

	var containers = document.querySelectorAll(".word_pixel_container");
	var spacers = document.querySelectorAll(".word_pixel_spacer");

	containers.forEach(function(container) {
		var cHeight = choose_c.offsetHeight;
	  	var containerWidth = container.offsetWidth;
	  	var containerHeight = container.offsetHeight
	  	container.style.height = (containerWidth / 6) + "px";

	  	spacers.forEach(function(spacer) {
	  		spacer.style.height = (cHeight / 5) + "px";
	  	});
	});

});

setTimeout(function() {

}, 500)