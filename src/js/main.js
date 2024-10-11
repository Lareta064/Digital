document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;
	const menuToggle = document.querySelector('#menu-toggle');
	const headerMenu = document.querySelector('#menu');

	menuToggle.addEventListener('click', ()=> {
		
		if (menuToggle.classList.contains('active')) {
			 menuToggle.classList.remove('active');
			 headerMenu.classList.remove('active');
			
		
		} else {
			menuToggle.classList.add('active');
			headerMenu.classList.add('active');
			
			
		}
	});

});