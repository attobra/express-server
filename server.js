//jshint esversion:6

const express = require('express')
const app = express()

app.get("/", (req, res)=>{
    res.send("<h1>hello World</h1>")
})

app.get("/contact", (req, res)=>{
    res.send('<h2>Email me @ nora@gmail.com</h2>')
})

app.get("/about", (req, res)=>{
    res.send("<h3>This is Nora. You are welcome here</h3>")
})

app.get("/hobbies", (req, res)=>{
    res.send("<ul><li>Movies</li><li>learn to code</li><li>traveling</li></ul>")
})


app.listen(3000, ()=>{
    console.log("server on 3000")
})