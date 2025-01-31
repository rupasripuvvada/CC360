document.addEventListener('DOMContentLoaded', function () {

    // Alert after booking an appointment
    const form = document.querySelector('.book form');
    const inputs = form.querySelectorAll('input');
    const submitButton = form.querySelector('button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('You have booked the appointment.');
        inputs.forEach(input => input.value = '');
        submitButton.disabled = true;
    });

    // Enable submit button only after all fields are filled
    function checkFormValidity() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value === '') {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
    });
});