
const btnBurger = document.querySelector('.btn-burger');
const btnReturn = document.querySelector('.btn-close');
const headerNav = document.querySelector('header');
const playIcon = document.querySelector('.header-image-play');
const changeLang = document.querySelector('.change-language');
const menuLink = document.getElementsByClassName('link');


let headerMenu = document.querySelector('.header-nav-bar');
let mobLang = document.querySelector('.lang-for-mob');
let headerImage = document.querySelector('.header-image');
let checkBox = document.querySelector('#checkbox');
let submitButton = document.querySelector('.contact-form-submit-button');

let buttt = document.querySelector('.piesaki-sapni-form');

let submit_piesaki_sapni = document.querySelector('.piesaki-sapni-submit');

function clickSubmit() {
  if (checkBox.checked == true) {
    submitButton.classList.remove('disabled');
  } else {
    submitButton.classList.add('disabled');
  }
}

let hoverLink = document.querySelector('.header-nav-bar a');



console.log(document.title);
if (document.title == 'Ideja') {
  document.querySelector('.ideja').classList.add('hover');


let position = 0;
const slidesToShow = 2;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


const btn_next = document.querySelector('.next');
const btn_prev = document.querySelector('.previous');
let count = 0;


btn_next.addEventListener('click', () => {
  count++;

  if (count == 1) {
    btn_prev.classList.remove('js-btn-disabled');
    btn_next.classList.add('js-btn-disabled');
  }

  const itemsRight = itemsCount + (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsRight >= slidesToShow ? movePosition : itemsRight * itemWidth;

  setPosition();
//checkBtns();
});


btn_prev.addEventListener('click', () => {
  count--;

  if (count == 0) {
    btn_next.classList.remove('js-btn-disabled');
    btn_prev.classList.add('js-btn-disabled');
  }

  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth;

  setPosition();
//checkBtns();
});


const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

/*
const checkBtns = () => {
  if (position === 0) {
    btn_prev.disabled;
  }
  else if (position <= -(itemsCount - slidesToShow) * itemWidth) {
    btn_next.style.pointer="disabled";
  }

};
*/
//checkBtns();



}
if (document.title == 'Piesaki sapni') {
  document.querySelector('.piesaki-sapni').classList.add('hover');
}
if (document.title == 'Uzņēmējiem') {
  document.querySelector('.uznemejiem').classList.add('hover');
}
if (document.title == 'Sapņu banka') {
  document.querySelector('.sapnu-banka').classList.add('hover');
}
if (document.title == 'Sapņus atbalsta') {
  document.querySelector('.sapnus-atbalsta').classList.add('hover');


  let first_selection = document.querySelector('#uznemuma-vieta');
  let second_selection = document.querySelector('#uznemuma-veids');

  first_selection.addEventListener('change', () => {
      mapChanger();
  });

  second_selection.addEventListener('change', () => {
      mapChanger();
  });

  function mapChanger() {
    if (first_selection.selectedIndex == '1' && second_selection.selectedIndex == '1') {
      document.querySelector('.container-for-riga').classList.remove('js-hidden-map');
      document.querySelector('.map-container').classList.add('js-margin-bottom');
    }
    else {
      document.querySelector('.container-for-riga').classList.add('js-hidden-map');
      document.querySelector('.map-container').classList.remove('js-margin-bottom');
    }
  }


}
if (document.title == 'Iedvesmas stāsti') {
  document.querySelector('.iedvesmas-stasti').classList.add('hover');
}



document.querySelector('.header-image-play').onclick = function() {
  this.style.display = 'none';
  headerImage.style.display = 'none';
  document.querySelector('.video').style.display = 'block';
  document.querySelector('iframe.facebook-video')
    .src="https://www.facebook.com/plugins/video.php?height=722&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2368016840121489%2F&show_text=false&width=1366";
};


document.querySelector('.video-container-img-play').onclick = function() {
  this.style.display = 'none';
  document.querySelector('.video-container-img').style.display = 'none';
  document.querySelector('.sapnu-banka-video').style.display = 'block';
  document.querySelector('iframe.sapnu-banka-fb-video')
    .src="https://www.facebook.com/plugins/video.php?height=769&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2368016840121489%2F&show_text=false&width=1366";
};



const openMenu = () => {
  btnBurger.classList.remove('btn-active');
  btnBurger.classList.add('btn-hide');
  btnReturn.classList.remove('btn-hide');
  playIcon.classList.add('btn-hide');
  headerNav.classList.add('open-header-menu');

  headerMenu.style.display='flex';
  mobLang.style.display='flex';
  document.querySelector('.header-backgr').classList.add('header-container');

  document.querySelector('header').style.position='relative';
  document.querySelector('main').style.display='none';
  document.querySelector('footer').style.display='none';
  
  if (document.title == 'Sapņus atbalsta') {
    document.getElementById('map').style.display='none';
  }

}

const closeMenu = () => {
  btnBurger.classList.add('btn-active');
  btnBurger.classList.remove('btn-hide');
  btnReturn.classList.add('btn-hide');
  playIcon.classList.remove('btn-hide');
  headerNav.classList.remove('open-header-menu');

  headerMenu.style.display='none';
  mobLang.style.display='none';
  document.querySelector('.header-backgr').classList.remove('header-container');

  document.querySelector('header').style.position='fixed';
  document.querySelector('main').style.display='block';
  document.querySelector('footer').style.display='block';
  
    if (document.title == 'Sapņus atbalsta') {
    document.getElementById('map').style.display='block';
  }
}

btnBurger.addEventListener('click', openMenu);
btnReturn.addEventListener('click', closeMenu);


function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back-to-top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back-to-top-show');
  }
}


function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 10);
  }
}

let goTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);



function closeAll(e) {
  closeMenu();
}
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', closeAll);
}
