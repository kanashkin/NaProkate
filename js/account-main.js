const openLink = () => {
    const transition = document.querySelectorAll('.account__table-link-order')

    transition.forEach(item => {
        item.addEventListener('click', () => {
            let page = item.getAttribute('data-order')
            window.location.href = `/${page}`;
        })
    })
}

openLink()
