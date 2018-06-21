function Calculator(value1, value2) {
    this.value1 = value1 || 0;
    this.value2 = value2 || 0;
}

Calculator.prototype.sum = function () {
    return this.value1 + this.value2;
}

Calculator.prototype.substr = function () {
    return this.value1 - this.value2;
}

Calculator.prototype.multiply = function () {
    return this.value1 * this.value2;
}

Calculator.prototype.division = function () {
    return this.value1 + this.value2;
}

Calculator.prototype.convertToSuperCalc = function (decorator) {
    var F = function () { },
        overrides = this.constructor.decorators[decorator],
        i,
        newObj;
    // Прототипом для декоратора устанавливается тот объект, который декорируется.
    F.prototype = this;
    newObj = new F();
    // сохраняем ссылку на тот объект, который декорируем
    // newObj.super = F.prototype;
    // Все свойства и методы декоратора копируем в декорируемый объект
    for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newObj[i] = overrides[i];
        }
    }

    console.log(newObj);

    return newObj;
}

Calculator.decorators = {};

Calculator.decorators.engineer = {
    power: function () {
        
        return Math.pow(this.value1, this.value2);
    },
    faktor: function () {
        
        return ;
    }
}


var calc = new Calculator(5, 2);

console.log(calc.sum());

calc = calc.convertToSuperCalc("engineer");

console.log(calc.power());