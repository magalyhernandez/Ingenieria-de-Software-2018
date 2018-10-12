var Request = function(amount) {
    this.amount = amount;
    log.add("Requested: $" + amount + "\n");
}

Request.prototype = {
    get: function(bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        log.add("Dispense " + count + " $" + bill + " bills");
        return this;
    }
}

// log helper

var log = (function() {
    var log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();

function mostrarVuelto(capturarInput) {

    var capturarInput = $(".caja").val();
    var request = new Request(capturarInput);

    request.get(100).get(50).get(20).get(10).get(5).get(1);

    log.show();
}
