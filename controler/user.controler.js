const userlogic = require('../logic/user.logic')
const User = require('../modal/user.modal')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


// register new user
exports.registeruser = async (req, res) => {
    try {
        const user = req.body
        const result = await userlogic.register(user)
        res.status(200).json({
            success: true,
            user: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error,
            message: "Some think went wrong"
        })
    }
}

// login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(204).json({
                error: error.message,
                message: "Not Found"
            })
        } else {
            if (user.password !== password) {
                res.end(400).json({
                    message: "Wrong Email/Password"
                })
            }
            const id = user._id

            const token = jwt.sign({ id: id }, "sdkfjsdjfsadjfsjdf", { expiresIn: '1h' })

            res.status(200).json({
                success: true,
                user,
                token
            })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            error: error,
            message: "Some think went wrong"
        })
    }
}

exports.editProfile = async (req, res) => {

    try {
        const doc = req.body
        const result = await userlogic.edit(doc)
        res.status(200).json({
            success: true,
            Post: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
            message: "Couldn't update your profile"
        })
    }
}