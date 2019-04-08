var $ = require("jquery");
const anime = require('animejs/lib/anime.js');
const Parallax = require('parallax-js');
// const ScrollMagic = require('scrollmagic/scrollmagic/minified/ScrollMagic.min.js');
const mdc = require('material-components-web');
mdc.autoInit();
var controller = new ScrollMagic.Controller();

var computerScene = new ScrollMagic.Scene({
	triggerElement: '#computer-scene-text',
	triggerHook: 0.1
})
.setClassToggle('#computer-scene-text', 'fade-out')
// .addIndicators()
.addTo(controller);


var scene = new ScrollMagic.Scene({
	triggerElement: '#printer-scene-text',
	triggerHook: 0.6
})
.setClassToggle('#bg-img', 'printer-bg')
// .addIndicators({
// 	name: 'Print-scene',
// 	colorTrigger: 'red',
// 	colorStart: '#75C695'
// })
.addTo(controller);

var footerScene = new ScrollMagic.Scene({
	triggerElement: '#footer-scene',
	triggerHook: 0.8
})
.setClassToggle('#footer-scene', 'fade-in')
// .addIndicators({
// 	name: 'Footer-scene',
// 	colorTrigger: 'red',
// 	colorStart: '#75C695'
// })
.addTo(controller);

$('#menu-button').on('click', toggleMenu);

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
			targets: '.logo-img',
			opacity: .4,
			easing: 'easeInOutBack'
		}, '-=200')
		.add({
			targets: '.menu-list',
			opacity: 1,
			duration: 100
		})
		.finished.then(function(){
			$('#menu-button').on('click', toggleMenu);
		});
	}
	else{
		$('#menu-button').html('');
		$('#menu-button').html('menu');
		$('#menu-button').removeClass('active');

		open_menu_timeline.add({
			targets: '.menu-list',
			opacity: 0,
			easing: 'easeOutCirc',
			duration: 400
		})
		.add({
			targets: '.logo-img',
			opacity: 0,
			easing: 'easeOutCirc',
			duration: 400
		})
		.add({
			targets: '.menu',
			height: '0',
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