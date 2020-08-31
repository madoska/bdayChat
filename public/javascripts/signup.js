const btnSignup = document.querySelector('.btn').addEventListener('click', function () {
    let username = document.querySelector('#username').value.trim();
    let password = document.querySelector('#password').value.trim();
    let bday = document.querySelector('#bday').value.trim();

    fetch('http://localhost:3000/users/signup', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password,
            'bday': bday
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if (json.status === 'success') {
            let feedback = document.querySelector('.alert');
            feedback.textContent = "Sign up successful!";
            feedback.classList.remove('hidden');
        }
    })
})