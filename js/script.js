; (function () {
	"use strict";

	var iconMenu = document.querySelector('.icon-menu'),
		overlay = document.querySelector('.overlay'),
		body = document.body;

	iconMenu.addEventListener('click', function () {
		body.classList.toggle('menu-open');
		iconMenu.classList.toggle('_active')
	});

	overlay.addEventListener('click', function () {
		body.classList.toggle('menu-open');
		iconMenu.classList.toggle('_active')
	});

})();

