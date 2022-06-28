//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
	return 1;
}

describe('rock paper scissors', function() {
const getMsg = (n) => `Player ${n} won!`;

	it('player 1 win', function() {
		Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
		Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
		Test.assertEquals(rps('paper', 'rock'), getMsg(1));
	});

	it('player 2 win', function() {
		Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
		Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
		Test.assertEquals(rps('rock', 'paper'), getMsg(2));
	});

	it('draw', function() {
		Test.assertEquals(rps('rock', 'rock'), 'Draw!');
		Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
		Test.assertEquals(rps('paper', 'paper'), 'Draw!');
	});
});
