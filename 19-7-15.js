let length = 10;

function fn() {
	console.log(this.length);
}

var obj = {
	length: 5,
	method: function(fn) {
		fn();
		arguments[0]();
	}
};

obj.method(fn, 1)
// 2
// 2

// 分析：this的指向（取决于函数的调用方式）