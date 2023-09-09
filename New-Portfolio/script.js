//Hamburger menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//Navbar scroll hide
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px"; 
    }
    
    prevScrollPos = currentScrollPos;
};



// Circular progress bar
const circularProgressBars = document.querySelectorAll(".circular-progress");

circularProgressBars.forEach(circularProgress => {
  const progressValue = circularProgress.querySelector(".progress-value");
  const progressStartValue = parseInt(circularProgress.getAttribute("data-start"));
  const progressEndValue = parseInt(circularProgress.getAttribute("data-end"));
  const speed = 20;

  let currentProgress = progressStartValue;
  let progressInterval = setInterval(() => {
    currentProgress++;
    progressValue.textContent = `${currentProgress}%`;
    circularProgress.style.background = `conic-gradient(#000 ${currentProgress * 3.6}deg, #ededed 0deg)`;

    if (currentProgress >= progressEndValue) {
      clearInterval(progressInterval);
    }
  }, speed);
});