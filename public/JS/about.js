gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".heading-div");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        // markers: true,
        // snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
    }
});


gsap
    .timeline({
        scrollTrigger: {
            trigger: ".images-speakers-main-div",
            start: "top 40%"
        }
    })
