window.onload = RemindInfo();

//促销提醒消息
var baseDic = -36;
var i = 0;
function RemindInfo () {
    var yxNavUl = document.getElementById('yx-nav-top-ul');
    yxNavUl.style.top = i * baseDic+'px';
    i++;
    if(i == 5){
        i =0;
    }
    setTimeout(RemindInfo,2000);
}

window.onload = csList();

function csList() {
    var cs = document.getElementById('yx-top-nav-cs');
    var list = document.getElementById('yx-top-nav-order-servers');
    // background
    var bg = document.getElementById('yx-top-nav-order-server');

    cs.onmouseover = function(){
        list.style.display = "block";

        //bg.style.transform = scroll;
    }
    list.onmouseover = function(){
        list.style.display = "block";
    }
    cs.onmouseout = function(){
        list.style.display = "none";
        //bg.style.transform = ;
    }



}