const removeBtn = document.querySelectorAll('.basket-item-delete')
    
removeBtn.forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.parentNode.remove()
    })
})