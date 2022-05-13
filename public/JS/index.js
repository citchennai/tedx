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

// const eventDay = moment('25-05-2022');
// const now = moment();
// const timeSpan = eventDay.diff(now);

// let dayField = document.querySelector('#hc-days');
// let hourField = document.querySelector('#hc-hours');
// let minuteField = document.querySelector('#hc-minutes');
// let secondField = document.querySelector('#hc-seconds');

// let interval;

// // Convert to milisecond
// const second = 1000;
// const minute = second * 60;
// const hour = minute * 60;
// const day = hour * 24;

// const countDownFn = () => {
// 	const today = moment();
// 	console.log(today);
// 	const timeSpan = eventDay.diff(today);

// 	if (timeSpan <= -today) {
// 		console.log('Unfortunately we have past the event day');
// 		clearInterval(interval);
// 		return;
// 	} else if (timeSpan <= 0) {
// 		console.log('Today is the event day');
// 		clearInterval(interval);
// 		return;
// 	} else {
// 		const days = Math.floor(timeSpan / day);
// 		const hours = Math.floor((timeSpan % day) / hour);
// 		const minutes = Math.floor((timeSpan % hour) / minute);
// 		const seconds = Math.floor((timeSpan % minute) / second);
// 		dayField.innerHTML = days;
// 		hourField.innerHTML = hours;
// 		minuteField.innerHTML = minutes;
// 		secondField.innerHTML = seconds;
// 	}
// };

// interval = setInterval(countDownFn, second);

let dayField = document.querySelector('#hc-days');
let hourField = document.querySelector('#hc-hours');
let minuteField = document.querySelector('#hc-minutes');
let secondField = document.querySelector('#hc-seconds');
(function () {
	var timeElement, eventTime, currentTime, duration, interval, intervalId;

	interval = 1000; // 1 second

	// get time element
	timeElement = document.querySelector('time');
	// calculate difference between two times
	eventTime = moment.tz('2022-05-25T00:00:00', 'America/Los_Angeles');
	// based on time set in user's computer time / OS
	currentTime = moment.tz();
	// get duration between two times
	duration = moment.duration(eventTime.diff(currentTime));

	// loop to countdown every 1 second
	setInterval(function () {
		// get updated duration
		duration = moment.duration(duration - interval, 'milliseconds');

		// if duration is >= 0
		if (duration.asSeconds() <= 0) {
			clearInterval(intervalId);
			// hide the countdown element
			// timeElement.classList.add('hidden');
			console.log('Event Day');
		} else {
			// otherwise, show the updated countdown
			dayField.innerHTML = duration.days();
			hourField.innerHTML = duration.hours();
			minuteField.innerHTML = duration.minutes();
			secondField.innerHTML = duration.seconds();
		}
	}, interval);
})();
