// 10. IIFE
// (function() {
//     console.log('My name is Sevinch');
//   })();


// // ozgaruvchi sifatida ishlatish
// const ozgaruvchi = (function() {
//     let localozgaruvchi = 'hello world';
//     console.log(localozgaruvchi);
//     return localozgaruvchi.toUpperCase();
//   })();
  
// console.log(ozgaruvchi); 


// // Arrow function sifatida
// (() => {
//     console.log('Arrow function');
//   })();
  




// 11 MODE-STRICT
// let this = 9;
// console.log(this);

// var function = 5;
// console.log(function);





//12  HIGHER ORDER FUNCTION
// function calculate(operation, a, b) {
//     return operation(a, b);
//     // calculate nomli bu funksiya operationga berilgan buyrug'ini qaytaradi
//   }
  
//   function add(x, y) {
//     return x + y;
//     // add nomli funksiya x ni y ga qo'shadi
//   }
  
//   function multiply(x, y) {
//     return x * y;
//     // multiply nomli bu funksiya x ni y ga ko'paytiradi
//   }
  
//   console.log(calculate(add, 5, 3)); 
//   console.log(calculate(multiply, 5, 3)); 
// //  bu yerda calculate funksiyani ishlatyapmiz lekin,operation argumentini o'rniga add va multiply funksiyalarni qo'yib ketyapmiz
  

// console.log("this is = " + this);

// const developer = {
//     firstname: "Sevinch",
//     lastname: "Dekanova",
//     id: 7, 
//     hello: function() {
//         return "My name is " + this.firstname;
//     }
// };

// document.getElementsById("text").innerHTML = developer.hello();


// function doSomething() {
//     console.log(this);
//     }
//     doSomething();
    



// CALL()
// const person = {
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
  
//   const person1 = { firstName: "John", lastName: "Doe" };
//   const person2 = { firstName: "Jane", lastName: "Smith" };
  
//   console.log(person.fullName.call(person1)); // John Doe
//   console.log(person.fullName.call(person2)); // Jane Smith
  

// Apply()

// const numbers = [5, 6, 2, 8, 3];

// const max = Math.max.apply(null, numbers);
// const min = Math.min.apply(null, numbers);

// console.log(max); // 8
// console.log(min); // 2


// Bind()

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
  
//   const person1 = { firstName: "Jane", lastName: "Smith" };
  
//   const boundFunction = person.fullName.bind(person1);
  
//   console.log(boundFunction()); // Jane Smith




// SONNI TUB YOKI TUB SON EMASLIGIGA TEKSHIRISH



function tekshirish() {

  const n = parseInt(document.getElementById("number").value);
  const natijasi = document = document.getElementById("natija");

  if (isNaN(n)) {
    natijasi.textContent = "Iltimos, son kiriting!";
    return;
}

if (n<=1){
  natijasi.textContent = "Tub son emas";
}

let isPrime = true;

for (let i=2; i<= Math.sqrt(n); i++) {
  if( n% i === 0) {
    isPrime = false;
    break;

  }

}

if(isPrime) {
  natijasi.textContent = `${n} tub son`;
}
else{
  natijasi.textContent = `${n} tub son emas`;
}

}

  













  
  






