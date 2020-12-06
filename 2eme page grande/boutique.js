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

$(document).ready(function () {
    randomlyMoveImage();
});

function randomlyMoveImage() {
    var width = $('.dot-doc').width();
    var height = $('.dot-doc').height();

    var x = Math.floor((Math.random() * width));
    var y = Math.floor((Math.random() * height));
    $(".dot").animate({
        left: x,
        top: y
    }, 0, function () {
        // Animation complete.
    });

    setTimeout(randomlyMoveImage, 1500);
}

window.console = window.console || function (t) { };

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}

$(".button").click(function () {
    $(".social.twitter").toggleClass("clicked");
    $(".social.facebook").toggleClass("clicked");
    $(".social.instagram").toggleClass("clicked");
    $(".social.youtube").toggleClass("clicked");
    $(".instruction").toggleClass("clicked");
});

let pricing_table_select = document.getElementsByTagName('select')[0];
let price = document.getElementsByClassName('pricing-value-offres')[0];
pricing_table_select.addEventListener('change', () => {
    if (pricing_table_select.value === "20") {
        price.innerHTML = "€4.<span class='smallText'>99";
    } else if (pricing_table_select.value === "40") {
        price.innerHTML = "€6.<span class='smallText'>99";
    } else if (pricing_table_select.value === "60") {
        price.innerHTML = "€8.<span class='smallText'>99";
    }
})