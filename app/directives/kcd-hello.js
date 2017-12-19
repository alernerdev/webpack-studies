module.exports = function(ngModule) {
	if (ON_TEST) {
		require('./kcd-hello.test')(ngModule);
	}

    ngModule.directive('kcdHello', function() {
		require('./kcd-hello.css');
        return {
            restrict: 'E',
            scope: {},
			//templateUrl: 'directives/kcd-hello.html',
            template: require('./kcd-hello.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;
                vm.greeting = "Hello webpack";
            }
        }
    });
}
