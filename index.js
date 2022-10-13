const express = require('express')
const hbr = require('express-handlebars')

const handlebars = hbr.create({
    extname: '.hbs'
})

const app = express()

app.engine('.hbr', handlebars.engine)
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Handlebars Demo'
    })
})

app.listen(3000)