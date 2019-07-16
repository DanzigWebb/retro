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