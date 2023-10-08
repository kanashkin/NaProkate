const dropDownMenu = () => {
    const triggerBtns = document.querySelectorAll('.days-dropdown-trigger')
    const menuitems = document.querySelectorAll('.days-dropdown-item')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.classList.toggle('active')
        })
    })

    menuitems.forEach(item => {
        item.addEventListener('click', () => {
            if (Array.from(menuitems).indexOf(item) != 0) {
                let activeItem = item.parentNode.querySelector('.days-dropdown-select')
                activeItem.textContent = item.textContent
            }
        })
    })
}

dropDownMenu()