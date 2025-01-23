document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    const formTitle = document.getElementById('formTitle');
    const reEnterPasswordDiv = document.getElementById('reEnterPasswordDiv');
    const toggleFormLink = document.getElementById('toggleFormLink');

    // Toggle between Sign Up and Sign In
    toggleFormLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (formTitle.textContent === 'Sign Up') {
            formTitle.textContent = 'Sign In';
            reEnterPasswordDiv.style.display = 'none';
            toggleFormLink.textContent = 'Sign Up now';
            authForm.querySelector('.signin-button').textContent = 'Sign In';
        } else {
            formTitle.textContent = 'Sign Up';
            reEnterPasswordDiv.style.display = 'block';
            toggleFormLink.textContent = 'Login now';
            authForm.querySelector('.signin-button').textContent = 'Sign Up';
        }
    });

    // Form submission handling
    authForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;

        if (formTitle.textContent === 'Sign Up') {
            const reEnterPassword = document.getElementById('inputReEnterPassword').value;
            if (password !== reEnterPassword) {
                document.getElementById('warningReEnterPassword').style.display = 'block';
                return;
            }

            // Check if the user already exists
            if (localStorage.getItem(email)) {
                alert('An account with this email already exists.');
                return;
            }

            // Store user credentials
            localStorage.setItem(email, password);
            alert('Sign Up successful for ' + email);
            authForm.reset(); // Reset the form after successful signup

        } else {
            // Handle Sign In logic
            const storedPassword = localStorage.getItem(email);
            if (storedPassword && storedPassword === password) {
                // alert('Sign In successful for ' + email);
                // Redirect to /payment/payment.html after successful login
                window.location.href = '../payment/payment.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    const formTitle = document.getElementById('formTitle');
    const reEnterPasswordDiv = document.getElementById('reEnterPasswordDiv');
    const toggleFormLink = document.getElementById('toggleFormLink');

    // Toggle between Sign Up and Sign In
    toggleFormLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (formTitle.textContent === 'Sign Up') {
            formTitle.textContent = 'Sign In';
            reEnterPasswordDiv.style.display = 'none';
            toggleFormLink.textContent = 'Sign Up now';
            authForm.querySelector('.signin-button').textContent = 'Sign In';
        } else {
            formTitle.textContent = 'Sign Up';
            reEnterPasswordDiv.style.display = 'block';
            toggleFormLink.textContent = 'Login now';
            authForm.querySelector('.signin-button').textContent = 'Sign Up';
        }
    });

    // Form submission handling
    authForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;

        if (formTitle.textContent === 'Sign Up') {
            const reEnterPassword = document.getElementById('inputReEnterPassword').value;
            if (password !== reEnterPassword) {
                document.getElementById('warningReEnterPassword').style.display = 'block';
                return;
            }

            // Check if the user already exists
            if (localStorage.getItem(email)) {
                alert('An account with this email already exists.');
                return;
            }

            // Store user credentials
            localStorage.setItem(email, password);
            alert('Sign Up successful for ' + email);
            authForm.reset(); // Reset the form after successful signup

        } else {
            // Handle Sign In logic
            const storedPassword = localStorage.getItem(email);
            if (storedPassword && storedPassword === password) {
                // alert('Sign In successful for ' + email);
                // Redirect to /payment/payment.html after successful login
                window.location.href = '/payment/payment.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    const formTitle = document.getElementById('formTitle');
    const reEnterPasswordDiv = document.getElementById('reEnterPasswordDiv');
    const toggleFormLink = document.getElementById('toggleFormLink');

    // Toggle between Sign Up and Sign In
    toggleFormLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (formTitle.textContent === 'Sign Up') {
            formTitle.textContent = 'Sign In';
            reEnterPasswordDiv.style.display = 'none';
            toggleFormLink.textContent = 'Sign Up now';
            authForm.querySelector('.signin-button').textContent = 'Sign In';
        } else {
            formTitle.textContent = 'Sign Up';
            reEnterPasswordDiv.style.display = 'block';
            toggleFormLink.textContent = 'Login now';
            authForm.querySelector('.signin-button').textContent = 'Sign Up';
        }
    });

    // Form submission handling
    authForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;

        if (formTitle.textContent === 'Sign Up') {
            const reEnterPassword = document.getElementById('inputReEnterPassword').value;
            if (password !== reEnterPassword) {
                document.getElementById('warningReEnterPassword').style.display = 'block';
                return;
            }

            // Check if the user already exists
            if (localStorage.getItem(email)) {
                alert('An account with this email already exists.');
                return;
            }

            // Store user credentials
            localStorage.setItem(email, password);
            alert('Sign Up successful for ' + email);
            authForm.reset(); // Reset the form after successful signup

        } else {
            // Handle Sign In logic
            const storedPassword = localStorage.getItem(email);
            if (storedPassword && storedPassword === password) {
                // alert('Sign In successful for ' + email);
                // Redirect to /payment/payment.html after successful login
                window.location.href = '/payment/payment.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        }
    });
});
