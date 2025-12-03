
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
            salary?: number
        }

        const employeeOne: employeeInfo = {
            empId: 1234,
            empName: "Playwright",
            empDept: "IT"
        }

        const employeeTwo: employeeInfo = {
            empId: 1235,
            empName: "Automation",
            empDept: "HR",
            salary: 25000.50
        }

        console.log(employeeTwo)

        console.log(employeeTwo.empName)

        
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