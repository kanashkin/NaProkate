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



const accountCalendars = () => {
    const triggers = document.querySelectorAll('.calendar-trigger')
    const calendars = document.querySelectorAll('.account-calendar')

    let triggerIndex

    triggers.forEach(item => {
        item.addEventListener('click', () => {
            triggerIndex = Array.from(triggers).indexOf(item)
            calendars[triggerIndex].classList.toggle('active')
        })
    })

    const weekendCalendar = () => {
        const weekendCalendarItems = document.querySelectorAll('.weekend__days-item')
        const weekendBtns = document.querySelectorAll('.weekend__btns button')

        weekendCalendarItems.forEach(item => {
            item.addEventListener('click', () => {
                let withoutItem = document.querySelectorAll('.weekend-without')[triggerIndex]
                if (item.classList.contains('weekend-without')) {
                    weekendCalendarItems.forEach(item => {
                        item.classList.remove('active')
                    })
                    withoutItem.classList.add('active')
                } else {
                    item.classList.toggle('active')
                    withoutItem.classList.remove('active')
                }
            })
        })
    
        weekendBtns.forEach(item => {
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

    const holidaysCalendar = () => {
        const holidaysBtns = document.querySelectorAll('.holiday__btns button')

        holidaysBtns.forEach(item => {
            item.addEventListener('click', () => {
                let currentCalendar = item.closest('.account-calendar')

                if (item.classList.contains('cancel')) {
                    currentCalendar.classList.remove('active')
                } else if (item.classList.contains('apply')) {
                    let currentParentBlock = item.closest('.account__branch-items')
                    let fieldTextItem = currentParentBlock.querySelector('.account__dropdown-item-text')
                    let currentDatesWrapper = currentParentBlock.querySelector('.account__branch-item-wrapper')
                    let wrapper = currentParentBlock.querySelector('.none-gap')
                    let selectDate = currentParentBlock.querySelector('.select-date')
                    let selectMonth = currentParentBlock.querySelector('.select-month')

                    fieldTextItem.textContent = ''
                    let currentDate = selectDate.value + '&nbsp;' + selectMonth.value
                    wrapper.classList.add('active')


                    let dateBlock = document.createElement('div')
                    dateBlock.innerHTML = `
                            <p class="account__branch-block-text">${currentDate}</p>
                            <img src="img/common/X.svg" alt="x icon" class="account__branch-block-img close-current-date">
                    `
                    dateBlock.classList.add('account__branch-block')

                    currentDatesWrapper.appendChild(dateBlock)
                    currentDatesWrapper.classList.add('active')
                    currentCalendar.classList.remove('active')

                    const closeBtns = document.querySelectorAll('.close-current-date')

                    closeBtns.forEach(item => {
                        item.addEventListener('click', () => {
                            item.parentNode.remove()

                            if (document.querySelectorAll('.account__branch-block').length == 0) {
                                fieldTextItem.textContent = 'Без праздников'
                                wrapper.classList.remove('active')
                                currentDatesWrapper.classList.remove('active')
                            }
                        })
                    })

                }
            })
        })

        
    }
    
    weekendCalendar()
    holidaysCalendar()
}

accountCalendars()




let quill = new Quill('#editor', {
    theme: 'snow'
});

