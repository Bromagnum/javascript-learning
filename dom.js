//DOM => Document Object Model 

//1 st method genelde 1. yöntem kullanılır 
//Daha hızlı ve modern bir yöntem olduğu için
// css te olduğu gibi id varsa # class ta .
//  console.log(document.querySelector("#heading"))

//class yada id si yoksa direkt olarak tag elementini de kullanılabilir
// console.log(document.querySelector("h1"))

// Class namei varsa css teki gibi
// console.log(document.querySelector(".heading"))

// 2 nd method it works only element has ID

// console.log(document.getElementById("heading"))


//Chacge contetn / html

// document.querySelector("h1").innerHTML += "ASAP Frontend"

// // Change CSS
// document.querySelector("h1").style.fontSize = "80px  "
// document.querySelector("h1").style.backgroundColor = "red"
// document.querySelector("h1").style.color = "grey"

// function changeButtonToGreen(){
//     document.querySelector("button").style.backgroundColor ="green"
// }

function toogleSideBar(){
    document.querySelector("body").classList.toggle("open")
}