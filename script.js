function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    }
    else {
        menuBtn.className = "nav-menu";
    }

    menuBtn.addEventListener("click", (e) => {
        menuBtn.classList.remove("responsive");
        menuBtn.setAttribute("class", "nav-menu")
    })
}

// function myMenuFunction() {
//     var menuBtn = document.getElementById("myNavMenu");
//     menuBtn.classList.toggle("responsive");
// }


// Dark mode 
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// Typing Effect
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

// Scroll animation
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-text", { delay: 100 });
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });


sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

// Active link
const sections = document.querySelectorAll(".section[id]");

function ScrollActive() {
    const ScrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 30,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add(".active-link");
        }
        else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove(".active-link");
        }
    });
}
window.addEventListener("scroll", ScrollActive);

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    emailjs.sendForm('service_tpnim5t', 'template_ktuh3ql', this)
        .then(function () {
            alert('Email sent successfully!');
        }, function (error) {
            alert('Failed to send Email. Please try again.', error);
        });
});


// document.getElementById('col').addEventListener('submit', function(event) {
//     event.preventDefault();
//     emailjs.sendForm('manishwankhede1952002@gmail.com', 'manishwankhede1952002@gmail.com', this)
//     .then(function(response) {
//         console.log('Email sent!', response.status, response.text);
//         alert('Email sent successfully!');
//         }, function(error) {
//         console.error('Error sending email:', error);
//         alert('Oops! Something went wrong.');
//         }
//     );
// });