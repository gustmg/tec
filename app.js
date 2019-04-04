var $ = require("jquery");
const anime = require('animejs/lib/anime.js');
const Parallax = require('parallax-js');

$('#menu-button').on('click', toggleMenu);
$('.menu-link').hover(function(){
	
});

var logo_animation = anime({
	targets: '.logo-img',
	rotate:360,
	duration: 55000,
	easing: 'linear',
	loop:true
});

function toggleMenu() {
	var open_menu_timeline = anime.timeline();
	$('#menu-button').off('click');
	if(!$('#menu-button').hasClass('active')){
		$('#menu-button').html('');
		$('#menu-button').html('clear');
		$('#menu-button').addClass('active');

		logo_animation.play();

		open_menu_timeline.add({
			targets: '.menu',
			height: '100%',
			opacity: 1,
			easing: 'easeInSine',
			duration: 100
		})
		.add({
			targets: '#menu-button,#phone-button',
			color: '#FFF',
			easing: 'easeInSine',
			duration: 100
		})
		.add({
			targets: '.logo-img, .menu-list',
			opacity: 1,
			easing: 'easeInOutBack'
		}, '-=200')
		.finished.then(function(){
			$('#menu-button').on('click', toggleMenu);
		});
	}
	else{
		$('#menu-button').html('');
		$('#menu-button').html('menu');
		$('#menu-button').removeClass('active');

		open_menu_timeline.add({
			targets: '.logo-img, .menu-list',
			opacity: 0,
			easing: 'easeOutCirc',
			duration: 400
		})
		.add({
			targets: '.menu',
			height: '0',
			opacity: 1,
			easing: 'easeInSine',
			duration: 100
		}, '-=400')
		.add({
			targets: '#menu-button,#phone-button',
			color: '#000',
			easing: 'easeInSine',
			duration: 100
		}).finished.then(function(){
			$('#menu-button').on('click', toggleMenu);
		});
	}
}