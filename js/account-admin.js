const activeTab = document.querySelectorAll('.header__account__list-item')

    activeTab[0].classList.add('active')

const dropDownAdmin = () => {
    const activeDropdown = document.querySelector('.filter-city')
    const block = document.querySelectorAll('.admin__dropdown-item')
    const selectText = document.querySelectorAll('.admin__dropdown-select')
    const arrow = document.querySelectorAll('.account__admin-btn-arrow')

    activeDropdown.addEventListener('click', () => {
        block.forEach(open => {
            open.classList.toggle('active')
        })

        arrow.forEach(item => {
            item.classList.toggle('active')
        })
    })

    

    selectText.forEach(item => {
        item.addEventListener('click', () => {
            let activeText = document.querySelector('.admin__dropdown-active')
            activeText.textContent = item.textContent
        })
    })
}

dropDownAdmin()

const accountAdminLink = () => {
    const textLink = document.querySelectorAll('.account__table-link')
    const blockActive = document.querySelectorAll('.distributors__account')

    textLink[0].classList.add('active')
    blockActive[0].classList.add('active')


    textLink.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('active')

            blockActive.forEach(item => {
                item.classList.add('active')
            })
        })
    })
}

accountAdminLink()