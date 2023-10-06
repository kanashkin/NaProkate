const openLink = () => {
    const transition = document.querySelectorAll('.order__table-link')

    transition.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = 'account-card.html';
        })
    })
}

openLink()

const accountTabs = () => {
    const tabBtns = document.querySelectorAll('.header__account__list-item')
    const accountBlocks = document.querySelectorAll('.account-content')

    accountBlocks.forEach(item => {
        item.style.display = 'none'
    })

    accountBlocks[0].style.display = ''

    tabBtns.forEach(item => {
        item.addEventListener('click', () => {
            tabBtns.forEach(item => {
                item.classList.remove('active')
            })
            accountBlocks.forEach(item => {
                item.style.display = 'none'
                let mainBlockInItem = item.querySelector('.main-block')
                if (mainBlockInItem) {
                    mainBlockInItem.style.display = ''
                    item.querySelectorAll('.other-block').forEach(item => {
                        item.style.display = 'none'
                    })
                }
            })

            item.classList.add('active')
            let itemContentId = item.getAttribute('data-content')
            let contentBlock = document.querySelector(itemContentId)
            contentBlock.style.display = 'block'
        })
    })
}

accountTabs()

const openSecondPage = () => {
    const openLink = document.querySelectorAll('.account__table-text-link'),
    closeBlock = document.querySelector('.account__products-content'),
    openBlock = document.querySelector('.account__products-wrapper-second-page')

    openLink.forEach(item => {
        item.addEventListener('click', () => {
            openBlock.style.display = 'flex'
            closeBlock.style.display = 'none'
        })
    })
}

openSecondPage()