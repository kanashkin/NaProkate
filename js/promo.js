const selectMoscow = () => {
    const popUpMoscow = document.querySelector('.popup'),
        popUpCloseBtns = document.querySelectorAll('.popup__button'),
        blurBlock = document.querySelector('.promo')

    popUpMoscow.classList.add('active')
    blurBlock.classList.add('active')

    popUpCloseBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            popUpMoscow.classList.remove('active')

            if (closeBtn.getAttribute('data-button') === 'yes') {
                blurBlock.classList.remove('active')
                writeCity('Москва')
            } else if (closeBtn.getAttribute('data-button') === 'no') {
                selectCity()
            }
        })
        
    })
}

selectMoscow()

const selectCity = () => {
    const popUpCity = document.querySelector('.popup__city'),
        backToPopup = document.querySelector('.popup__city-back'),
        popupTabs = document.querySelectorAll('.popup__city-list-item'),
        blurBlock = document.querySelector('.promo')

    popUpCity.classList.add('active')

    const back = () => {
        backToPopup.addEventListener('click', () => {
            popUpCity.classList.remove('active')
            selectMoscow()
        })
    }

    const tabs = () => {
        popupTabs.forEach(item => {
            item.addEventListener('click', () => {
                const currentCity = item.textContent
                writeCity(currentCity)
                popUpCity.classList.remove('active')
                blurBlock.classList.remove('active')
            })
        })
    }

    back()
    tabs()
}

const writeCity = (cityName) => {
    const cityField = document.querySelector('.header__city-name')

    cityField.textContent = cityName
}

