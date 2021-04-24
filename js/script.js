'use stritch';

document.addEventListener('DOMContentLoaded', () => {   

/***BURGER_MENU */

    const burgerMenuBlock = document.querySelector('.header-burger'),
          mainMenu = document.querySelector('.header__main-menu');

    burgerMenuBlock.addEventListener('click', ()=> {

        burgerMenuBlock.classList.toggle('icon-active');
        mainMenu.classList.toggle('menu-active');
    });

    mainMenu.addEventListener('click', () => {
        if (mainMenu.classList.value == 'header__main-menu menu-active') {
            burgerMenuBlock.classList.remove('icon-active');
            mainMenu.classList.remove('menu-active');
        }
    });


/**************Progress-Icon ************/

var circleProgress = (function(selector) {
    var wrapper = document.querySelectorAll(selector);
    Array.prototype.forEach.call(wrapper, function(wrapper, i) {
      var wrapperWidth,
        wrapperHeight,
        percent,
        innerHTML,
        context,
        lineWidth,
        centerX,
        centerY,
        radius,
        newPercent,
        speed,
        from,
        to,
        duration,
        start,
        strokeStyle,
        text;

      var getValues = function() {
        wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);
        wrapperHeight = wrapperWidth;
        percent = wrapper.getAttribute('data-cp-percentage');
        innerHTML = '<span class="percentage"><strong>' + percent + '</strong> %</span><canvas class="circleProgressCanvas" width="' + (wrapperWidth * 2) + '" height="' + wrapperHeight * 2 + '"></canvas>';
        wrapper.innerHTML = innerHTML;
        text = wrapper.querySelector(".percentage");
        canvas = wrapper.querySelector(".circleProgressCanvas");
        wrapper.style.height = canvas.style.width = canvas.style.height = wrapperWidth + "px";
        context = canvas.getContext('2d');
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        newPercent = 0;
        speed = 1;
        from = 0;
        to = percent;
        duration = 3000;
        lineWidth = 40;
        radius = canvas.width / 2 - lineWidth;
        strokeStyle = wrapper.getAttribute('data-cp-color');
        start = new Date().getTime();
      };

      function animate() {
        requestAnimationFrame(animate);
        var time = new Date().getTime() - start;
        if (time <= duration) {
          var x = easeInOutQuart(time, from, to - from, duration);
          newPercent = x;
          text.innerHTML = Math.round(newPercent) + "%";
          drawArc();
        }
      }

      function drawArc() {
        var circleStart = 1.5 * Math.PI;
        var circleEnd = circleStart + (newPercent / 50) * Math.PI;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(centerX, centerY, radius, circleStart, 4 * Math.PI, false);
        context.lineWidth = lineWidth;
        context.strokeStyle = "#ddd";
        context.stroke();
        context.beginPath();
        context.arc(centerX, centerY, radius, circleStart, circleEnd, false);
        context.lineWidth = lineWidth;
        context.strokeStyle = strokeStyle;
        context.stroke();

      }
      var update = function() {
        getValues();
        animate();
      }
      update();

      var resizeTimer;
      window.addEventListener("resize", function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          clearTimeout(resizeTimer);
          start = new Date().getTime();
          update();
        }, 250);
      });
    });

    //
    // http://easings.net/#easeInOutQuart
    //  t: current time
    //  b: beginning value
    //  c: change in value
    //  d: duration
    //
    function easeInOutQuart(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }

  });

  circleProgress('.counter');

/***************SCROLL_LINKS*********/

  /***************LOGO***************/
  const logos = document.querySelectorAll('._logo');
  for (let logo of logos) {
    logo.addEventListener('click', function (e) {
          e.preventDefault();
          const id = logo.getAttribute('href');

          document.querySelector('body').scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  }
  /***************HOME***************/
  const home = document.getElementById('#home');

    home.addEventListener('click', function (e) {

      const id = home.getAttribute('href');

      document.querySelector('body').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    });
    /***************About***************/
    const about = document.getElementById('#about');

    about.addEventListener('click', function (e) {

      const id = about.getAttribute('href');

      document.querySelector('.about').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    });
    /***************Skills***************/
    const skills = document.getElementById('#skills');

    skills.addEventListener('click', function (e) {

      const id = skills.getAttribute('href');

      document.querySelector('.skills').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    });
    /***************services***************/
    const services = document.getElementById('#services');

    services.addEventListener('click', function (e) {

      const id = services.getAttribute('href');

      document.querySelector('.services').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    });
    /***************portfolio***************/
    const portfolio = document.getElementById('#portfolio');

    portfolio.addEventListener('click', function (e) {

      const id = portfolio.getAttribute('href');

      document.querySelector('.portfolio').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    });
});