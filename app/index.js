const angular = require('angular');

if (ON_TEST) {
	require('angular-mocks/angular-mocks');
}

const app = angular.module("app", []);

require('./directives')(app);

console.log(app);
