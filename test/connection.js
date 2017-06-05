const mongoose = require('mongoose');

//ES6Promises
mongoose.Promise = global.Promise;

//connect to database before test run
before(function(done){
	// connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open',function(){
	console.log('mongodb connected now...');
	done();
}).on('error',function(error){
	console.log('error occured',error);
});
});


// Drop charactor collection before each test

beforeEach(function(done){
	//Drop the collection
	mongoose.connection.collections.mariochars.drop(function(){
		done();
	});
});


