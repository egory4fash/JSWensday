import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

// let task01 = new Promise((res,rej) =>{
//     console.log("Promise is created")
// })


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let task02 = Promise.resolve("Promise Data").then( (resolve) => {
//     console.log('task02RESULT ' + resolve)
// })
//
// console.log(task02)


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

// let task03 = Promise.reject("Promise Error").catch( (reject) => {
//     console.log('task03RESULT ' + reject)
// })
//
// console.log(task03)
// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

// let task04 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise Data')
//     }, 3000)
// }).then((resolve) => {
//     console.log(resolve)
// })


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

// type testObj = {
//     promise: null | Promise<any>,
//     resolve: null | Function,
//     reject: null | Function,
//     onSuccess: (param: string) => void
//     onError: (param: string) => void
// }
//
// let handlePromise: testObj = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess(param) {
//         console.log(`Promise is resolved with data: ${param}`)
//     },
//     onError(param) {
//         console.log(`Promise is rejected with error: ${param}`)
//     }
// }
//
// export const createHandler = () => {
//     handlePromise.promise = new Promise((res, rej) => {
//         handlePromise.resolve = res;
//         handlePromise.reject = rej;
//     })
//     handlePromise.promise
//         .then(handlePromise.onSuccess)
//         .catch(handlePromise.onError)
// }
// export const resolveHandler = () => {
//     handlePromise.resolve && handlePromise.resolve("yo")
// }
// export const rejectHandler = () => {
//     handlePromise.reject && handlePromise.reject('nope')
// }
//
// //@ts-ignore
// window.testObj = handlePromise


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// const promise = new Promise((res,rej) => {
//     setTimeout( () => {
//         res('My Name Is')
//     },5000)
// })
//
// const onSuccess = (param:any) => {
//     return `${param}  Egor`
// }
// const Print = (param:any) => {
//     console.log(param)
// }
//
// promise.then(onSuccess).then(Print)
// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const name = new Promise((res) => {
    setTimeout(() => {
        res({name: 'Anna'})
    }, 2000)
})
const age = new Promise((res) => {
    setTimeout(() => {
        res({age: 16})
    }, 3000)
})
const city = new Promise((res) => {
    setTimeout(() => {
        res({city: 'Minsk'})
    }, 4000)
})

let person = {}
Promise.all([name, age, city])
    .then((res) => {
        res.map(m => {
            Object.assign(person, m)
        })
    })

console.log(person)


// just a plug
export default () => {
};