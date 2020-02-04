const btnToStart = document.querySelector('.landing__button');
const btnScrollToTop = document.querySelector('#btnScrollToTop');
const elm = document.querySelector('#start');

/*btnScrollToTop.addEventListener("click", ()=>{
    //window.scrollTo(0, 0);
    
    window.scrollTo({
       top: 60,
       left: 0,
       behavior: "smooth" 
    });

});*/
/* SCROLL UP / SCROLL DOWN */

btnToStart.addEventListener("click", () => scrollIt(elm));
btnScrollToTop.addEventListener("click", () => window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': 0
}));


function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}


/* DISPLAY / HIDE ARROW*/

const displayArrow = document.getElementById("btnScrollToTop");
window.addEventListener('scroll', () => {
    
    if (window.scrollY >= 1000) {
        displayArrow.style.display = "block";
    }
    if (window.scrollY < 1000) {
        displayArrow.style.display = "none";
    }
});


/*if (window.getComputedStyle(btnScrollToTop).display === "none" ){
    document.getElementById("btnScrollToTop").style.display = "block";
}*/
/*const rect = btnToStart.getBoundingClientRect();
console.log(rect.x);
console.log(DOMRect.height);
console.log(window.scrollY);*/