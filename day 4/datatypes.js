a="sece"
console.log(a)
b=true
console.log(b)
//checking gthe types of datatype
console.log(typeof(a))

//secondary datatypes(Object)
array=['a',10,true,[20,30],"Sri eshwar"]
console.log(array)
console.log(typeof(array))
obj={
    firstame:"sri",lastname:"eshwar"}

    console.log(obj.firstname)
    console.log(obj["lastname"])
    //2nd way of declaring objects
    obj1={}
    console.log(obj1) 
obj1["dept"]="cse"
obj1['sec']='A'
console.log(obj1)
//3rd way of declaring an object 
obj2=new Object()
console.log(obj2);
obj2.count=70
obj2.abs=1
totalpresentcount=obj2.count-obj2.abs
console.log("present",totalpresentcount)
console.log(obj2)
set=new Set(("hello",1,2,"sece"))
console.log(typeof(set))
console.log(set)
set=new Set(["hello",1,2,"sece"])

console.log(set)
var a=5
var b="5"
console.log(a==b)
console.log(a===b)