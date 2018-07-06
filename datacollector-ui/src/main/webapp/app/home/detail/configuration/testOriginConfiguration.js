/*
 * Copyright 2018 StreamSets Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 // Controller for Test Origin Stage Configuration.
angular
  .module('dataCollectorApp.home')
  .controller('TestOriginConfigurationController', function ($scope, pipelineService) {
    var initialize = function() {
      $scope.detailPaneConfig = $scope.testOriginStageConfig;
      $scope.detailPaneServices = [];
      angular.forEach($scope.detailPaneConfig.services, function(serviceConfig) {
        $scope.detailPaneServices.push({
          definition: pipelineService.getServiceDefinition(serviceConfig.service),
          config: serviceConfig
        });
      });
    };

    $scope.$watch('testOriginStageConfig', function() {
      initialize();
    });

    initialize();
  });