window.addEventListener('load', (e) => {
	if (window.innerWidth <= 500) {
		document.querySelector(
			'.mobile-footer'
		).innerHTML = `<a class='footer-atag' href='./views/signup.html'>JOIN US</a>
        <div>
            <div class="about">
                <h2>About TEDx</h2>
                <p>TED Talks</p>
                <p>Usage Policy</p>
                <p>Privacy Policy</p>
                <p>Help</p>
            </div>
            <div class="contact">
                <h2>Contact</h2>
                <div class="details">
                    <div>
                        <p>Babu Charles</p>
                        <p>Rohith</p>
                        <p>Naparajith</p>
                    </div>
                    <div>
                        <p>7358734561</p>
                        <p>7397385494</p>
                        <p>7550184309</p>
                    </div>
                </div>
            </div>
        </div>`;
	}
});
