 // Часть задачния из 14 опциональной домашки

import { generatePrimeSync } from "crypto"

interface Item {
    name:string, 
    price:number, 
    quantity:number
    inStock:boolean
}

// написать через reduce позднее
function countItems(items: Item[]) {
   let priceResult = 0
    items.forEach((i) => {
        const itemResultPrice = i.price * i.quantity 
        if(i.inStock || itemResultPrice > 500) {
             priceResult += itemResultPrice
        }
    })
    
    return priceResult
 }



const products = [
    { name: 'A', price: 100, quantity: 2, inStock: true },
    { name: 'B', price: 40, quantity: 5, inStock: false },
    { name: 'C', price: 10, quantity: 1, inStock: true },
    { name: 'D', price: 200, quantity: 3, inStock: false }
];

 console.log(countItems(products))

 // Task 1x
import fs from "fs"
import {readFileSync} from "fs"
const data = readFileSync("/Users/svetlanaderevsikova/QAJ14-onl/HW9/file.json", "utf-8")
const stingObj = JSON.parse(data)

type Role = "QA" | "PM" | "DEVOPS"

interface User {
    id: number,
    username:string,
    role: Role
}

interface ResultObjRoleData {
    count: number,
    users: { id: number, username: string }[]
}

type ResulObj = Record<Role, ResultObjRoleData>

function getRolesDataByUsers (users:User[]) {
    const resultObj: ResulObj = {} as ResulObj
    
    users.forEach((user) => {
        const prevValue = resultObj[user.role]
        console.log('-------------------------')
        console.log('user.role', user.role, prevValue)
        const userData = { id: user.id, username: user.username }

        console.log('count: ', prevValue ? prevValue.count + 1 : 1)
        console.log('users: ', prevValue ? [...prevValue.users, userData] : [userData])

        resultObj[user.role] = {
            count: prevValue ? prevValue.count + 1 : 1,
            users: prevValue ? [...prevValue.users, userData] : [userData]
        }
    }
    )

    return resultObj
} 

getRolesDataByUsers(stingObj)

