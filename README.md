# lizyum

Hello thank you you are very sppedy but there some issues

1- There are some corruptions in the original version of the theme. For example, the theme has expanded. Some shadows have been removed.
// 2- I did not want the button added to the right of the logo.
3- There is a misunderstanding about the log in button. I wanted the button itself to be replaced. You made a dropdown menu.
// 4- You have taken the middle search area too high. 1-2-3 boxes are too close to the search area.
// 5- Logo and menu texts are not aligned.
// 6- Let's use the Twitter icon as a circle.
// 7- There should be no menu icon on mobile.
// 8- The links in the Popular Service area will be 2 columns on mobile and will be left aligned. 2. They should not slip into the line.
// 9- FAQ and Sitelink search box schemas are not added.





```
<div class="absolute right-0 mt-3 rounded-md bg-white opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition duration-400 shadow-sm" style="width:248px;z-index:2;">
<span class="block w-4 h-4 absolute -top-2 right-2 bg-red-50 rotate-45"></span>
<div class="px-3 py-3 bg-red-50 rounded-tl rounded-tr">
    <div class="flex justify-between items-center">
        <img src="images/premium.png" alt="Premium" width="144" height="43" class="w-16 h-auto" />
        <span class="text-sm">to 9,90 TL per month</span>
        <svg fill="currentColor" class="si text-red-500 bi-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
    <div class=" mt-2 bg-white flex px-2 py-2 rounded">
        <div class="mr-2">
            <img src="images/call-center.png" width="24" height="24" alt="Call">
        </div>
        <div class="font-semibold text-gray-900">
            Priority Call Center
        </div>
    </div>
</div>
<ul>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="Log in">Log In</a></li>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="Become a member">Become a Memeber</a></li>
    <hr>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="My orders">My Orders</a></li>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="Questions and requests">Questions and Requests</a></li>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="Special for you">Special for You</a></li>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="Hepsipay">Hepsipay</a></li>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="My user information">My User Information</a></li>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="My Reviews">My Reviews</a></li>
    <hr>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="What I liked">What I liked</a></li>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="All my lists">All My Lists</a></li>
    <hr>
    <li><a href="#!" class="block px-3 py-3 leading-none font-semibold text-gray-900 hover:text-gray-500" title="My Coupons">My Coupons</a></li>
</ul>
</div>
```





```
<label for="header-menu-toggle" class="inline-block cursor-pointer text-blue-500">
    <svg fill="currentColor" class="si" xmlns="http://www.w3.org/2000/svg" style="width:2em;height:2em;" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
</label>

<!-- css only offcanvas menu start -->
<input id="header-menu-toggle" title="Open Menu" type="checkbox" class="hidden">
<div>
    <label id="header-menu-overlay" for="header-menu-toggle" class="cursor-pointer"></label>
    <div id="header-menu" class="fixed flex flex-col bg-white">
        <div class="header-menu-title flex-shrink-0 border-b px-1 flex justify-end">
            <label for="header-menu-toggle" class="inline-flex items-center px-3 py-3 mb-0 cursor-pointer hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="si bi-x-circle" style="width:2em;height:2em;" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
                <span class="ml-2 font-semibold">Close</span>
            </label>
        </div>
        <div class="overflow-auto" style="padding:1px 0 25px 0;">
            <ul>
                <li>
                    <a href="./clening.html" title="Cleaning" class="block py-2 px-3 border-b font-semibold hover:text-blue-500">Cleaning</a>
                </li>
                <li>
                    <a href="./renovation.html" title="Renovation" class="block py-2 px-3 border-b font-semibold hover:text-blue-500">Renovation</a>
                </li>
                <li>
                    <a href="./transport.html" title="Transport" class="block py-2 px-3 border-b font-semibold hover:text-blue-500">Transport</a>
                </li>
                <li>
                    <a href="./repair.html" title="Repair" class="block py-2 px-3 border-b font-semibold hover:text-blue-500">Repair</a>
                </li>
                <li>
                    <a href="./private-lesson.html" title="private lesson" class="block py-2 px-3 border-b font-semibold hover:text-blue-500">Private Lesson</a>
                </li>
                <li>
                    <a href="./technology.html" title="Technology" class="block py-2 px-3 border-b font-semibold hover:text-blue-500">Technology</a>
                </li>
                <li>
                    <a href="./other.html" title="Other" class="block py-2 px-3 border-b font-semibold hover:text-blue-500">Other</a>
                </li>
            </ul>
        </div>
        <div class="mt-auto">
            <a href="login.html" title="Login" class="flex items-center justify-start px-3 py-3 border-t border-b bg-blue-500 hover:bg-white border-blue-500 text-white hover:text-blue-500 transition">
                <svg class="si mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                <span class="font-semibold">Log In</span>
            </a>
            <a href="provide-service.html" title="Other services" class="flex items-center justify-start px-3 py-3 border-b border-blue-500 hover:bg-blue-50 text-gray-900 hover:text-blue-500">
                <svg class="si mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                <span class="font-semibold">Provide Service</span>
            </a>
        </div>
    </div>
</div>
<!-- css only offcanvas menu end -->



#header-menu{width:280px;max-width:90%;top:0;bottom:0;right:-200px;opacity:0;z-index:10;pointer-events:none;transition:all 400ms ease;}
#header-menu-toggle:checked + div #header-menu{right: 0;opacity:1;pointer-events:auto;}
#header-menu-toggle:checked + div #header-menu-overlay{background-color:rgba(0,0,0,0.3);position:fixed;top:0;left:0;right:0;bottom:0;margin:0;display:block;z-index:10;}


```


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