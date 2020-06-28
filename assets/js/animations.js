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

// $(function() {
//   var documentEl = $(document),
//     fadeElem = $("#header");
//
//   documentEl.on('scroll', function() {
//     var currScrollPos = documentEl.scrollTop();
//
//     fadeElem.each(function() {
//       var $this = $(this),
//       elemOffsetTop = $this.offset().top;
//       if (currScrollPos >= elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/600);
//     });
//   });
// });

// function CheckScroll(el) {
//     var topVal = el.outerHeight(true);
//     var bottom_of_object = el.offset().top + topVal;
//     var top_of_window = $(window).scrollTop();
//     var amountOff = bottom_of_object - top_of_window;
//     var opacity = amountOff / topVal;
//     el.find('.inner').css('opacity',opacity);
// }
//
// $(window).scroll(function(){
//     CheckScroll($('#header'));
// });

// $(function() {
//   var documentElFooter = $(document),
//     footerElem = $("#footer");
//
//   documentElFooter.on('scroll', function() {
//     var footerScrollPos = documentElFooter.scrollTop();
//
//     footerElem.each(function() {
//       var $this = $(this),
//       footerOffsetTop = $this.offset().top;
//       if (footerScrollPos < footerOffsetTop) $this.css('opacity', 1.38 +(footerScrollPos-footerOffsetTop)/900);
//     });
//   });
// });
