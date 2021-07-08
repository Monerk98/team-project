import './sass/main.scss';

//========= плавный скролл по якорям =======
function runSmothLinks() {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}

runSmothLinks();
//==========END плавный скролл по якорям=========

//=======кнопка Up adn Down===========
var $heightResize = $(window).height();
$(window).resize(function () {
  $heightResize = $(window).height();
});

var flagF = true;
var flagClick = true;
var scrolling = 0;
var $selector = $('html, body'),
  $buttonUpDown = $('button.up'),
  /* Определить, вверх или вниз*/
  // Текущее значение скролла
  $scrollCurent = 0,
  // Предыдущее значение
  $scrollTemp = 0;

//Скролл окна
$(window).scroll(function () {
  $scrollCurent = $selector.scrollTop();
  // Появление кнопки
  if (flagClick) {
    $buttonUpDown.css({
      right: '20px',
    });
  } else if ($scrollCurent > $heightResize / 3) {
    $buttonUpDown.css({ right: '20px' });
  } else {
    $buttonUpDown.css({ right: '-100px' });
  }
  // прокрутка скролла вверх
  if ($scrollTemp > $scrollCurent) {
  } else {
    //Если крутим вниз то збиваем значения на дефолтные
    flagClick = false;
    scrolling = 0;
    flagF = true;
    $buttonUpDown.text('Up');
  }
  // присваиваем значения, одно всегда будет больше
  $scrollTemp = $scrollCurent;
});
//

//Клик по кнопке верх-вниз
$buttonUpDown.on('click', function (e) {
  if (flagF) {
    scrolling = $selector.scrollTop();
    $selector.animate(
      {
        scrollTop: 0,
      },
      500,
    );
    flagF = false;
    flagClick = true;
    flagClick = true;
    e.target.textContent = 'Down';
    // console.log("Клик по кнопке - вверх " + scrolling)
  } else {
    $selector.animate(
      {
        scrollTop: scrolling,
      },
      500,
    );
    flagF = true;
    flagClick = true;
    e.target.textContent = 'Up';
    //console.log("Клик по кнопке - вниз "+scrolling);
  }
});

//======= END кнопка Up adn Down===========
