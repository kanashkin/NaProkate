const removeItem = () => {
    const removeBtn = document.querySelectorAll('.basket-item-delete')
    
    removeBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.remove()
        })
    })
}

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
calc()
removeItem()

const openPopup = document.querySelectorAll('.basket-item-arrage'),
    overlay = document.querySelector('.overlay'),
    popupBasket = document.querySelector('.popup__basket')

openPopup.forEach(item => {
    item.addEventListener('click', () => {
        overlay.classList.add('active')
        popupBasket.classList.add('active')
    })
})