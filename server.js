var 	express = require('express')
	,	bodyParser = require('body-parser')
	,	cors = require('cors')
	,	mongoose = require('mongoose')
	,	foodCtrl = require('./controllers/foodCtrl')
	,	port = 8090
	,	app = express()
	,	mongoUri = 'mongodb://localhost:27017/menu';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.get('/api/food', foodCtrl.getFood);
app.post('/api/food/review', foodCtrl.addReview);
app.get('/api/food/review', foodCtrl.getOneReview);
app.post('/api/food', foodCtrl.addFood);
app.delete('/api/food/:id', foodCtrl.deleteFood);

app.listen(port, function() {
	console.log('Listening on ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});