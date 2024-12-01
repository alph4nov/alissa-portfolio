const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	menulist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	menulist.classList.remove('open');
};

var typed = new Typed(".input", {
	strings:["Alissa Azmie.","CDCS2534B."],
	typeSpeed: 120,
	backSpeed: 70,
	loop:true
})

<script>
    document.querySelector('.contact-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        // Construct mailto link
        const mailtoLink = `mailto:alissazmie@gmail.com?subject=New%20Message%20From%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;

        // Open mail client
        window.location.href = mailtoLink;
    });
