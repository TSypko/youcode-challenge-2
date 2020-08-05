
const btn = document.querySelector('.mobileMenu');
const menu = document.querySelector('.nav__list');

btn.addEventListener('click', function () {
    const isOpened = btn.getAttribute('aria-expanded') === 'true';
    btn.classList.toggle('mobileMenu_open', !isOpened);
    btn.setAttribute('aria-expanded', String(!isOpened));
    menu.classList.toggle('nav__list--open', !isOpened);
});

const countDownDate = new Date("Feb 21, 2021 10:00:00").getTime();

const countDownInterval = setInterval(() => {

    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((distance % (1000 * 60)) / 1000);

    const mainCounter = document.querySelector(".js-counter");
    const ticketCounter = document.querySelector(".js-ticketCounter");

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

    if (distance < 0) {
        clearInterval(countDownInterval);
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
        `;
    }
}, 1000);