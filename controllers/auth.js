const Users = require('../models/User');
const passport = require('../passport/passport');

const signup = async (req, res, next) => {
    const username = req.body.username;
    let password = req.body.password;

    const user = new Users({ username: 'username' });
    await user.setPassword('password');
    await user.save().then(result => {
        res.json({
            'status': 'success'
        })
    }).catch(error => {
        res.json({
            'status': 'error'
        })
    });
}

const login = async (req, res, next) => {
    const { user } = await User.authenticate()(req.body.username, req.body.password).then(result => {
        res.json({
            'status': 'success',
            'data': {
                'user': result
            }
        })
    }).catch(error => {
        res.json({
            'status': 'error',
            'message': error
        })
    })
}

module.exports.signup = signup;
module.exports.login = login;