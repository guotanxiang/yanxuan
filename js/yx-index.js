window.onload = RemindInfo();

//促销提醒消息
var baseDic = -36;
var i = 0;
function RemindInfo () {
    var yxNavUl = document.getElementById('yx-nav-top-ul');
    var yxNavli = yxNavUl.getElementsByTagName("li").length;
    // alert(yxNavli.length);
    yxNavUl.style.top = i * baseDic+'px';
    i++;
    if(i == yxNavli){
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
        bg.style.transform = "rotate("+180+"deg)";

    }


    cs.onmouseout = function(){
        list.style.display = "none";
        bg.style.transform = "rotate("+0+"deg)";
    }
}



// 图片轮循
var n = 0;

function img() {


    /*  next是图片前进按钮 */
    var pre = document.getElementById("img-pre");
    /*  pre是图片后退按钮  */
    var next = document.getElementById("img-next");
    //获取背景图像
    var img = document.getElementById("yx-ct-banner");

    // 进度点位
    var item = document.getElementById("yx-xt-item");
    //定时器
    var itmer;

    function showImg(){

        //获取背景图像
        var img = document.getElementById("yx-ct-banner");

        // 进度点位
        var item = document.getElementById("yx-xt-item");

        n++;

        if(n >= 4){
            n = 0;
            img.style.background = "url('images/banner-"+ Math.abs(n) +".jpg') center center no-repeat";
            item.children[n].className = "active";
        }else{
            img.style.background = "url('images/banner-"+ Math.abs(n) +".jpg') center center no-repeat";
            item.children[n].className = "active";
        }
        for(var i=0; i<item.children.length;i++){
            if(i != n){
                item.children[i].className = "";
            }
        }

    }

    function nextImage(){
        n++;

        if(n >= 4){
            n = 0;
            img.style.background = "url('images/banner-"+ Math.abs(n) +".jpg') center center no-repeat";
            item.children[n].className = "active";
        }else{
            img.style.background = "url('images/banner-"+ Math.abs(n) +".jpg') center center no-repeat";
            item.children[n].className = "active";
        }
        for(var i=0; i<item.children.length;i++){
            if(i != n){
                item.children[i].className = "";
            }
        }
    }
    next.onclick = nextImage;

    function play() {
        //重复执行的定时器
        timer = setInterval(function () {
            next.onclick();
        }, 4000)
    }

    function stop() {
        clearInterval(timer);
    }

    pre.onclick = function(){
        n--;
        img.style.background = "url('images/banner-"+ Math.abs(n) +".jpg') center center no-repeat";
        if(n <= -1){
            n = 3;
            img.style.background = "url('images/banner-"+ Math.abs(n) +".jpg') center center no-repeat";
            item.children[n].className = "active";

        }else{
            img.style.background = "url('images/banner-"+ Math.abs(n) +".jpg') center center no-repeat";
            item.children[n].className = "active";
        }

        for(var i=0; i<item.children.length;i++){
            if(i != n){
                item.children[i].className = "";
            }
        }
    }

    img.onmouseover = stop;
    img.onmouseout = play;
    play();

}

window.onload = img();