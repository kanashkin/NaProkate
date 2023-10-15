const calendar = (calendarSelector) => {
    const calendarBlock = document.querySelector(calendarSelector)
    const monthYear = calendarBlock.querySelector('.calendar-month-year')
    const prevBtn = calendarBlock.querySelector('.calendar-prev')
    const nextBtn = calendarBlock.querySelector('.calendar-next')
    const daysContainer = calendarBlock.querySelector('.calendar__days')

    const currentDate = new Date();
    let selectedDate = currentDate;
    let point

    const showCalendar = () => {
        let currentMonth = selectedDate.getMonth()
        let currentYear = selectedDate.getFullYear()
        daysContainer.innerHTML = ''
        monthYear.textContent = `${getMonth(currentMonth)} ${currentYear}`

        let firstDay = new Date(currentYear, currentMonth, 1).getDay();
        let totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            daysContainer.appendChild(emptyCell);
        }

        for(let i = 1; i < totalDays; i++) {
            let dayCell = document.createElement('div')
            dayCell.textContent = i
            dayCell.classList.add('calendar__days-item')
            daysContainer.appendChild(dayCell)
            dayCell.addEventListener('click', selectDate)

            // if (i === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear()) {
            //     dayCell.classList.add('active');
            // }
        }
    }

    const selectDate = (e) => {
        const selectedDay = e.target.textContent;
        e.target.classList.add('active')
        const currentMonth = selectedDate.getMonth();
        const currentYear = selectedDate.getFullYear();
        selectedDate = new Date(currentYear, currentMonth, selectedDay);
    }

    const goToPrev = () => {
        const currentMonth = selectedDate.getMonth();
        const currentYear = selectedDate.getFullYear();
    
        selectedDate = new Date(currentYear, currentMonth - 1);
        showCalendar();
    }
    
    const goToNext = () => {
        const currentMonth = selectedDate.getMonth();
        const currentYear = selectedDate.getFullYear();
    
        selectedDate = new Date(currentYear, currentMonth + 1);
        showCalendar();
    }

    prevBtn.addEventListener('click', goToPrev)
    nextBtn.addEventListener('click', goToNext)

    const getMonth = (monthIndex) => {
        const months = [
            'January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ]

        return months[monthIndex]
    }

    showCalendar()

}

calendar('.calendar')
calendar('.product-calendar')