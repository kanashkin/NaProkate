const popUp = document.querySelector('.popup'),
    popUpClose = document.querySelectorAll('.popup__button'),
    active = document.querySelector('.active')   

popUpClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        function yes(e) {
            e.popUpClose.getAttribute('data-button')
        }
        
        if('yes') {
            active.classList.remove('active')
        }
    })
})
