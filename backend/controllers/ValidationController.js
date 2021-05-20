const validateLoginInput = require('../validations/validateLogin');
const validateRegInput = require('../validations/validateRegister');
const validateNewsInput = require('../validations/validateNews');

const LoginRequirement = (req, res, next) => {
    const { errors, isValid } = validateLoginInput(req.body);
    // console.log(errors);
    // console.log(isValid);
    if (!isValid) {
        return res.status(400).json({ errors })
    } else {
        next();
    }
}

const RegisterRequirement = (req, res, next) => {
    const { errors, isValid } = validateRegInput(req.body);
    // console.log(errors);
    // console.log(isValid);
    if (!isValid) {
        return res.status(400).json({ errors })
    } else {
        next();
    }
}

const NewsRequirement = (req, res, next) => {
    const { errors, isValid } = validateNewsInput(req.body);
    // console.log(errors);
    // console.log(isValid);
    if (!isValid) {
        return res.status(400).json({ errors })
    } else {
        next();
    }
}


module.exports = { LoginRequirement, RegisterRequirement, NewsRequirement }