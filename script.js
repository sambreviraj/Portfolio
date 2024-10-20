document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Rotating text
    const rotatingText = document.getElementById('rotating-text');
    const texts = [
        "Know a bit of Korean thanks to my interest in K-pop and K-dramas",
        "My phone gallery is filled with pictures of pretty things",
        "I love playing FIFA and watching Manchester United",
        "I clean my room three times a days",
        "I have a high tolerance for spicy food"
    ];
    let currentIndex = 0;

    function changeText() {
        rotatingText.style.opacity = 0;
        setTimeout(() => {
            rotatingText.textContent = texts[currentIndex];
            rotatingText.style.opacity = 1;
            currentIndex = (currentIndex + 1) % texts.length;
        }, 300);
    }

    setInterval(changeText, 3000);

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

//Took some help from AI in JavaScript but yes learn a lot of concepts.