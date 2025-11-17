//primitive Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//number,bool and string
function exmnum() {
    var number = 98;
    console.log("number " + number);
}
//exmnum()
// //string
function strexam() {
    var stringname;
    stringname = "its a string";
    console.log(stringname);
}
//strexam()
// //bool
function boolexam() {
    var stringname;
    var isbooleantype = true;
    console.log(isbooleantype);
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
function add(a, b) {
    return a + b;
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
var Employee3 = {
    empNmae: 'test',
    age: 30,
    isvalue: true
};
var Employee1 = {
    empNmae: 'test',
    age: 30,
    isvalue: true
};
//or
var Employee2 = {
    empNmae: 'test',
    age: 30,
    isvalue: true
};
//OPtional---?option feild
function Opptionnaln() {
    var Employee1 = {
        empNmae: 'test',
        isvalue: true
    };
    console.log(Employee1.empNmae);
}
//Opptionnaln()
////////////////////////////////////////////////////////////////////////////////////////
//Typescript Union
//Morew than one type in object -union type
//union type -or -"|"
//Implicit or inference--array onle acceptable
function UnionType() {
    var uniarray = ['1', 34, true];
    uniarray.push('2');
    console.log(uniarray);
}
//UnionType()
//explicit
function expunion() {
    var errorcode;
    errorcode = '401';
    errorcode = 401;
    console.log(errorcode);
    var uniarray = [];
    uniarray.push('2');
    console.log(uniarray);
}
//expunion()
/////////////////////////////////////////////////////////////////////////////
//Typescript -Any Type
//Basic Type--Work like javascript-dynamic type
function AnyTypeU() {
    var emp = 'test';
    console.log(emp);
    emp = 30;
    console.log(emp);
    emp = true;
    console.log(emp);
}
//AnyTypeU();
//Array
function Arrayexam() {
    var emparray = [];
    emparray.push('one');
    emparray.push(1);
    emparray.push(true);
    console.log(emparray);
}
//Arrayexam();
//Object
function objExm() {
    var obj;
    obj = { name: 'one', age: 1 };
    obj = { name: 1, age: 'one' };
    console.log(obj);
}
//objExm()
//null / undefined 
function nullexample() {
    var x = null;
    var y = undefined;
    console.log(x);
    console.log(y);
}
//nullexample();
////////////////////////////////////////////////////////////////////////////////////////////
//Tyscript-Function
//Function Type
//let greet:Function;
var greet = function () {
    return "hello";
};
//console.log(greet());
//Funtion with parameters
function funparam() {
    var add1 = function (a, b) {
        return a + b;
    };
    console.log(add1(12, 12));
}
//funparam();
//Function with return type
function funreturn() {
    var add1 = function (a, b) {
        return a + b;
    };
    console.log(add1(12, 12));
}
//funreturn()
//Function with union type params
function funparamunion() {
    var add1 = function (a, b, c) {
        if (typeof c === 'number') {
            return a + b + c;
        }
        return a + b;
    };
    console.log(add1(12, 12, '10'));
}
//funparamunion();
//Function with optional params{?}
function funopt() {
    var add1 = function (a, b, c) {
        if (typeof c === 'number') {
            return a + b + c;
        }
        return a + b;
    };
    console.log(add1(12, 12));
}
//funopt();
//Funtion with Default value
function fundefal() {
    var add1 = function (a, b, c) {
        if (c === void 0) { c = 10; }
        if (typeof c === 'number') {
            return a + b + c;
        }
        return a + b;
    };
    console.log(add1(12, 67));
}
//fundefal()
//Function with Types alies params
function typeali() {
    var add1 = function (a, b, c) {
        if (c === void 0) { c = 't6'; }
        if (typeof c === 'number') {
            return a + b + c;
        }
        return a + b;
    };
    console.log(add1(12, 12));
}
//typeali();
// with Object
function objuser() {
    var witObj = function (user) {
        console.log("name is ".concat(user.name, " and age is ").concat(user.age));
    };
    witObj({ name: 'Test', age: 98 });
}
//objuser();
//rest params --{...c}
function add1rest() {
    var add1 = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        console.log(c);
        var d = c.reduce(function (x, y) { return x + y; }, 0); //arraymethod , its reduce into single value
        //x (accumulator),y (current value),0 initialvalue
        return a + b + d;
    };
    console.log(add1(12, 12, 1, 2, 3, 4));
}
//add1rest()
///funtion signature
function examsign() {
    var add1; // u can asign "void" if there no return type
    add1 = function (a, b) {
        var c = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            c[_i - 2] = arguments[_i];
        }
        console.log(c);
        var d = c.reduce(function (x, y) { return x + y; }, 0);
        return a + b + d;
    };
    console.log(add1(75, 12, 1, 2, 3, 4));
}
//examsign()
//////////////////////////////////////////////////////////////////////////////////////////////////
// TYpescript-Tuples
//Array
function arraynormal() {
    var userArry = ['name', 23, true];
    userArry[0] = 12;
    console.log(userArry);
}
//arraynormal()
//Tuples -union to typed array chages called tuple
function arrayatuples() {
    var userTuple = ['name', 23, true];
    // userArry[0]=12
    userTuple[0] = 'test';
    userTuple.push(4);
    console.log(userTuple);
}
//arrayatuples();
///readyonly
function arrayared() {
    var userTuple = ['name', 23, true];
    //userArry[0]=12
    //userTuple[0]='test'
    //userTuple.push(5)
    console.log(userTuple);
}
//arrayared();
//Named
function usertupleexample() {
    var userTuple = ['name', 23, true];
    //Accessing Named Tuple--Destructuring
    var uname = userTuple[0], age = userTuple[1], isvalid = userTuple[2];
    console.log(uname);
}
//usertupleexample();
//////////////////////////////////////////////////////////////////////////////////////
//Typescript-Type Casting
//syntax 'as'
function syntaxas() {
    var x = 'hello';
    console.log(x.length);
}
//syntaxas()
////////////////////////////////////////////////////////////////////////////////////////////
//Typescript-Enums
//Enum- group of constants
//number
function enumnumexam() {
    var StatusCode;
    (function (StatusCode) {
        StatusCode[StatusCode["Success"] = 200] = "Success";
        StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
        StatusCode[StatusCode["SeverError"] = 500] = "SeverError";
    })(StatusCode || (StatusCode = {}));
    console.log(StatusCode.Success);
}
//enumnumexam();
// string
function enumexamstr() {
    var Stringvalue;
    (function (Stringvalue) {
        Stringvalue[Stringvalue["Success"] = 100] = "Success";
        Stringvalue[Stringvalue["Unauthorized"] = 101] = "Unauthorized";
        Stringvalue[Stringvalue["SeverError"] = 102] = "SeverError";
    })(Stringvalue || (Stringvalue = {}));
    console.log(Stringvalue.SeverError);
}
//enumexamstr()
/////////////////////////////////////////////////////////////////////////////////////////
//Typescript-Interface
//Interface -only work with oject -no premitive type
function examinter() {
    var user = {
        name: 'test',
        age: 23
    };
    console.log(user.name);
}
var addI = function (p1, P2) {
    return p1 + P2;
};
//Extending Interfaces
function examextens() {
    var useremp = {
        name: 'test',
        age: 23,
        empId: 1
    };
    console.log(useremp.empId);
}
//examextens()
//////////////////////////////////////////////////////////////////////////////////////////////////
// Typescript -Class
//simple Clas
function examsimple() {
    var User1 = /** @class */ (function () {
        function User1(x) {
            this.id = x;
        }
        return User1;
    }());
    var userobject = new User1(10);
    console.log(userobject.id);
}
//Interface implemnt into the class ---user inplements key word
//Multiple interface implements into the class
var Personimp = /** @class */ (function () {
    function Personimp(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    return Personimp;
}());
var personobj = new Personimp(122, 'teswet', 'chennai');
//console.log(personobj.name)
//studentobj(personobj.city)
//extends
function examextemds() {
    var struden = /** @class */ (function (_super) {
        __extends(struden, _super);
        function struden() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.studenid = 121;
            return _this;
        }
        return struden;
    }(Personimp));
    var studentobj = new struden(122, 'test', 'madurai');
    console.log(studentobj.name);
    console.log(studentobj.studenid);
}
// examextemds()
////////////////////////////////////////////////////////////////////////////////////////////////////
//Generics
var Toarray = function (x, y) {
    return [x, y];
};
var genarray = new Toarray(2, 4);
//console.log(genarray)
//////////////////////////////////////////////////////////////////////////////////////////////////////
