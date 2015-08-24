
(function() {
    angular
        .module('2todo',[])
        .controller('mainController', mainController);

    function mainController() {
        vm = this;

        vm.tasks = [
          {name : "this", isComplete : false, createdOn : 1440446404530},
          {name : "that", isComplete : false, createdOn : 1440446404540},
          {name : "zed", isComplete : false, createdOn : 1440446404550},
          {name : "buzz", isComplete : false, createdOn : 1440446404560},
          {name : "fizz", isComplete : false, createdOn : 1440446404569}
        ];
        vm.addTask = addTask;
        vm.orderBy = "";
        vm.changeOrder = changeOrder;
        vm.name = "";

        function addTask(){
          if (!vm.name) {
            return
          };
          vm.tasks.push({name : vm.name, isComplete : false, createdOn : Date.now()});
          vm.name = '';
        }

        function changeOrder(order){
          vm.orderBy = order;
        }

    }
})();