setTimeout(() => {
    let a = 'kong';
    let b = 'kong2';
    console.log(`timer done! ${a} do it`);
    console.log(a + b);
}, 1000);

var array = [1, 2, 3, 4, 5, 6];
array.includes(function (item) {
    return item > 2;
});
new Promise()