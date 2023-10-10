const formLogin = document.querySelector('.form-login')
const formRegistr = document.querySelector('.form-registr')
const registrBtn = document.querySelector('.form-registr-btn')

formLogin.classList.add('active')


// нажатие на кнопку, изменяющую формы
const replaceForms = () => {
    const formLinks = document.querySelectorAll('.form-login-link')
    formLinks.forEach(item => {
        loginSwitch(item)
    })
}

// Изменения отображения форм входа и регистрации
const loginSwitch = (item) => {
    const forms = document.querySelectorAll('.form')

    item.addEventListener('click', (e) => {
        e.preventDefault()
        forms.forEach(item => {
            item.classList.remove('active')
        })
        if (item.classList.contains('form-registr-link')) {
            formRegistr.classList.add('active')
        } else {
            formLogin.classList.add('active')
        }
    })
}

// Функция входа в аккаунт
const login = () => {
    const formBtn = document.querySelector('.form-login-btn')
    formBtn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('logined', 'login')
        window.location.href = 'index.html';
    })
}

login()
replaceForms()
loginSwitch(registrBtn)

