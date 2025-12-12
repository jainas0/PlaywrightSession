//import * as z from "zod"
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
            empDept: "IT",
            salary: 30000.69
        };
        var employeeTwo = {
            empId: 1235,
            empName: "Automation",
            empDept: "HR",
            salary: 25000.50
        };
        console.log(employeeTwo);
        console.log(employeeTwo.empName);
        employeeOne.Location = "Hyderabad";
        console.log(employeeOne);
        var employeeOneCard = {
            empId: 1234,
            empName: "Playwright"
        };
        var employeeTwoCard = {
            empId: 1235,
            empName: "PlaywrightTest",
            //salary: 30000
        };
        console.log(employeeTwoCard);
        var employeeOneGeneralInfo = {
            empName: "Playwright",
            empDept: "HR",
            //salary: 30000
        };
        console.log(employeeOneGeneralInfo);
    };
    TypsescriptSession.prototype.returnType = function (parm1, pram2, param3) {
        var var1 = parm1;
        return var1;
    };
    TypsescriptSession.prototype.genericReturnType = function (param1) {
        var var1 = param1;
        return var1;
    };
    TypsescriptSession.prototype.anyReturnType = function (param1) {
        var var1 = param1;
        return var1;
    };
    TypsescriptSession.prototype.stringDataType = function () {
        var s1 = "This is a strings in Typescripts";
        var s2 = "This is another String in Typesscript";
        var s3 = " ";
        var s4 = "      This is a string          with spaces         ";
        console.log(s1);
        console.log(s1.charAt(3)); //s   string
        console.log(s1.concat(s2)); // string  This is a string in TypescriptThis is another String in Typesscript
        console.log(s1.concat(s3, s2));
        console.log(s1.concat(s3).concat(s2));
        console.log(s1.concat(" " + s2));
        console.log(s1 + " ".concat(s2));
        console.log(s1 + " " + s2);
        console.log(s1 + s3 + s2);
        //console.log(s1.indexOf('s'))   //i will get the index of 1st 's'
        //console.log(s1.indexOf('s', s1.indexOf('s')+1))   //i will get the index of 2nd 's'
        console.log(s1.indexOf('s', s1.indexOf('s', s1.indexOf('s', s1.indexOf('s') + 1) + 1) + 1)); //i will get the index of 3rd 's'
        //console.log(s1.indexOf('s', 15))  //i will get the index of 4th 's'
        console.log(s1.lastIndexOf('s'));
        console.log(s1.length);
        console.log(s1.repeat(3));
        console.log(s1.replace("is", "Z"));
        console.log(s1.slice(3, 16));
        console.log(s1.split("is"));
        console.log(s1.substring(3, 16));
        console.log(s1.toLowerCase());
        console.log(s1.toUpperCase());
        console.log(s4);
        console.log(s4.trim());
        console.log(s4.trimStart());
        console.log(s4.trimEnd());
        var val = 1234;
        console.log("This is the value of string val: ".concat(val));
        //You order is placed successfully. Your order number is AMZ435324534 for traking
    };
    TypsescriptSession.prototype.mappedRemapping = function () {
        var employeeOne = {
            //getEmpId: () => 1234,
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        };
        console.log(employeeOne);
        var employeeRemapped = {
            getEmpId: function () { return 1235; },
            getEmpName: function () { return "Typescript"; },
            getEmpLocation: function () { return "Mumbai"; }
        };
        console.log(employeeRemapped);
    };
    TypsescriptSession.prototype.mappedPromise = function () {
        var employeeOne = {
            //getEmpId: () => 1234,
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        };
        console.log(employeeOne);
        var promisedEmpoyeeInfo = {
            empId: Promise.resolve(1234),
            empName: Promise.resolve("Typescript"),
            empLocation: Promise.resolve("Banglore")
        };
        console.log(promisedEmpoyeeInfo);
    };
    TypsescriptSession.prototype.optionalMapping = function () {
        var employeeOne = {
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        };
        console.log(employeeOne);
        /*
                type optionalEmployee {
                    empId?: number,
                    empName?: string,
                    empLocation?: string
                }
        */
        var optionalEmployeeOne = {
            empId: 1235
        };
        console.log(optionalEmployeeOne);
        var optionalEmployeeTwo = {
            empName: "Typescript"
        };
        console.log(optionalEmployeeTwo);
    };
    TypsescriptSession.prototype.conditionalMapping = function () {
        var employeeOne = {
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        };
        console.log(employeeOne);
        var employeeTwo = {
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        };
        var conditionalEmpOne = {
            empId: 1234,
            empName: "Playwright",
            empLocation: null
        };
    };
    TypsescriptSession.prototype.zodSchemaDemo = function () {
        /* const employeeInfoZod = z.object{
             empId: z.
         }*/
    };
    TypsescriptSession.prototype.tupleDemo = function () {
        var t1 = [1234, "Playwright", true];
        var t2 = [1235, "Typescript", false];
        console.log(t1);
        console.log(t1.concat(t2));
        // console.log(t1.fill(3))
        console.log(t1.join(", ").charAt(6));
        console.log(t1.findIndex(function (item) {
            return typeof item === 'boolean' && item === true;
        }));
        console.log(t1.find(function (item) {
            return typeof item === 'boolean' && item === true;
        }));
        var value1 = t1.findIndex(function (item) {
            return typeof item === 'boolean' && item === true;
        });
        console.log(value1);
        var value2 = t1.find(function (item) {
            return typeof item === 'boolean' && item === true;
        });
        console.log(value2);
        console.log(t1.length);
        console.log(t1.pop());
        console.log(t1);
        //console.log(t1.)
    };
    TypsescriptSession.prototype.setDemo = function () {
        var set1 = new Set();
        var set2 = ([1235, "Typescript", true]);
        set1.add(1234);
        set1.add("Playwright");
        set1.add(false);
        set1.add(10.30);
        set1.add(false);
        set1.add(10.30);
        console.log(set1);
        console.log(set1.delete(1234));
        console.log(set1);
        console.log(set1.forEach(function (value) { return console.log(value); }));
        console.log(set1.has("Playwright"));
        console.log(Array.from(set1.keys()));
        console.log(set1.values());
        console.log(set1.entries());
        console.log(set1.size);
        //console.log(set1.)
        var weakSet = new WeakSet();
        //weakSet.add(10)
    };
    TypsescriptSession.prototype.MapsDemo = function () {
        var mapVal = new Map();
        var obj = {
            empId: 1234,
            empName: "Playwright"
        };
        mapVal.set(1234, "Playwright");
        mapVal.set("Typescript", "Playwright");
        mapVal.set(true, 2345);
        mapVal.set(1235, "Javascript");
        mapVal.set(obj, "String Object");
        console.log(mapVal);
        console.log(mapVal.delete(obj));
        console.log(mapVal);
        var allKeys = mapVal.keys();
        console.log(mapVal.forEach(function (key, value) { return console.log("Key values are ".concat(mapVal.get(key), " and the value is ").concat(mapVal.get(value))); }));
        console.log(mapVal.size);
        console.log(mapVal.keys());
        console.log(mapVal.values());
        //console.log(mapVal.)
        var weakMap = new WeakMap();
        //weakMap.
    };
    TypsescriptSession.prototype.m1 = function (value) {
        console.log("Value is " + value.toFixed(2));
    };
    TypsescriptSession.prototype.m2 = function () {
        this.m1(10);
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
console.log("=========Return type Demo===============");
console.log(obj.returnType(10, "Check", true));
console.log("=========Generic Return type Demo===============");
console.log(obj.genericReturnType(10));
console.log(obj.genericReturnType("Check"));
console.log(obj.genericReturnType(true));
console.log(obj.genericReturnType(30.5));
console.log("=========Return type using Any===============");
console.log(obj.anyReturnType(10));
console.log(obj.anyReturnType("Check"));
console.log(obj.anyReturnType(true));
console.log(obj.anyReturnType(30.5));
console.log("=========Strings===============");
obj.stringDataType();
console.log("=========Remapping functionality Demo===============");
obj.mappedRemapping();
console.log("=========Promise functionality Demo===============");
obj.mappedPromise();
console.log("=========Zod schemas functionality Demo===============");
console.log("=========tuples functionality Demo===============");
obj.tupleDemo();
console.log("=========Set functionality Demo===============");
obj.setDemo();
console.log("=========Map functionality Demo===============");
obj.MapsDemo();
console.log("=========Exceptions functionality Demo===============");
obj.m2();
var sampleObject = { price: 50 };
//obj.m1(sampleObject)
try {
    obj.m1(sampleObject);
}
catch (e) {
    console.log(e.message);
}
export {};
