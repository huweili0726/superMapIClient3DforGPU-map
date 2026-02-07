(function () {
    var r = new RegExp("(^|(.*?\\/))(include\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'),
        targetScript, relativePath;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                relativePath = m[1] ? m[1].replace("js/", "") : "./";
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        if (url.indexOf("http") == 0) {
            var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
            document.writeln(script);
        } else {
            var script = '<script type="text/javascript" src="' + relativePath + url + '"><' + '/script>';
            document.writeln(script);
        }

    }

    function inputCSS(url) {
        if (url.indexOf("http") == 0) {
            var css = '<link rel="stylesheet" href="' + url + '">';
            document.writeln(css);
        } else {
            var css = '<link rel="stylesheet" href="' + relativePath + url + '">';
            document.writeln(css);
        }
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    function supportES6() {
        var code = "'use strict'; class Foo {}; class Bar extends Foo {};";
        try {
            (new Function(code))();
        } catch (err) {
            return false;
        }
        if (!Array.from) {
            return false;
        }
        return true;
    }

    //加载类库资源文件
    function load(config) {
        var libsurl = config.libsurl;
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");
        if (!inArray(excludes, "default")) {
            inputScript(libsurl + "/jquery/jquery.min.js");
            inputCSS(libsurl + "/bootstrap/css/bootstrap.css");
            inputScript(libsurl + "/bootstrap/js/bootstrap.js");
            inputCSS(libsurl + "/admin-lte/css/AdminLTE.min.css");
            inputCSS(libsurl + "/admin-lte/css/skins/skin-blue.min.css");
            inputCSS(libsurl + "/font-awesome/css/font-awesome.min.css");
            inputScript(libsurl + "/art-template/4.12.2/template-web.js");
            inputScript(libsurl + "/i18next/i18next.min.js");
            inputScript(libsurl + "/jquery-i18next/jquery-i18next.min.js");
            inputScript(libsurl + "/compare-versions/5.0.3/index.min.js");
            inputScript(libsurl + "/css-vars-ponyfill/2.4.8/css-vars-ponyfill.min.js");
            inputScript("./js/utils.js");
            inputScript("./js/theme/themeConfig.js");
            inputScript("./js/theme/theme.js");
        }

        if (inArray(includes, 'polyfill')) {
            inputScript(libsurl + "/es5-shim/es5-shim.min.js");
            inputScript(libsurl + "/es5-shim/es5-sham.min.js");
        }

        if (!inArray(excludes, 'common')) {
            inputCSS("./css/common.css");
            inputCSS("./css/header.css");
        }
        if (inArray(includes, 'g6')) {
            inputScript(libsurl + "/g6/index.js");
        }
        if (inArray(includes, 'animate.css')) {
            inputCSS(libsurl + "/animate/animate.min.css");
        }
        if (inArray(includes, 'swiper')) {
            inputCSS(libsurl + "/swiper/swiper.min.css");
            inputScript(libsurl + "/swiper/swiper.min.js");
        }
        if (inArray(includes, 'isIntroduction')) {
            inputCSS("./css/docs.css");
            inputScript("./js/docs.js");
            inputCSS(libsurl + "/highlight/default.css");
            inputScript(libsurl + "/highlight/highlight.pack.js");
            document.writeln(" <script>hljs.initHighlightingOnLoad();</script>");
        }
        if (inArray(includes, 'isFAQ')) {
            inputCSS("./css/faq.css");
        }
        if (inArray(includes, 'is404')) {
            inputCSS("./css/404.css");
        }
        // // for leaflet
        // if (inArray(includes, 'leaflet')) {
        //     inputCSS(libsurl + "/leaflet/1.7.1/leaflet.css");
        //     inputScript(libsurl + "/leaflet/1.7.1/leaflet.js");
        // }
        // if (inArray(includes, 'leaflet-1.0.3')) {
        //     inputCSS(libsurl + "/leaflet/1.0.3/leaflet.css");
        //     inputScript(libsurl + "/leaflet/1.0.3/leaflet.js");
        // }
        // if (inArray(includes, 'iclient-leaflet')) {
        //     if (supportES6()) {
        //         inputScript("../dist/leaflet/iclient-leaflet-es6.min.js");
        //     } else {
        //         inputScript("../dist/leaflet/iclient-leaflet.min.js");
        //     }
        // }
        // // iClient classsic
        // if (inArray(includes, 'iclient8c')) {
        //     inputScript(libsurl + "/iclient8c/libs/SuperMap.Include.js");
        // }
        // if (inArray(includes, 'mapv')) {
        //     inputScript(libsurl + "/mapv/2.0.62/mapv.min.js");
        // }
        // if (inArray(includes, 'iclient-classic')) {
        //     if (supportES6()) {
        //         inputScript("../dist/classic/iclient-classic-es6.min.js");
        //     } else {
        //         inputScript("../dist/classic/iclient-classic.min.js");
        //     }
        // }

        // // for mapboxgl
        // if (inArray(includes, 'mapboxgl')) {
        //     inputCSS(libsurl + "/mapbox-gl-js/1.13.2/mapbox-gl.css");
        //     inputScript(libsurl + "/mapbox-gl-js/1.13.2/mapbox-gl.js");
        // }
        // if (inArray(includes, 'iclient-mapboxgl')) {
        //     if (supportES6()) {
        //         inputScript("../dist/mapboxgl/iclient-mapboxgl-es6.min.js");
        //     } else {
        //         inputScript("../dist/mapboxgl/iclient-mapboxgl.min.js");
        //     }
        // }
        // // for openlayers
        // if (inArray(includes, 'openlayers')) {
        //     inputCSS(libsurl + "/openlayers/6.14.1/ol.css");
        //     inputScript(libsurl + "/openlayers/6.14.1/ol.js");
        // }
        // if (inArray(includes, 'iclient-openlayers')) {
        //     if (supportES6()) {
        //         inputScript("../dist/openlayers/iclient-openlayers-es6.min.js");
        //     } else {
        //         inputScript("../dist/openlayers/iclient-openlayers.min.js");
        //     }
        // }
        if (inArray(includes, 'lazyload')) {
            inputScript(libsurl + "/lazyload/lazyload.min.js");
        }
    }

    load({
        libsurl: './libs'
    });
    window.isLocal = true;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" : document.location.protocol + "//" + document.location.host;
    window.version = "11.1.0";
    window.preRelease = "";
})();
