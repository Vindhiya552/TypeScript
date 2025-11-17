
//primitive Types

//number,bool and string
function exmnum(){
let number =98
console.log(`number `+number)
}
//exmnum()

// //string
function strexam(){
let stringname;

stringname ="its a string"
console.log(stringname)
}
//strexam()

// //bool

function boolexam(){
let stringname;

let isbooleantype:boolean=true
console.log(isbooleantype)

}
//boolexam()


// type bc ={
// name  :string;
// }
// let uname :bc={
// name:"dhiya"
// }

// type stringType = string

// var userName: stringType = '8'

//con not resign

//simple function

function add(a:number, b:number)// its return type
{
    return a+b;
}
//console.log(add(1,2))

//////////////////////////////////////////////////////
//Typscript Array


//Implicit

// let numsample=[1,2,3,4,5]
// let strsample=['a','b','c','d']
// let boolsamle=[true, false]


//Explicit
// let numsample:number[]=[1,2,3,4,5]
// let strsample:string[]=['a','b','c','d']
// let boolsamle:boolean[]=[true, false]


//Declare and Assign Later
// function redeclar(){
//  let numsample:number[];
//  let strsample:string[]=[]
//  numsample=[];//first initialize
// numsample.push(2,5,6,7)


// strsample.push('e','r','dgfser')
// console.log(strsample)
// }
//redeclar()


//read only

// function readonlyfun(){
// let numsample:readonly number[]=[1,2,3,4,5]
// numsample.push(8) //con not push if u use readonly
// console.log(numsample)
// }
//readonlyfun()


////////////////////////////////////////////////////////////////////////////////////////
//Typescript Object
//Implicit
let Employee3={
    empNmae :'test',
    age:30,
    isvalue:true

}


//Explicit

type employe={
    empNmae:string,age:number,isvalue:boolean
}

let Employee1:employe={
    empNmae :'test',
    age:30,
    isvalue:true

}
//or

let Employee2:{empNmae:string,age:number,isvalue:boolean}={
    empNmae :'test',
    age:30,
    isvalue:true

}

//OPtional---?option feild
function Opptionnaln(){
type employe={
    empNmae:string,age?:number,isvalue:boolean
}

let Employee1:employe={
    empNmae :'test',
    isvalue:true

}
console.log(Employee1.empNmae)
}
//Opptionnaln()




////////////////////////////////////////////////////////////////////////////////////////
//Typescript Union
//Morew than one type in object -union type

//union type -or -"|"

//Implicit or inference--array onle acceptable

function UnionType(){
let uniarray =['1',34,true]

uniarray.push('2')

console.log(uniarray)
}
//UnionType()

//explicit

function expunion(){
let errorcode :(string | number);

errorcode='401'
errorcode =401
console.log(errorcode)
let uniarray:(string | number | boolean)[] =[]

uniarray.push('2')

console.log(uniarray)

}
//expunion()

/////////////////////////////////////////////////////////////////////////////
//Typescript -Any Type


//Basic Type--Work like javascript-dynamic type

function AnyTypeU(){
let emp:any ='test'

console.log(emp);
emp=30;
 console.log(emp);

emp=true
console.log(emp);
}

//AnyTypeU();


//Array

function Arrayexam(){
let emparray:any[]=[]

emparray.push('one');
emparray.push(1);
emparray.push(true);

console.log(emparray);

}
//Arrayexam();


//Object
function objExm(){
type empobj={
    name:any;
    age:any;
}

let obj:empobj;

obj ={name:'one',age:1}
obj ={name:1,age:'one'}
console.log(obj);

}
//objExm()


//null / undefined 
function nullexample(){
let x:null=null
let y:undefined=undefined
console.log(x);
console.log(y);
}
//nullexample();

////////////////////////////////////////////////////////////////////////////////////////////
//Tyscript-Function

//Function Type

//let greet:Function;

let greet =()=>{
    return "hello"
}

//console.log(greet());

//Funtion with parameters

function funparam(){
let add1 =(a:number,b:number)=>{
    return a+b
}
console.log(add1(12,12))
}
//funparam();



//Function with return type

function funreturn(){
let add1 =(a:number,b:number):number=>{
    return a+b
}
console.log(add1(12,12))

}
//funreturn()



//Function with union type params

function funparamunion(){
let add1 =(a:number,b:number,c:(string|number)):number=>{

    if(typeof c === 'number'){
         return a+b+c ;
    }
    return a+b
}
console.log(add1(12,12,'10'))
}
//funparamunion();




//Function with optional params{?}

function funopt(){
let add1 =(a:number,b:number,c?:(string|number)):number=>{

    if(typeof c === 'number'){
         return a+b+c ;
    }
    return a+b
}
console.log(add1(12,12))

}
//funopt();


//Funtion with Default value


function fundefal(){
let add1 =(a:number,b:number,c:(string|number)=10):number=>{

    if(typeof c === 'number'){
         return a+b+c ;
    }
    return a+b
}
console.log(add1(12,67))

}
//fundefal()



//Function with Types alies params


function typeali(){

type strOrconst =string | number

let add1 =(a:number,b:number,c:strOrconst='t6'):number=>{

    if(typeof c === 'number'){
         return a+b+c ;
    }
    return a+b
}
console.log(add1(12,12))

}
 //typeali();

// with Object

function objuser(){
type User={

    name:string,
    age:number
}

let witObj =(user:User)=>{
    console.log(`name is ${user.name} and age is ${user.age}`)
}   


witObj({name:'Test',age:98})

}

//objuser();

//rest params --{...c}

function add1rest(){
let add1 =(a:number,b:number,...c:number[]):number=>{

   
    console.log(c)
    let d =c.reduce((x,y)=>x+y,0)//arraymethod , its reduce into single value
    //x (accumulator),y (current value),0 initialvalue
    return a+b+d
}
console.log(add1(12,12,1,2,3,4))

}
//add1rest()
///funtion signature
function examsign(){
let add1 :(x:number,y:number,...z:number[])=>number// u can asign "void" if there no return type

 add1 =(a:number,b:number,...c:number[]):number=>{

   
    console.log(c)
    let d =c.reduce((x,y)=>x+y,0)

    return a+b+d
}
console.log(add1(75,12,1,2,3,4))

}
//examsign()

//////////////////////////////////////////////////////////////////////////////////////////////////

// TYpescript-Tuples
//Array
function arraynormal(){
let userArry = ['name',23,true]

userArry[0]=12

console.log(userArry)
}
//arraynormal()

//Tuples -union to typed array chages called tuple


function arrayatuples(){
let userTuple:[string,number,boolean] = ['name',23,true]

// userArry[0]=12

userTuple[0]='test'
userTuple.push(4)
console.log(userTuple)

}
//arrayatuples();



///readyonly

function arrayared(){
let userTuple:readonly[string,number,boolean] = ['name',23,true]

//userArry[0]=12

//userTuple[0]='test'
//userTuple.push(5)
console.log(userTuple)


}
//arrayared();


//Named
function usertupleexample(){
let userTuple:readonly[uname:string,age:number,isvalid:boolean] = ['name',23,true]



//Accessing Named Tuple--Destructuring

let [uname,age,isvalid]=userTuple

console.log(uname)
}
//usertupleexample();

//////////////////////////////////////////////////////////////////////////////////////
//Typescript-Type Casting

//syntax 'as'
function syntaxas(){
let x:unknown='hello'
console.log((x as string).length)
}
//syntaxas()

////////////////////////////////////////////////////////////////////////////////////////////

//Typescript-Enums

//Enum- group of constants
//number
function enumnumexam(){
enum StatusCode{
    Success=200,
    Unauthorized=401,
    SeverError=500
}
console.log(StatusCode.Success)
}
//enumnumexam();


// string
function enumexamstr(){
enum Stringvalue{
    Success=100,
    Unauthorized,
    SeverError,
}
console.log(Stringvalue.SeverError)
}
//enumexamstr()

/////////////////////////////////////////////////////////////////////////////////////////
//Typescript-Interface


//Interface -only work with oject -no premitive type
function examinter(){
    interface User{
        name:string,
        age:number
    }


const user:User={
    name:'test',
    age:23
}
console.log(user.name)

}
//examinter()


//function Interface
interface useenum{
    (x:number,y:number):number
}
let addI:useenum=(p1:number,P2:number)=>{
    return p1+ P2

    
}


//Extending Interfaces
function examextens(){
   
    interface Employee extends User{
     empId:number
}

const useremp:Employee={
    name:'test',
    age:23
    empId:1
}
console.log(useremp.empId)
}
//examextens()

//////////////////////////////////////////////////////////////////////////////////////////////////

// Typescript -Class



//simple Clas

function examsimple(){
class User1{
    id :number
    constructor(x:number){
        this.id=x
    }
}
let userobject =new User1(10)
console.log(userobject.id)
}
//examsimple()


//Interface

interface userinterface{
    id:number
    name:string
}


interface Address{
  
    city:string
}


//Interface implemnt into the class ---user inplements key word

//Multiple interface implements into the class
class Personimp implements userinterface,Address{
     id:number
    name:string
    city: string
constructor(id:number,
    name:string,city:string)
    {
        this.id=id
        this.name=name
         this.city=city    }

    // getname=()=>{
    //     return this.name
    // }
}
let personobj = new Personimp(122,'teswet','chennai')
//console.log(personobj.name)
//studentobj(personobj.city)



//extends
function examextemds(){
class struden extends Personimp{
    studenid :number=121
}
let studentobj = new struden(122,'test','madurai')

console.log(studentobj.name)

console.log(studentobj.studenid)
}
// examextemds()
////////////////////////////////////////////////////////////////////////////////////////////////////
//Generics

const Toarray=<T>(x:T,y:T)=>{
    return [x,y]
}

const genarray =new Toarray<Number>(2,4)
//console.log(genarray)

//////////////////////////////////////////////////////////////////////////////////////////////////////
