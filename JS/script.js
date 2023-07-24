//! Modal Window
const btn_sign_in = document.querySelector('.sign-in')
const btn_close = document.querySelector('.modal__close')
const modal = document.querySelector('.modal')
const input = document.querySelectorAll('.modal__input')


btn_sign_in.addEventListener('click',()=> {
    modal.style.display = 'block'
    // console.log('Test');
})


btn_close.addEventListener("click", (e) => {
    modal.style.display = 'none'
})

 document.body.addEventListener("click", (e) => {
    if(e.target.className == 'modal') {
        modal.style.display = 'none'
    }
 })


// ! Navbar Languages
let lng = document.querySelector('.languages')
let dropdown = document.querySelector('.dropdown')
let openLng = false;

lng.addEventListener('click',(e) => {
    if (!openLng) { 
        dropdown.style.display = 'flex'
    }else{
        dropdown.style.display = 'none'
    }
    openLng = !openLng;

})

// ! WatchList
let btn_watch_list = document.querySelector('.watch-list')
let watch_modal = document.querySelector('.watch-modal')
let watch_close_btn = watch_modal.querySelector('.close-btn')
let openWatch = false;

btn_watch_list.addEventListener('click',() => {
    if (!openLng) { 
        watch_modal.style.display = 'block'
    }else{
        watch_modal.style.display = 'none'
    }
    openLng = !openLng;
})

watch_close_btn.addEventListener('click',()=>{
    watch_modal.style.display = 'none'
    openLng = !openLng;
})

//! Responsive Navbar
let hamburger = document.querySelector('.hamburger');
let logo_menu = document.querySelector('.logo-menu ');

let openMenu = false;

hamburger.addEventListener('click',() => {
    if(!openMenu){
        logo_menu.classList.add('mobile')
    }else{
        logo_menu.classList.remove('mobile')
    }
    openMenu = !openMenu;
})


