const Btn = document.querySelectorAll('.btn');
const content = document.querySelectorAll('.modeContent');
Btn.forEach(e => {
    e.addEventListener('click', function () {
       Btn.forEach(e => {e.classList.remove('active')});
        document.querySelector(`.${this.classList[0]}`).classList.add('active');
        content.forEach(e => {
            console.log(e);
            e.style.display = 'none';
        });
        document.querySelector(`.${this.classList[0]}-content`).style.display = 'block';

    })
})


const readbtn = document.querySelectorAll('.readMore')
const contentBox = document.querySelectorAll('.pAll')
readbtn.forEach(btn => {
    btn.addEventListener('click',e => {
        const count = e.target.getAttribute('count')
        contentBox[parseInt(count)].classList.toggle('active')

        console.log(contentBox[parseInt(count)].getAttribute('clicked'));
        if(contentBox[parseInt(count)].getAttribute('clicked') == 'false') {
            e.target.innerHTML = 'Read less'
            contentBox[parseInt(count)].style.height = 'auto'
            contentBox[parseInt(count)].setAttribute('clicked','true')
            console.log(contentBox[parseInt(count)].getAttribute('clicked'));
        } else {
            contentBox[parseInt(count)].style.height = '250px'
            e.target.innerHTML = 'Read more'
            contentBox[parseInt(count)].setAttribute('clicked','false')
        }
    
        
    })
})

const animate =(class1) => {
 
gsap.timeline(
    {
        scrollTrigger: {
			trigger: class1,
			start: 'top 70%',

         
            
            // scrub: true,
            // pin: true

		}
    }
).to(class1,{
    duration: .3,
    backgroundColor: 'red',
    color: 'white',
    ease: 'ease-in-out'

})

// gsap.timeline(
//     {
//         scrollTrigger: {
// 			trigger: class1,
// 			start: 'top 30%',
            
//             // scrub: true,
//             // pin: true

// 		}
//     }
// ).to(class1,{
//     duration: .3,
//     backgroundColor: 'white',
//     color: 'black',
//     ease: 'ease-in-out'

// })
}
animate('.c1')
animate('.c2')
animate('.c3')
animate('.c4')
animate('.c5')
