var AllocateController = function($scope) {
  $scope.workshops = [
    {
      name: "Atelier 1",
      seats: 5
    },
    {
      name: "Atelier 2",
      seats: 2
    },
    {
      name: "Atelier 3",
      seats: 8
    },
    {
      name: "Atelier 4",
      seats: 4
    },
  ];

  $scope.currentWorkshop = null;

  $scope.makeCurrent = function(workshop) {
    angular.forEach($scope.workshops, function(workshop) {
      workshop.current = false;
    });
    workshop.current = true;
    $scope.currentWorkshop = workshop;
  }

  $scope.makeCurrent($scope.workshops[0]);
}