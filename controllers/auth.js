const Users = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');


const signup = async (req, res, next) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const bday = req.body.bday;

    const user = new Users({
        username: username
    });
    user.bday = bday;
    await user.setPassword(password);
    await user.save()
        .then(result => {
            console.log(result._id);

            let token = jwt.sign({
                id: result._id,
                username : result.username
            }, config.get('jwt.secret'));

            console.log(token);

            res.json({
                'status': 'success',
                'data': {
                    'token': token
                }
            })
        }).catch(error => {
            res.json({
                'status': 'error'
            })
        });
}

const login = async (req, res, next) => {
    const user = await Users.authenticate()(req.body.username, req.body.password).then(result => {
        if (!result.user) {
            return res.json({
                'status': 'failed',
                'message': 'Login failed'
            })
        }

        let token = jwt.sign({
            id: result._id,
            username : result.username
        }, config.get('jwt.secret'));

        return res.json({
            "status": "success",
            "data": {
                "token": token
            }
        });
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
};


module.exports.signup = signup;
module.exports.login = login;