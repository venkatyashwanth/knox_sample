window.addEventListener('scroll', reveal);
function reveal() {
    let animatedElement = document.getElementById('animatedElement');
    // text-animation
    let textAnim = document.getElementById('textAnimation');
    var windowheight = window.innerHeight;
    var revealTop = animatedElement.getBoundingClientRect().top;
    var revealPoint = 10;
    if (revealTop < windowheight - revealPoint) {
        animatedElement.classList.add('reveal');
        textAnim.classList.add('reveal');
        horizontalLines.classList.add('reveal');
    } else {
        animatedElement.classList.remove('reveal');
        textAnim.classList.remove('reveal');
        horizontalLines.classList.remove('reveal');
    }
}

window.addEventListener('scroll', reveal1);
function reveal1() {
    //our journey
    let horizontalLines = document.getElementById('horizontalLines');
    var windowheight = window.innerHeight;
    var revealTop = horizontalLines.getBoundingClientRect().top;
    var revealPoint = 10;
    if (revealTop < windowheight - revealPoint) {
        horizontalLines.classList.add('reveal');
    } else {
        horizontalLines.classList.remove('reveal');
    }
}


// link - slider
let linkElement1 = document.getElementById("linkElement1");

function callback1() {
    linkElement1.classList.add('showItem');
}
function callback2() {
    linkElement1.classList.remove('showItem');
}
linkElement1.onmouseover = callback1;
linkElement1.onmouseleave = callback2;


//number incrementer 

window.addEventListener('scroll', reveal2);
function reveal2() {
    //our journey
    let num1 = document.getElementById('num1');
    var windowheight = window.innerHeight;
    var revealTop = num1.getBoundingClientRect().top;
    var revealPoint = 10;
    if (revealTop < windowheight - revealPoint) {
        num1.classList.add('reveal');
        val = parseInt(num1.textContent);
        let inter1 = setInterval(() => {
            if (val < 48) {
                val++;
            }
            num1.textContent = `${val}+`;
            if (val >= 48) {
                clearInterval(inter1);
            }
        }, 60);

    } else {
        num1.classList.remove('reveal');
        num1.textContent = 0;
    }
}

window.addEventListener('scroll', reveal3);
function reveal3() {
    //our journey
    let num2 = document.getElementById('num2');
    let num3 = document.getElementById('num3');
    
    var windowheight = window.innerHeight;
    var revealTop = num2.getBoundingClientRect().top;
    var revealPoint = 10;
    if (revealTop < windowheight - revealPoint) {
        num2.classList.add('reveal');
        num3.classList.add('reveal');
        let val = parseInt(num2.textContent);
        let inter2 = setInterval(() => {
            if (val < 50) {
                val++;
            }
            num2.textContent = `${val}%`;
            if (val >= 50) {
                clearInterval(inter2);
            }
        }, 40);

    } else {
        num2.classList.remove('reveal');
        num3.classList.remove('reveal');
        num2.textContent = 0;
    }
}


window.addEventListener('scroll', reveal4);
function reveal4() {
    let animatedElementa = document.getElementById('animatedElement1');
    // text-animation
    var windowheight = window.innerHeight;
    var revealTop = animatedElementa.getBoundingClientRect().top;
    var revealPoint = 10;
    if (revealTop < windowheight - revealPoint) {
        animatedElementa.classList.add('reveal');
    } else {
        animatedElementa.classList.remove('reveal');
    }
}

window.addEventListener('scroll', reveal5);
function reveal5(){
    let paragraphitem = document.getElementById('paragraphitem');
    // text-animation
    var windowheight = window.innerHeight;
    var revealTop = paragraphitem.getBoundingClientRect().top;
    var revealPoint = 10;
    if (revealTop < windowheight - revealPoint) {
        paragraphitem.classList.add('reveal');
    } else {
        paragraphitem.classList.remove('reveal');
    }
}


// Header menu toggler
let openMenuIcon = document.getElementById('openMenuIcon');
let closeMenuIcon = document.getElementById("closeMenuIcon");


openMenuIcon.addEventListener('click',function(){
    let navigationMenu = document.getElementById("navigationMenu");
    navigationMenu.classList.toggle('open');
})

closeMenuIcon.addEventListener('click',function(){
    let navigationMenu = document.getElementById("navigationMenu");
    navigationMenu.classList.toggle('open');
})