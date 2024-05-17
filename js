document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(`Captured Credentials -> Username: ${username}, Password: ${password}`);
    alert('This is a demonstration. Your credentials have been captured.');
});
