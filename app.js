var budgetController = (function () {
    var x = 23;
    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b)
        }
    }
})();


var UIController = (function () {
    //some code

})();


var Controller = (function(budgetCtrl, UICtrl){
    
    var z = budgetCtrl.publicTest(5);
    return {
        controolTest: function(){
            console.log(z);
        }
    }


})(budgetController, UIController);