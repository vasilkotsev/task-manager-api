const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//Express middleware
// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send("GET requests are disabled")
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send("The web app is under construction")
// });




//with middleware: new request --> do something --> run route handler



// const pet = {
//     name: "Hal"
// }

// pet.toJSON = function () {
//     console.log("kur")
//     return {}
// }
// console.log(JSON.stringify(pet))


/* ------------- */
// const Task = require("./models/task")
// const User = require("./models/user")

// const main = async () => {
//     // const task = await Task.findById('61f13d3a4f7cb90a2845fb7e')
//     // await task.populate("owner").execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById("61f13ad793989834e4d3e831")
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main();


/* Example of adding file upload to express */

// const multer = require("multer");
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000, // 1MB
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error("Please upload a Word document"));
//         }

//         cb(undefined, true);
//         // cb(new Error("File must be a PDF"));
//         // cb(undefined, true);
//         // cb(undefined, false)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error("From my middleware")
// }

// app.post("/upload", upload.single('upload'), upload.single("upload"), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })