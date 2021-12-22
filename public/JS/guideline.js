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