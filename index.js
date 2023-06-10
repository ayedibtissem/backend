const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')

app.use(express.json())
app.use(cors())


require('dotenv').config()
mongoose.connect(process.env.DBURL)
    console.log("db connected")
app.get('/',(req,res)=>{
    res.send('hello ')
})
const userRoutes=require('./routes/user.route')
app.use("/users",userRoutes)

const quizRoutes = require('./routes/quiz.route');
app.use('/quizzes', quizRoutes);

const robotRoutes = require('./routes/robot.router');
const categoryRoutes = require('./routes/robot.router');
app.use('/robot', categoryRoutes);
const categorychRoutes = require('./routes/category.Ch.route');
app.use('/quiz', categorychRoutes);
const usersRoutes = require('./routes/usermanagenet route');
app.use('/admin', usersRoutes);
const quizzRoutes = require('./routes/quizmanagement.route');
app.use('/admin', quizzRoutes);
app.listen(process.env.PORT,()=>{
   console.log(`app listening on port${process.env.PORT}`
   ) 
})