const path = require('path')
const express = require('express')
const app = express()
const publicDirectoryPath = path.join(__dirname, './public')
const recipe = require('./utils/food')

const port = process.env.PORT || 3000


app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')


app.post('/email', (req, res) =>{
    console.log('Data', req.body)
    res.json({ message: 'Message recieved'})
})

app.get('', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.get('/result', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search!'
        })
    }

    recipe(req.query.search, (error, response)=>{
        if(error){
            return res.send({error})
        }

        res.send({
            body:  response,
            search: req.query.search,
            text: "i am a developer"
        })

    })
})

app.get('*', (req, res) => {
    res.send("<h1>Page not found</h1>")
})

app.listen(port, () => {
console.log('Server is up on port 3000.')
})