const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html')));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Boilerplate-react-redux is listenting on PORT ${port}`);
});
