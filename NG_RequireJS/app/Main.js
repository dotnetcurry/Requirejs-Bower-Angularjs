require.config({
    paths: {
        angular: '../bower_components/angular/angular'
    },
    shim: {
        'angular': {
            exports:'angular'
        } 
    }
});

require(['app'], function () {
    require(['serv', 'ctrl'], function () { 
        angular.bootstrap(document, ['app']);
    });
});