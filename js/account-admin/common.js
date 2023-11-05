const accountAdminLink = () => {
    const textLink = document.querySelectorAll('.account__table-link')
    // const blockActive = document.querySelectorAll('.distributors__account')

    textLink[0].classList.add('active')
    // blockActive[0].classList.add('active')


    textLink.forEach(item => {
        item.addEventListener('click', () => {
            textLink.forEach(item => {
                item.classList.remove('active')
            })

            item.classList.add('active')
        })
    })
}

accountAdminLink()