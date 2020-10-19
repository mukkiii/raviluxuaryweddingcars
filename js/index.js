var fullPage = new fullpage('#fullpageWrapper', {
	autoScrolling:true,
	scrollHorizontally: true,
	navigation: true,
	navigationTooltips: ['HOME', 'ABOUT', 'GALLERY', 'CONTACT'],
	showActiveTooltip: true,
	scrollingSpeed: 1000,
	anchors: ['section1', 'section2', 'section3', 'section4'],
	responsiveWidth: 767,
	responsiveHeight: 600,
	afterLoad: function() {
        history.pushState(null, null, "index.html");
    }
});


window.addEventListener('load', function(){
	const slide = document.querySelectorAll('.slide-item'),
		  delay = 3000;
	let counter = 0;
	slide[counter].classList.add('active');

	setInterval(fadeSlide, delay);

	function fadeSlide(){
		slide[counter].classList.remove('active');
		counter = (counter + 1) % slide.length;
		slide[counter].classList.add('active');
	}

});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
	if(this.scrollY > 10)
	navbar.classList.add('sticky');
	else
	navbar.classList.remove('sticky')
});

document.querySelector('#close').addEventListener('click', function(){
	document.querySelector('.ie-specific').style.display = 'none';
});
