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
    const parentBlock = document.getElementById('distributors')
    const textLink = parentBlock.querySelectorAll('.account__table-link')
    const blockActive = parentBlock.querySelectorAll('.distributors__account')

    textLink[0].classList.add('active')
    blockActive[0].classList.add('active')


    textLink.forEach(item => {
        item.addEventListener('click', () => {
            textLink.forEach(item => {
                item.classList.remove('active')
            })

            item.classList.add('active')
        })
    })
}

accountAdminLink()

const showContent = () => {
    const link = document.querySelector('.distributors__link-content')
    const showBlock = document.querySelector('.distributors__add-content')
    
    link.addEventListener('click', () => {
        link.classList.toggle('active')
        if (link.classList.contains('active')) {
            link.innerHTML = 'Скрыть'
        } else {
            link.innerHTML = 'Посмотреть'
        }
        showBlock.classList.toggle('active')
    })
}

// Функция удаления аккаунта (сейчас работает декоративно)
const deleteAccount = () => {
    const deleteBtns = document.querySelectorAll('.distributors__account-delete')

    deleteBtns.forEach(item => {
        item.addEventListener('click', () => {
            localStorage.setItem('logined', 'unlogin')
            localStorage.removeItem('user-type')
            window.location.href = '/index.html'
        })
    })
}


deleteAccount()
showContent()