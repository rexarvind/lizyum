# lizyum

```js
(function(){
    var scrollToTop = document.getElementById('scroll-to-top');
    var isScrollingUp = false, prevScroll = 0;
    function handleScrolling() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 100) {
            scrollToTop.style.opacity = '1';
        } else {
            scrollToTop.style.opacity = '0';
        }
        prevScroll = currentScroll;
      }
    window.addEventListener('scroll', handleScrolling);
})();
```