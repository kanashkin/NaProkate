const clientsMenu = () => {
    const trigger = document.querySelector('.new-order')
    const menu = document.querySelector('.order-menu')
    const menuItems = menu.querySelectorAll('.account__menu-list-item')

    trigger.addEventListener('click', () => {
        menu.classList.toggle('active')
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = '/account/order-new.html'
        })
    })
}

clientsMenu()