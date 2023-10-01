const closePromoPopup = () => {
    const popUp = document.querySelector('.popup'),
        popUpCloseBtns = document.querySelectorAll('.popup__button'),
        blurBlock = document.querySelector('.promo')

    popUpCloseBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {

            if (closeBtn.getAttribute('data-button') === 'yes') {
                popUp.classList.remove('active')
                blurBlock.classList.remove('active')
            } else if (closeBtn.getAttribute('data-button') === 'no') {

            }
        })
        
    })
}

closePromoPopup()
