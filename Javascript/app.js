// // let name = prompt("whats your name")
// // alert(name)

// let a = "3"
// let b = "8"

// let tmp = a
// a = b
// b = tmp

// alert(`a = ${a}, b = ${b}`)

//namngivning
// 1. relevant och mwnignsfulla
// 2. inte reseverade nyckelord
// 3. inte börja på siffra
// 4. inte inehålla mellanslag
// 5. enbart bokstäver siffror och underscore och dollar
// 6. använd camelCase

// var hela programmet, let inom scope


// let message = "hello"
// let myName = "joel"

// alert(message + " " + myName)
// alert(myName.length)

// let message = prompt("Enter message:")
// let length = message.length
// alert(`Messasge length: ${length} characters left: ${length < 140 ? 140 - length : length > 140 ? 'to many characters!' : 'no characters left'}`)


// let myName = "Joel blomberg"
// alert(myName.slice(0,1))
// alert(myName.slice(1,4))

// let message = prompt("Enter message:")
// let length = message.length
// alert(message.slice(0,140))

// let myName = "Joel blomberg"
// let upperName = myName.toUpperCase()
// alert(upperName)


// let yourName = prompt("Enter name:")
// yourName = yourName.slice(0, 1).toUpperCase() + yourName.slice(1, yourName.length).toLowerCase()
// alert(`Hello ${yourName}!`)

// let a = 3 + 3
// let b = 4 - 4
// let c = 6 / 2
// let d = 6 * 2
// let e = 15 % 6
// let f = 3 + (5 * 2)
// let x = a + 3
// x++
// ++x

// let humanAge = prompt("Dog's age in human years:")
// let dogAge = ((humanAge - 2) * 4) + 21
// alert(`Dog age: ${dogAge}`)


// function getMilk()
// {
//     console.log("leaveHouse")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("BuyMilk")
//     console.log("moveLeft")
//     console.log("moveLeft")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveLeft")
//     console.log("moveLeft")
//     console.log("enterHouse")
// }

// getMilk()

// function getMilk(numBottles)
// {
//     console.log("leaveHouse")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveRight")
//     console.log("moveRight")
//     for(let i = 0; i < numBottles; i++) 
//     {
//         console.log("BuyMilk")
//     }
//     console.log("moveLeft")
//     console.log("moveLeft")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveLeft")
//     console.log("moveLeft")
//     console.log("enterHouse")
// }

// getMilk(5)

// function add(a, b)
// {
//     return a + b
// }

// console.log(add(2, 4))
// var costOfMilk = 21
// function getMilk(money)
// {
//     console.log("leaveHouse")
//     console.log("moveRight")
//     console.log("moveRight")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveUp")
//     console.log("moveRight")
//     console.log("moveRight")
//     let budget = Math.floor(money / costOfMilk)
//     if(budget > 0)
//     {
//         console.log(`Buy ${budget} bottle${budget > 1 ? 's' : ''} of Milk`)    
//     }
//     else 
//     {
//         console.log("not enough money, Got kicked out of the store")
//     }
//     console.log("moveLeft")
//     console.log("moveLeft")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveDown")
//     console.log("moveLeft")
//     console.log("moveLeft")
//     console.log("enterHouse")

//     return money % costOfMilk
// }

// let money = prompt("money?")
// changes = getMilk(money)
// console.log(changes)



let age = prompt("age?")
let now = new Date()
let birthYear = new Date(now.setFullYear(now.getFullYear() - age))
let deathYear = new Date(birthYear.setFullYear(birthYear.getFullYear() + 90))
console.log(deathYear)



// let userAge = prompt("age?")

// function lifeInWeeks(age)
// {
//     let yearsRemaining = 90 - age
//     let daysRemaining = yearsRemaining * 365
//     let weeksRemaning = yearsRemaining * 52
//     let monthRemaining = yearsRemaining * 12

//     console.log(yearsRemaining)
//     console.log(monthRemaining)
//     console.log(weeksRemaning)
//     console.log(daysRemaining)
// }

// lifeInWeeks(userAge)