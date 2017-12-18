const angular=require('angular');
const app = angular.module("app", []);

require('./directives')(app);

console.log(app);