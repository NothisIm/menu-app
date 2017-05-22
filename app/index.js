const express = require('express')
const app = express()
const port = 3000

app.use(express.static('static'))

app.get('/', (request, response) => {
	response.redirect('index.html')
})

app.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}

	console.log(`server is listening on ${port}`)
})