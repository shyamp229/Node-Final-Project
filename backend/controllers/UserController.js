const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const config = require('../config/config');


const login = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then(user => {
            // if user is not found
            if (!user) {
                res.status(404).json({ msg: 'User Not found.' })
            } else {
                if (user.comparePasswordHash(password)) {
                    res.json(user.genUserObj());
                } else {
                    res.status(401).json({ msg: "Invalid Credentials." })
                }
            }
        })
        .catch(err => res.status(500).json(err))
}

const register = (req, res) => {
    let headerInfo = req.headers.authorization;
    // authenticated user is admin
    if (headerInfo) {
        let token = headerInfo.replace('Bearer ', '');
        jwt.verify(token, config.secretKey, (err, decoded) => {

            if (err) {
                return res.status(500).send({ auth: false, message: err });
            }
            //req.username = decoded.username;
            const { name, email, password } = req.body;
            const user = new User()
            user.name = name;
            user.email = email;
            user.genPasswordHash(password);
            user.save()
                .then(newUser => res.json(newUser.genUserObj()))
                .catch(err => res.status(500).json(err));
        });
    } else {
        res.status(403).json({ msg: "Invalid token!" })
    }

}

module.exports = { login, register }