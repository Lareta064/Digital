document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;
	const pageHeader = document.querySelector('.header');
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
	window.addEventListener('scroll', ()=>{
		if(window.scrollY > 40){
			pageHeader.classList.add('header-fixed');
		}
		else{
			pageHeader.classList.remove('header-fixed');
		}
	})

});