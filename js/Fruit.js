/* <!--==================== MENU ====================--> */
let apps = document.getElementById('apps'),
close = document.getElementById('close'),
list = document.getElementById('list');
function toggle(){
    apps.classList.toggle('d-none')
    close.classList.toggle('d-none')
    list.classList.toggle('top-0')
}   
apps.addEventListener('click',toggle)
close.addEventListener('click',toggle)
/* <!--=========== Shadow NavBar && Scroll UP ==============--> */
let navbar = document.querySelector('nav'),
    btnScroll = document.getElementById('btnScroll');
btnScroll.onclick = ()=> {scroll({top:0})}
onscroll = ()=>{
    if (scrollY >= 300) {
        navbar.classList.add('shadow-sm')
        btnScroll.classList.add('bottom-0') 
    } else {
        navbar.classList.remove('shadow-sm')
        btnScroll.classList.remove('bottom-0')
    }
}
/* <!--=========== Dark && Light Theme ==============--> */
let moon = document.getElementById('moon'),
    sun = document.getElementById('sun');
function FindThemeMood(mood){
    localStorage.FruitTheme = JSON.stringify(mood)
    ThemMood()
}
function ThemMood(){
    if (localStorage.FruitTheme != null) {        
        let moodTheme = JSON.parse(localStorage.FruitTheme)
        if (moodTheme === 'moon') {
            sun.classList.remove('d-none')
            moon.classList.add('d-none')
            document.body.classList.add('dark_Theme')
        } else {
            sun.classList.add('d-none')
            moon.classList.remove('d-none')
            document.body.classList.remove('dark_Theme')
        }
    }
}
ThemMood()
/* <!--=========== ScrollReveal ==============--> */
let commun = {
    distance :'90px',
    duration :1000,
    reset :true,
}
let scrX = ScrollReveal({
    ...commun,
    origin :'top'
});
scrX.reveal('.home h1, .home p, .home .btn, .home .main, .box, .join .container',{interval:150});
let scr_YR = ScrollReveal({
    ...commun,
    origin :'right'
});
scrX.reveal('.about_text',{delay:300});
let scr_YL = ScrollReveal({
    ...commun,
    origin :'left'
});
scrX.reveal('.about .main',{delay:300});
