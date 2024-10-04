// CALENDER:


document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const eventFormContainer = document.getElementById('event-form-container');
    const selectedDateSpan = document.getElementById('selected-date');
    const eventForm = document.getElementById('event-form');

    // Generate calendar for the current month (for simplicity)
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const currentYear = new Date().getFullYear();

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
dayDiv.textContent = `${i} ${currentMonth}`; // Use backticks for template literals
dayDiv.dataset.date = `${i} ${currentMonth} ${currentYear}`; // Wrap with backticks for template literals
calendar.appendChild(dayDiv);


        // Event listener for each date click
        dayDiv.addEventListener('click', function () {
            const selectedDate = dayDiv.dataset.date;
            selectedDateSpan.textContent = selectedDate;

            // Show the form
            eventFormContainer.style.display = 'block';
        });
    }

    // Handle form submission
    eventForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const selectedDate = selectedDateSpan.textContent;

        alert('Thank you, ${name}! You have joined the event on ${selectedDate}.');
        
        // Reset the form and hide the event form
        eventForm.reset();
        eventFormContainer.style.display = 'none';
    });
});