const User = require('../models/UserSchema');
const jwt = require('jsonwebtoken');
const config = require('../config/config');


const isAuthenticated = (req, res, next) => {
    // perform checks
    let headerInfo = req.headers.authorization;
    if (headerInfo) {
        let token = headerInfo.replace('Bearer ', '');
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if (err) {
                return res.status(500).send({ auth: false, message: err });
            } else {
                let email = decoded.email;
                User.findOne({ email })
                    .then(user => {
                        // if user is not found
                        // console.log(user);
                        if (!user) {
                            // redirect to login
                            res.status(404).json({ msg: 'User Not found.' })
                        } else {
                            next();
                        }
                    })
                    .catch(err => res.status(500).json(err))
            }

        })
    } else {
        return res.status(404).json({ msg: "Need to login!" })
    }

}


module.exports = { isAuthenticated }