define(['app'], function (app) {
    app.controller('ctrl', ['$scope','serv', function ($scope, serv) {
        loaddata();
        function loaddata() {
            var promise = serv.getdata();
            promise.then(function (resp) {
                $scope.Products = resp.data;
                $scope.Message = "Operation Completed Successfully...";
            }, function (err) {
                $scope.Message = "Error " + err.status;
            })
        };
    }]);
});