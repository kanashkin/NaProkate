const formLogin = document.querySelector('.form-login')
const formRegistr = document.querySelector('.form-registr')
const forms = document.querySelectorAll('.form')
const formLinks = document.querySelectorAll('.form-login-link')

const adminLoginBtn = document.querySelector('.footer__list-item-admin')

formLogin.classList.add('active')

formLinks.forEach(item => {
    item.addEventListener('click', () => {
        forms.forEach(item => {
            item.classList.remove('active')
        })
        if (item.classList.contains('form-registr-link')) {
            formRegistr.classList.add('active')
        } else {
            formLogin.classList.add('active')
        }
    })
})

adminLoginBtn.addEventListener('click', () => {
    forms.forEach(item => {
        item.classList.remove('active')
    })
    formRegistr.classList.add('active')
    const hideInputs = formRegistr.querySelector('.input-hide')

    hideInputs.forEach(item => {
        item.style.display = 'block'
    })
})
