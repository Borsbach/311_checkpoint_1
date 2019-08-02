const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(usersRoutes);


app.listen(port, () => {
  console.log('app is listening on:', port)
})