///////*Window Scroll Event*//////

//Fetching the navbar anchor tags
var navMenuAnchorTags = document.querySelectorAll('.navbar-nav a');

//Checking if all navbar archor tags a fetched on not
/*console.log(navMenuAnchorTags);*/

var scrollInterval;

for(let i = 0; i < navMenuAnchorTags.length; i++) {
	navMenuAnchorTags[i].addEventListener('click', function(event){
		//Preventing the default action
		event.preventDefault();

		//Fetching the Target Section ID
		var targetSectionId = this.textContent.trim().toLowerCase();
		
		//Checkin if on click we are getting the correct ID or not
		//console.log(targetSectionId);

		//Fetching the Target Section
		var targetSection = document.getElementById(targetSectionId);
		//Checking if we get the correct and complete Target Section
		//console.log(targetSection);

		scrollInterval = setInterval(function(){
			scrollVertically(targetSection);
		}, 30);
	});
}

function scrollVertically(targetSection) {
	//Fetcing the Target Section Coordinates
	var targetSectionCoordinates = targetSection.getBoundingClientRect();
	
	if(targetSectionCoordinates.top<=0){
			clearInterval(scrollInterval);
			return;
	}
	window.scrollBy(0, 50);
}

///////* Navbar Colour Change *///////

$(function(){
    $(document).scroll(function(){
        var aboutSection = document.getElementById('about');
        var targetSectionCoordinates = aboutSection.offsetTop;
        $('nav').toggleClass('scrolled', $(this).scrollTop()>targetSectionCoordinates);
    });
});




///////*Skill progress event*///////

var progressBars = document.querySelectorAll('.skill-body > div');
var skillsContainer = document.getElementById('skills-container');

window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars() {
	for(let bar of progressBars) {
		bar.style.width = 0 + '%';
	}
}
initialiseBars();

function fillBars() {
	for(let bar of progressBars) {
		let targetWidth = bar.getAttribute('data-bar-width');
		let currentWidth = 0;
		let progressInterval = setInterval(function(){
			if(currentWidth>=targetWidth){
				clearInterval(progressInterval);
				return;
			}
			currentWidth++;
			bar.style.width = currentWidth + '%';
		}, 5);
	}
}

function checkScroll() {
	var coordinates = skillsContainer.getBoundingClientRect();
	if(!animationDone && coordinates.top<=window.innerHeight) {
		animationDone = true;
		fillBars();
	}
	else if(coordinates.top>window.innerHeight) {
		animationDone = false;
		initialiseBars();
	}
}




















