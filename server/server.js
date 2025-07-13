const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')
app.use(express.json())
app.use(express.static(path.join(__dirname, '../src')))

app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../src/index.html'));
        // res.send('Hello from Thomas')
    } catch (err) {
        console.log(err)
    }
})

app.get('/projects', async (req, res) => {
    try {
        await res.sendFile()
    } catch( err ) {
        console.log( err )
    }
})


app.listen(PORT, function(err) {
    if (err) console.log('Error in server setup')
    console.log(`Server listeing on Port ${PORT}`)
}) 