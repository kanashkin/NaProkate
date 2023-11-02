function addActiveField() {
	const field = document.querySelector('.calendar__field')

	field.addEventListener('click', () => {
		field.classList.add('active')
	})

	window.addEventListener('click', (e) => {
		if (!e.target.classList.contains('calendar__field')) {
			field.classList.remove('active')
		}
	})
}

addActiveField()