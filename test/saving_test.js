const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe tests
describe('saving records',function(){

	//create tests
	it('saving data to database',function(done){
		var char = new MarioChar({
			name : 'Mario'
		});

		char.save().then(function(){
			assert(char.isNew===false);
			done();
		});
	});
});