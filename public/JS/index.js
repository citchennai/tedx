const hero = document.querySelector('.hero');
const largeHero = document.querySelectorAll('.hero .large');
const smallHero = document.querySelectorAll('.hero .small');

const parallax = (args, e) => {
	args.forEach((arg) => {
		const speed = arg.getAttribute('data-speed');
		const x = (e.pageX * speed) / 100;
		const y = (e.pageY * speed) / 100;
		arg.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
};

hero.addEventListener('mousemove', function (e) {
	parallax(largeHero, e);
	parallax(smallHero, e);
});
