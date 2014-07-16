'use strict';

/**
 * @ngdoc directive
 * @name employmentInfoFormsApp.directive:employerSearchForm
 * @description
 * # employerSearchForm
 */
angular.module('directives.employerSearchForm', ['ui.bootstrap'])
    .directive('uiEmployerSearchForm', function ($compile, $http, $templateCache) {
        return {
            restrict: 'EAC',
            replace: true,
            link: function postLink(scope, element, attrs) {
                scope.minimumInputLength = attrs.minimumInputLength;
                scope.maximumSelectionSize = attrs.maximumSelectionSize;
                scope.employerSearchServiceUrl = attrs.employerSearchServiceUrl;
                scope.employerSearchTemplateUrl = attrs.employerSearchTemplateUrl;
                scope.oneAtATime = (attrs.oneAtATime == 'true');
                scope.getLocation = function(val) {
                    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                        params : {
                            address : val,
                            sensor : false
                        }
                    }).then(function(res) {
                        var addresses = [];
                        angular.forEach(res.data.results, function(item) {
                            addresses.push(item.formatted_address);
                        });
                        return addresses;
                    });
                };

                loadTemplate(attrs.templateUrl);

                function loadTemplate(template) {
                    $http.get(template, { cache: $templateCache })
                        .success(function (templateContent) {
                            var container = document.createElement("div");
                            $(container).html(templateContent);
                            element.replaceWith(container);
                            $compile($(container))(scope);

                        });
                }
            }
        };
    });
