console.log('start of app setup');
window.appBootstrap = window.appBootstrap || function (scriptUrl) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.defer = false;
        script.src = scriptUrl;
        head.appendChild(script);
    };
appBootstrap('https://npmcdn.com/zone.js@0.6.12');
appBootstrap('https://npmcdn.com/reflect-metadata@0.1.3');
appBootstrap('https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.27/system.js');
appBootstrap('https://npmcdn.com/typescript@1.8.10/lib/typescript.js');
appBootstrap('https://pickettd.github.io/server-example-shane/config.js');

(function () {
    System.import('app').catch(console.error.bind(console));
})();
console.log('end of app setup');
