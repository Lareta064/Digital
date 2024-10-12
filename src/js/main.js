document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;
	const pageHeader = document.querySelector('.header');
	const menuToggle = document.querySelector('#menu-toggle');
	const headerMenu = document.querySelector('#menu');

	menuToggle.addEventListener('click', ()=> {
		
		if (menuToggle.classList.contains('active')) {
			 menuToggle.classList.remove('active');
			 headerMenu.classList.remove('active');
			 if(window.innerWidth < 1024){
				bodyEl.classList.remove('lock');
			 }
		
		} else {
			menuToggle.classList.add('active');
			headerMenu.classList.add('active');
			if(window.innerWidth < 1024){
				bodyEl.classList.add('lock');
			 }
		}
	});
	window.addEventListener('scroll', ()=>{
		if(window.scrollY > 40){
			pageHeader.classList.add('header-fixed');
		}
		else{
			pageHeader.classList.remove('header-fixed');
		}
	});
	
	let sliders = [];

	function initSwipers() {
		const screenWidth = window.innerWidth;
		const sliderElements = document.querySelectorAll('.swiper');

		sliderElements.forEach((sliderElement, index) => {
			if (screenWidth >= 599 && !sliders[index]) {
				// Инициализация Swiper для каждого слайдера
				sliders[index] = new Swiper(sliderElement, {
					slidesPerView: 'auto',
					spaceBetween: 15,
					speed: 1500,
					loop: true,
					autoplay: {
						delay: 1000,
						disableOnInteraction: false,
					},
					breakpoints: {
						1024: {
							spaceBetween: 25,
						},
						1199: {
							spaceBetween: 40,
						}
					}
				});
			} else if (screenWidth < 600 && sliders[index]) {
				// Уничтожаем Swiper для слайдера на экранах меньше 600px
				sliders[index].destroy(true, true);
				sliders[index] = undefined; // Сбрасываем объект слайдера

				// Убираем стили Swiper, чтобы слайды выстроились в колонку
				const slides = sliderElement.querySelectorAll('.swiper-slide');
				slides.forEach(slide => {
					slide.style.width = '100%';
				});
			}
		});
	}

	// Вызываем функцию при загрузке страницы и при изменении размера окна
	window.addEventListener('load', initSwipers);
	window.addEventListener('resize', initSwipers);

});