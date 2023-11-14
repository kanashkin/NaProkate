const accountDropMenu = () => {
    const triggerBtns = document.querySelectorAll('.menu-trigger')

    triggerBtns.forEach(item => {
        item.onclick = function() {
            let parentBlock = item.closest('.account__menu__wrapper')
            let menu = parentBlock.querySelector('.account__menu-list')
            let currentItem = parentBlock.querySelector('.account__item-value')
            let menuItems = parentBlock.querySelectorAll('.account__menu-list-item')

            menu.classList.toggle('active')

            menuItems.forEach(item => {
                item.onclick = function() {
                    let currentItem = parentBlock.querySelector('.account__item-value')
        
                    currentItem.textContent = item.textContent
                }
            })
        }
    })
}

accountDropMenu()