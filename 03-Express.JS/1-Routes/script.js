import express from 'express';
const app = express()

// Simple Express.JS Code
app.get('/' , (req, res) => {
    res.send('Hello World')
})

// Routes - About Route
app.get('/about' , (req , res) => {
    res.send('Hello World from About Page!!')
})
app.listen(3000)

// Service Route
app.get('/about' , (req , res) => {
    res.send('Hello World from Service Page!')
})
app.listen(3000)