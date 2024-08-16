document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Collect form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'user' && password === 'password') {
        // Simulate navigation to the main webpage
        alert('Login successful!');
        window.location.href = 'training.html'; // Replace 'main.html' with your actual main webpage
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

document.getElementById('forgotPassword').addEventListener('click', function () {
    alert('Forgot Password functionality is not yet implemented.');
    // Implement the forgot password functionality here
});

document.getElementById('signUp').addEventListener('click', function () {
    alert('Redirecting to Sign Up page.');
    window.location.href = 'training.html'; // Replace 'signup.html' with your actual sign-up page
});
