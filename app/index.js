var angular=require('angular');

var app = angular.module("app", []);

require('./directives')(app);

console.log(app);