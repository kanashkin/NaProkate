const selectColor = () => {
    const colorInput = document.querySelector('.account-requistes-color')
    const colorField = document.querySelector('.color-value')

    colorInput.addEventListener('input', () => {
        let currentColor = colorInput.value
        colorField.textContent = currentColor.slice(1)
    })
}

const quillField = () => {
    let quill = new Quill('#editor', {
        theme: 'snow'
    });
}

selectColor()
quillField()