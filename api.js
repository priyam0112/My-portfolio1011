const express = require('express')
const serverless = require('serverless-http')
const router = express.Router()
const nodemailer = require('nodemailer')
const { dirname } = require('path')
const app = express()

app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/sen', (req, res) => {
    let own = 'priyam.pr1208@gmail.com'
    let name = req.query.Name;
    let email = req.query.Email;
    let project = req.query.Project;
    let msg = req.query.desc;
    const mail = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'priyam.pr1208@gmail.com',
            pass: 'jzeobqscptrzzajl'
        }
    });

    mail.sendMail({
        from: 'priyam.pr1208@gmail.com',
        to: [own, email],
        subject: project,
        text: msg
    }, (err) => {
        if(err)
            throw err
        res.redirect('/')
    })
})



app.use('/', router)

app.listen(8000, ()=>{
    console.log("Server Running")
})