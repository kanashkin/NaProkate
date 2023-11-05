const openPageOrder = () => {
    const openBtn = document.querySelector('.account__buttons-error'),
        unactiveBlock = document.querySelector('.account__orders-main-content-unactive'),
        closeBtn = document.querySelector('.account__buttons-order'),
        activeBlock = document.querySelector('.account__orders-main-content-active')

        openBtn.addEventListener('click', () => {
            openBtn.classList.add('active')
            closeBtn.classList.add('unactive')
            unactiveBlock.style.display = 'block'
            activeBlock.style.display = 'none'
        })

        closeBtn.addEventListener('click', () => {
            openBtn.classList.remove('active')
            closeBtn.classList.remove('unactive')
            unactiveBlock.style.display = 'none'
            activeBlock.style.display = 'block'
        })
}

openPageOrder()