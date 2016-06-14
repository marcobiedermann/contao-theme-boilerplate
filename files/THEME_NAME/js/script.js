(function(window, document, $) {
  'use strict';

  // Toggle Accordion
  function chosen() {
    var hash = window.location.hash.replace('#', '');

    if (hash === '') {
      return null;
    }

    return document.getElementById(hash);
  }

  var active  = 0;
  var element = chosen();

  if (element !== null) {
    active = $('section.ce_accordion').index(element);
  }

  $(document).accordion({
    active: active,
    heightStyle: 'content',
    header: 'div.toggler',
    collapsible: true,
    create: function(event, ui) {
      ui.header.addClass('active');
    },
    activate: function(event, ui) {
      var id   = ui.newHeader.parent().attr('id');
      var hash = window.location.hash.replace('#', '');

      ui.newHeader.addClass('active');
      ui.oldHeader.removeClass('active');

      if (id && id !== hash) {
        history.pushState(null, null, window.location.pathname + '#' + id);
      }
    }
  });

  window.addEventListener('hashchange', function() {
    var element = chosen();

    if (element !== null) {
      $(element).children('div.toggler').trigger('click');
    }
  });

})(window, document, jQuery);
