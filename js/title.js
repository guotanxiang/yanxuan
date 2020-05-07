// 切换title
function clickTitle(){
    nav = document.getElementById('yx-nav-nav');

    navli = nav.getElementsByTagName('li');

    /*
    * 获取所有子li-》当点击某个title时 使它颜色为黄色
    * */

    for(var i=0;i<navli.length;i++){
        // 默认第一个标题样式
        // navli[0].className = "yx-nav-nav-style";
        navli[i].onclick = function(){


            for(var j=0;j<navli.length;j++){
                navli[j].className = '';
            }

            this.className = "yx-nav-nav-style";

        }
    }
}

window.onload = clickTitle();