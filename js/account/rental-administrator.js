const exitAccount = () => {
    const exitBtn = document.querySelector('.account__rental-exit-button')

    exitBtn.addEventListener('click', () => {
        localStorage.setItem('logined', 'unlogin')
        window.location.href = '/index.html'
    })
}

exitAccount()