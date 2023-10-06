const catalogCategories = () => {
    const catalogTitle = document.querySelector('.catalog-title')
    const categoriesItems = document.querySelectorAll('.category__list-item')

    categoriesItems.forEach(item => {
        item.addEventListener('click', () => {
            categoriesItems.forEach(item => {
                item.classList.remove('active')
            })
            catalogTitle.textContent = item.textContent
            item.classList.add('active')
        })
    })
}

const addLikeItem = () => {
    const triggerBtn = document.querySelectorAll('.catalog__item-like')

    triggerBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
}

const stopHref = () => {
    const catalogItems = document.querySelectorAll('.catalog__item')

    catalogItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const itemHref = item.getAttribute('href')
            
            if (e.target.classList.contains('stop-href') || e.target.closest('.stop-href')) {
                
            } else {
                window.location.href = itemHref
            }
        })
    })
}

const calendar = () => {
    const monthYear = document.querySelector('.calendar-month-year')
    const prevBtn = document.querySelector('.calendar-prev')
    const nextBtn = document.querySelector('.calendar-next')
    const daysContainer = document.querySelector('.calendar__days')

    const currentDate = new Date();
    let selectedDate = currentDate;

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

            if (i === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear()) {
                dayCell.classList.add('active');
            }
        }
    }

    const selectDate = (e) => {
        const selectedDay = e.target.textContent;
        const currentMonth = selectedDate.getMonth();
        const currentYear = selectedDate.getFullYear();
    
        selectedDate = new Date(currentYear, currentMonth, selectedDay);
        showCalendar();
    }

    const goToPrev = () => {
        const currentMonth = selectedDate.getMonth();
        const currentYear = selectedDate.getFullYear();
    
        selectedDate = new Date(currentYear, currentMonth - 1, 1);
        showCalendar();
    }
    
    const goToNext = () => {
        const currentMonth = selectedDate.getMonth();
        const currentYear = selectedDate.getFullYear();
    
        selectedDate = new Date(currentYear, currentMonth + 1, 1);
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



calendar()

stopHref()

addLikeItem()

catalogCategories()

