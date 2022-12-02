const mobileMenu = document.querySelector('.mobile');
const navigation = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    if(getComputedStyle(navigation).display == 'none')) {
        navigation.style.display = 'block';
        
    } else {
        navigation.style.display = 'none';
       

    }
})
