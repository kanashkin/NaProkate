const checkFooterLogin = () => {
    const footerLoginLinks = document.querySelectorAll('.footer-login')

    footerLoginLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const itemHref = item.querySelector('a').getAttribute('href')

            if (localStorage.getItem('logined') === 'login') {
                window.location.href = '/account.html'
            } else if (localStorage.getItem('logined') === 'unlogin') {
                window.location.href = itemHref
            }
        })
    })
}

checkFooterLogin()