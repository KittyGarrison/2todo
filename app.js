
(function() {
    angular
        .module('2todo',[])
        .controller('mainController', mainController);

    function mainController() {
        vm = this;

        vm.tasks = [];
        vm.addTask = addTask;
        vm.name = "task"

        function addTask(){
          vm.tasks.push({name : vm.name, isComplete : false})
        }

    }
})();