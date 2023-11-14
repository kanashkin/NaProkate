const autoInputWidth = () => {
    const inputs = document.querySelectorAll('input.account__item-value.auto-width')

    inputs.forEach(item => {
        item.style.width = (item.value.length + 1) * 9 + 'px'
        item.addEventListener('input', () => {
            if (item.value.length === 0) {
                item.style.width = (item.placeholder.length + 1) * 9 + 'px'
            } else {
                item.style.width = (item.value.length + 1) * 9 + 'px'
            }
        })
    })
}

autoInputWidth()