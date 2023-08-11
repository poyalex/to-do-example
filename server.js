require('dotenv').config()
/* This lets me take the values from my .env file
    and inject them into process.env
    My .env should have a MONGO_URI which will come from my
    MongoDB cloud provider.
*/

require('./config/database')
const app = require('./appserver')
const PORT = process.env.PORT || 8000



app.listen(PORT, () => {
	console.log (`Port ${PORT} is live`)
})