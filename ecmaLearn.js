var start = Date.now();
//<ECMAScript 5>
console.log("\n");
console.log(".....................ECMAScript 5.....................");
var message = "hi, this is Gebe.";
var chineseSentence = "你好高啊";
var computer=null;
var p;
console.log(message);
//typeof
console.log(typeof(p));//p is not initilized
console.log(typeof(age));//age is not defined or used = defined in Dynamic Language???
age = "used = defined" ;
console.log(age);// The answer is Yes.
// Number() parseInt() parseFloat()
console.log(parseInt("0575-87135726",10));//Decimal
console.log(message.length);
console.log(chineseSentence.length);
var lang = "Java";
lang = lang + "Script";
console.log(lang);
var tel = 1825858327;
var telS = tel.toString(10);//Decimal, can be omitted.
telS += "0";
console.log(telS);
var nothing = null;
console.log(nothing);
console.log(String(nothing));
var obj = new Object();//() can be omitted here.
console.log(typeof(obj));
//<operator ++ -- + - ~ & | ^ << >> >>> ! && || * / % > < >= <= == != === !== _?_:_ = += -= , >
console.log(".....................operator.....................");
var a = 10;
var b = ++a;
var a = 10;
var c = a++;
console.log("b=",b," c=",c);
var sD = "1.2";
var sS = "A";
var sB = false;
var o = {
    valueOf: function() {
        return 10086;
} };
console.log("++\"1.2\"=",++sD," ++\"A\"=",++sS," ++false=",++sB," ++o=",++o);
var SS = "12345";
console.log(+SS);
var num = "18";
console.log(num,typeof(num),num.toString(2),typeof(num.toString(2)));
var num = 18;
var snum = num.toString(2);
console.log(snum);
var notsnum = ~snum;
console.log(notsnum);
var bignum = 18258583270;
bignum = bignum >>> 1;
console.log(bignum);
var n = 32;
n = n/5;
console.log(n);//6.4
var num1 = 5;
var num2 = 10;
var m1 = "The sum of 5 and 10 is " + num1 + num2;
var m2 = "The sum of 5 and 10 is " + (num1 + num2);
console.log(m1,m2);//15 510
var result = "Brick".toLowerCase() < "alphabet".toLowerCase(); //false
console.log("Brick < alphabet : ",result);
var result1 = NaN < 3; //false
var result2 = NaN >= 3; //false
console.log(result1, result2);
var result1 = ("55" == 55); 
var result2 = ("55" === 55);
console.log(result1, result2);
var result1 = (null == undefined); 
var result2 = (null === undefined);
console.log(result1, result2);
var max = (num1 > num2) ? num1 : num2;
console.log(max);
var num1=1, num2=2, num3=3;
console.log(num1,num2,num3);
//</opterator>
console.log(".....................control flow.....................");
//<control flow>
var i=0;
if(i>0){
    do{
        i--;
        console.log("i>0,i--.i=",i);
    }while(i>0);
}else if(i<0){
    while(i<0){
        i++;
        console.log("i<0,i++,i=",i);
    }
}else{//=0
    for(var j=0;j<1;j++){
        console.log("i-0,i=",i);
    }
    console.log("j =",j);
}
for(var n in "123"){
    console.log(n);
}
a_label:for(var k=0;k<2;k++){// not only be executed
    console.log("label.k=",k);
}
for(var k=0;k<5;k++){
    if(k==2){
        continue;
    }
    else if(k==5){
        break;
    }
    console.log("for.k =",k);
}
outermost:
for (var i=0; i < 10; i++) {
     for (var j=0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outermost; // double break;
        }
num++; }
}
//with (expression) statement : omitted.
i = 2;
switch(i){
    case 1: 
    case 2: console.log("1 or 2 : one or two"); break;
    case 3: console.log("3:three"); break;
    case 4: console.log("4:four"); break;
    default: console.log("default"); break;
}
//</control flow>
console.log(".....................function foundation.....................");
//<function foundation>
function address_book(name,address){
    console.log(name,"lives in",address,".");
    return name + address;
}
function addressBook(name,address){
    console.log(arguments[0],"lives in",arguments[1],".");
    return name + address;
}
console.log(address_book("Sherlock","221B Baker Street"));
console.log(addressBook("Sherlock"));//Output: Sherlock lives in undefined .
function sumAsMuchAsPossible(){//no defined arguments != can pass arguments to it !
    var sum =0;
    for(var n=0; n<arguments.length; n++){
        sum += arguments[n];
    }
    return sum;
}
console.log(sumAsMuchAsPossible(1,2,3,4,5,6));
console.log(sumAsMuchAsPossible(1,2,3));
//</function foundation>
console.log(".....................referrence.....................");
//<referrence>
var person = new Object(); 
person.name = "Nicholas"; 
console.log(person.name); //Output: Nicholas
var name = "Nicholas";
name.age = 27;
console.log(name.age);    //Output: undefined
var people = person;      //referrence !
people.name = "Kaiqi";
console.log(person.name); 
function setName(obj) {
    obj.name = "SongPao";
    obj = new Object(); // JS里的函数也是能修改引用对象的值的，只是方法不是通过引用传递
    obj.name = "DaoZhang";
}
setName(person);
console.log(person.name);    //"songpao"
//instanceof
console.log(person instanceof Object);
//</referrence>
console.log(".....................context.....................");
//<context&scope variable object>
var color = "blue";
function changeColor(){
    if (color === "blue"){
        color = "red";
    } else {
        color = "blue";
    }
}
changeColor();
console.log("Color is now " + color);
if(true){
    var L = 1;
}
{var M = 1;}
for(var i=0;i<1;i++){
    var N = 1;
}
console.log("No scopes: L=",L,"M=",M,"N=",N);//只能靠函数域来消灭局部变量？？？
//gc
function createPerson(name){
    var localPerson = new Object();
    localPerson.name = name;
    return localPerson; 
 }
var globalPerson = createPerson("Nicholas");
globalPerson = null;// 手工解除 globalPerson 的引用
console.log("globalPerson:",globalPerson);
try {console.log("localP:",localPerson);}
catch(ReferenceError){
    console.log("localPerson dereferrenced.")
}
//</context&scope>
//<Referrence Type>
console.log(".....................Referrence Type.....................");
//Object
var Inception = {
    name:"Inception",
    "director":"Nolan",
    mainActor:"Leonard",
    1 : 2,  // an attribute named 1 ...
    country:"USA",
    showoff:function(){
        console.log("showof ",this.name);// DO NOT use name.
    }
};
console.log(Inception[1]);  //like a dictionary
var m_attribute = "country";
console.log(Inception[m_attribute]); // [ ] is better, can be applied to variables.
var movie = {}; // = new Objec();
function showMovie(name, Movie){    //name: indispensible args, Movie: optional args
    var m_name = name;
    if(typeof Movie.director == "string"){
        var m_director = Movie.director;
    }
    if(typeof Movie.mainActor == "string"){
        var m_mainactor = Movie.mainActor;
    }
    console.log("Movie name:",m_name,",director:",m_director,",mainactor:",m_mainactor);
}
showMovie("Inception",Inception);
Inception.showoff();
//Array, different element types combination
var colors = Array();
var colors = Array(10);
var colors = new Array("red", "blue", "green");
var colors = Array("red", "blue", "green");
console.log(colors);
var colors = ["white", "black", "colorful"];
console.log(colors);
colors[5]="purple";
console.log(colors);//[ 'white', 'black', 'colorful', <2 empty items>, 'purple' ]
colors[-1]="excess";// dictionary element
console.log(colors);
colors.length = 0; // change length!!! to remove elements in tail
console.log(colors);// [ '-1': 'excess' ]
colors[colors.length]="white";// the technique to append to tail
colors[colors.length]="black";
console.log(colors);
if(colors instanceof Array){// Array.isArray() is not supported by node.js ???
    console.log("colors is an Array.");
}
console.log("toString:",colors.toString());
console.log("valueOf:",colors.valueOf());
console.log(colors.join("**O.O**"));

var count = colors.push("red", "green","red"); // LI or FI
console.log("Array can be used as stack: pop = ",colors.pop());// FO or LO
console.log("Array can be used as queue: shift = ",colors.shift());// LO or FO
var count = colors.unshift("white");
console.log("Array can be used as queue: unshift in the head:",colors);

var values = [0, 1, 5, 10, 15];
values.sort();//bad
console.log(values);
values.reverse();//bad
console.log(values);
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
    return 0; 
    }
}
function compareSimple(value1, value2){
    return value2 - value1;
}
values.sort(compare);//good
console.log(values);
values.reverse(compareSimple);//good
console.log(values);

var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors2);
var colors3 = colors2.slice(1);
console.log(colors3);
var colors4 = colors2.slice(2,4);
var colors5 = colors2.slice(-4,-2);
console.log(colors4);
console.log(colors5);
console.log(colors2);
console.log("removed:",colors2.splice(0,2),"||left:",colors2);
console.log("added:",colors2.splice(2,0,"red", "green"),"||left:",colors2);
console.log("changed:",colors2.splice(2,1,"red", "purple"),"||left:",colors2);//remove 1 item, add 2 items

//Array.iterator:
// every() 
// 调用every()并不能改变数组的值，只能检测数组中的每个值是否满足给定的条件。当遍历到某一个值不满足条件时，函数立即返回false，不再继续遍历。当数组中的每一个值都满足给定的条件时，函数返回true。
// forEach() 
// 从头到尾的遍历数组，可以改变数组的值。为数组中的每个元素都执行一遍传递给forEach()的回调函数
console.log("search: red is at",colors2.indexOf("red"),", red is at",colors2.lastIndexOf("red"),"from bottom?");// 2, 2 ???
var numbers = [1,2,3,4,5,4,3,2,1];
     var everyResult = numbers.every(function(item, index, array){// anonymous
         return (item > 2);
});
console.log("everyResult =",everyResult); //false
     var someResult = numbers.some(function(item, index, array){
         return (item > 2);
});
console.log("someResult =",someResult); //true
var filterResult = numbers.filter(function(item, index, array){
    return (item > 2);
});
console.log("filterResult =",filterResult); // [ 3, 4, 5, 4, 3 ]
var mapResult = numbers.map(function(item, index, array){
    return item * 2;
});
console.log("mapResult =",mapResult);// [ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]
numbers.forEach(function(item, index, array){
    item = item*2;// will not change Array
});
console.log("forEach: ",numbers);

//reduce() and reduceRight() : omitted.

var now = new Date();
console.log("now =",now,"now.toString =", now.toString(),"now.toLocaleString =",now.toLocaleString(),"now.valueOf =",now.valueOf());//
var yesterday = new Date(Date.parse("2018-12-28T00:00:00Z"));
console.log(yesterday);
var yesterday = new Date(Date.parse("Dec 28, 2018"));// 2018-12-27T16:00:00.000Z
console.log(yesterday);

//RegExp: temporary omitted

//Function two other methods to define a function
var acfun = function(){
    console.log("acfun,",arguments[0]);
};
acfun(2018);
var bili = new Function("console.log(\"bili,\",arguments[0]);");
bili(2019);
function callSomeFunction(someFunction, someArgument){//function as an args
    return someFunction(someArgument);
}
callSomeFunction(bili,"acfun");
function createComparisonFunction(propertyName) {
    return function(object1, object2){//function as return value
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
    } };
}

////arguments and this are two private attribute of function object.
function factorial(num){
    if (num <=1) {
        return 1;
    } else {
        return num*arguments.callee(num-1); // better than return num*factorial(num-1);
}}
console.log("fac of 6 =",factorial(6));
function outer(){
    inner();
}
function inner(){ 
    console.log("Look who called me, ",arguments.callee.caller);//  better than inner.caller
}
outer();
console.log("expected numbers of args of factorial(public attribute):",factorial.length);

var window={};
window.color = "red";
var o = { color: "blue" };
function sayColor(){
    console.log(this.color);
}
sayColor();
sayColor.call(this);//call(): call function in specific scope!
sayColor.call(window);
sayColor.call(o);

var str = " abcdE,aBCDfghijk ";
console.log(str.charAt(2));
console.log(str.slice(1,3));
console.log(str.indexOf("a",3));//from 3th.
console.log(str.trim());
console.log(str.toUpperCase().trim());
console.log(str.toLocaleLowerCase().trim());
//match()
var text = "cat, bat, sat, fat";
var pattern = /.at/;
var matches = text.match(pattern);
var searches = text.search(pattern);
console.log(matches,'index is',matches.index);
console.log("index is",searches);
var result = text.replace("at", "ond");
console.log(result);
//spilt()
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",",4);
var colors2 = colorText.split(/[^\,]+/,3);//at most 3 elements
console.log(colors1);
console.log(colors2);
var stringValue = "yellow";
console.log(stringValue.localeCompare("zoo"));
console.log(stringValue.localeCompare("yellow"));
console.log(stringValue.localeCompare("brick"));
console.log(String.fromCharCode(104, 101, 108, 108, 111));
//HTML method
console.log(stringValue.big());
console.log(stringValue.fontcolor(stringValue));

//Global
///url
var url = "http://www.wrox.com/illegal value.htm#start";
console.log(encodeURI(url));
console.log(encodeURIComponent(url));
console.log(decodeURI(encodeURI(url)));
console.log(decodeURI(encodeURIComponent(url)));// not ok
console.log(decodeURIComponent(encodeURIComponent(url)));
console.log(decodeURIComponent(encodeURI(url)));// ok
//eval
var here = "here33";
eval("console.log('it-s console.log, hello', here)");
var global = function(){
    return this;
}();            // (); !!!!
// console.log(global);//Output : info of context

//Math
var numbers = [1, 3, 5, 7, 9, Math.E, Math.PI, Math.SQRT2];
console.log(Math.max.apply(Math, numbers));// Math.max(numbers) will be NaN...
console.log(Math.ceil(25.4));//26
console.log(Math.round(25.4));//25
console.log(Math.round(25.5));//26
console.log(Math.floor(25.6));//25

console.log("random =",Math.random());
var num = Math.floor(Math.random() * 10 + 1);
console.log("random of 1-10 =",num);
function selectFrom(lowerValue, upperValue) {   //good function
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}
var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"]; 
var color = colors[selectFrom(0, colors.length-1)];
console.log("random color:",color);
console.log("|abs:",Math.abs(-5),"|exp:",Math.exp(1),"|log:",Math.log(100),"|pow:",Math.pow(4,2),"|sqrt:",Math.sqrt(8),"|acos:",Math.acos(0.5),"|tan:",Math.tan(Math.PI/4),"|");
//</Referrence Type>
console.log(".....................OOP.....................");
//<OOP>
var person = {
    name: "Treaser",
    _age: 29,
    job: "Software Engineer",
    sayName: function(){
        console.log(this.name);
} };
person.sayName();
Object.defineProperty(person, "name", {// modify characteristics of attributes(property)
    configurable: true, //default:true
    enumerable: false,
    writable: false,
    value: "Treaser"
});
person.name = "Coco"; //not writable
person.sayName();
console.log(person._age);
//visitor
var book = {
    _year: 2004,
    edition: 1 
};
Object.defineProperty(book, "year", {
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
} }
});
book.year = 2005;
console.log(book.edition);
var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function(){
            return this._year;
        },
        set: function(newValue){
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
    } }
});//以上代码在 book 对象上定义了两个数据属性(_year 和 edition)和一个访问器属性(year)
console.log(book._year.value);// unreachable
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value);// reachable
// can not create * class * only * objects * 
///  plant mode
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return o; 
}
var person1 = createPerson("Treaser", 22, "Software Engineer");
var person2 = createPerson("Curry", 30, "Athlete");
person1.sayName();
person2.sayName();
console.log(person1 instanceof Person);
///  constributor mode
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }; 
}
var person1 = new Person("Treaser", 22, "Software Engineer");
var person2 = new Person("Curry", 30, "Athlete");
person1.sayName();
person2.sayName();
console.log(person1 instanceof Person);
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName; // better
}
function sayName(){
    console.log(this.name);
}
var person1 = new Person("Treaser", 22, "Software Engineer");
var person2 = new Person("Curry", 30, "Athlete");
person1.sayName();
///  prototype mode
function Per(){
}
Per.prototype.name = "Treaser";// prototype 1
Per.prototype.age = 22;
Per.prototype.job = "Software Engineer";
Per.prototype.sayName = function(){
    console.log(this.name);
};
var person1 = new Per();
var person2 = new Per();
person2.name = "Curry";
person1.sayName();
console.log("in:","name" in person1);
console.log("in","name" in person2);
console.log("hasOwnProperty:",person1.hasOwnProperty("name"));
console.log("hasOwnProperty:",person2.hasOwnProperty("name"));
console.log(Object.keys(person1));
console.log(Object.keys(person2));
console.log(Object.keys(Person));
console.log(Object.keys(Per.prototype));// list all enumerabe properties of Per
console.log(Object.getOwnPropertyNames(Per.prototype));// list all properties of Per
Per.prototype = {       // better than prototype 1
    constructor : Person, // do not omit if needed
    name : "Nicholas",
    age : 29,
    job: "Software Engineer",
    friends : ["Shelby", "Court"],
    sayName : function () {
        alert(this.name);
    }
};
var per1 = new Per();
console.log(per1 instanceof Per);
console.log(Object.getOwnPropertyNames(Per.prototype));
Per.prototype.sayHi = function(){
    console.log("hi");
};
per1.sayHi();
console.log(per1.friends);
per1.friends.push("Bred");
console.log(new Per().friends);// all change with friends.
/// combination of prototype and constructor : great
function PErson(name, age, job){// great 
    this.name = name; 
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];//referrence type, use constructor
    if (typeof this.sayName != "function"){
        PErson.prototype.sayName = function(){
            console.log(this.name);
        }; 
    }     
}
// PErson.prototype = {   // above is better
//     constructor : PErson,
//     sayName : function(){
//         console.log(this.name);
//     }
// }
var person1 = new PErson("Treaser", 22, "Software Engineer");
var person2 = new PErson("Curry", 30, "Athlete");
person1.friends.push("Van");
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.sayName == person2.sayName);
// parasitic constructor mode???
var p1 = new createPerson("Treaser", 22, "Software Engineer");
p1.sayName();
function PER(name,age,job){
    var o = new Object();
    o.sayName=function(){
        console.log(name);
    }
    return o;
}
var person = PER("Treaser", 22, "Software Engineer");
console.log(person.name);//undefined
person.sayName();

/// Inheritance
function Father(){
    this.name = "father";
    this.friends = ["Shelby", "Court"];
    this.age = 45;
    if (typeof this.sayName != "function"){
        Father.prototype.sayName = function(){
            console.log(this.name);
        }; 
    }     
}
function Son(){
    this.hobby = "basketball";
}
Son.prototype = new Father();// where inheritance happens, and MUST be before other operations.
// newrite SHOULD be before rewrite
if (typeof this.showHobby != "function"){
    Son.prototype.showHobby = function(){
        console.log(this.hobby);
    }; 
}
// rewrite SHOULD be behind newrite
Son.prototype.sayName = function(){
    console.log("son");
}
var instance = new Son();
instance.sayName();
instance.showHobby();
console.log("hobby =",instance.hobby,"name =",instance.name);
//two methods to detect object type:
console.log(instance instanceof Object,instance instanceof Father,instance instanceof Son);
console.log(Object.prototype.isPrototypeOf(instance),Father.prototype.isPrototypeOf(instance),Son.prototype.isPrototypeOf(instance));
instance.friends.push("Bred");
var instance2 = new Son();
console.log(instance2.friends); // problem of referrence type element
// it has another problem : can pass agrs in constructor.
// constructor stealing to solve the 2 problems:
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
function SubType(name){
    //继承了 SuperType
    SuperType.call(this,name);// solve problem 1
    this.age = "29";
}
var instance1 = new SubType("2333");// solve problem 2
instance1.colors.push("black");
var instance2 = new SubType();
console.log(instance1.colors);
console.log(instance2.colors);
console.log(instance1.name);

// combination inheritance : great
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
};
function SubType(name, age){//继承属性 
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType(); //继承方法
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function(){
    console.log(this.age);
};
console.log("=-=-=-=-=-=-=")
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();
var instance2 = new SubType("Greg", 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();
console.log("=-=-=-=-=-=-=")
//prototypal inheritance : omitted
//parasitic inheritance : omitted

//combination of parasitic : one time constructor call
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
};
function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);// Greatest!!!
SubType.prototype.sayAge = function(){
    console.log(this.age);
};
console.log("Same output, but inner better.")
console.log("=-=-=-=-=-=-=")
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();
var instance2 = new SubType("Greg", 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();
console.log("=-=-=-=-=-=-=")
//</OOP>
console.log(".....................Function Expression.....................");
//<Function Expression>
(function(){
    Acfun(); // ok 
    function Acfun(){ //function definition
        console.log("have Acfun.");
    }
    console.log(Acfun.name);
    // Bili(); not ok
    var Bili = function(){
        console.log("BiliAT");
    };
    console.log(Bili.name);

// recurrence
    function factorial(num){
        if (num <= 1){
            return 1;
        } else {
            return num * arguments.callee(num-1);
        } 
    }
    console.log(factorial(50));
    var factorial = (function f(num){
        if (num <= 1){
            return 1;
        } else {
            return num * f(num-1);
        } 
    });
    var anotherFactorial = factorial; //
    factorial = null;
    console.log(anotherFactorial(50));
// closure
    function createFunctions(){
        var result = new Array();
        for (var i=0; i < 10; i++){
            result[i] = function(){
                return i; 
            };
        }
        return result;
    }
    var funArray = createFunctions();
    console.log(funArray);
    console.log(funArray[0](),funArray[4]());
    function createFunctionss(){
        var result = new Array();
        for (var i=0; i < 10; i++){
            result[i] = function(num){
                return function(){
                    return num;
                };
            }(i);
        }
        return result;  
    }
    var funArrays = createFunctionss();
    console.log(funArrays[0](),funArrays[4]());

    var name = "The Window";
    var object = {
        name : "My Object",
        getNameFunc : function(){
            var that = this;//
            return function(){
                return that.name;// without will be window
            };
    } };
    console.log(object.getNameFunc()());
// artifical { } scope using anonymous function
    for (var i=0; i < 5; i++){
        console.log(i); 
    }
    var i; // will not change i ...
    console.log("i =",i);
    try{
        (function(){
            for (var jj=0; jj < 5; jj++){
                console.log(jj); 
            }
        })();
        console.log("jj =",jj);
    }
    catch(ReferenceError){
        console.log("jj undefined");
    }
// private variable
    function MyObject(){
        var privateVariable = 10;
        function privateFunction(){
            return false;
        }
        //特权方法
        this.publicMethod = function (){ //use this.xxx to define privileged method
            privateVariable++;
            return privateFunction();
        };
    }   
})();
//</Function Expression>
//</ECMAScript 5>
//<ECMAScript 6/7>
(function(){
    console.log(".....................ECMAScript 6/7.....................");
// ES6 可以使用 let 关键字来实现块级作用域
    // use let instead of var
    var x = 10;
    var y = 10;
    {
        let x = 2;//它只在 let 命令所在的代码块 {} 内有效
        var y = 2;
        console.log(x,y);
    }
    console.log(x,y);
    for(let e=0;e<5;e++){
    }
    try{console.log(e);
    }catch(ReferenceError){
        console.log("e is not defined.");
    }
    // let和var的其他区别：
    // 使用 var 关键字声明的全局作用域变量属于 window 对象, 
    // 使用 var 关键字声明的全局作用域变量属于 window 对象.
// ES6加入 const:
    const PI = Math.PI;
    console.log(PI);
    try{PI = PI*2;
    }catch(TypeError){
        console.log("unchangeable value.");
    }
    const car = {type:"Fiat", model:"500", color:"white"};
    car.color = "red";
    console.log("changeable object:",car,"?");
})();

//</ECMAScript 6/7>
var stop = Date.now();
var result = stop - start;
console.log("Whole program run time:",result,"ms");