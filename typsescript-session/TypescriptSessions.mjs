var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TypsescriptSession = /** @class */ (function () {
    function TypsescriptSession() {
        this.iVar = 20;
    }
    TypsescriptSession.prototype.firstFunc = function () {
        console.log("This is a print statement in typescript");
        console.log(this.iVar);
        console.log(TypsescriptSession.sVar);
    };
    TypsescriptSession.prototype.secondFunc = function () {
        var lVar = 10; //initilization
        console.log(lVar);
        console.log(this.iVar);
        console.log(TypsescriptSession.sVar);
    };
    TypsescriptSession.prototype.thirdFunc = function () {
        //console.log(lVar)
        console.log(this.iVar);
        console.log(TypsescriptSession.sVar);
    };
    TypsescriptSession.prototype.M4 = function () {
        console.log(this.iVar);
        console.log(TypsescriptSession.sVar);
    };
    TypsescriptSession.staticMethod = function () {
        console.log("This is a print stament in static method");
    };
    TypsescriptSession.prototype.dataTypesFunc = function () {
        var numVal = 10;
        var charVal = 'a';
        var stringVal = "This is a string";
        var boolVal = true;
        var nullVal = null;
        var undefVal = undefined;
        var symbolVal = Symbol("Value Check");
        //const bigIntVal: bigint = 3453425342534253425n
        console.log(charVal);
        console.log(symbolVal.description);
        var anyVal = "This is a value";
        var unknownVal = "unknown";
        /*
            Control statemnts
                conditional statement
                    if  - simple if
                    if-else
                    if-else-if
                    nested if
                    switch
                Looping statements
                    for
                    for in
                    for of
                    while
                    do-while

        Write a program to print numbers from 10 to 20
        where 10 and 20 are inclusive
        skip 15 from output
        stop the execution when the value is greatern than 18


        single  =     =>    you are assigning a value   eg: const a=10
        double  =     =>    This is to verify the value without considring the data type
                            eg:
                            const a=10
                            const b="10"
                            if(a==b)   =>  true
        triple =      =>    The value and the data type should be exactly equal
                            const a=10
                            const b="10"
                            if(a===b)   =>  false
        */
    };
    TypsescriptSession.prototype.conditionStatements = function () {
        var a = 10;
        var b = 20;
        var c = 30;
        if (a > b) {
            console.log("Condition 1");
        }
        else if (b < c) {
            console.log("Condition 2");
        }
        else if (c > a) {
            console.log("Condition 3");
        }
        else {
            console.log("In else");
        }
    };
    TypsescriptSession.prototype.forLoopFunc = function () {
        for (var indexVal = 10; indexVal < 21; indexVal++) {
            if (indexVal != 15) {
                if (indexVal > 18) {
                    break;
                }
                else {
                    console.log(indexVal);
                }
            }
        }
        console.log("===========While Loop============");
        var b = 10;
        while (b <= 20) {
            // if(b!=15){
            console.log(b); //continue;dfgdfgrdgergertertyretyerty
            b++;
            //}
        }
        console.log("===========do - While Loop============");
        console.log("===========for using continue============");
        for (var indexVal = 10; indexVal < 21; indexVal++) {
            if (indexVal == 15) {
                continue;
            }
            else {
                console.log(indexVal);
            }
        }
    };
    TypsescriptSession.prototype.arrayDemo = function () {
        var arr1 = [24, 22, 20, 29, 28];
        var arr2 = [1, 2, 3, 4];
        var arr3 = [3, 2, [8, 9], 10];
        console.log(arr1);
        console.log(arr1[4]);
        console.log(arr1.map(function (val) { return val * 2; }));
        console.log(arr2.reduce(function (sumVal, val) { return sumVal + val; }, 0));
        console.log(arr1.map(function (val) { return val * arr2.reduce(function (sumVal, val) { return sumVal + val; }, 0); }));
        console.log(arr1.filter(function (val) { return val > 22; }));
        console.log(arr1.concat(arr2));
        var retVal = __spreadArray(__spreadArray([], arr1, true), arr2, true);
        console.log(retVal);
        //[24, 22, 20, 29, 28]
        console.log(arr1.slice(1, 3));
        console.log(arr3.flat());
        console.log(arr1.flatMap(function (val) { return val * 10; }));
        //console.log(arr3.flatMap(val=>[val*2]))
        arr1.forEach(function (value, index, arr1) { return console.log(value, index, arr1.length); });
        console.log(arr1.every(function (val) { return val > 19; }));
        console.log(arr1.some(function (val) { return val > 30; }));
        console.log(arr1.find(function (val) { return val != 24; }));
        console.log(arr1.findIndex(function (val) { return val != 24; }));
        console.log(arr1.includes(34));
        console.log(arr1);
        //[24, 22, 20, 29, 28]
        console.log(arr1.splice(1, 3, 34, 36, 39, 33));
        console.log(arr1);
        console.log(arr1.join(",  "));
        console.log(arr1.sort(function (a, b) { return a - b; }));
        console.log(arr1.sort(function (a, b) { return b - a; }));
        console.log(arr1.push(30));
        console.log(arr1.length);
        console.log(arr1);
        console.log(arr1.pop());
        console.log(arr1.length);
        console.log(arr1);
    };
    TypsescriptSession.prototype.objectDemo = function () {
        var employeeOne = {
            empId: 1234,
            empName: "Playwright",
            empDept: "IT"
        };
        var employeeTwo = {
            empId: 1235,
            empName: "Automation",
            empDept: "HR",
            salary: 25000.50
        };
        console.log(employeeTwo);
        console.log(employeeTwo.empName);
    };
    TypsescriptSession.sVar = 30;
    return TypsescriptSession;
}());
var obj = new TypsescriptSession();
obj.firstFunc();
TypsescriptSession.staticMethod();
obj.secondFunc();
console.log(obj.iVar);
console.log(TypsescriptSession.sVar);
obj.dataTypesFunc();
console.log("========================");
obj.conditionStatements();
console.log("=========for loop===============");
obj.forLoopFunc();
console.log("=========Arrays===============");
obj.arrayDemo();
console.log("=========Object Demo===============");
obj.objectDemo();
export {};
