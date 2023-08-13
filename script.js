document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            const targetOffsetTop = target.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollToPosition = targetOffsetTop - (windowHeight / 2) + (target.offsetHeight / 2);

            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth"
            });
        });
    });
});


