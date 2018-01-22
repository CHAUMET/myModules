/*!
 * MY JavaScript Library
 * @Author: WY
 * @Date:   2018-01-19 17:26:19
 */
var C = (function(global) {
	//严格模式
	'use strict'

/** 将url？后面的部分存储为对象
 *  var Request = GetRequest();
 *  var hy = Requeat['hy'];ß
 */
	var GetRequest = function() {
		var url = location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}

/**
 * 判断终端
 * Browser.versions.xxx
 * return true/false
 */
var Browser = {

    versions: function () {

        var u = navigator.userAgent,

            app = navigator.appVersion;

        return {

            trident: u.indexOf('Trident') > -1, /*IE内核*/

            presto: u.indexOf('Presto') > -1, /*opera内核*/

            webKit: u.indexOf('AppleWebKit') > -1, /*苹果、谷歌内核*/

            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, /*火狐内核*/

            mobile: !!u.match(/AppleWebKit.*Mobile.*/), /*是否为移动终端*/

            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), /*ios终端*/

            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, /*android终端或者uc浏览器*/

            iPhone: u.indexOf('iPhone') > -1, /*是否为iPhone或者QQHD浏览器*/

            iPad: u.indexOf('iPad') > -1, /*是否iPad*/

            webApp: u.indexOf('Safari') == -1, /*是否web应该程序，没有头部与底部*/

            souyue: u.indexOf('souyue') > -1,

            superapp: u.indexOf('superapp') > -1,

            weixin: u.toLowerCase().indexOf('micromessenger') > -1,

            weibo: u.toLowerCase().indexOf('weibo') > -1,

            Safari: u.indexOf('Safari') > -1

        };

    } (),

    language: (navigator.browserLanguage || navigator.language).toLowerCase()

};
	return{
		GetRequest:GetRequest,
		Browser:Browser
	}

})(window);
