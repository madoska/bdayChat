fetch('http://localhost:3000/views/chat', {
    'headers': {
        'Authorization': 'Bearer' + localStorage.getItem('token')
    }
}).then(result => {
    return result.json();
}).then(json => {
    console.log(json)
}).catch(err => {
    console.log("Error")
})

let input = document.querySelector('#msg');
input.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        let text = input.value;
        fetch('http://localhost:3000/views/chat', {
            method: 'post',
            'headers': {
                'Content-type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                'text': text
            })
        }).then(result => {
            return result.json();
        }).then(json => {
            console.log(json)
        }).catch(err => {
            console.log(err)
        })
    }
    e.preventDefault();
})