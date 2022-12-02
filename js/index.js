const mobileMenu = document.querySelector('.mobile');
const headerMenu = document.querySelector('.header__menu');
const navigation = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    if(getComputedStyle(navigation).display == 'none')) {
        navigation.style.display = 'block';
        
    } else {
        navigation.style.display = 'none';
       

    }
})
