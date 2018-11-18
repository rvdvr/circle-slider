var slider = (function () {
  var slides = $('.slider__item');

  return {
    scrollSlides: function (direction) {
      var slidesVisibleArr = [];

      $('.slider__item').each(function (indx) {
        if ($(this).hasClass('slider__item_visible')) {
          var elIndx = $(this).index();
          slidesVisibleArr.push(elIndx);
        }
      });

      $('.slider__item').removeClass('slider__item_visible');

      for (var i = 1; i <= 4; i++) {
        $('.slider__item_visible-' + i).removeClass('slider__item_visible-' + i);
      };

      for (var i = 0; i < 4; i++) {
        var visiblePosition = i + 1;

        $('.slider__item').eq(slidesVisibleArr[i] + direction)
          .addClass('slider__item_visible slider__item_visible-' + visiblePosition);
      }
    }
  }
})();


$('.slider__arrow-next').on('click', function () {
  slider.scrollSlides(1);
});

$('.slider__arrow-prev').on('click', function () {
  slider.scrollSlides(-1);
});