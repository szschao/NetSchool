//同一个文件如果要export多个内容的写法:
module.exports.triglefive = 555;

var numbers = [];
for(var i=0;i<10;i++){
    numbers.push(i);
}
module.exports.numbers=numbers;

module.exports.beep=function (n) {
   return n*1000;
};

module.exports.boop = 111;