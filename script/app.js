const btnX = document.querySelector('.iconX');
const listMobile = document.querySelector('.top__bar-list-mobile ')
const btnHam = document.querySelector('.btn-menu')
btnX.addEventListener('click', function(){
    if(listMobile.style.display = 'block')
    listMobile.style.display = 'none';
    else
    listMobile.style.display = 'block'
})

btnHam.addEventListener('click', function(){
    if(listMobile.style.display = 'none')
    listMobile.style.display = 'block';
    else
    listMobile.style.display = 'none';
})

