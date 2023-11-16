const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()
const path = require("path")
// const http =require("http")
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);


// middelwars

app.use(express.json())
app.use(express.static("public"))
const multer = require("multer")
app.use(cors())

// file uploder store

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, 'public/Images')
  },
  filename: function (req, file, cb) {
    return cb(null, file.fieldname + '-' + Date.now() + file.originalname.match(/\..*$/)[0])
  }
});

const upload = multer({ storage })


// router
const postRouter = require("./route/post.route")
const userRouter = require("./route/user.route")
const { varifyToken } = require("./veryfyToken")
const Post = require("./modal/post.modal")
const User = require("./modal/user.modal")




app.use("/api/register", userRouter)
app.use("/api/post", postRouter)
app.use("/user", varifyToken)


// upload a post 
app.post('/upload', upload.single("file"), async (req, res) => {
  const file = req.file.filename
  try {
    res.send(file)
    // const result = await Post.create({ text: postText, postImg: file, user: req.body.user })
    // res.status(200).json({
    //   success: true,
    //   result
    // })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
});

app.patch("/profile/:id", upload.single("file"), async (req, res) => {
  const file = req.file.filename
  try {
    const result = await User.updateOne({ _id: req.params.id }, { userImg: file }, { new: true })
    console.log(result)
    res.status(200).json({
      result,
      success: true,
      message: "Update Successfully"
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      error,
      success: false,
      message: "Can't upload your photo"
    })
  }
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})



module.exports = app;