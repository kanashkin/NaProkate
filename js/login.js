const formLogin = document.querySelector('.form-login')
const formBtn = document.querySelector('.form-login-btn')
const formRegistr = document.querySelector('.form-registr')
const registrBtn = document.querySelector('.form-registr-btn')
const forms = document.querySelectorAll('.form')
const formLinks = document.querySelectorAll('.form-login-link')

formLogin.classList.add('active')

const replaceForms = () => {
    formLinks.forEach(item => {
        loginSwitch(item)
    })
}

const loginSwitch = (item) => {
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

loginSwitch(registrBtn)


replaceForms()

const login = () => {
    formBtn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('logined', 'login')
        window.location.href = 'index.html';
    })
}

login()

