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

