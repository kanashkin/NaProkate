const openLink = () => {
    const transition = document.querySelectorAll('.account__table-link-order')

    transition.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = '/account-card.html';
        })
    })
}

openLink()
