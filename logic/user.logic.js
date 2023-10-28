const userlogic = require('../logic/user.logic')
const User = require('../modal/user.modal')

// register user
exports.register = async (user) => {
    const result = await User.create(user)
    return result
}

// edit user profile
exports.edit = async (doc) =>{
    const result = await User.updateOne({ _id: doc.id }, doc, { new: true })
    return result
}