//https://www.codewars.com/kata/5ff6060ed14f4100106d8e6f/train/javascript

	function uncensor(infected, discovered) {
		// Write your code here

		
	}


const chai = require("chai");
const assert = chai.assert;

describe("Ce*s*r*d Strings", function() {
	function test([infected, discovered, answer]) {
		it(`infected = \"${infected}\", discovered = \"${discovered}\"`, () => {
			assert.strictEqual(uncensor(infected, discovered), answer)
		})
	}

	describe("Example Tests", () => {
		let data = [
			['*h*s *s v*ry *tr*ng*', 'Tiiesae', 'This is very strange'],
			['A**Z*N*', 'MAIG', 'AMAZING'],
			['xyz', '', 'xyz'],
			['', '', ''],
			['***', 'abc', 'abc']
		];

		data.forEach(test);
	});
});
