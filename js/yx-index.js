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
