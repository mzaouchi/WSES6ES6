function Scoope(){

  {
    var a = "Iheb"
    // console.log(a)
  }
  console.log(a)

  return "Hello ES6"
  }
{
  var b = 6
}
console.log(b)
console.log(Scoope())


function Scoope(){

  {
    let a = "Iheb"
    console.log(a)
  }
  // console.log(a)

  return "Hello ES6"
  }

console.log(Scoope())

function Scoope(){

  {
    const a = "Iheb"
    // console.log(a)
  }
  console.log(a)

  return "Hello ES6"
  }

console.log(Scoope())


var a = 5
a = 6
console.log(a)
let b = 7
b = 8
console.log(b)
const c = 9
c = 10

const tab = []
tab[0] = [1, 2, 3, 4, 5]
console.log(tab)
// tab[0] = 9

// console.log(tab)
// tab = 0

const obj = {name : "Alaya", age : 27}

obj.name = "Iheb"

console.log(obj)

obj = 5

// function Somme(a,b){
//   return a+b
// }

// console.log(Somme(1,2.9))

// let Somme=(a,b)=>{
//   return a+b
// }
// let Somme = (a, b) => a + b
// console.log(Somme(1,2))

// let name = "Iheb"


// var Hello=a=> "Hello "+a

// console.log(Hello(name))

// var HelloO=()=> "Hello ES6"

// console.log(HelloO())


var name = 'Salem'
var track = "Fullstack"
// console.log("Hello "+name+" Hammami 
// hammami")

console.log(`Hello ${name} ${track} Hammami 
Hammami
hhhhh
zzzz
sssss
xxx`)

var  nameO = "Mahmoud"
var  aa = 28


((nameO == "Mahmoud") && (aa == 28)) && console.log("Hello") 

// var age = "djeja"

// if(age<=18){
//   console.log("Enfant")
// }else if(age<=60){
//   console.log("Adule")
// }else{
//   console.log("Vieux")
// }

// age <= 18 ? console.log("Enfant") : age <= 60 ? console.log("Adule") : console.log("Vieux") 

// var num = 2

// num % 2 == 0 ? console.log("Paire") : console.log("Impaire")

var name = "Mahmoud"
var age = 28
var a = name == "Mahmoud" && age == "28"
// if(name == "Mahmoud"){
//   console.log("Hello")
// }

age == 28 && name=="Mahmoud" && console.log("Hello") 

const obj = {name : "Alaya" , age : 27, adress : {city : "MT",cp : 8080}}
const abj = { name: "Islem", age: 27, adress: { city: "MT", cp: 8080 } }

// console.log(obj.adress.city)
// console.log(obj.adress.cp)

// const Hello=(a)=> `Hello, my name is ${a.name}, i am ${a.age}
// Im from ${a.adress.city}`

// console.log(Hello(abj))

// const Hello = (a) =>{
//   var {name,age,adress} = a
//   var {city} = adress
//   return `Hello, my name is ${name}, i am ${age}
// Im from ${city}`
// }

// console.log(Hello(obj))

// const Hello=({name,age,adress})=> `Hello, my name is ${name}, i am ${age}
// Im from ${adress.city}`

// console.log(Hello(obj))

var v = [1,2,3,4]
var t = [5,6,7,8]
var z = [] 
// console.log(v+t)

// for(let i = 0;i<v.length;i++){
//   z.push(v[i])
// }

// for (let i = 0; i < t.length; i++) {
//   z.push(t[i])
// }

// console.log(z)

// console.log([...v,...t])

var user = {name :"Alaya",age:27}

// console.log({...user, city:"MT",street :23})

console.log({...user,name:"Mahmoud"})
user = { ...user, name: "Mahmoud" }
console.log(user)

var tab = [1,2,3,4]
var Somme = tab.reduce((alaya, salem) => alaya + salem)
console.log(Somme)

var tab = [1,2,3,4]

console.log(tab.map((el,i,t)=> el %2 == 0 ? el+1 : el ))

// console.log(tab)

var tab = [1,2,3,4]

tab.forEach((el, i, t) => t[i] = el + 1)


console.log(tab)

var tab = [1,2,3,4]

console.log(tab.filter((el,i,t)=> el%2 == 0))

var tab = [1,2,3,4]

console.log(tab.find((el,i,t)=> el == 9))

var tab = [1,2,3,4]

console.log(tab.findIndex((el,i,t)=> el==4))

var tab = [1,4,2,3]

console.log(tab.sort((a,b)=>b-a))

var tab = [1,2,3,4]

console.log(tab.splice(2))


var str = "Iheb*est*gentil"

console.log(str.split('*'))

var tab = ["Iheb","Salem","Islem"]

console.log(tab.join(''))

