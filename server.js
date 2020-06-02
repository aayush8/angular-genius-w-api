const express = require('express')
const app = express()

app.use(express.static('geniusapi'))

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/geniusapi/'})
});

app.listen(process.env.PORT || 8080)