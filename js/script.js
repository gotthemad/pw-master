'use strict';
document.addEventListener('DOMContentLoaded', function(event) {
    
let jsNoJsCollect = document.getElementsByClassName('no-js'),
    jsNoJs = jsNoJsCollect[0],

    navBtnCollect = document.getElementsByClassName('jsNavBtn'),
    navBtn = navBtnCollect[0],
    navLinkCollect = document.getElementsByClassName('jsNavLink'),
    
    headingCollect = document.getElementsByClassName('jsHeading'),
    heading = headingCollect[0],
    
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
            
            console.log('on');
            
            heading.classList.add('jsHeading--active');
            
            for(let i = 0; i < navLinkCollect.length; i++){
                navLinkCollect[i].classList.add('jsNavLick--active');   
            }
            
            isClicked = true;
        } else {
            
            console.log('off');
            
            heading.classList.remove('jsHeading--active');
            
            for(let i = 0; i < navLinkCollect.length; i++){
                navLinkCollect[i].classList.remove('jsNavLick--active');  
            }

            isClicked = false; 
        } 
    })
}  
});