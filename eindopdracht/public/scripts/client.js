// check variable
var hasJavaScript = document.querySelector('body')
var breadCrums = document.querySelectorAll('main > span')
var fieldset = document.querySelectorAll('fieldset')



function scrollEvent() {
    window.onscroll = function() {
        scroll()
    }

    
    function scroll() {
        var scrollPosition = window.pageYOffset
        
        if (scrollPosition > 0 && scrollPosition < 300) {
            breadCrums[0].classList.add('active')
            if(breadCrums[1].className == 'active'){
                breadCrums[1].classList.remove('active')
            }
        } else if (scrollPosition > 300 && scrollPosition < 1500) {
            breadCrums[0].classList.remove('active')
            breadCrums[1].classList.add('active')
            breadCrums[2].classList.remove('active')
        } else if (scrollPosition > 1500 && scrollPosition < 2700) {
            breadCrums[1].classList.remove('active')
            breadCrums[2].classList.add('active')
            breadCrums[3].classList.remove('active')
        } else if (scrollPosition > 2700 && scrollPosition < 3900) {
            breadCrums[2].classList.remove('active')
            breadCrums[3].classList.add('active')
            breadCrums[4].classList.remove('active')
        } else if (scrollPosition > 3900 && scrollPosition < 5100) {
            breadCrums[3].classList.remove('active')
            breadCrums[4].classList.add('active')
        } 
    }
}


//check if javascript is supported
if(hasJavaScript && breadCrums[0]) {
    scrollEvent()
    if(breadCrums[0]){
    for (let i = 0; i < breadCrums.length; i++) {
        breadCrums[i].classList.remove('hide')
    }
    breadCrums[0].classList.add('active')
    }
}
