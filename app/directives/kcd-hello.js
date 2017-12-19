module.exports = function(ngModule) {
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
