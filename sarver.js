const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = require('./index');
const server = require('./index');

mongoose.connect(process.env.db).then(() =>{
    console.log(`DataBase connect successfully`)
})

// sarver
const port = process.env.PORT || 5000 ;

// io.on("connection",(socket)=>{
//     console.log("a user connected",socket.id)
//   })

app.listen(port , () =>{
    console.log(`App is running on port ${port}`)
})
