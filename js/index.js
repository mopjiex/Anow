const mobileMenu = document.querySelector('.mobile');
const navigation = document.querySelector('.nav');
const logo = document.querySelector('.header__logo-link');
const benefitsCircle = document.querySelectorAll('.benefits__circle');
mobileMenu.addEventListener('click', () => {
    if(getComputedStyle(navigation).display == 'none') {
        navigation.style.display = 'block'; 
        logo.style.display = 'none'; 
        benefitsCircle.forEach(index => {
            index.style.display = 'none';
        })
    } else {
        navigation.style.display = 'none';
        logo.style.display = 'block'; 
        benefitsCircle.forEach(index => {
            index.style.display = 'block';
        })
    }
})
