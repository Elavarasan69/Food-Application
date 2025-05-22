import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

//app config
const app = express()
const PORT = 4000

//middleware
app.use(express.json())
app.use(cors())


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})