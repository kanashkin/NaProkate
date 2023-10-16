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

const dropDownMenuCity = () => {
    const triggerBtns = document.querySelectorAll('.city-dropdown-trigger')
    const menuitems = document.querySelectorAll('.city-dropdown-item')
    const content = document.querySelectorAll('.city-dropdown-item')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            content.forEach(item => {
                item.classList.toggle('active')
            })

            item.classList.toggle('active')
        })
    })

    menuitems.forEach(item => {
        item.addEventListener('click', () => {
            if (Array.from(menuitems).indexOf(item) != 0) {
                let activeItem = item.parentNode.querySelector('.city-dropdown-select')
                activeItem.textContent = item.textContent
            }
        })
    })
}

dropDownMenuCity()

const dropdownAccount = () => {
    const triggerBtns = document.querySelectorAll('.account__dropdown-item-arrow')

    triggerBtns.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
            item.closest('.account__dropdown-item').classList.toggle('active')
        })
    })
}

dropdownAccount()