app.controller('priemController', function($scope, localStorageService) {
function PriemClass( name, zav, pac)
{
  this.name = name;
  this.zav = zav;
  this.pac = pac;
}

$scope.pacc =  localStorageService.get("mes");
$scope.a = [];
$scope.b = [];
$scope.c = [];
$scope.d = [];

    for(i = 0; i<$scope.pacc.length; i++)
    {
      if($scope.pacc[i].zhaloba1=="Головные боли" && $scope.pacc[i].zhaloba2=="Ухудшение зрения" && $scope.pacc[i].zhaloba3=="Потливость")
      {
        console.log($scope.pacc[i].name+" "+$scope.pacc[i].surname+" будет отправлен к окулисту");
        $scope.a.push($scope.pacc[i]);
      }
      else 
        {
          if($scope.pacc[i].zhaloba1=="Головокружение" && $scope.pacc[i].zhaloba2=="Судороги" && $scope.pacc[i].zhaloba3== "Ухудшение аппетита")
             {
               $scope.b.push($scope.pacc[i]);
               console.log($scope.pacc[i].name+" "+$scope.pacc[i].surname+" будет отправлен к Терапевту");
             }
          else 
          {
            if($scope.pacc[i].zhaloba1=="Безсонница" && $scope.pacc[i].zhaloba2=="Спазмы" && $scope.pacc[i].zhaloba3== "Хондра")
             {
               $scope.c.push($scope.pacc[i]);
               console.log($scope.pacc[i].name+" "+$scope.pacc[i].surname+" будет отправлен к Невропатологу");
             }
             else
             {
              $scope.d.push($scope.pacc[i]);
              console.log($scope.pacc[i].name+" "+$scope.pacc[i].surname+" будет отправлен к Хигургу");
             }
          }
        }
    }
$scope.prs = [];
var xir = new PriemClass( "хирург", "Dr. Айболит", $scope.d);
$scope.prs.push(xir);
var ter = new PriemClass( "Терапевт", "Dr. House", $scope.b);
$scope.prs.push(ter);
var ok = new PriemClass( "Окулист", "Dr. Acula", $scope.a);
$scope.prs.push(ok);
var nvr = new PriemClass( "Невропатолог", "Dr. Айболит", $scope.c);
$scope.prs.push(nvr);
localStorageService.set("mess", $scope.prs);

$scope.handlerr = function(id){
    console.log($scope.prs[id]);
  }

$scope.addOtd = function() 
  {
  	var stu = new PriemClass( $scope.pr.name, $scope.pr.zav);
    $scope.prs.push($scope.pr);
    console.log($scope.pr);
    $scope.pr = {};
    localStorageService.set("mess", $scope.prs);
  };
$scope.removeItem = function(index) 
  {
    $scope.prs.splice(index, 1);
    localStorageService.set("mess", $scope.prs);
  };
});