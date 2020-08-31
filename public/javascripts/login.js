const btnLogin = document.querySelector('.btn').addEventListener('click', function () {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    fetch('http://localhost:3000/users/login', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password,
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if (json.status === 'success') {
            let feedback = document.querySelector('.alert');
            feedback.textContent = "Login successful!";
            feedback.classList.remove('hidden');
        }
    })
})