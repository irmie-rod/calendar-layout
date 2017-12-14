(function(){
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  console.log(firstDayOfMonth);
  console.log(daysInMonth);

  let calendarDOM = '';

  // let days = [];

  let currentDay = 1;

  for(var i=0; i<6; i++) {
    // let week = [];
    // days.push(week);

    calendarDOM += '<div class="week">'

    for(var j=0; j<7; j++) {
      calendarDOM += '<div class="day">'
      if(i === 0 && j < firstDayOfMonth) {
        // week.push(null);
        calendarDOM += ''
      }
      else if(currentDay <= daysInMonth) {
        // week.push(currentDay);
        calendarDOM += currentDay;
        currentDay++;
      }
      calendarDOM += '</div>'

    }
    calendarDOM += '</div>'
    // days.push(week);
    // console.log(days);
  }

  document.querySelector('.month').insertAdjacentHTML( 'beforeend', calendarDOM );
})()
