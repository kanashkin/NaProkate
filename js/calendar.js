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