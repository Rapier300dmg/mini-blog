const validUsername = 'user123';
const validPassword = 'password123';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (username === validUsername && password === validPassword) {
        messageDiv.textContent = 'Вы успешно вошли!';
        messageDiv.className = 'success';

    
        window.location.href = 'index.html'; 

    } else {
        messageDiv.textContent = 'Неверный логин или пароль!';
        messageDiv.className = 'error';
    }

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});