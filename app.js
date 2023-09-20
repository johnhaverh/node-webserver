const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 8080;

//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',function (err){});

//servir contenido estático - middlewere
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'John Herrera',
    titulo: 'Curso node'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic',{
    nombre: 'John Herrera',
    titulo: 'Curso node'
  })
})

app.get('/elements', function (req, res) {
  res.render('elements',{
    nombre: 'John Herrera',
    titulo: 'Curso node'
  })
})

app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})


app.listen (port, () => {
  console.log(`App listening at http://localhost: ${port}`);
    
})


//rutas

//la linea "app.use(express.static('public'));"" hace que no se ejecute esta sentencia
// app.get('/', function (req, res) {
//   res.send('Home page')
// })

// app.get('/elements', function (req, res) {
//   res.sendFile(__dirname + '/public/elements.html')
// })

// app.get('/generic', function (req, res) {
//   res.sendFile(__dirname + '/public/generic.html')
// })


// app.get('/test', function (req, res) {
//   res.send('test page')
// })

// app.get('*', function (req, res) {
//   res.send('404 - Page not found')
// })

// app.listen(8080)