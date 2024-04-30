document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Change the view if needed
      selectable: true, // Enable date selection
      select: function(start, end) { // Function triggered on date selection
        console.log('You selected from ' + start.format() + ' to ' + end.format());
        // Update timeInput value with selected date (modify format if needed)
        document.getElementById('timeInput').value = start.format();
      }
    });

    calendar.render();
    
    var timeInput = document.getElementById('timeInput');
    timeInput.setAttribute('placeholder', 'Select a time'); // Set placeholder initially

    timeInput.addEventListener('focus', function() {
      this.setAttribute('placeholder', ''); // Remove placeholder when focused
    });
    timeInput.addEventListener('blur', function() {
      this.setAttribute('placeholder', 'Select a time'); // Restore placeholder when blurred
    });
    
    // Code for changeable number input
    var numberInput = document.getElementById('myNumber');
    // Add functionality to change the number based on your needs (e.g., buttons, event listeners)
  });


