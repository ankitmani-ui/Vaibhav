document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hide all warnings initially
    const warnings = document.querySelectorAll('.warning-input');
    warnings.forEach(warning => warning.style.display = 'none');
    
    let valid = true;
    
    // Validate Name
    const name = document.getElementById('inputName');
    if (!name.value.trim()) {
        document.getElementById('warningName').style.display = 'block';
        valid = false;
    }
    
    // Validate Phone Number
    const phone = document.getElementById('inputPhone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
        document.getElementById('warningPhone').style.display = 'block';
        valid = false;
    }

    // Validate Amount
    const amount = document.getElementById('inputAmount');
    if (parseInt(amount.value) < 250) {
        document.getElementById('warningAmount').style.display = 'block';
        valid = false;
    }

    // If everything is valid, proceed with payment and countdown
    if (valid) {
        // Hide the form and show the success message with countdown
        document.getElementById('authForm').style.display = 'none';
        document.getElementById('successMessageDiv').style.display = 'block'; // Show success message
        
        // Get input values for the welcome message
        const userName = name.value;
        const userAmount = parseInt(amount.value);
        const userPhone = phone.value;

        // Display the welcome message with calculated 3 times the entered amount
        const welcomeMessage = document.getElementById('welcomeMessage');
        const totalAmount = 3 * userAmount; // Calculate 3 times the entered amount
        welcomeMessage.innerHTML = `Your payment was successful!<br><br>
                                   ${userName}, your process starts now. After 15 days (remaining day displayed blow), you will get <strong>${totalAmount}</strong> rupees on your mobile number <strong>${userPhone}</strong>.`;

        // Set the end date to 15 days from now
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 15);

        // Function to update the countdown
        function updateCountdown() {
            const now = new Date();
            const timeRemaining = endDate - now;

            if (timeRemaining <= 0) {
                document.getElementById('countdownTimer').innerHTML = 'The countdown has ended!';
                clearInterval(countdownInterval); // Stop the countdown
            } else {
                // Calculate days, hours, minutes, and seconds remaining
                const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                // Display the countdown in the format: 15d 0h 0m 0s
                document.getElementById('countdownTimer').innerHTML = `${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s left`;
            }
        }

        // Update the countdown every second (1000 ms)
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
    }
});
