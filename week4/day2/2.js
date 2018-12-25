var data = null;
var xhr = new XMLHttpRequest();
xhr.open('get','./1.txt',true)
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        data = xhr.responseText;
        f(data);
    }
    // console.log(222)
}
xhr.send();
console.log(data);//null
function f(d) {
    console.log(d);
}