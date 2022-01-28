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

// gsap
// 	.timeline({
// 		scrollTrigger: {
// 			trigger: '.begins',
// 			start: 'top 60%'
// 		}
// 	})
// 	.to(
// 		'.begins .bottom div .span5',
// 		{
// 			duration: 1,
// 			y: '-100%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'-=5'
// 	)
// 	.to(
// 		'.begins .bottom div .span4',
// 		{
// 			duration: 1,
// 			y: '-100%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>-.2'
// 	)
// 	.to(
// 		'.begins .bottom div .span4',
// 		{
// 			duration: 1,
// 			y: '-200%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>'
// 	)
// 	.to(
// 		'.begins .bottom div .span3',
// 		{
// 			duration: 1,
// 			y: '-100%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>-.2'
// 	)
// 	.to(
// 		'.begins .bottom div .span3',
// 		{
// 			duration: 1,
// 			y: '-200%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>'
// 	)
// 	.to(
// 		'.begins .bottom div .span2',
// 		{
// 			duration: 1,
// 			y: '-100%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>-.2'
// 	)
// 	.to(
// 		'.begins .bottom div .span2',
// 		{
// 			duration: 1,
// 			y: '-200%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>'
// 	)
// 	.to(
// 		'.begins .bottom div .span1',
// 		{
// 			duration: 1,
// 			y: '-100%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>-.2'
// 	)
// 	.to(
// 		'.begins .bottom div .span1',
// 		{
// 			duration: 1,
// 			y: '-200%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>'
// 	)
// 	.to(
// 		'.begins .bottom div .span0',
// 		{
// 			duration: 1,
// 			y: '-100%',
// 			ease: 'slow(0.7, 0.7, false)'
// 		},
// 		'>'
// 	)
// 	.to('.begins .bottom', { duration: 1, autoAlpha: 0, ease: 'power2.out' }, '>')
// 	.from(
// 		'.begins .top',
// 		{ duration: 3, autoAlpha: 0, ease: 'power2.out' },
// 		'>+1'
// 	);

const deadline = '2022-01-30';

function getTimeRemaining(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
		total,
		days,
		hours,
		minutes,
		seconds
	};
}

function initializeClock(clas, endtime) {
	const clock = document.querySelector(clas);
	const timeinterval = setInterval(() => {
		const t = getTimeRemaining(endtime);
		clock.innerHTML =
			`${t.days.toString().length == 1 ? '0' + t.days : t.days}` +
			' : ' +
			`${t.hours.toString().length == 1 ? '0' + t.hours : t.hours}` +
			' : ' +
			`${t.minutes.toString().length == 1 ? '0' + t.minutes : t.minutes}` +
			' : ' +
			`${t.seconds.toString().length == 1 ? '0' + t.seconds : t.seconds}`;
		if (t.total <= 0) {
			clearInterval(timeinterval);
			gsap
				.timeline()
				.to('.begins .bottom', {
					duration: 1,
					autoAlpha: 0,
					ease: 'power2.out'
				})
				.from(
					'.begins .top',
					{ duration: 3, autoAlpha: 0, ease: 'power2.out' },
					'>+1'
				);
		}
	}, 1000);
}

initializeClock('.begins .bottom', deadline);
