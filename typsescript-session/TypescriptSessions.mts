//import * as z from "zod"

class TypsescriptSession{

    iVar = 20
    static sVar = 30

    public firstFunc(){
        console.log("This is a print statement in typescript")
        console.log(this.iVar)
        console.log(TypsescriptSession.sVar)
    }

    public secondFunc(){
        const lVar: number = 10  //initilization
        console.log(lVar)
        console.log(this.iVar)
        console.log(TypsescriptSession.sVar)
    }

    public thirdFunc(){
        //console.log(lVar)
        console.log(this.iVar)
        console.log(TypsescriptSession.sVar)
    }

    public M4(){
        console.log(this.iVar)
        console.log(TypsescriptSession.sVar)
    }

    public static staticMethod(){
        console.log("This is a print stament in static method")
    }

    public dataTypesFunc(){
        const numVal: number = 10
        const charVal: string = 'a'
        const stringVal: string = "This is a string"
        const boolVal: boolean = true
        let nullVal: null = null
        const undefVal: undefined = undefined
        const symbolVal: symbol = Symbol("Value Check")
        //const bigIntVal: bigint = 3453425342534253425n

        console.log(charVal)
        console.log(symbolVal.description)

        const anyVal: any = "This is a value"
        const unknownVal: unknown = "unknown"

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
    }
    public conditionStatements(){
        const a=10
        const b=20
        const c=30

        if(a>b){
            console.log("Condition 1")
        }else if(b<c){
            console.log("Condition 2")
        }else if(c>a){
            console.log("Condition 3")
        }else {
            console.log("In else")
        }
    }

    public forLoopFunc(){
        for(let indexVal=10;indexVal<21;indexVal++){
            if(indexVal!=15){
                if(indexVal>18){
                   break; 
                }else{
                    console.log(indexVal)
                }
            }
        }

        console.log("===========While Loop============")
        let b=10
        while(b<=20){
           // if(b!=15){
                console.log(b) //continue;dfgdfgrdgergertertyretyerty
                b++
            //}
        }

        console.log("===========do - While Loop============")

        console.log("===========for using continue============")
        
        for(let indexVal=10;indexVal<21;indexVal++){
            if(indexVal==15){
                continue
            }else{
                console.log(indexVal)
            }
        }
    }

    public arrayDemo(){
        const arr1: number[] = [24, 22, 20, 29, 28]
        const arr2 = [1, 2, 3, 4]
        const arr3 = [3, 2, [8, 9], 10]

        console.log(arr1)

        console.log(arr1[4])

        console.log(arr1.map(val=>val*2))

        console.log(arr2.reduce((sumVal, val)=>sumVal+val, 0))

        console.log(arr1.map(val=>val*arr2.reduce((sumVal, val)=>sumVal+val, 0)))

        console.log(arr1.filter(val=>val>22))

        console.log(arr1.concat(arr2))
        const retVal = [...arr1, ...arr2]
        console.log(retVal)

        //[24, 22, 20, 29, 28]
        console.log(arr1.slice(1,3))

        console.log(arr3.flat())

        console.log(arr1.flatMap(val=>val*10))
        //console.log(arr3.flatMap(val=>[val*2]))

        arr1.forEach((value, index, arr1)=>console.log(value, index, arr1.length))

        console.log(arr1.every(val=>val>19))

        console.log(arr1.some(val=>val>30))

        console.log(arr1.find(val=>val!=24))
        console.log(arr1.findIndex(val=>val!=24))

        console.log(arr1.includes(34))

        console.log(arr1)
        //[24, 22, 20, 29, 28]
        console.log(arr1.splice(1, 3, 34, 36, 39, 33))
        console.log(arr1)
        console.log(arr1.join(",  "))

        console.log(arr1.sort((a,b)=>a-b))
        console.log(arr1.sort((a,b)=>b-a))

        console.log(arr1.push(30))
        console.log(arr1.length)
        console.log(arr1)

        console.log(arr1.pop())
        console.log(arr1.length)
        console.log(arr1)

    }

    public objectDemo(){
        interface employeeInfo {
            empId: number,
            empName: string,
            empDept: string,
            salary: number
        }

        const employeeOne:employeeInfo = {
            empId: 1234,
            empName: "Playwright",
            empDept: "IT",
            salary: 30000.69
        }

        const employeeTwo: employeeInfo = {
            empId: 1235,
            empName: "Automation",
            empDept: "HR",
            salary: 25000.50
        }

        console.log(employeeTwo)

        console.log(employeeTwo.empName)

        interface employeeInfo {
            Location?: string
        }

        employeeOne.Location = "Hyderabad"

        console.log(employeeOne)

        type employeeCard = Pick<employeeInfo, 'empId' | 'empName'>

        const employeeOneCard: employeeCard = {
            empId: 1234,
            empName: "Playwright"
        }

        const employeeTwoCard: employeeCard = {
            empId: 1235,
            empName: "PlaywrightTest",
            //salary: 30000
        }

        console.log(employeeTwoCard)

        type employeeGeneralInfo = Omit<employeeInfo, 'empId' | 'salary' | 'Location'>

        const employeeOneGeneralInfo: employeeGeneralInfo = {
            empName: "Playwright",
            empDept: "HR",
            //salary: 30000
        }

        console.log(employeeOneGeneralInfo)
    }

    public returnType(parm1: number, pram2: string, param3: boolean): number{
        const var1 = parm1
        return var1
    }

    public genericReturnType<T>(param1: T): T{
        const var1 = param1
        return var1
    }

    public anyReturnType(param1: any): any{
        const var1 = param1
        return var1
    }

    public stringDataType(){
        const s1 = "This is a strings in Typescripts"
        const s2 = "This is another String in Typesscript"
        const s3 = " "
        const s4 = "      This is a string          with spaces         "

        console.log(s1)

        console.log(s1.charAt(3))   //s   string

        console.log(s1.concat(s2))  // string  This is a string in TypescriptThis is another String in Typesscript
        console.log(s1.concat(s3, s2))
        console.log(s1.concat(s3).concat(s2))
        console.log(s1.concat(" "+s2))
        console.log(s1+" ".concat(s2))
        console.log(s1+" "+s2)
        console.log(s1+s3+s2)

        //console.log(s1.indexOf('s'))   //i will get the index of 1st 's'
        //console.log(s1.indexOf('s', s1.indexOf('s')+1))   //i will get the index of 2nd 's'
        console.log(s1.indexOf('s', s1.indexOf('s', s1.indexOf('s', s1.indexOf('s')+1)+1)+1))  //i will get the index of 3rd 's'
        //console.log(s1.indexOf('s', 15))  //i will get the index of 4th 's'

        console.log(s1.lastIndexOf('s'))

        console.log(s1.length)

        console.log(s1.repeat(3))

        console.log(s1.replace("is", "Z"))

        console.log(s1.slice(3, 16))

        console.log(s1.split("is"))

        console.log(s1.substring(3, 16))

        console.log(s1.toLowerCase())
        console.log(s1.toUpperCase())

        console.log(s4)
        console.log(s4.trim())
        console.log(s4.trimStart())
        console.log(s4.trimEnd())

        const val = 1234
        console.log(`This is the value of string val: ${val}`)

        //You order is placed successfully. Your order number is AMZ435324534 for traking
    }

    public mappedRemapping(){
        interface employeeInfo {
            empId: number,
            empName: string,
            empLocation: string
        }

        const employeeOne: employeeInfo = {
            //getEmpId: () => 1234,
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        }

        console.log(employeeOne)

        type getEmployeeMapping = {
            [P in keyof employeeInfo as `get${Capitalize<string & P>}`]: () => employeeInfo[P]
        }

        const employeeRemapped: getEmployeeMapping = {
            getEmpId: () => 1235,
            getEmpName: () => "Typescript",
            getEmpLocation: () => "Mumbai"
        }

        console.log(employeeRemapped)
    }
    
    public mappedPromise(){
        interface employeeInfo {
            empId: number,
            empName: string,
            empLocation: string
        }

        const employeeOne: employeeInfo = {
            //getEmpId: () => 1234,
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        }

        console.log(employeeOne)

        type mappingUsingPromise = {
            [P in keyof employeeInfo]: Promise<employeeInfo[P]>
        }

        const promisedEmpoyeeInfo: mappingUsingPromise = {
            empId: Promise.resolve(1234),
            empName: Promise.resolve("Typescript"),
            empLocation: Promise.resolve("Banglore")
        }

        console.log(promisedEmpoyeeInfo)
    }

    public optionalMapping(){
        interface employeeInfo {
            empId: number,
            empName: string,
            empLocation: string
        }

        const employeeOne: employeeInfo = {
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        }
        console.log(employeeOne)

        type optionalEmployee = {
            [P in keyof employeeInfo]?: employeeInfo[P]
        }
/*
        type optionalEmployee {
            empId?: number,
            empName?: string,
            empLocation?: string
        }
*/
        const optionalEmployeeOne: optionalEmployee = {
            empId: 1235
        }

        console.log(optionalEmployeeOne)

        const optionalEmployeeTwo: optionalEmployee = {
            empName: "Typescript"
        }

        console.log(optionalEmployeeTwo)
    }

    public conditionalMapping(){
        interface employeeInfo {
            empId: number,
            empName: string,
            empLocation: string
        }

        const employeeOne: employeeInfo = {
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        }
        console.log(employeeOne)

        const employeeTwo: employeeInfo = {
            empId: 1234,
            empName: "Playwright",
            empLocation: "Hyderabad"
        }

        type conditionalEmp = {
            [P in keyof employeeInfo]: employeeInfo[P] extends string
            ? employeeInfo[P] | null
            : employeeInfo[P]
        }

        const conditionalEmpOne: conditionalEmp = {
            empId: 1234,
            empName: "Playwright",
            empLocation: null
        }
    }

    public zodSchemaDemo(){
        interface employeeInfo {
            empId: number,
            empName: string,
            empLocation: string
        }


       /* const employeeInfoZod = z.object{
            empId: z.
        }*/
    }

    public tupleDemo(){

        type tupleType = [number, string, boolean]

        const t1: tupleType = [1234, "Playwright", true]
        const t2: tupleType = [1235, "Typescript", false]

        console.log(t1)

        console.log(t1.concat(t2))

       // console.log(t1.fill(3))

       console.log(t1.join(", ").charAt(6))

       console.log(t1.findIndex((item) => {
        return typeof item === 'boolean' && item === true
       }))

       console.log(t1.find((item) => {
        return typeof item === 'boolean' && item === true
       }))

       const value1 = t1.findIndex((item) => 
        typeof item === 'boolean' && item === true
       )
       console.log(value1)

       const value2 = t1.find((item) => 
        typeof item === 'boolean' && item === true
       )
       console.log(value2)

       console.log(t1.length)

       console.log(t1.pop())
       console.log(t1)
       
       //console.log(t1.)
    }

    public setDemo(){
        const set1 = new Set()
        const set2 = ([ 1235, "Typescript", true ])

        set1.add(1234)
        set1.add("Playwright")
        set1.add(false)
        set1.add(10.30)
        set1.add(false)
        set1.add(10.30)

        console.log(set1)

        console.log(set1.delete(1234))
        console.log(set1)

        console.log(set1.forEach((value)=>console.log(value)))

        console.log(set1.has("Playwright"))

        console.log(Array.from(set1.keys()))
        console.log(set1.values())

        console.log(set1.entries())

        console.log(set1.size)

        //console.log(set1.)

        const weakSet = new WeakSet()
        //weakSet.add(10)
    }

    public MapsDemo(){
        const mapVal = new Map()

        const obj = {
            empId: 1234,
            empName: "Playwright"
        }

        mapVal.set(1234, "Playwright")
        mapVal.set("Typescript", "Playwright")
        mapVal.set(true, 2345)
        mapVal.set(1235, "Javascript")
        mapVal.set(obj, "String Object")

        console.log(mapVal)

        console.log(mapVal.delete(obj))
        console.log(mapVal)

        const allKeys = mapVal.keys()
        console.log(mapVal.forEach((key, value)=> console.log(`Key values are ${mapVal.get(key)} and the value is ${mapVal.get(value)}`)))

        console.log(mapVal.size)

        console.log(mapVal.keys())
        console.log(mapVal.values())

        //console.log(mapVal.)

        const weakMap = new WeakMap()
        //weakMap.

    }

    public m1(value: number): void{
        console.log("Value is "+value.toFixed(2))
    }

    public m2(): void{
        this.m1(10)
    }
}

const obj = new TypsescriptSession()
obj.firstFunc()
TypsescriptSession.staticMethod()
obj.secondFunc()
console.log(obj.iVar)
console.log(TypsescriptSession.sVar)
obj.dataTypesFunc()
console.log("========================")
obj.conditionStatements()
console.log("=========for loop===============")
obj.forLoopFunc()
console.log("=========Arrays===============")
obj.arrayDemo()
console.log("=========Object Demo===============")
obj.objectDemo()
console.log("=========Return type Demo===============")
console.log(obj.returnType(10, "Check", true))
console.log("=========Generic Return type Demo===============")
console.log(obj.genericReturnType(10))
console.log(obj.genericReturnType("Check"))
console.log(obj.genericReturnType(true))
console.log(obj.genericReturnType(30.5))
console.log("=========Return type using Any===============")
console.log(obj.anyReturnType(10))
console.log(obj.anyReturnType("Check"))
console.log(obj.anyReturnType(true))
console.log(obj.anyReturnType(30.5))
console.log("=========Strings===============")
obj.stringDataType()
console.log("=========Remapping functionality Demo===============")
obj.mappedRemapping()
console.log("=========Promise functionality Demo===============")
obj.mappedPromise()
console.log("=========Zod schemas functionality Demo===============")
console.log("=========tuples functionality Demo===============")
obj.tupleDemo()
console.log("=========Set functionality Demo===============")
obj.setDemo()
console.log("=========Map functionality Demo===============")
obj.MapsDemo()
console.log("=========Exceptions functionality Demo===============")
obj.m2()

const sampleObject: any = {price: 50}
//obj.m1(sampleObject)
try{
    obj.m1(sampleObject)
}catch(e){
    console.log((e as Error).message)
}

console.log("========= Starting of OOPs concepts ===============")

class A1 {
    public a1(){
        console.log("This is in class A1 and function a1")
    }
}

class A2 extends A1{
    public a2(){
        console.log("This is in class A2 and function a2")
        this.a1()
    }
}

class A3 extends A2 {
    public a3(){
        console.log("This is in class A3 and function a3")
        this.a1()
        this.a2()
    }
}

class A4 extends A2{
    public a4(){
        console.log("This is in class A4 and function a4")
        this.a1()
    }
}


const obj1 = new A2()
obj1.a2()

console.log("============ Polymorphisum - Overriding =============")

class B1{
    public print(): string{
        return "From class B1"
    }
}

class B2 extends B1{

    public print(): string{
        return "From class B2"
    }

    public callingFunc(): string {
        console.log(this.print())
        return "From calss B2"
    }
}

const obj2 = new B2()
console.log(obj2.callingFunc())



/*

Polymorphisum
    Overloading
        generic
        subtype
    Overriding


*/











