function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/member.html',
    controller: 'MemberCtrl',
    controllerAs: 'memberCtrl',
    bindToController: true
  };
}