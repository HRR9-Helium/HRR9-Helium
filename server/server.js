var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname +'app/views');
app.set('view engine', 'html');
app.use(app.router);
app.get('/', routes.index);


app.get('*', routes.index);


module.exports = app;

