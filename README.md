#Employer Search Form

This component attaches accordion style forms to the employer-search component: [ui-employer-search](https://github.com/deanpeterson/ui-employer-search)

#How to Use

##Installation

1. Include ui-employer-searchform:X.X.X in your bower.json file
2. Type bower install to pull it into your bower_components library

##Use

1. Include the following modules in your angularjs module 
   'directives.employerSearch'
   'directives.employerSearchForm'
   'services.employerSearchService'

2. Your angularjs controller should look something like this:
   `angular.module('modularApplyForBenefitsApp')
   .controller('MainCtrl', function ($scope,employerSearchFactory) {
           employerSearchFactory.restore();
           $scope.employers = employerSearchFactory.employers;
     });`
     
3. Drop in the directive where you like, replacing the attributes with your values

`<div ui-employer-search-form minimum-input-length="2" maximum-selection-size="5" employer-search-service-url="http://fnb-grptest-vm:8080/ui-application-app/rest/employers" employer-search-template-url="/bower_components/employer-search/app/scripts/directives/templates/employersearchtemplate.html" template-url="/bower_components/ui-employer-search-form/app/scripts/directives/templates/employersearchformtemplate.html" one-at-a-time="true"></div>`
