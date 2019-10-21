function test() {
	console.log('foo', foo);
	console.log('bar', bar);

	var foo = 'Hello';
	console.log('foo', foo);
	var bar = function() {
		return 'world';
	}

	function foo() {
		return 'hello';
	}
}

// 创建阶段
// VO = {
// arguments: [...],
// foo: <foo reference>,
// bar： undefined
// }

// 执行阶段
// VO -> AO
// VO = {
// arguments: {...},
// foo: 'Hello',
// bar: <bar reference>
// }


function test() {
	function foo() {
		return 'hello';
	}
	var bar;
	console.log(foo); // function foo() {}
	console.log(bar); // undefined
	foo = 'Hello';
	console.log(foo); // 'Hello'
	bar = function() {
		return 'world';
	}
}