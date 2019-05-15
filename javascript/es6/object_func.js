
// 对象默认值和解构赋值


//参数使用解构赋值
function func1( { a = 1, b = 2 } ){
    console.log(a, b);
};

func1( {} );
// 1 2

// func1();
// TypeError: Cannot destructure property 'a' of 'undefined' or 'null'.
// 调用时没用使用函数作为参数,只有调用时使用函数才能使 变量 'a' 和 'b' 声明变量;


//使用结构赋值的默认值和对象默认值
function func2( { a = 1, b = 1 } = {} ) {
    console.log(a, b);
};

func2( { a:'aaa', b:'bbb' } );

// aaa bbb


// 【 Test 】

//解构赋值默认值
function func3 ({a = 1, b = 2} = {} ) {
    console.log(a, b);
};

//函数默认值
function func4 ( {} = {a : 1, b : 2} ) {
    console.log(a ,b);
};

