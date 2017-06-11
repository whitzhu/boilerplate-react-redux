const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Home Sweet Home is listenting on PORT ${process.env.port || 3000}`);
});
