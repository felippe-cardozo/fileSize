const express = require('express')
const multer = require('multer')
const upload = multer({dest: './uploads'})
const path = require('path')
const port = require('./config').port

const app = express()

app.post('/', upload.single('fileToUpload'), (req, res) => {
  res.json({size: req.file.size})
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port)
