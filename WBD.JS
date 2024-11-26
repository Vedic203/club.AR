const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'anurag' && password === '1819') {
        // Redirect to the second page
        window.location.href = 'WBD.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});