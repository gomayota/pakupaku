var mySwiper = new Swiper('.swiper-container', {
	autoplay: {
		delay: 8000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        arrows: false
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});