console.log('start of app setup');
function loadScript(url, callback) {

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript('https://npmcdn.com/zone.js@0.6.12', function () {
    console.log('zone loaded');
});
loadScript('https://npmcdn.com/reflect-metadata@0.1.3', function () {
    console.log('reflect loaded');
});
loadScript('https://npmcdn.com/typescript@1.8.10/lib/typescript.js', function () {
    console.log('typescript loaded');
});
loadScript('/app/config.js', function () {
    console.log('config loaded');
});
loadScript('https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.27/system.js', function () {
    console.log('systemjs loaded');
    System.import('app').catch(console.error.bind(console));
});
