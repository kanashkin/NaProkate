$(function() {
	const baseLocal = {
		applyLabel: 'Применить',
		cancelLabel: 'Отмена',
		fromLabel: 'От',
		toLabel: 'До',
		daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	}
	$('input[name="daterange"]').daterangepicker({
		opens: 'left',
		locale: baseLocal
	}, function(start, end, label) {
	})

	$('input[name="datetimes"]').daterangepicker({
		timePicker: true,
		locale: {
			applyLabel: 'Применить',
			cancelLabel: 'Отмена',
			format: ('hh:mm A'),
		}
	});

	$('.account__right-button').daterangepicker({
		singleDatePicker: true,
		opens: 'center',
		locale: baseLocal
	}, function(start, end, label) {
		$(`.date-value[field-id="${valueFieldId}"]`).text(start.format('MM/DD/YYYY'));
    }
	)
});

let valueFieldId

function addIdToField() {
	const fieldWrappers = document.querySelectorAll('.account__right-button')

	fieldWrappers.forEach(item => {
		item.addEventListener('click', () => {
			valueFieldId = Math.round(Math.random()*100)
			let field = item.querySelector('.date-value')
			field.setAttribute('field-id', valueFieldId)
		})
	})
}

addIdToField()

function checkChangeOnDatepicker() {
	const targetElement = document.querySelector('.daterangepicker');

	if (!targetElement) {
		setTimeout(checkChangeOnDatepicker, 500)
	} else {
		const observer = new MutationObserver(function(mutationsList) {
			try {
				let lastEl = targetElement.querySelector('.end-date')
				let prevLastEl = lastEl.previousElementSibling
				prevLastEl.classList.add('prev-end')
			} catch {}

			try {
				let tableHeadItems = targetElement.querySelectorAll('thead tr th')
				let spanChild = document.createElement('span')
				tableHeadItems[2].classList.add('next')
				observer.disconnect()
				tableHeadItems[2].appendChild(spanChild)
				observer.observe(targetElement, config);
			} catch {}
			try {
				if (window.location.pathname === '/account.html') {
					let targetElements = document.querySelectorAll('.daterangepicker')
					targetElements.forEach(item => {
						let targetIndex = Array.from(targetElements).indexOf(item)

						if (targetIndex == 0 || targetIndex == 1) {
							item.querySelectorAll('.calendar-table').forEach(item => {
								item.style.display = 'none'
							})
						}
					})
				}
			} catch {}
		});

		const config = { childList: true, subtree: true };

		document.querySelectorAll('.daterangepicker').forEach(item => {
			observer.observe(item, config);
		})
	}
}

checkChangeOnDatepicker()

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