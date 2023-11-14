const addComment = () => {
    const triggerBtn = document.querySelector('.open-field')
    const commentItem = document.querySelector('.hide-field')

    triggerBtn.addEventListener('click', () => {
        triggerBtn.classList.remove('active')
        commentItem.classList.add('active')
    })
}

addComment()