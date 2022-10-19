// import express to star a server
const express = require('express')
const app = express()

// import path for using absolutes routes
const path = require('path')


// using this to tell to express the route for using the public resources 
app.use(express.static(path.resolve( 'public' ) ) )

// starting server on port 3000
app.listen(3000, () =>{
    console.log("Server up, running in port 3000")
})

app.get("/", (request, response) =>{
    response.sendFile( path.resolve('views/home.html') )
})

app.get("/register", (request, response) => {
    response.sendFile( path.resolve('views/register.html'))
})


app.get("/login", (request, response) => {
    response.sendFile( path.resolve('views/login.html'))
})

