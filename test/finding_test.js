const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


// Describe tests
describe('saving records',function(){
	beforeEach(function(done){
		var char = new MarioChar({
			name : 'Mario'
		});

		char.save().then(function(){
			done();
		});
	});
	//create tests
	it('saving data to database',function(done){
		MarioChar.findOne({name:'Mario'}).then(function(result){
			assert(result.name==="Mario");
			done();
		});
		

	});
});