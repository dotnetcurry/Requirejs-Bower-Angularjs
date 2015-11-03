define(['app'], function (app) {
    app.service('serv', ['$http',function ($http) {
        this.getdata = function () {
            var resp = $http.get('http://localhost:4737/api/ProductInfoAPI');
            return resp;
        }
    }]);
});