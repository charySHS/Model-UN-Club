// Toggle Navigation for Mobile
document.querySelector('.hamburger').addEventListener('click', function () {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        nav.style.display = 'flex';
        setTimeout(() => {
            nav.style.opacity = '1';
        }, 10);
    } else {
        nav.style.opacity = '0';
        setTimeout(() => {
            nav.style.display = 'none';
        }, 300);
    }
});

// Ensure JavaScript is correctly loading
console.log("Script Loaded!");

// Fix fade-in animations
document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    fadeIns.forEach(section => observer.observe(section));
});


// Hero Button Click Effect
function learnMore() {
    const button = document.querySelector("button");
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
        alert("Join us for an amazing MUN experience!");
    }, 200);
}

// Ensure JavaScript is correctly loading
console.log("Script Loaded");


