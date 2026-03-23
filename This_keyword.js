// "use strict";
// console.log(this)


// function hello(name){
//     this.name = name;
//     console.log(this);
//     // console.log(a);
//     // console.log(this.a);
// }

// hello("Shreyas"); 
// // const a = new hello("Shreyas");
// console.log(a.name);


// Everything is written in notes so don't worry page number is 12 

//This inside object 
// const obj = {
//     a: 10,
//     x: function(){
//         console.log(obj.a);
//         console.log(this);
//         console.log(this.a);
//     }
// }

// obj.x();


// const student1 = {
//     name :"Shreyas",
//     printName: function(){
//         console.log(this.name)
//     }
// }
// student1.printName();

// const student2 = {
//     name :"Viraj",
// }
// student1.printName.call(student2); //this has override the this keyword 

const student1 = {
    name: "Shreyas",
    printName: function(age, city){
        console.log(this.name, age, city);
    }
}

const student2 = {
    name: "Viraj"
}

student1.printName.call(student2, 22, "Pune"); //it 
student1.printName.apply(student2, [22, "Pune"]); //(same as call, but args in array) 

//Same result
// ✔ Only difference = argument style

// and bind returns the new function doesn't reun immediately

const boundFunc = student1.printName.bind(student2, 22, "Pune");

boundFunc(); // now it runs


const obj1 = {
    a: 10,
    x: () => {
        console.log(this); //as this is present in the arrow function the 
        // value of this will be the same as it present and as it present in the global plce so value will window object
    }
}

obj1.x();

const obj2 = {
    a: 30,
    x: function(){ // enclosing lexical context 
        const y = () =>{
            console.log(this);
        }
        y();
    }
}
obj2.x();