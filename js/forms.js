const login = document.querySelector('.form-login'),
    openBtnDefault = document.querySelectorAll('.form-login-link'),
    registr = document.querySelector('.form-registr'),
    footerRegistr = document.querySelectorAll('.footer__list-item'),
    registrAdmin = document.querySelector('.form-admin-registr'),
    footerRegistrAdmin = document.querySelectorAll('.footer__list-item-admin')

login.classList.add('active')

openBtnDefault.forEach(item => {
    item.addEventListener('click', () => {
        login.classList.toggle('active')
        registr.classList.toggle('active')
    })
})

footerRegistr.forEach(item => {
    item.addEventListener('click', () => {
        login.classList.toggle('active')
        registr.classList.add('active')
    })
})

footerRegistrAdmin.forEach(item => {
    item.addEventListener('click', () => {
        registrAdmin.classList.add('active')
    })
})
