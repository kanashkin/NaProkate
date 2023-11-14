const addComment = () => {
    const triggerBtn = document.querySelector('.add-comment')
    const commentItem = document.querySelector('.comment-item')

    triggerBtn.addEventListener('click', () => {
        triggerBtn.classList.remove('active')
        commentItem.classList.add('active')
    })
}

addComment()