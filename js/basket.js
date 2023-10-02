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