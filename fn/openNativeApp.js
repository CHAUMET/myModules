/*
* @Author: ipe
* @Date:   2018-01-22 15:01:12
* @Last Modified by:   ipe
* @Last Modified time: 2018-01-22 15:02:29
*/

function openAPP() {
    //alert(1);

    if (browser.versions.ios) {

        if (browser.versions.weixin ) {
            //alert(3);
            window.location.href = "https://itunes.apple.com/cn/app/wu-ran-de-tu/id838211758?mt=8";
            window.location.href = "https://itunes.apple.com/cn/app/wu-ran-de-tu/id838211758?mt=8";
        } else if(browser.versions.weibo){
            // alert(1);
            //window.location.href = "https://itunes.apple.com/cn/app/wu-ran-de-tu/id838211758?mt=8";
            // window.location.href = "https://itunes.apple.com/cn/app/wu-ran-de-tu/id838211758?mt=8";
        $(".foot").css("display", "none");
        }else {

            window.location.href = "ipe://bluemap";
            var TimeLoad = setTimeout(function () {
               // document.body.removeChild(ifr);
                window.location ="https://itunes.apple.com/cn/app/wu-ran-de-tu/id838211758?mt=8"; //ios下载地址
            }, 1000);
            //window.location.href = "ipe://bluemap";
              //记录唤醒时间
            //var openTime = +new Date();
            //window.setTimeout(function () {
              //  alert(1);
               // var now = +new Date();
                //if (now - openTime > 2500) {
                    //alert(2);
                  //  window.location.href = "https://itunes.apple.com/cn/app/wu-ran-de-tu/id838211758?mt=8";
                    //window.location.href = "https://itunes.apple.com/cn/app/wu-ran-de-tu/id838211758?mt=8";
                    //window.location.href = "https://itunes.apple.com/cn/app/wu-ran-de-tu/id838211758?mt=8";
               // }

            //}, 2000);
        }


    } else if (browser.versions.android) {

    if (browser.versions.weixin) {
        window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.environmentpollution.activity";
    } else if (browser.versions.weibo) {
        //alert(1);
        //window.location.href = "http://www.ipe.org.cn/PollutionMapApp_DownLoad.aspx"

    } else {
        var ifr = document.createElement('iframe');
        ifr.src = "ipe://bluemap";
        ifr.style.display = 'none';
        document.body.appendChild(ifr);
        var TimeLoad = setTimeout(function () {
            document.body.removeChild(ifr);
            window.location = "http://www.ipe.org.cn/PollutionMapApp_DownLoad.aspx"; //android下载地址
        }, 1000);
    // window.location.href = "ipe://bluemap";
           // var openTime = +new Date();
           // setTimeout(function () {
           //      if ((+new Date()) - openTime > 2500) {
            //    window.location.href = "http://www.ipe.org.cn/PollutionMapApp_DownLoad.aspx";
               // window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.environmentpollution.activity";
             //   }

           // }, 2000)
    }



    }
}
