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
	});

	let serviceSlider;

	function initSwiper() {
		const screenWidth = window.innerWidth;

		if (screenWidth >= 599 && !serviceSlider) {
			// Инициализация Swiper на экранах больше или равных 768px
			serviceSlider = new Swiper('.cards-swiper', {
				slidesPerView: 'auto',
				spaceBetween: 15,
				speed: 1500,
				loop:true,
				autoplay:{
					delay: 1000,
					disableOnInteraction: false,
				},
				responsive:{
					1024:{
						spaceBetween: 25,
					},
					1199:{
						spaceBetween: 40,
					}
				}
			});
		} else if (screenWidth < 600 && serviceSlider) {
			// Уничтожаем Swiper на экранах меньше 768px
			serviceSlider.destroy(true, true);
			serviceSlider = undefined; // Сбрасываем объект слайдера
			// Убираем стили Swiper, чтобы слайды выстроились в колонку
			const slides = document.querySelectorAll('.swiper-slide');
			slides.forEach(slide => {
				slide.style.width = '100%';
				
			});
		}
	}

	// Вызываем функцию при загрузке страницы и при изменении размера окна
	window.addEventListener('load', initSwiper);
	window.addEventListener('resize', initSwiper);

});