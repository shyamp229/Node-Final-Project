const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');


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
    // let headerInfo = req.headers.authorization;
    // // authenticated user is admin
    // if (headerInfo) {
    //     let token = headerInfo.replace('Bearer', '');
    //     let result = jwt.verify(token, 'secret1234');
    //     if (result) {
    const { name, email, password } = req.body;
    const user = new User()
    user.name = name;
    user.email = email;
    user.genPasswordHash(password);
    user.save()
        .then(newUser => res.json(newUser.genUserObj()))
        .catch(err => res.status(500).json(err));
    //     } else {

    //     }
    // } else {
    //     res.status(403).json({ msg: "Invalid permission!" })
    // }

}

module.exports = { login, register }