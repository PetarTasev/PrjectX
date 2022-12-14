const express = require('express')
const hbr = require('express-handlebars')

const handlebars = hbr.create({
    extname: '.hbs'
})

const app = express()

app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('home', { 
    layout: false})
})

app.listen(3000)