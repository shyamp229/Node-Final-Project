const User = require('../models/user');
// register validation method
const validateRegisterInput = require("../validations/register");
// login validation method
const validateLoginInput = require("../validations/login");
// bcrypt
const bcrypt = require("bcryptjs");
// jwttoken
const jwt = require("jsonwebtoken");
// config file
const key = require("../config/config");


// login
const login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    // console.log(isValid);
    // console.log(errors);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then((user) => {
            if (!user) {
                errors.email = "User not found";
                return res.status(404).json(errors);
            }
            // check password
            // one is in encrypted and other one is in normal text
            bcrypt.compare(password, user.password).then((isMatch) => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    };

                    jwt.sign(
                        payload,
                        key.secretKey,
                        { expiresIn: 3600 },
                        (err, token) => {
                            res.status(200).json({
                                token
                            });
                        }
                    );
                    //return res.status(200).json(payload);
                } else {
                    errors.password = "Password incorrect";
                    return res.status(400).json(errors);
                }
            });
        })
        .catch(err => res.status(500).json(err));
}

const register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    // console.log(isValid);
    // console.log(errors);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;

            newUser
                .save()
                .then((user) => res.status(201).json(user))
                .catch(err => res.status(500).json(err));
        });
    });
}



module.exports = { login, register }