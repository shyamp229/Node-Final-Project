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


// login: check if user exists in our database then return a token else return error
const login = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
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
                    
                } else {
                    errors.password = "Password incorrect";
                    return res.status(400).json(errors);
                }
            });
        })
        .catch(err => res.status(500).json(err));
}

// registers user into our mongo db but first authenicates the user registering is admin
const register = (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    
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

// get user information by id;
const findUser = (req, res) => {
    const id = req.params.id
    // console.log(id)
    User.findById({ _id: id })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ error: "User not found." })
            }
            res.status(200).json(user)
        })
        .catch(err => res.status(404).json(err));
}



module.exports = { login, register, findUser }