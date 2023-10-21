// Удаление айтема из корзины
const removeItem = () => {
    const removeBtn = document.querySelectorAll('.basket-item-delete')
    
    removeBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.parentNode.remove()
        })
    })
}

// Расчет стоимости товара в корзине
const calc = () => {
    const inputs = document.querySelectorAll('.basket-num')

    inputs.forEach(item => {
        item.addEventListener('change', () => {
            const price = item.previousElementSibling.querySelector('span')
            let total = item.nextElementSibling
            
            total.textContent = parseInt(price.textContent.replaceAll(' ', '')) * parseInt(item.value) + ' ₽'
        })
    })

}

const payPopup = () => {
    const openPopup = document.querySelectorAll('.basket-item-arrage'),
    overlay = document.querySelector('.overlay'),
    popupBasket = document.querySelector('.popup__basket'),
    main = document.querySelector('.main')

    openPopup.forEach(item => {
        item.addEventListener('click', () => {
            overlay.classList.add('active')
            popupBasket.classList.add('active')
            main.classList.add('active')
        })
    })

    const closePopup = document.querySelector('.popup__basket-close')

    closePopup.addEventListener('click', () => {
        overlay.classList.remove('active')
        popupBasket.classList.remove('active')
        main.classList.remove('active')
    })
}

calc()
removeItem()
payPopup()