'use strict';
document.addEventListener('DOMContentLoaded', function(event) {
    
let jsNoJsCollect = document.getElementsByClassName('no-js'),
    jsNoJs = jsNoJsCollect[0],

    navBtnCollect = document.getElementsByClassName('jsNavBtn'),
    navBtn = navBtnCollect[0],
//    navLinkCollect = document.getElementsByClassName('jsNavLink'),
    
    headingCollect = document.getElementsByClassName('jsHeading'),
    heading = headingCollect[0],
    
    fadeToBlackCollect = document.getElementsByClassName('jsFadeToBlack'),
    fadeToBlack = fadeToBlackCollect[0],
    
    isClicked = false;
    
(function init(){
    
    jsCheck();
    navOnClick();
    
})()
    
function jsCheck() {
    jsNoJs.classList.add('js');
    jsNoJs.classList.remove('no-js');
}
function navOnClick(){
    navBtn.addEventListener('click', function(){
        if(isClicked === false) {
            
            heading.classList.add('jsHeading--active');
            fadeToBlack.classList.add('jsFadeToBlack--active');
            
            isClicked = true;
        } else {
            
            heading.classList.remove('jsHeading--active');
            fadeToBlack.classList.remove('jsFadeToBlack--active');

            isClicked = false; 
        } 
    })
}  
});