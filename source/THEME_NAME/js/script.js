(function(){

  'use strict';

  // scrollTop

  $('.ce_toplink a, .toplink a, .up a').on('click', function(e) {

    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 800);

    return false;

  });

  // Placeholder

  if ($('input, textarea').length > 0) {

    $('input, textarea').placeholder();

  }

})();
