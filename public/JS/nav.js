lastScroll = 0;
window.addEventListener('scroll', () => {
	let currentScroll = window.scrollY;
	if (currentScroll > lastScroll) {
		document.querySelector('.nav').style.transform = `translateY(${-100}%)`;
	} else {
		document.querySelector('.nav').style.transform = `translateY(${0}%)`;
	}
	lastScroll = currentScroll;
});
