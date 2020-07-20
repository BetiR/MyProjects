let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = ['Јануари', 'Февруари', 'Март', 'Април', 'Мај', 'Јуни', 'Јули', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']

let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

const eventsData = [
    {
        date: new Date(2020, 5, 06),
        title: 'Deep dive into Data Science',
        time: '10:00 - 18:00ч',
        text: 'Ден 1',
        bgColor: 'blue',
        color: 'white'
    },
    {
        date: new Date(2020, 5, 07),
        title: 'Deep dive into Data Science',
        time: '10:00 - 18:00ч',
        text: 'Ден 2',
        bgColor: 'blue',
        color: 'white'
    },
    {
        date: new Date(2020, 5, 20),
        title: 'Deep dive into Marketing',
        time: '10:00 - 18:00ч',
        text: 'Ден 1',
        bgColor: 'red',
        color: 'white'
    },
    {
        date: new Date(2020, 5, 21),
        title: 'Deep dive into Marketing',
        time: '10:00 - 18:00ч',
        text: 'Ден 2',
        bgColor: 'red',
        color: 'white'
    }
]

renderCalendar(currentMonth, currentYear, eventsData);

function next() {
    currentYear = (currentMonth == 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    renderCalendar(currentMonth, currentYear, eventsData);
}

function prev() {
    currentYear = (currentMonth == 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth == 0) ? 11 : currentMonth - 1;
    renderCalendar(currentMonth, currentYear, eventsData);
}

function renderCalendar(month, year, events) {

    let renderToday = new Date();

    let firstDay = new Date(year, month).getDay();

    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let calendar = document.querySelector('#calendar-body');
    let monthAndYear = document.querySelector('#monthAndYear')

    monthAndYear.innerHTML = `${months[month]} ${year}`;
    calendar.innerHTML = '';

    let thisYearAndMonthEvents = events.filter(event => event.date.getFullYear() == year && event.date.getMonth() == month);

    let date = 1;

    for (let i = 0; i < 6; i++) {
        let week = document.createElement('div');
        week.classList.add('calendar-week');

        for (let j = 0; j < 7; j++) {

            if (i == 0 && j < firstDay) {

                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty-cell');
                week.appendChild(emptyCell);

            } else if (date <= daysInMonth) {
                let dayCell = document.createElement('div');
                dayCell.classList.add('day-cell');


                if (date == renderToday.getDate() && month == renderToday.getMonth() && year == renderToday.getFullYear()) {
                    dayCell.classList.add('today');
                }

                let dayCellHTML = '';

                if (thisYearAndMonthEvents.length) {

                    let todayEvent = thisYearAndMonthEvents.filter(event => event.date.getDate() == date);

                    if (todayEvent.length) {
                        dayCell.classList.add('event-day');

                        todayEvent.forEach(ev => {
                            dayCellHTML += `
                        <div class="event d-none d-lg-block">
                            <div><b>${ev.title}</b></div>
                            <div>${ev.time}</div>
                            <div>${ev.text}</div>
                        </div>
                            <span>${date}</span>`;
                            dayCell.style.backgroundColor = ev.bgColor;
                            dayCell.style.color = ev.color;
                        });


                        let nastani = document.querySelector('#nastani');
                        if (date < 10) {
                            date = '0' + date;
                        }


                        var monthstr = currentMonth <= 9 ? '0' + currentMonth : currentMonth;



                        todayEvent.forEach(ev => {
                            nastani.innerHTML += `
 <div class="card mb-3" style="border-left:4px solid ${ev.bgColor}; background-color:black; min-width: 18rem">
  <div class="card-body">
  ${date}/${monthstr}/${year}<br>
    <b>${ev.title}</b><br>
    ${ev.text}<br>
    ${ev.time}
   
  </div>
</div>
                  `});
                    }
                }

                dayCell.innerHTML = (dayCellHTML == '') ? `<span>${date}</span>` : dayCellHTML;

                week.appendChild(dayCell);

                date++;
            } else if (date > daysInMonth) {

                let emptyCell = document.createElement('div');
                emptyCell.classList.add('empty-cell');
                week.appendChild(emptyCell);
            }
        }
        calendar.appendChild(week);
    }
}
