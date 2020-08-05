
{
    const welcomeMessage = () => {
        console.log("Pozdrawiam społeczność YouCode :)");
    }

    const hamburger = document.querySelector(".js-mobileMenu");
    const navItem = document.querySelectorAll(".nav__link");

    const toggleMobileMenu = () => {
        const menu = document.querySelector(".js-nav__list");
        const isOpened = hamburger.getAttribute("aria-expanded") === "true";
        hamburger.classList.toggle("mobileMenu--open", !isOpened);
        hamburger.setAttribute("aria-expanded", String(!isOpened));
        menu.classList.toggle("nav__list--open", !isOpened);
    };

    const mainCounter = document.querySelector(".js-counter");
    const ticketCounter = document.querySelector(".js-ticketCounter");

    const renderCounter = () => {
        const countDownDate = new Date("Feb 21, 2021 10:00:00").getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((distance % (1000 * 60)) / 1000);

        mainCounter.innerHTML =
            `
        <li class="counter__item">
            <span class="counter__number">${days}</span>
            <span class="counter__caption">days</span>
        </li>
        <li class="counter__item">
            <span class="counter__number">${hours}</span>
            <span class="counter__caption">hours</span>
        </li>
        <li class="counter__item">
            <span class="counter__number">${min}</span>
            <span class="counter__caption">min</span>
        </li>
        <li class="counter__item">
            <span class="counter__number">${sec}</span>
            <span class="counter__caption">sec</span>
        </li>
    `
        ticketCounter.innerHTML =
            `
        <li class="ticket__counterValue">
            <span class="ticket__counterNumber">${days}</span>
            <span class="ticket__counterCaption">days</span>
        </li>
        <li class="ticket__counterValue">
            <span class="ticket__counterNumber">${hours}</span>
            <span class="ticket__counterCaption">hours</span>
        </li>
        <li class="ticket__counterValue">
            <span class="ticket__counterNumber">${min}</span>
            <span class="ticket__counterCaption">min</span>
        </li>
        <li class="ticket__counterValue">
            <span class="ticket__counterNumber">${sec}</span>
            <span class="ticket__counterCaption">sec</span>
        </li>
    `
        return distance;
    };

    const renderExpiredCounter = () => {
        mainCounter.innerHTML =
            `
        <li class="ticket__counterValue">
            <span class="ticket__counterNumber">COUNTDOWN EXPIRED</span>
        </li>
    `;
        ticketCounter.innerHTML =
            `
        <li class="ticket__counterValue">
            <span class="ticket__counterNumber">COUNTDOWN EXPIRED</span>
        </li>
    `
    };

    const countDownInterval = () => {
        setInterval(() => {
            renderCounter();
            if (renderCounter() < 0) {
                clearInterval(countDownInterval);
                renderExpiredCounter();
            };
        }, 1000);
    };

    const onScrollNavStyleChange = () => {
        const header = document.querySelector(".js-nav")
        const navPosition = header.offsetTop;
        if (window.pageYOffset > navPosition) {
            header.classList.add("nav--onScroll");
        } else {
            header.classList.remove("nav--onScroll");
        }
        window.onscroll = onScrollNavStyleChange;
    };

    const init = () => {
        welcomeMessage();
        onScrollNavStyleChange();
        countDownInterval();
        hamburger.addEventListener('click', toggleMobileMenu);
        navItem.forEach(
            (item) => item.addEventListener("click", toggleMobileMenu)
        );
    };
    init();
};