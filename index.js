(function(){
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentMonthName = currentDate.toLocaleString(navigator.language, { month: 'long' });

  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let calendarDOM = '';
  let currentDay = 1;

  // build calendarDOM string with the current day in the grid
  for(let i=0; i<6; i++) {
    calendarDOM += '<div class="week">';

    for(let j=0; j<7; j++) {
      calendarDOM += '<div class="day">';
      if(i === 0 && j < firstDayOfMonth) {
        calendarDOM += '';
      }
      else if(currentDay <= daysInMonth) {
        calendarDOM += currentDay;
        currentDay++;
      }
      calendarDOM += '</div>';

    }
    calendarDOM += '</div>';
  }

  // manipulate DOM with days of the month
  document.querySelector('.month-grid').insertAdjacentHTML( 'beforeend', calendarDOM );
  document.querySelector('.month-label').innerHTML = currentMonthName;
})()
