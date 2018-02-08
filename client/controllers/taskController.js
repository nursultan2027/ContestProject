app.controller('taskController', function($scope, $http, localStorageService) {
    if (localStorageService.get("mes") != null) 
  {
    $scope.tasks = localStorageService.get("mes");           
  } 
  else 
  {
   $scope.tasks = [];
    localStorageService.set("mes", $scope.tasks)
  }
  $scope.handler = function(id){
    console.log($scope.tasks[id]);
  }

  function UserClass( name, surname,thirdname, sex, dol, podr, dos1, dos2, dos3, dos4, photo)
  {
    this.name = name;
    this.surname = surname;
    this.thirdname = thirdname;
    this.sex = sex;
    this.photo = photo;
    this.dol = dol;
    this.podr = podr;
    this.dos1 = dos1;
    this.dos2 = dos2;
    this.dos3 = dos3;
    this.dos4 = dos4;
  }
  $scope.search = function(){
    $scope.Firstnames = [];
    for (var i = 0; i < $scope.tasks.length; i++) {
      if ($scope.tasks[i].name==$scope.Firstname || $scope.tasks[i].dol == $scope.dolS || $scope.tasks[i].podr == $scope.podrS){
        $scope.Firstnames.push($scope.tasks[i]);
        localStorageService.set("mess", $scope.Firstnames);
      }
    }
  }
  $scope.addtask = function() {
    var user = new UserClass( $scope.task.name, $scope.task.surname, $scope.task.thirdname, $scope.task.sex, $scope.task.dol, $scope.task.podr, $scope.task.dos1, $scope.task.dos2, $scope.task.dos3, $scope.task.dos4, $scope.task.photo);
    $scope.tasks.push($scope.task);
    console.log($scope.task);
    $scope.task = {};
    localStorageService.set("mes", $scope.tasks);
    $http.post('/asd', JSON.stringify(user)).then(function (response) {
    if (response.user)
    $scope.task= user;
    })
  }
  $scope.removeItem = function(index) {
    $scope.tasks.splice(index, 1);
    localStorageService.set("mes", $scope.tasks);
  }
  $scope.removeFItem = function(index) {
    $scope.Firstnames.splice(index, 1);
    localStorageService.set("mess", $scope.Firstnames);
  }
});