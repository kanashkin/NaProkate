const selectMoscow = () => {
    const popUpMoscow = document.querySelector('.popup'),
        popUpCloseBtns = document.querySelectorAll('.popup__button'),
        blurBlock = document.querySelector('.main'),
        overlay = document.querySelector('.overlay')

    blurBlock.classList.add('active')
    overlay.classList.add('active')
    popUpMoscow.classList.add('active')


    popUpCloseBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            popUpMoscow.classList.remove('active')

            if (closeBtn.getAttribute('data-button') === 'yes') {
                localStorage.setItem('city', 'Москва')
                writeCity()

                blurBlock.classList.remove('active')
                overlay.classList.remove('active')
            } else if (closeBtn.getAttribute('data-button') === 'no') {
                selectCity()
            }
        })
    })
}


const selectCity = () => {
    const popUpCity = document.querySelector('.popup__city'),
        backToPopup = document.querySelector('.popup__city-back'),
        popupTabs = document.querySelectorAll('.popup__city-list-item'),
        blurBlock = document.querySelector('.main'),
        overlay = document.querySelector('.overlay')

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
                localStorage.setItem('city', `${currentCity}`)
                writeCity()

                popUpCity.classList.remove('active')
                blurBlock.classList.remove('active')
                overlay.classList.remove('active')
            })
        })
    }

    back()
    tabs()
}

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    if (localStorage.getItem('city') === null) {
        selectMoscow()
    }
}

const selectCityTrigger = document.querySelector('.header__city-trigger')

selectCityTrigger.addEventListener('click', () => {
    selectMoscow()
})

const writeCity = () => {
    const cityField = document.querySelector('.header__city-name')
    if (localStorage.getItem('city') != null) {
        cityField.textContent = localStorage.getItem('city')
    }
}

writeCity()

const checkLogin = () => {
    const signUpBtn = document.querySelector('.sign-in-link')
    const userBlock = document.querySelector('.block-after-login')

    if (localStorage.getItem('logined') === 'login') {
        signUpBtn.classList.add('unactive')
        userBlock.classList.add('active')
    } else if (localStorage.getItem('logined') === 'unlogin') {
        signUpBtn.classList.remove('unactive')
        userBlock.classList.remove('active')
    }
}

checkLogin()

