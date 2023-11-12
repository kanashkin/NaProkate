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
                    let currentParentBlock = item.closest('.account__item')
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
                            <img src="/img/common/X.svg" alt="x icon" class="account__branch-block-img close-current-date">
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

const exitAccount = () => {
    const exitBtn = document.querySelector('.account__rental-exit-button')

    exitBtn.addEventListener('click', () => {
        localStorage.setItem('logined', 'unlogin')
        window.location.href = '/index.html'
    })
}

const selectColor = () => {
    const colorInput = document.querySelector('.account-requistes-color')
    const colorField = document.querySelector('.color-value')

    colorInput.addEventListener('input', () => {
        let currentColor = colorInput.value
        colorField.textContent = currentColor.slice(1)
    })
}


tabs()
accountCalendars()
exitAccount()
selectColor()

let quill = new Quill('#editor', {
    theme: 'snow'
});