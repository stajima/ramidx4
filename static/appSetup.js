window.appBootstrap = window.appBootstrap || function (scriptUrl) {
        var s = document.createElement('script');
        s.src = scriptUrl;
        document.getElementsByTagName('head')[0].appendChild(s);
        window.appBootstrap = function () {
        };
    };
appBootstrap('https://npmcdn.com/zone.js@0.6.12');
appBootstrap('https://npmcdn.com/reflect-metadata@0.1.3');
appBootstrap('https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.27/system.js');
appBootstrap('https://npmcdn.com/typescript@1.8.10/lib/typescript.js');
appBootstrap('https://pickettd.github.io/server-example-shane/config.js');

//(function () {
//    System.import('app').catch(console.error.bind(console));
//})();