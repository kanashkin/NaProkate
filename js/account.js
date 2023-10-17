const openLink = () => {
    const transition = document.querySelectorAll('.account__table-link-order')

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

const tabs = () => {
    const activeTabs = document.querySelectorAll('.account__tabs'),
        blockRental = document.querySelectorAll('.account__rental')

    blockRental.forEach(actBlock => {
        actBlock.style.display = 'none'
    })

    activeTabs[0].classList.add('active')
    blockRental[0].style.display = ''

    activeTabs.forEach(item => {
        item.addEventListener('click', () => {

            activeTabs.forEach(actTabs => {
                actTabs.classList.remove('active')
            })

            blockRental.forEach(actBlock => {
                actBlock.style.display = 'none'
            })

            const id = item.getAttribute('data-tab')
            const currentBlock = document.querySelector(id)

            currentBlock.style.display = ''

            item.classList.add('active')
        })
    })
}

tabs()

const exitAccount = () => {
    const exitBtn = document.querySelector('.account__rental-exit-button')

    exitBtn.addEventListener('click', () => {
        localStorage.setItem('logined', 'unlogin')
        window.location.href = 'index.html'
    })
}

exitAccount()



const weekendCalendar = () => {
    const triggers = document.querySelectorAll('.weekend-trigger')
    const calendars = document.querySelectorAll('.weekend-calendar')
    const calendarItems = document.querySelectorAll('.weekend__days-item')
    const btns = document.querySelectorAll('.weekend__btns button')

    let triggerIndex

    triggers.forEach(item => {
        item.addEventListener('click', () => {
            triggerIndex = Array.from(triggers).indexOf(item)
            calendars[triggerIndex].classList.toggle('active')
        })
    })

    calendarItems.forEach(item => {
        item.addEventListener('click', () => {
            let withoutItem = document.querySelectorAll('.weekend-without')[triggerIndex]
            if (item.classList.contains('weekend-without')) {
                calendarItems.forEach(item => {
                    item.classList.remove('active')
                })
                withoutItem.classList.add('active')
            } else {
                item.classList.toggle('active')
                withoutItem.classList.remove('active')
            }
        })
    })

    btns.forEach(item => {
        item.addEventListener('click', () => {
            let currentCalendar = item.closest('.weekend-calendar')
            let parentWrapper = item.closest('.account__branch-item-content')

            if (item.classList.contains('cancel')) {
                currentCalendar.classList.remove('active')
            } else if (item.classList.contains('apply')){
                let activeItems = currentCalendar.querySelectorAll('.weekend__days-item.active')

                if (activeItems.length > 0) {
                    const itemsArr = []
                    activeItems.forEach(item => {
                        itemsArr.push(item.getAttribute('data-value'))
                    })
                    let field = parentWrapper.querySelector('.account__dropdown-item-text')
                    field.textContent = itemsArr.join()
                }

                currentCalendar.classList.remove('active')
            }
        })
    })
}

weekendCalendar()

