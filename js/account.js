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


const accountPopup = () => {
    const openPopup = document.querySelectorAll('.account__table-text-link'),
    accPopup = document.querySelector('.account__popup'),
    closePopup = document.querySelector('.account__close-popup'),
    blurBlock = document.querySelector('.main__account'),
    accOverlay = document.querySelector('.overlay__account')

    openPopup.forEach(item => {
        item.addEventListener('click', () => {
            accPopup.style.display = 'block'
            blurBlock.classList.add('active')
            accOverlay.classList.add('active')
            
            closePopup.addEventListener('click', () => {
                accPopup.style.display = 'none'
                blurBlock.classList.remove('active')
                accOverlay.classList.remove('active')
            })
        })
    })
}

accountPopup()

const openPageOrder = () => {
    const openBtn = document.querySelector('.account__buttons-error'),
        unactiveBlock = document.querySelector('.account__orders-main-content-unactive'),
        closeBtn = document.querySelector('.account__buttons-order'),
        activeBlock = document.querySelector('.account__orders-main-content-active')

        openBtn.addEventListener('click', () => {
            openBtn.classList.add('active')
            closeBtn.classList.add('unactive')
            unactiveBlock.style.display = 'block'
            activeBlock.style.display = 'none'
        })

        closeBtn.addEventListener('click', () => {
            openBtn.classList.remove('active')
            closeBtn.classList.remove('unactive')
            unactiveBlock.style.display = 'none'
            activeBlock.style.display = 'block'
        })
}

openPageOrder()