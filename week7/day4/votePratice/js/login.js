let $name = $('#userName'),
    $passW = $('#userPass');
let $btn = $('#submit');
$btn.click(function(){
    let name = $name.val();
    let passW = $passW.val();
    axios.post('/login',{
        name:name,
        // name,
        password:passW
    }).then(data=>{
        console.log(data);
        if(data.code == 1){
            alert('登录失败')
        }
    })
})    