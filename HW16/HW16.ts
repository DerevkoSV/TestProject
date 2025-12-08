// Task 2
//Task 2a
// Task 2b

function isValidPassword(password:string) {

    
    const symbolAmount = /^.{8,15}$/.test(password)
    const hasCapital = /[A-Z]/.test(password)
    const hasInteger = /\d/.test(password)
    const hasSpecialCaracter = /[\^!@_$&*()-\+]/.test(password)
    const isdigits = password.match(/\d/g)?.map(Number) || [];
    
     const result = symbolAmount && hasCapital && hasInteger && hasSpecialCaracter


     return  {
        isValid:result,
        digits:isdigits
     }    
}

console.log(isValidPassword("A2@22"))
console.log(isValidPassword("!11123454234"))
console.log(isValidPassword("!@_$A8675689"))
console.log(isValidPassword("!@_$&*()-+"))


// import fs from "fs"
import {readFileSync} from "fs"
const data2 = readFileSync("/Users/svetlanaderevsikova/QAJ14-onl/TestProject/HW16 /file2.json", "utf-8")
const stingObj2 = JSON.parse(data2)
console.log(stingObj2)

function userIsEmail(users: {username:string, name: string, lastname:string, email:string} []) {
const result: Record<string, {email:string, message:string}> = {}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

users.forEach(user => {
   if (!emailRegex.test(user.username)) {
      result[user.username] = {
       email: user.email,
       message: `Hello ${user.name} ${user.lastname}, please update your username "${user.username}" to be a valid email to comply with our new policy.`
      }
    }
})
return result
}
const output = userIsEmail(stingObj2)
console.log(output)
