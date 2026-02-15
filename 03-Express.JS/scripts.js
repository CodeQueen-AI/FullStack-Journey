import express from 'express';
const app = express()

// Home Page
app.get('/' , (req, res) => {
    res.send('Hello World')
})
app.listen(3000)

// Routes - About Routes
app.get('/about' , (req , res) => {
    res.send('Hello World from About Page!!')
})