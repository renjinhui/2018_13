var reg = /d/
reg.test('12313') // false
reg.test('dgdf') // true

var reg = /\d?/
reg.test('efeer234sdsf');// true
reg.test('www')// true

var reg = /\d+/
reg.test('efeer234sdsf');//true
reg.test('www')//false

var reg = /\d*/
reg.test('13453qweq') // true
reg.tesrt('www');//true

var reg = /\d{4}/
reg.test('1w2e3r4t') // false
reg.test('12314324') // true

var reg = /\\d/;// 匹配双斜杠
var reg2 = new RegExp('\\\\d');//  '\\d'
reg.test('\\\\\dfg')

var reg = /.345/
reg.test('dfgdgsgsgfdsg345')

var reg = /0.345/;  // 匹配前边是0中间任意一个字符后边是345
var reg = /0\.345/; // 匹配 0.345



