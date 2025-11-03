// let array = [20, 15, 10, 30];
// let array2 = [];
//Eklemek için push
//Mutating metot => orjinale pushlar
// array.push("tomatoes")

// console.log(array[array.length-1]);
//filter
//Non Mutating => arrayin kopyasını oluşturur orjinale dokunmaz
// Uzun versiyon
// let fillteredArray = array.filter((element) => {
//   console.log(element);
//   if (element <= 15) {
//     return true;
//   } else {
//     array2.push(element);
//     console.log(array2);
//   }
// });
// console.log(fillteredArray);
//kısa versiyon
//Callback function
// let fillteredArray = array.filter((element) => element <= 15);
// console.log(fillteredArray);

//Example: filter the people under 18+

// let array1 = [18, 20, 16, 15, 21];
// let array2 = [16, 17, 14, 15, 19];
// let array3 = [20, 22, 26, 16, 20];

// let filtered1 = array1.filter((element) => element >= 18);
// let filtered2 = array2.filter((element) => element >= 18);
// let filtered3 = array3.filter((element) => element >= 18);

// console.log(filtered1);
// console.log(filtered2);
// console.log(filtered3);
//.filter kullanmadan yap
// let bosArray = []
// for (let i = 0; i <= array1.length; i++) {

//     array1[i] >= 18 ? bosArray.push(array1[i]) : `${array1[i]} these fuckers are underage`;
// }
// console.log(bosArray);

// let array = [1, 2, 3, 4, 5];
// non Mutating method
// Uzun versiyon
// let newArray = array.map((element) => {
//   console.log(element);
//   return null
// });
// Kısa versiyon
// let newArray = array.map((element) => "Hello World");
// console.log(newArray);

//Example : turn each element USD to AUD
// AUD = USD X 1.5

//  

// Uzun versiyon
// let AUD = array.map((element) => {
//  return element * 1.5
// });

// Kısa versiyon
// let AUD = array.map(element =>
//   element * 1.5
// );
// console.log(AUD)
// without using .map method
// let AUD = [];
// for (let i = 0; i < array.length; i++) {
//   AUD.push(array[i] * 1.5);
// }
// console.log(AUD);
