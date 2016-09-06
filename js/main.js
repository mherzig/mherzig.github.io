'use strict';

(function () {
  'use strict';

  if ('querySelectorAll' in document && 'classList' in document.createElement('div')) {
    (function () {
      var subs = document.querySelectorAll('h2 span'),
          curIndex = 0;

      setInterval(function () {
        document.querySelector('h2 span.placed').classList.remove('placed');
        curIndex++;
        if (curIndex >= subs.length) {
          curIndex = 0;
        }
        subs[curIndex].classList.add('placed');
      }, 2500);
    })();
  }
})();