// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum (num) {
//     return function inner(num2) {
//         return num + num2
//     }
// }
//
// console.log(sum(3)(6)(10))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:


// console.log(counter()); // 1
// console.log(counter()); // 2
//  const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
//
// function makeCounter (num) {
//     let cnt = num
//     let methods = {
//
//         increase () {
//             cnt++
//             console.log(cnt)
//             return cnt
//         },
//         decrease() {
//             cnt--
//             console.log(cnt)
//             return cnt
//         },
//         reset () {
//             cnt=0
//             console.log(cnt)
//             return cnt
//         },
//         set(value) {
//             cnt=value
//             console.log(cnt)
//             return cnt
//         }
//     }
//     console.log(cnt)
//     return methods
// }
//
//
//
// const counter = makeCounter(6);
// counter.set(10)
// counter.increase()
// counter.decrease()
// counter.reset()

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:

//
// function superSum (num) {
//     let arr = []
//     if (num === 0) {
//         return 0
//     }
//     function  inner (...args) {
//         arr = [...arr,...args]
//         if (arr.length >= 3) {
//             arr = arr.slice(0,3)
//             return arr.reduce((acc,el) => acc+el)
//         } else {
//             return inner
//         }
//     }
//     return inner
// }
//
// console.log(superSum(0)) //0
// console.log(superSum(3)(2)(5)(3)) //10
// console.log(superSum(3)(2)(5,3)) //10
// console.log(superSum(3)(2,5,3)) //10
// console.log(superSum(3)(2,5)(3)) //10
// console.log(superSum(3)(2,5)(3,9)) //10// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// function sum(num) {
//     let answer = 0
//     for (let i=0;i<= num;i++) {
//         answer += i
//     }
//     return answer
// }

// function sum(num) {
//     if (num === 1)
//         return 1
//     else {
//        return num + sum(num - 1)
//     }
// }

// function sum(num) {
//     return answer = ((1+num) / 2) * num
// }
//
// console.log(sum(3))
// console.log(sum(5))
// console.log(sum(7))

// function fact (num) {
//     // if (num === 1)
//     //     return  1
//     // return num * fact(num-1)
//     return num === 1 ? 1 : num * fact(num - 1)
// }
//
// console.log(fact(3))
// console.log(fact(4))
// console.log(fact(5))
//
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// console.log(fib(5))
// console.log(fib(40))
// console.log(fib(100))

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// function print(list) {
//     let smth = list
//     while (smth) {
//         console.log(smth.value)
//         smth = smth.next
//     }
// }

// function print(list) {
//     if (!list.next) {
//         console.log(list.value)
//     } else {
//         console.log(list.value)
//         return print(list.next)
//     }
// }

// function print(list) {
//
//     if (list.next) {
//         print(list.next)
//     }
//     console.log(list.value)
//
// }
//
// print(list)


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

let arr = [1,[[2,3,4],[5]]]

array_flatten = function flatten (arr) {


    if (Array.isArray(arr)) {
        arr = arr.reduce(function (collector, elm) {

            return collector.concat(flatten(elm));

        }, []);
    }
    return arr;
}
;

console.log(array_flatten(arr))