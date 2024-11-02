

 /*ảnh auto*/
let currentIndex = 0;
let imageInterval;

function showImage(index) {
    const images = document.querySelectorAll('.image');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100; 
    document.querySelector('.images').style.transform = `translateX(${offset}%)`;
}

function prevImage() {
    showImage(currentIndex - 1);
    resetInterval();
}

function nextImage() {
    showImage(currentIndex + 1);
    resetInterval();
}

function startAutoImage() {
    imageInterval = setInterval(() => {
        nextImage();
    }, 5000);
}

function resetInterval() {
    clearInterval(imageInterval);
    startAutoImage();
}
startAutoImage();
showImage(currentIndex);


 /*nav mobile*/
const menuToggle = document.querySelector('.menu');
const mainNav = document.querySelector('.main-nav')

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('menuclick');
});


   /* Đăng nhập*/
    const loGins = document.querySelectorAll('.js-login');
    const loginContainer = document.querySelector('.login-container');  
    const loginClose = document.querySelector('.js-closelogin');  
    
    function showLogin() {
        loginContainer.classList.add('open');
    }

    function closeLogin() {
        loginContainer.classList.remove('open');
    }
    
    loGins.forEach(item => {
        item.addEventListener('click', showLogin);
    });
    loginClose.addEventListener('click', closeLogin)
    
    
     /* Đăng ký*/
    const siGnups = document.querySelectorAll('.js-signup');
    const signupContainer = document.querySelector('.signup-container');
    const signupClose = document.querySelector('.js-closesignup'); 


    function showSignup() {
        signupContainer.classList.add('open');
    }

    function closeSignup() {
        signupContainer.classList.remove('open');
    }

    siGnups.forEach(item => {
        item.addEventListener('click', showSignup);
    });

    signupClose.addEventListener('click', closeSignup); 
