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
        bg.style.transform = "rotate("+180+"deg)";

    }


    cs.onmouseout = function(){
        list.style.display = "none";
        bg.style.transform = "rotate("+0+"deg)";
    }
}

window.onload =img();
var n = 0;

function img() {
    // alert("a");
    var pre = document.getElementById("img-pre");
    var next = document.getElementById("img-next");
    //获取背景图像
    var img = document.getElementById("yx-ct-banner");

    // 进度点位
    var item = document.getElementById("yx-xt-item");

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
}


// window.onload = showImg();
var n = 0;
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

    var s = setTimeout(showImg,2090);

    img.onmouseover = function(){
        clearInterval(s);
    }

    img.onmouseout = function(){
        setTimeout(showImg,2090);
    }


}