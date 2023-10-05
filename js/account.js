const openLink = () => {
    const transition = document.querySelectorAll('.order__table-link')

    transition.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = 'account-card.html';
        })
    })
}

openLink()

const active = () => {
    const activeBtn = document.querySelectorAll('.header__list')

    activeBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
}

active()