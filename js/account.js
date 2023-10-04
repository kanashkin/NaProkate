const openLink = () => {
    const transition = document.querySelectorAll('.order__table-link')

    transition.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = 'account-card.html';
        })
    })
}

openLink()