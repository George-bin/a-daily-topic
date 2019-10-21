var f = 1;
if (!f) {
	var a = 20;
}

function fn() {
	var b = 20;
	c = 30;
}
fn()
console.log(a);
console.log(c);
console.log(b);

// undefined
// 30
// b is not defined

// 分析：
// 1、首先创建执行上下文：创建阶段和代码执行阶段；
// 		* 创建阶段：创建作用域链、生成变量对象（函数的形参、函数声明、变量声明）、this的指向问题
// 		* 代码执行阶段；
// 2、分析；
// 		* var f = 1; 可以理解为var f; => f = 1
// 		* 因为变量声明提升的缘故，if 代码块的var a;会先于f = 1执行；但并不会执行a = 20;, a = 20会在实际运行阶段执行；所以a为undefined；
// 		* 变量b位于函数fn作用域内部，所以不在fn外部访问到（b is not defined）；
// 		* 变量c没有使用var声明，默认挂载到全局作用域中（即会先在全局作用域声明变量var c），可以在代码的任何地方访问；