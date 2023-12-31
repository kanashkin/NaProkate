// Попап с выбором Москвы
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

// Попап с выбором другого города
const selectCity = () => {
    const popUpCity = document.querySelector('.popup__city'),
        backToPopup = document.querySelector('.popup__city-back'),
        popupTabs = document.querySelectorAll('.popup__city-list-item'),
        cityItems = document.querySelectorAll('.cities__list-item')
        blurBlock = document.querySelector('.main'),
        overlay = document.querySelector('.overlay')

    popUpCity.classList.add('active')

    const back = () => {
        backToPopup.addEventListener('click', () => {
            popUpCity.classList.remove('active')
            selectMoscow()
        })
    }

    const searchCities = () => {
        const input = document.querySelector('.popup-input')

        input.addEventListener('input', () => {
            let val = input.value.trim()
            
            if (val != '') {
                cityItems.forEach(item => {
                    if (item.innerText.indexOf(val) == -1) {
                        item.style.display = 'none'
                    } else {
                        item.style.display = 'block'
                    }
                })
            } else {
                cityItems.forEach(item => {
                    item.style.display = 'block'
                })
            }
        })
    }

    const addCity = (items) => {
        items.forEach(item => {
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

    addCity(cityItems)
    addCity(popupTabs)
    back()
    searchCities()
}

// Функция нажатия на триггер в поле с городом в хедере
const changeCity = () => {
    const selectCityTrigger = document.querySelector('.header__city-trigger')

    selectCityTrigger.addEventListener('click', () => {
        selectMoscow()
    })
}

// Функция смены города в поле хедера
const writeCity = () => {
    const cityField = document.querySelector('.header__city-name')
    if (localStorage.getItem('city') != null) {
        cityField.textContent = localStorage.getItem('city')
    }
}

// Проверка нахождения пользователя на главной страницы для попапа с выбором города
const checkUserLocation = () => {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        if (localStorage.getItem('city') === null) {
            selectMoscow()
        }
    }
}

// Проверка: зарегистрирован ли пользователь для отображения блока перехода в ЛК в хедере
const checkLogin = () => {
    const signUpBtn = document.querySelector('.sign-in-link')
    const userBlock = document.querySelector('.block-after-login')

    if (localStorage.getItem('logined') === 'login') {
        signUpBtn.classList.add('unactive')
        userBlock.classList.add('active')
    } else if (localStorage.getItem('logined') === 'unlogin') {
        signUpBtn.classList.remove('unactive')
        userBlock.classList.remove('active')
    } else {
        localStorage.setItem('logined', 'unlogin')
    }
}

//Проверка: зарегистрирован ли пользователь при переходе по ссылке в футере
const checkFooterLogin = () => {
    const footerLoginLinks = document.querySelectorAll('.footer-login')

    footerLoginLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const itemHref = item.querySelector('a').getAttribute('href')

            if (localStorage.getItem('logined') === 'login') {
                window.location.href = 'account/main.html'
            } else if (localStorage.getItem('logined') === 'unlogin') {
                window.location.href = itemHref
            }
        })
    })
}

// Проверка пользователя перед переходом в аккаунт
const checkUserType = () => {
    const accountLink = document.querySelector('.user-block-after-login a')

    accountLink.addEventListener('click', (e) => {
        e.preventDefault()
        let userType = localStorage.getItem('user-type')

        if (userType === 'admin') {
            window.location.href = '/account-admin/admin.html'
        } else if (userType === 'rental') {
            window.location.href = '/account/main.html'
        }
    })
}


changeCity()
writeCity()
checkUserLocation()
checkLogin()
checkFooterLogin()
checkUserType()