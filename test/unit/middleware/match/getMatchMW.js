var expect = require('chai').expect;
var getMatchMW = require('../../../../middleware/match/getMatchMW');

describe('getMatch middleware ', function () {

	it('should return match', function (done) { 
  
	  
		const mw = getMatchMW({
			MatchModel:{
				findOne: (p1, cb) => {
					expect(p1).to.be.eql({_id: '10'});
					cb(null,'mockmatch');
				}
			}
		});
		
		const resMock = {
			locals: {}
		};
		mw({
			params:{
				matchid:'10'
			}
		},
		resMock,
		()=>{
			expect(resMock.locals).to.be.eql({match: 'mockmatch'});
			done();
		});
	});
	it('should call next with error when there is a db problem', function (done) {
	
		const mw = getMatchMW({
			MatchModel:{
				findOne: (p1, cb) => {
					expect(p1).to.be.eql({_id: '10'});
					cb('adatbazishiba',null);
				}
			}
		});
		
		const resMock = {
			locals: {}
		};
		mw({
			params:{
				matchid:'10'
			}
		},
		resMock,
		(err)=>{
			expect(err).to.be.eql('adatbazishiba');
			done();
		});
	});
	it('should call next when no match found in the db', function (done) { 
  
	  
		const mw = getMatchMW({
			MatchModel:{
				findOne: (p1, cb) => {
					expect(p1).to.be.eql({_id: '10'});
					cb(undefined,null);
				}
			}
		});
		
		const resMock = {
			locals: {}
		};
		mw({
			params:{
				matchid:'10'
			}
		},
		resMock,
		(err)=>{
			expect(err).to.be.eql(undefined);
			expect(resMock.locals).to.be.eql({});
			done();
		});
	});
});
