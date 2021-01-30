const express = require('express')
const app = express()
const port = 3000

const expressEjsLayouts = require('express-ejs-layouts')
const router = require('./router')

app.use(express.static("public"))
app.set("views", "views")
app.set("view engine", "ejs")
app.use(expressEjsLayouts)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)

app.set('layout pages/signin', false)
app.set('layout pages/signup', false)
app.set('layout pages/forgot-pass', false)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})