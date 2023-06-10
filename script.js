//  for smooth scroll
 let navMenuAnchorTags = document.querySelectorAll('.navbar-nav a');
 console.log(navMenuAnchorTags);
 for(let i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event) {
        event.preventDefault();
        let targetSectionId = this.textContent.trim().toLowerCase();
        let targetSection = document.getElementById(targetSectionId);
        console.log(targetSection);
        
        let interval = setInterval(function(){
            let targetSectionCordinates = targetSection.getBoundingClientRect();
            if(targetSectionCordinates.top <= 0){
                clearInterval(interval);
            }
            window.scrollBy(0, 50);
        },20);
    });
 } 


//  for skill bar animation
let progressBars = document.querySelectorAll('.skill-progress > div');
let skillsContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
let animationDone = false;


function initialseBar(){
    for(let bar of progressBars){
        bar.style.width = 0 +'%';
    }
}
initialseBar();

function fillbars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let intervalBar =setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(intervalBar);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth +'%';
        }, 20);
    }
}


function checkScroll(){
    // i have to check whether skill container is visible or not
    let coordinates  = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        console.log("skill section visible");
        fillbars();
    }else if (coordinates.top > window.innerHeight){
        animationDone = false;
        initialseBar();
    }
}
