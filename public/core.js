var twotodo = angular.module('2todo', []);

function mainController ($scope, $http) {
  $scope.formData = {};

  $http.get('/api/tasks')
    .success(function(data) {
      $scope.tasks = data;
      console.log("data");
    })
    .error(function(data) {
      console.log('Error:' + data);
    });

  $scope.createTask = function () {
    $http.post('/api/tasks', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        $scope.tasks = data;
        console.log("data");
      })
      .error(function(data) {
        console.log('Error:' + data);
      });
  };

  $scope.deleteTask = function (id) {
    $http.delete('/api/tasks/' + id)
      .success(function(data) {
        $scope.tasks = data;
        console.log("data");
      })
      .error(function(data) {
        console.log('Error:' + data);
      });
  };  
}