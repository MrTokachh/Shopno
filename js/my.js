'use strict'

jQuery(document).ready(function() {
	initBurger();
	initPopup();
	initSlider();
});

function initSlider() {
	$('.about-slider').slick({
		centerMode:false,
		arrows:false,    
		// autoplay:true,
		// autoplaySpeed:3000,     
		slidesToShow:1,     
		slidesToScroll:1,   
		dots:true,
	});

	$('.team-slider').slick({
		centerMode:false,
		arrows:true,       
		slidesToShow:1,     
		slidesToScroll:1,   
		dots:true,
	});
}

function initBurger() {
	var menuBtn = $('.burger-menu');
	var menu = $('#header');

	menuBtn.on('click', function(){
		event.preventDefault();
    	menu.toggleClass('active')
    });

	$('.menu-item').on('click', function() {
		menu.removeClass('active');
	});
}

function initPopup() {
	$('.opener-popup').on('click', function() {
	event.preventDefault();
	var popup = $(this).closest('.services-box');
		popup.addClass('active');
	});

	$('.close-popup').on('click', function() {
	event.preventDefault();
	var popup = $(this).closest('.services-box');
		popup.removeClass('active');
	});
}

function initMap() {
	var map;
	var mapConteiner = $('#map')[0];
	var mapCenter = {lat: 49.995702, lng: 36.338723};

	map = new google.maps.Map(mapConteiner, {
		center: mapCenter,
		zoom: 15,
		disableDefaultUI: true
	});
}
