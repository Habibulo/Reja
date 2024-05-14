/* 
18-19 Darslar
console.log('web serverni boshlash')

// buyerdan biz expressni ornatamiz [npm install express --save]

const express = require('express');
const app = express();
const http = require('http')
// 4 bosqichli server

// 1 Kirish uchun Codes
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))  // html form dan birorbir narsani post qilsak qabul qilib oladi [traditional formatda]

// 2 Session Codes

// 3 Views Codes
// Express uchun BSSR yonalishi = Backend Server Side Rending

app.set('views', 'views')
app.set('view engine', 'ejs')

// buyerda backendni ichida frontend uchun html yasaymiz [ traditional yonalishida ]


// 4 Route Codes
app.get('/hello', function(req, res){
    res.end('<h1>Hello World by Daniel</h1>')
})
app.get('/gifts', function(req, res){
    res.end('<h1>Siz endi Sovgalar bolimidasiz</h1>')
})
app.get('/', function(req, res){
    res.render("shopping")
})

const server = http.createServer(app)
let PORT = 3000
server.listen(PORT, function() {
    console.log(`The server is successfully is working on port: ${PORT}`)
})


/* git ga commit uchun 
    > npm i git --save
    > npm init
    > git status [Untracked files = .gitignore, package.json.....]
    > git add .
    > git commit -m "BRR: Build Express Web Server"
    > git log --oneline
    
*/
// 18-19 dars tugashi*/