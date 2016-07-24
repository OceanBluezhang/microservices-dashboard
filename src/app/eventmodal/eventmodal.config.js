/* global angular */
(function() {
  'use strict';

  angular
  .module('microServicesGui')
  .constant('createEventModalConfig', modalConfig);

  function modalConfig(node) {
    var modalConfig = {
      templateUrl: 'app/eventmodal/eventmodal.html',
      controller: 'eventModalController',
      controllerAs: 'vm',
      resolve: {
        id: function() {
          return node.id;
        }
      }
    };
    return modalConfig;
  }
})();
