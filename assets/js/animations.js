// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

$(function() {
  var documentEl = $(document),
    fadeElem = $("#header");

  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();

    fadeElem.each(function() {
      var $this = $(this),
      elemOffsetTop = $this.offset().top;
      if (currScrollPos >= elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/600);
    });
  });
});

(function () {

    var $select = $('#header');
    var $window = $(window);
    var isFixed = false;
    var init = $select.length ? $select.offset().top : 0;

    var $jumbo = $('.jumbo');
    var jumboHeight = $jumbo.height();

    $window.scroll(function () {
        var currentScrollTop = $window.scrollTop();

        var currentJumboAlpha = Math.max(1 - ((currentScrollTop * 100 / jumboHeight) / 100), 0);

        $jumbo.css('opacity', currentJumboAlpha);

        if (currentScrollTop > init && isFixed === false) {
            isFixed = true;
            $select.css({
                top: 0,
                position: 'fixed'
            });
            $('body').css('padding-top', $select.height());
        } else if (currentScrollTop <= init && isFixed === true) {
            isFixed = false;
            $select.css('position', 'relative');

            $('body').css('padding-top', 0);
        }
    });

    $(".nav").click(function (e) {
        e.preventDefault();
        var divId = $(this).attr('href');
        $('body').animate({
            scrollTop: $(divId).offset().top - $select.height()
        }, 500);
    });



});

$(function() {
  var documentElFooter = $(document),
    footerElem = $("#footer");

  documentElFooter.on('scroll', function() {
    var footerScrollPos = documentElFooter.scrollTop();

    footerElem.each(function() {
      var $this = $(this),
      footerOffsetTop = $this.offset().top;
      if (footerScrollPos < footerOffsetTop) $this.css('opacity', 1.38 +(footerScrollPos-footerOffsetTop)/900);
    });
  });
});
