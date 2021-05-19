const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
}, {
    timestamps: true
})

UserSchema.methods.genPasswordHash = function (password) {
    const salt = bcrypt.genSaltSync(10)
    this.passwordHash = bcrypt.hashSync(password, salt)
}

UserSchema.methods.comparePasswordHash = function (password) {
    return bcrypt.compareSync(password, this.passwordHash)
}

UserSchema.methods.genUserObj = function () {
    const payload = {
        name: this.name,
        email: this.email
    }

    const token = jwt.sign(payload, 'secret1234')
    // localStorage.setItem('currUser', token);

    return {
        token
    }
}

const User = mongoose.model('User', UserSchema, 'user')

module.exports = User