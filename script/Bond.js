//create Bond object
var Bond = function () {
};

//function to convert bond price format into decimal format
Bond.prototype.decimalPrice = function(price) {
    var a, b, c, output;

    var index1 = price.indexOf("-") + 1;

    var index2 = price.indexOf("+");

    if(index1 > -1)
    {
       a = price.substring(0, price.length - index1);

       b = price.substring(index1, price.length);

       b = parseFloat(b) / parseFloat(32);
    }
    else {
        a = b = 0.0;
    }

    if (index2 > -1) {
        c = parseFloat(1) / parseFloat(64);
    }
    else
        c = 0.0;

    output = parseFloat(a) + parseFloat(b) + c;

    return output;
}

//function to convert decimal price into bond price format
Bond.prototype.bondPrice = function (price) {
    var a, b, c, output;

    var index1 = price.indexOf(".") + 1;

    if (index1 > -1) {
        a = price.substring(0, price.length - index1);

        b = price.substring(index1, price.length);

        b = parseFloat(b) / parseFloat(100) * parseFloat(32);
    }
    else {
        a = b = 0.0;
    }

    output = parseFloat(a) + '-' + parseFloat(b);

    return output;
}