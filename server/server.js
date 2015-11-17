var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname +'/views');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
 

app.get('*', routes.index);

var server = app.start();