const showContent = () => {
    const link = document.querySelector('.distributors__link-content')
    const showBlock = document.querySelector('.distributors__add-content')
    
    link.addEventListener('click', () => {
        link.classList.toggle('active')
        if (link.classList.contains('active')) {
            link.innerHTML = 'Скрыть'
        } else {
            link.innerHTML = 'Посмотреть'
        }
        showBlock.classList.toggle('active')
    })
}

showContent()