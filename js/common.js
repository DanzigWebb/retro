// mobile menu

let mobileMenu = function () {
  const btn = document.querySelector('.mobile-icon-menu');
  const hamburger = btn.querySelector('.menu__item--doner')
  const menu = document.querySelector('.mob-menu');
  const menuLink = document.querySelectorAll('.mobile-menu__link');
  let count;
  btn.addEventListener('click', function () {
    count = 0;
    menuInit()
  });
  menu.addEventListener('click', (e) => {

    menuLink.forEach(link => {
      if (e.target == link.children[0]) menuRe()
    })
  })
  let menuInit = () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    menuLink.forEach(link => {
      link.style.transitionDelay = count + 's';
      count = count + 0.2
      link.classList.toggle('active');
    })
  }
  let menuRe = () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    menuLink.forEach(link => {
      link.style.transitionDelay = 0;
      link.classList.remove('active');
    })
    count = 0
  }
}
mobileMenu()


// slider

let retroSlider = function () {
  let slider = document.querySelector('.slider')
  let sliderInner = slider.querySelector('.slider-inner');
  let nextBtn = slider.querySelector('.slider-control--next');
  let prevBtn = slider.querySelector('.slider-control--prev');

  let sliderItems = sliderInner.children;
  let count = 0;
  for (let i = 1; i < sliderItems.length; i++) {
    sliderItems[i].style.display = 'none'
  }
  slider.addEventListener('click', function (e) {
    if (e.target == nextBtn) {
      getNext();
    }
    if (e.target == prevBtn) {
      getPrev();
    }
  })
  let getNext = () => {
    if (count == sliderItems.length - 1) {
      count = 0;
    }
    else {
      count++;
    }
    showItems();
    sliderItems[count].style.display = 'block';
  }
  let getPrev = () => {
    if (count == 0) {
      count = sliderItems.length - 1;
    }
    else {
      count--;
    }
    showItems();
    sliderItems[count].style.display = 'block';
  }
  let showItems = () => {
    for (let i = 0; i < sliderItems.length; i++) {
      sliderItems[i].style.display = 'none'
    }
  }
}

retroSlider()


// header

let fixedHeader = function () {
  let header = document.querySelector('.header');
  window.addEventListener('scroll', e => {
    if (window.scrollY > 10) {
      header.querySelector('.header-menu-logo').style.top = '-10px'
    }
    else {
      header.querySelector('.header-menu-logo').style.top = '20px'
    }
  })
}

fixedHeader()

// filter portfolio

let filter = function () {

  let cats = document.querySelectorAll('.cats-choise');
  let catsItems = document.querySelectorAll('.port-item');

  cats.forEach(item => {
    item.addEventListener('click', function (e) {
      showActive();
      let categoryChoice = this.dataset.slug;
      setTimeout(() => {
        catsItems.forEach(portCart => {
          if (categoryChoice == 'all') {
            portCart.style.display = 'block'
          }
          else if (portCart.dataset.cat.includes(categoryChoice)) {
            portCart.style.display = 'block'
          }
        })
      }, 10);
    })
  })

  let showActive = function () {
    catsItems.forEach(item => {
      item.style.display = 'none'
    })
  }

  catsItems.forEach(portCart => {
    portCart.style.display = 'none'
    if (portCart.dataset.cat.includes('resources')) {
      portCart.style.display = 'block'
    }
  })
}
filter()

// lazy scroll to anchor

const lazyScrolling = function () {
  let links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.getAttribute('href').match('\#\\w') !== null) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        let anchor = document.querySelector(link.getAttribute('href'));
        let scrollLength = anchor.getBoundingClientRect().top;
        let oftop = window.scrollY + scrollLength;

        let scrollBot = () => {
          let top = setInterval(function () {
            if (window.scrollY < oftop - 110) {
              window.scrollBy(0, 30);
            }
            else clearInterval(top);
          }, 10);
        }
        let scrollTop = () => {
          let top = setInterval(function () {
            if (window.scrollY > oftop - 110) {
              window.scrollBy(0, -30);
            }
            else clearInterval(top);
          }, 10);
        }

        if (scrollLength > 0) {
          scrollBot()
        } else {
          scrollTop()
        }
      })
    }
  })
}
lazyScrolling()

