const accountPopup = () => {
    const openPopup = document.querySelectorAll('.account__table-text-link'),
    accPopup = document.querySelector('.account__popup'),
    closePopup = document.querySelector('.account__close-popup'),
    blurBlock = document.querySelector('.main__account'),
    accOverlay = document.querySelector('.overlay__account')

    openPopup.forEach(item => {
        item.addEventListener('click', () => {
            accPopup.style.display = 'block'
            blurBlock.classList.add('active')
            accOverlay.classList.add('active')
            
            closePopup.addEventListener('click', () => {
                accPopup.style.display = 'none'
                blurBlock.classList.remove('active')
                accOverlay.classList.remove('active')
            })
        })
    })
}

accountPopup()