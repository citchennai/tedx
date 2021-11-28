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
            trigger: '.image-speaker',
        }
    })
    .to('.image-speaker', {
        duration: 1,
        y: 0,
        stagger: .1,
    })



const imagebelow = (divimage, width, height, top, bottom, right) => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: '.image-organizer',
                start: 'top 40%'
            }
        })
        .to(divimage, {
            duration: 1,
            width: width,
            height: height,
            top: top,
            bottom: bottom,
            right: right,
            stagger: .1,
        })
}

imagebelow('.red-div', '23%', '4rem', '-4%', "none", '5%');
imagebelow('.img-organizer', '65%', '13rem', "none", '6%', 'none');
imagebelow('.grey-div', '30%', '4rem', "50%", 'none', '13%');



const mainimage = (allimage, width, height, top, bottom, left, right) => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: '.image-border-right',
                start: 'top 40%'
            }
        })
        .to(allimage, {
            duration: 1,
            width: width,
            height: height,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            stagger: .1,
        })
}

mainimage(".image-border1", "50%", "18rem", "5%", "none", "none", "20%");
mainimage(".image-border2", "45%", "15rem", "30%", "none", "none", "0%");
mainimage(".image-border-dot1", "none", "none", "-6%", "none", "25%", "none");
mainimage(".image-border-dot2", "none", "none", "52%", "none", "none", "-5%");
