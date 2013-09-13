var AllocateController = function($scope) {
  $scope.workshops = [
    {
      name: "Atelier 1",
      seats: 5,
      people: [
        {id: 1, name: "Jean-Bernard Picot"},
        {id: 2, name: "Jean-Michel Ledentu"},
        {id: 3, name: "Yvette Mayeux"},
      ]
    },
    {
      name: "Atelier 2",
      seats: 2,
      people: [
        {id: 4, name: "Antoine Rousset"},
        {id: 5, name: "Fernand Lefranc-Berger"},
        {id: 6, name: "Pierre-Martin Charpon"},
      ],
    },
    {
      name: "Atelier 3",
      seats: 8,
      people: [
        {id: 7, name: "Jean-Marie Duvernois"},
        {id: 8, name: "Hubert Francard"},
      ],
    },
    {
      name: "Atelier 4",
      seats: 4,
      people: [
        {id: 9, name: "Micheline Leboisier"},
      ],
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

  $scope.attendees = function(workshop) {
    return workshop.people.length;
  }

  $scope.notCurrent = function(workshop) {
    return (!workshop.current);
  }

  $scope.move = function(person_id, workshop) {
    angular.forEach($scope.currentWorkshop.people, function(person, key) {
      if (person.id == person_id) {
        $scope.currentWorkshop.people.splice(key, 1);
        workshop.people.push(person);
      }
    });
  }

  $scope.fillRatio = function(workshop) {
    return Math.round($scope.attendees(workshop) * 100 / workshop.seats);
  }

  $scope.fillRatioWidth = function(workshop) {
    if ($scope.isOverCapacity(workshop)) {
      return 100;
    }
    return $scope.fillRatio(workshop);
  }

  $scope.isOverCapacity = function(workshop) {
    return $scope.attendees(workshop) > workshop.seats;
  }

  $scope.addPerson = function() {
    $scope.currentWorkshop.people.push({
      id: $scope.newId(),
      name: $scope.personName
    });
    $scope.personName = '';
  }

  $scope.newId = function() {
    var max = 0;

    angular.forEach($scope.workshops, function(workshop) {
      angular.forEach(workshop.people, function(person) {
        if (person.id > max) {
          max = person.id;
        }
      });
    });

    return max+1;
  }
}