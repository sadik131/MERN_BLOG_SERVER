const express = require("express")
const router = express.Router()
const userControler = require("../controler/user.controler")
const { varifyToken } = require("../veryfyToken")

router.route("/")
.post(userControler.registeruser)
.patch(userControler.editProfile)



router.route("/login")
.post(userControler.loginUser)

module.exports = router

