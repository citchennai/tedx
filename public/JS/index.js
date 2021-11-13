// const hero = document.querySelector('.hero');
// const largeHero = document.querySelectorAll('.hero .large');
// const smallHero = document.querySelectorAll('.hero .small');

// const parallax = (args, e) => {
// 	args.forEach((arg) => {
// 		const speed = arg.getAttribute('data-speed');
// 		const x = (e.pageX * speed) / 100;
// 		const y = (e.pageY * speed) / 100;
// 		arg.style.transform = `translateX(${x}px) translateY(${y}px)`;
// 	});
// };

// hero.addEventListener('mousemove', function (e) {
// 	parallax(largeHero, e);
// 	parallax(smallHero, e);
// });

const onloadGsap = (className1, className2) => {
	gsap
		.timeline()
		.from(className1, {
			duration: 1.5,
			scale: 0,
			ease: 'power2.out'
		})
		.from(
			className2,
			{
				duration: 1.5,
				scale: 0,
				ease: 'power2.out'
			},
			'-=1.5'
		);
};

onloadGsap('.hero .top-left .large', '.hero .top-left .small');
onloadGsap('.hero .top-right .large', '.hero .top-right .small');
onloadGsap(
	'.hero .bottom .bottom-left .large',
	'.hero .bottom .bottom-left .small'
);
onloadGsap('.hero .bottom .bottom-left-2 .large', 'd');
onloadGsap(
	'.hero .bottom .bottom-right .large',
	'.hero .bottom .bottom-right .small'
);
onloadGsap(
	'.hero .bottom .bottom-right-2 .large',
	'.hero .bottom .bottom-right-2 .small'
);

console.log(document.querySelector('.begins .bottom span').innerText);

gsap
	.timeline({
		scrollTrigger: {
			trigger: '.begins',
			start: 'top top'
		}
	})
	.from('.begins .top', { duration: 5, autoAlpha: 0, ease: 'power2.out' })
	.to(
		'.begins .bottom div .span5',
		{
			duration: 1,
			y: '-100%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'-=5'
	)
	.to(
		'.begins .bottom div .span4',
		{
			duration: 1,
			y: '-100%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>-.2'
	)
	.to(
		'.begins .bottom div .span4',
		{
			duration: 1,
			y: '-200%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>'
	)
	.to(
		'.begins .bottom div .span3',
		{
			duration: 1,
			y: '-100%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>-.2'
	)
	.to(
		'.begins .bottom div .span3',
		{
			duration: 1,
			y: '-200%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>'
	)
	.to(
		'.begins .bottom div .span2',
		{
			duration: 1,
			y: '-100%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>-.2'
	)
	.to(
		'.begins .bottom div .span2',
		{
			duration: 1,
			y: '-200%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>'
	)
	.to(
		'.begins .bottom div .span1',
		{
			duration: 1,
			y: '-100%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>-.2'
	)
	.to(
		'.begins .bottom div .span1',
		{
			duration: 1,
			y: '-200%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>'
	)
	.to(
		'.begins .bottom div .span0',
		{
			duration: 1,
			y: '-100%',
			ease: 'slow(0.7, 0.7, false)'
		},
		'>'
	);
