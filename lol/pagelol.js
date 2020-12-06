function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}

let carousel1 = document.getElementById('carousel_elems1').getElementsByTagName('li');
let button_devr1 = document.getElementById('button_devr1');
let carousel_slide1;

button_devr1.addEventListener('click', function () {

    for (let i = 0; i < carousel1.length; i++) {
        console.log('opps');
        if (carousel1[i].getAttribute("class") === "active") {
            carousel_slide1 = document.getElementsByClassName('carousel_slide1')[i];
            document.getElementsByClassName('carousel_slide1')[i].classList.add("active");
            $("#unlock-modal1").on('hide.bs.modal', function () {
                document.getElementsByClassName('carousel_slide1')[i].classList.remove('active');
            });
        }
    }

});

let carousel2 = document.getElementById('carousel_elems2').getElementsByTagName('li');
let button_devr2 = document.getElementById('button_devr2');
let carousel_slide2;

button_devr2.addEventListener('click', function () {
    for (let i = 0; i < carousel2.length; i++) {
        if (carousel2[i].getAttribute("class") === "active") {
            carousel_slide2 = document.getElementsByClassName('carousel_slide2')[i];
            document.getElementsByClassName('carousel_slide2')[i].classList.add("active");
            $("#unlock-modal2").on('hide.bs.modal', function () {
                document.getElementsByClassName('carousel_slide2')[i].classList.remove('active');
            });
        }
    }

});

let carousel3 = document.getElementById('carousel_elems3').getElementsByTagName('li');
let button_devr3 = document.getElementById('button_devr3');
let carousel_slide3;

button_devr3.addEventListener('click', function () {
    for (let i = 0; i < carousel3.length; i++) {
        if (carousel3[i].getAttribute("class") === "active") {
            carousel_slide3 = document.getElementsByClassName('carousel_slide3')[i];
            document.getElementsByClassName('carousel_slide3')[i].classList.add("active");
            $("#unlock-modal3").on('hide.bs.modal', function () {
                document.getElementsByClassName('carousel_slide3')[i].classList.remove('active');
            });
        }
    }

});