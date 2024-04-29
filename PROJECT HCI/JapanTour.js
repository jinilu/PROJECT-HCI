document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Change the view (dayGridMonth, timeGridWeek, etc.)
    });
  
    calendar.render();
  });
  