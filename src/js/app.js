import * as flsFunctions from './modules/functions.js';
import $ from "jquery";

flsFunctions.iswebp();

import Swiper, {Navigation, Pagination} from 'swiper';

const swiper = new Swiper();


const navLink = document.querySelectorAll('.nav__link');
const plas = document.querySelectorAll('.plas');
navLink.forEach(item=>{
    item.addEventListener('click', ()=>{
        let block=document.querySelector('.active')?.classList.remove('active');
        item.classList.add('active');
    })
    
})

const navLinkMedia = document.querySelectorAll('.nav__link-media');
const plasMedia = document.querySelectorAll('.plas');
navLinkMedia.forEach(item=>{
    item.addEventListener('click', ()=>{
        let block=document.querySelector('.active01')?.classList.remove('active01');
        item.classList.add('active01');
    })
    
})

/* ------------------------------------menu-------------------------------- */

let menuBtn = document.querySelector('.header__menu');
let mediaMenu=document.querySelector('.header__media-menu');

menuBtn.addEventListener('click', function(){
	if(mediaMenu.classList[1]==='media-active'){
		mediaMenu?.classList.remove('media-active');
	}else{
		mediaMenu?.classList.add('media-active');
	}
})

/* ------------------------------------language-------------------------- */


let select = function(){
    let selectHeader=document.querySelectorAll('.select__header');
    let selectItem=document.querySelectorAll('.select__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose)
    });

    function selectToggle(){
        this.parentElement.classList.toggle('is_active')
    };

    function selectChoose (){
        let text = this.innerHTML,
            select=this.closest('.select'),
            currentText=select.querySelector('.select__current');
            currentText.innerHTML=text;
            select.classList.remove('is_active')
    }

};

select();


let searchClick=document.querySelector('.header__search'),
	social= document.querySelector('.social'),
	leng=document.querySelector('.lang-block');

	searchClick.addEventListener('click', function(){
		leng?.classList.add('lang-active');
		social?.classList.add('lang-active');
		searchClick?.classList.add('lang-active');
		document.querySelector('.header__search-block')?.classList.remove('lang-active');
	});


let closeLang=document.querySelector('.close__lange');

closeLang.addEventListener('click', function(){
	leng?.classList.remove('lang-active');
	social?.classList.remove('lang-active');
	searchClick?.classList.remove('lang-active');
	document.querySelector('.header__search-block')?.classList.add('lang-active');
})


/* --------------------slider------------------------------------------ */
const slides =document.querySelectorAll('.slide-list'),
		dots=document.querySelectorAll('.slide-dot');

let index=0;

const activeSlide= n =>{
	for( let slide of slides){
	  slide.classList.remove('slide-active')
	}
	slides[n].classList.add('slide-active');
	slides[n].style.opacity = 0;
	setTimeout(() => slides[n].style.opacity = 1, 100)
	}

const activeDot= n =>{
	for(let dot of dots){
		dot.classList.remove('slide-active')
	}
	dots[n].classList.add('slide-active')
	}

	const nextSlide=()=>{
		if(index==slides.length-1){
			index=0;
			activeDot(index)
			activeSlide(index)
		}else{
			index++;
			activeDot(index);
			activeSlide(index)
		}
	}

	const prevSlide=()=>{
		if(index==0){
			index=slides.length-1;
			activeDot(index)
			activeSlide(index)
		}else{
			index--;
			activeDot(index);
			activeSlide(index)
		}
	}

	dots.forEach((item, indexDot)=>{
		item.addEventListener('click', ()=>{
			index=indexDot;
			activeDot(index);
			activeSlide(index)
		})
	})



/* --------------------------------------modal--------------------------------- */

let body = document.querySelector('body');

function bodyLock() {
	const lockPaddingValue =
	  window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
	body.style.paddingRight = lockPaddingValue;
	body.classList.add("lock");
 }
 function bodyUnlock() {
	setTimeout(function () {
	  body.style.paddingRight = "0px";
	  body.classList.remove("lock");
	}, 100);
 }

if ($('#main-body').length > 0) {


	window.onload = function () {
		 modalExit();
	};
	

	let inputs = document.querySelectorAll('input');

	for (let i = 0; i < inputs.length; i++) {
		 inputs[i].addEventListener('change', function () {
			  let activeInput = inputs[i];
			  
			  if (activeInput.classList.contains('form__input-phone')) {
					if (activeInput.value.includes('_')) {
						 return; 
					}
					else {
						 activeInput.classList.remove('validate')
					}
			  }
			  if (activeInput.classList.contains('form__input-email')) {
					let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					if (reg.test(activeInput.value) == false) {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
			  if (activeInput.classList.contains('form__input-name')) {
					if (activeInput.value == '') {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
			  if (activeInput.classList.contains('form__input-city')) {
					if (activeInput.value == '') {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
		 })
	}
 


	//Popup

	let presentationBtn = document.querySelectorAll('.top-btn');
	let phoneBtn = document.querySelectorAll('.modal-phone');
	let politicyBtn = document.querySelectorAll('.politicy');

	let popupPresentation = document.querySelector('.popup-franchising');
	let popupPhone = document.querySelector('.popup-phone');
	let popupPoliticy = document.querySelector('.popup-politicy');

	presentationBtn.forEach(item => {
		item.addEventListener('click', () => {
			presentation();
	  });
	})
	

	function presentation() {
		 let popupPresentation = document.querySelector('.popup-franchising');
		 let body = document.querySelector('body');
		 popupPresentation.classList.add('is-active');
		 bodyLock()
		 if (popupPresentation.classList.contains('is-active')) {
			  body.addEventListener('keydown', function (e) {
					if (e.keyCode === 27) {
						 popupPresentation.classList.remove('is-active');
						 bodyUnlock() 
					}
			  })
		 }
	}

	for (let p = 0; p < politicyBtn.length; p++) {
		 politicyBtn[p].addEventListener('click', function () {
			  popupPoliticy.classList.add('is-active');
			  bodyLock()
			  if (popupPoliticy.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPoliticy.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
		 })
	}

	for (let p = 0; p < phoneBtn.length; p++) {
		 phoneBtn[p].addEventListener('click', function () {
			  popupPhone.classList.add('is-active');
			  bodyLock()
			  if (popupPhone.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPhone.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
		 })
	}
	

	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupPresentation.classList.remove('is-active');
			  popupPoliticy.classList.remove('is-active');
			  popupPhone.classList.remove('is-active');
			  bodyUnlock()
		 }
	})



}



function politicy() {
	let politicyBtn = document.querySelectorAll('.politicy');
	let popupPoliticy = document.querySelector('.popup-politicy');
	let body = document.querySelector('body');

	for (let p = 0; p < politicyBtn.length; p++) {
		 politicyBtn[p].addEventListener('click', function (m) {
			  let targetM = m.target;
			  popupPoliticy.classList.add('is-active');
			  body.classList.add('no-scroll');
			  if (popupPoliticy.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPoliticy.classList.remove('is-active');
							  body.classList.remove('no-scroll');
						 }
					})
			  }
		 })
	}

	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupPoliticy.classList.remove('is-active');
			  body.classList.remove('no-scroll');
		 }
	})
}

function modalExit() {
	let popupExit = document.querySelector('.popup-exit');
	let body = document.querySelector('body');
	let count = 0
	$(document).mouseleave(function (e) {
		 if (count > 0) {
			  return
		 }
		 if (e.clientY < 10) {
			  popupExit.classList.add('is-active');
			  bodyLock() 
			  if (popupExit.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupExit.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
			  count++;
		 }
	})
	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupExit.classList.remove('is-active');
			  bodyUnlock() 
		 }
	})
}


politicy();