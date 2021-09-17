moment().format("YYYYMMDD")
'20210917'
var _today= moment().format("YYYYMMDD");
undefined
let _date = [];
undefined
_date.push[_today]
undefined
_date
    []
_date.push(_today)
1
_date
    ['20210917']
_date[_today].length
VM724:1 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
at <anonymous>:1:15
(anonymous) @ VM724:1
_date[_today].length == undefined
VM820:1 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
at <anonymous>:1:15
(anonymous) @ VM820:1
_date[_today]
undefined
_date[_today] == undefined
true
if(_date[_today] == undefined) {
    _date[_today] = {"key": 1, "content":"dddd", "delte":"N"}
}
{key: 1, content: 'dddd', delte: 'N'}
_date[_today].length
undefined
_date[_today] == undefined
false
var _todayJson;
if(_date[_today] == undefined) {
    _date[_today] = [{"key": 1, "content":"dddd", "delte":"N"}];
} else {
    _todayJson = _date[_today];
}


////

var _today= moment().format("YYYYMMDD");
undefined
let _date = [];
undefined
_date.push(_today);
1
var _todayJson;
if(_date[_today] == undefined) {
    _date[_today] = [{"key": 1, "content":"dddd", "delte":"N"}];
} else {
    _todayJson = _date[_today];
}
[{…}]
_todayJson
undefined
var _todayJson;
if(_date[_today] == undefined) {
    _date[_today] = [{"key": 1, "content":"dddd", "delte":"N"}];
} else {
    _todayJson = _date[_today];
}
[{…}]
_todayJson
    [{…}]0: {key: 1, content: 'dddd', delte: 'N'}length: 1[[Prototype]]: Array(0)
_todayJson.length
1
_todayJson.push({"key": _todayJson.length+1, "content":"dsafdsaf", "delte":"N"})
2
_todayJson.push({"key": _todayJson.length+1, "content":"dasdfsdaf", "delte":"N"})
3
_date
(20210918) ['20210917', empty × 20210916, Array(3)]0: "20210917"20210917: Array(3)0: {key: 1, content: 'dddd', delte: 'N'}1: {key: 2, content: 'dsafdsaf', delte: 'N'}2: {key: 3, content: 'dasdfsdaf', delte: 'N'}length: 3[[Prototype]]: Array(0)length: 20210918