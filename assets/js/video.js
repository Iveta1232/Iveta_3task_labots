
let insertAfter = document.querySelector('.chose-video-container');
let m=0;

for (let i = 19; i <= 99; i++) {
  addImages(i);
}

function addImages(i) {
  let a = document.createElement('a');
  a.href = '#';
  let img = document.createElement('img');
  img.src = 'assets/img/video-img-none.png';
  let text = document.createElement('p');
  a.classList.add('chose-video-container-iner');
  img.classList.add('video-container-iner-photo');
  text.classList.add('video-container-iner-text-next');
  text.classList.add('video-container-iner-text-add');
  a.style.cursor = 'default';

  insertAfter.appendChild(a);
  text.textContent = i;
  a.append(img);
  a.append(text);


  if (i >= 21) {
    if (900 >= window.innerWidth) {

      if (i >= 21 && i <= 40) {
        a.classList.add('js-first-hidden-block');
      }
      else if (i >= 41 && i <= 60) {
        a.classList.add('js-second-hidden-block');
      }
      else if (i >= 61 && i <= 80) {
        a.classList.add('js-third-hidden-block');
      }
      else if (i >= 81 && i <= 99) {
        a.classList.add('js-fourth-hidden-block');
      }
    }
  }
}


document.querySelector('.stasti-see-all-video').onclick = function(e) {
  e.preventDefault();
  m++;

  if (m == 1) {
    document.querySelectorAll('.chose-video-container .js-first-hidden-block').forEach(n => n.classList.remove('js-first-hidden-block'));
  }
  if (m == 2) {
    document.querySelectorAll('.chose-video-container .js-second-hidden-block').forEach(n => n.classList.remove('js-second-hidden-block'));
  }
  if (m == 3) {
    document.querySelectorAll('.chose-video-container .js-third-hidden-block').forEach(n => n.classList.remove('js-third-hidden-block'));
  }
  if (m == 4) {
    document.querySelectorAll('.chose-video-container .js-fourth-hidden-block').forEach(n => n.classList.remove('js-fourth-hidden-block'));
  }
};


let new_class = document.querySelectorAll('.chose-video-container .chose-video-container-iner');
let insertVideo = document.querySelector('modal-video');
let span = document.getElementsByClassName('close-modal')[0];


new_class.forEach(function(entry, index) {
let video_src = document.querySelector('.modal-video iframe')
  //new_class[index].setAttribute('id', 1+index+'-modal');

  new_class[index].onclick = function() {
    modal.style.display = "block";
    if (index == 0) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F667801507044573%2F&show_text=false&width=560";
    }
    else if (index == 1) { //nevar
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F1045591265802805%2F&show_text=false&width=560";
    }
    else if (index == 2) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F246173059854924%2F&show_text=false&width=560";
    }
    else if (index == 3) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2479558679035439%2F&show_text=false&width=560";
    }
    else if (index == 4) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F366661860920420%2F&show_text=false&width=560";
    }
    else if (index == 5) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F523010931805446%2F&show_text=false&width=560";
    }
    else if (index == 6) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F1448911495273524%2F&show_text=false&width=560";
    }
    else if (index == 7) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F391119238243150%2F&show_text=false&width=560";
    }
    else if (index == 8) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2498204853778440%2F&show_text=false&width=560";
    }
    else if (index == 9) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2355375954728669%2F&show_text=false&width=560";
    }
    else if (index == 10) { //nevar
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2567116616672068%2F&show_text=false&width=560";
    }
    else if (index == 11) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2644468722446960%2F&show_text=false&width=560";
    }
    else if (index == 12) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F1025361531138956%2F&show_text=false&width=560";
    }
    else if (index == 13) { //nevar
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F571571993652253%2F&show_text=false&width=560";
    }
    else if (index == 14) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F760974734366673%2F&show_text=false&width=560";
    }
    else if (index == 15) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2085262408449994%2F&show_text=false&width=560";
    }
    else if (index == 16) {
      video_src.src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2368016840121489%2F&show_text=false&width=560";
    }
    else {
      document.querySelector('.modal').style.display='none';
      document.querySelector('.modal').style.cursor='none';
    }
  }
});



let modal = document.getElementById('my-modal');

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
