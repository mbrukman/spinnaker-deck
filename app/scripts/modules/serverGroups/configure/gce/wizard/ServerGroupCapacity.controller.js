'use strict';


angular.module('deckApp.serverGroup.configure.gce')
  .controller('gceServerGroupCapacityCtrl', function($scope, modalWizardService) {

    modalWizardService.getWizard().markComplete('capacity');
    modalWizardService.getWizard().markClean('capacity');

    $scope.$watch('form.$valid', function(newVal) {
      if (newVal) {
        modalWizardService.getWizard().markClean('capacity');
      } else {
        modalWizardService.getWizard().markDirty('capacity');
      }
    });

  });