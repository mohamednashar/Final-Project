/**
 * Template Name: Scaffold - v4.10.0
 * Template URL: https://bootstrapmade.com/scaffold-bootstrap-metro-style-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

var next_1 = document.getElementById("next_1");
var next_2 = document.getElementById("next_2");
var next_3 = document.getElementById("next_3");
var next_4 = document.getElementById("next_4");
next_1.disabled = true;
next_2.disabled = true;
next_3.disabled = true;
next_4.disabled = true;

var in1 = document.getElementById("in1");
var in2 = document.getElementById("in2");
var in3 = document.getElementById("in3");
var in4 = document.getElementById("in4");
var in5 = document.getElementById("in5");
var in6 = document.getElementById("in6");
var in7 = document.getElementById("in7");
var in8 = document.getElementById("in8");
var in9 = document.getElementById("in9");
var in10 = document.getElementById("in10");
var in11 = document.getElementById("in11");
var in12 = document.getElementById("in12");
var in13 = document.getElementById("in13");
var in14 = document.getElementById("in14");

var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");
var check4 = document.getElementById("check4");
var check5 = document.getElementById("check5");
var check6 = document.getElementById("check6");
var check7 = document.getElementById("check7");
var check8 = document.getElementById("check8");
var check9 = document.getElementById("check9");
var check10 = document.getElementById("check10");
var check11 = document.getElementById("check11");
var check12 = document.getElementById("check12");
var text_area = document.getElementById("text_area");
pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
patternwhats= /^01[0125][0-9]{8}$/
patternEnglish=/^[a-zA-Z][a-zA-Z '-.‘’]+$/
patternArabic=/^[\u0621-\u064A]+$/

var flg = 0;
var flg2 = 0;

in3.addEventListener("input", function () {
  if(in3.value.match(pattern))
  {
    in3.style.border="2px solid green";
    document.getElementById("valid").style.display="none";
    
    
   
  }
  else
  {
    in3.style.border="2px solid red";
    document.getElementById("valid").style.display="block";
  }

});

in4.addEventListener("input", function () {
  if(in4.value.match(patternwhats))
{
  in4.style.border="2px solid rgb(0, 220, 0)";
  document.getElementById("valid2").style.display="none";
  
  
 
}
else
{
  in4.style.border="2px solid red";
  document.getElementById("valid2").style.display="block";
}

});

in1.addEventListener("input", function () {
  if(in1.value.match(patternEnglish))
{
  in1.style.border="2px solid rgb(0, 220, 0)";
  document.getElementById("valid3").style.display="none";
  
  
 
}
else
{
  in1.style.border="2px solid red";
  document.getElementById("valid3").style.display="block";
}

});

in2.addEventListener("input", function () {
  if(in2.value.match(patternArabic))
{
  in2.style.border="2px solid rgb(0, 220, 0)";
  document.getElementById("valid4").style.display="none";
  
  
 
}
else
{
  in2.style.border="2px solid red";
  document.getElementById("valid4").style.display="block";
}

});









[in1, in2, in3, in4, in5, in6, in7].forEach(function (element) {
  element.addEventListener("input", function () {
    if (
      in1.value != "" &&
      in2.value != "" &&
      in3.value.match(pattern) &&
      in4.value != "" &&
      in5.value != "" &&
      in6.value != "" &&
      in7.value != "" 
      
    ) {
      next_1.disabled = false;
    } else {
      next_1.disabled = true;
    }
  });
});



[check1, check2, check3, check4, check5, check6].forEach(function (element2) {
  element2.addEventListener("click", function () {
    if (
      check1.checked ||
      check2.checked ||
      check3.checked ||
      check4.checked ||
      check5.checked ||
      check6.checked
    ) {
      flg = 1;
    } else {
      flg = 0;
    }
  });
});

[in8, in9, in10, check1, check2, check3, check4, check5, check6].forEach(
  function (element3) {
    element3.addEventListener("input", function () {
      if (in8.value != "" && in9.value != "" && in10.value != "" && flg == 1) {
        next_2.disabled = false;
      } else {
        next_2.disabled = true;
      }
    });
  }
);




[check7, check8, check9, check10, check11, check12].forEach(function (
  element4
) {
  element4.addEventListener("click", function () {
    if (
      check7.checked ||
      check8.checked ||
      check9.checked ||
      check10.checked ||
      check11.checked ||
      check12.checked
    ) {
      flg2 = 1;
    } else {
      flg2 = 0;
    }
  });
});

[
  in11,
  in12,
  in13,
  in14,
  check7,
  check8,
  check9,
  check10,
  check11,
  check12,
].forEach(function (element5) {
  element5.addEventListener("input", function () {
    if (
      in11.value != "" &&
      in12.value != "" &&
      in13.value != "" &&
      in14.value != "" &&
      flg2 == 1
    ) {
      next_3.disabled = false;
    } else {
      next_3.disabled = true;
    }
  });
});

text_area.addEventListener("input", function () {
  if (text_area.value != "") {
    next_4.disabled = false;
  } else {
    next_4.disabled = true;
  }
});

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#hero");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $("#header").css("background-color", "#fff");
        $("#header a").css("color", "#4B97D2");
        $("#header .drop-about .scrollto").css("color", "#009cea");
        $("#header .lang").css("color", "#009cea");
        $("#header").css("background-color", "#fff");
        $("#header a").css("color", "#009cea");

      } else {
        $("#header").css("background-color", "transparent");
        $("#header a").css("color", "#fff");
        $("#header .drop-about .scrollto").css("color", "#009cea");
        $("#header .lang").css("color", "#009cea");
      }
    });
  }
});
