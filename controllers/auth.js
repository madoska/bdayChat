const Users = require('../models/User');
const passport = require('../passport/passport');

const signup = async (req,res,next) => {
    const username = req.body.username;
    let password = req.body.password;
    
    const user = new Users({username : 'username'});
    await user.setPassword('password');
    await user.save().then(result => {
        res.json({
            'status' : 'success'
        })
    }).catch(error => {
        res.json({
           'status': 'error' 
        })
    });
}

module.exports.signup = signup;