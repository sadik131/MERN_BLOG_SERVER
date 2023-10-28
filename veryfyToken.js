const jwt = require("jsonwebtoken");
const User = require("./modal/user.modal");


exports.varifyToken = async (req, res, next) => {
    const auth = req.headers.authorization
    const token = auth.split(" ")[1]
    jwt.verify(token, "sdkfjsdjfsadjfsjdf", async function (err, decoded) {
        if (err) {
           return res.status(400).json({
            status:false,
            message:err.message
           })
        }
        const result = await User.find({ _id: decoded.id })

        res.json(result)
        next()
    });
}