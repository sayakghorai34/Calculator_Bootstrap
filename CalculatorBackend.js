// Calculator object to encapsulate the functionality
var Calculator = {
    num1: "",
    n1: 0,
    num2: "",
    n2: 0,
    res: 0,
    buffer: 0,
    flag: 0,
    op: "",

    getValue: function(num) {
        if (this.flag === 0) {
            this.num1 += num;
            this.n1 = parseFloat(this.num1);
            this.updateDisplay(this.n1);
        } else {
            this.num2 += num;
            this.n2 = parseFloat(this.num2);
            this.updateDisplay(this.n2);
        }
    },

    getFunc: function(sym) {
        if (this.flag === 1) {
            this.evaluate();
            this.num1 = this.buffer.toString();
            this.num2 = "";
            this.n1 = this.buffer;
            this.n2 = 0;
            this.flag = 0;
        }

        this.flag = 1;
        this.op = sym;
    },

    clearDisplay: function() {
        this.num1 = "";
        this.num2 = "";
        this.n1 = 0;
        this.n2 = 0;
        this.flag = 0;
        this.op = "";
        this.updateDisplay("");
    },

    evaluate: function() {
        switch (this.op) {
            case "+":
                this.res = this.n1 + this.n2;
                break;
            case "-":
                this.res = this.n1 - this.n2;
                break;
            case "*":
                this.res = this.n1 * this.n2;
                break;
            case "/":
                this.res = this.n1 / this.n2;
                break;
        }

        this.updateDisplay(this.res);
        this.buffer = this.res;
        this.num1 = this.res.toString();
        this.num2 = "";
        this.n1 = this.res;
        this.n2 = 0;
        this.op = "";
    },

    equals: function() {
        if (this.flag === 1) {
            this.evaluate();
            this.flag = 0;
        }
    },

    updateDisplay: function(value) {
        document.getElementById("display").value = value;
    }
};
