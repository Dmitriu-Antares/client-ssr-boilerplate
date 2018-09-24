import { renderClient } from '../server/ssr-helper/helpers'
import App from './containers/App/App'
//import serverStyleCleanup from 'node-style-loader/clientCleanup'

renderClient(App)
const factorial = (num, acc = num ) => num > 1 ? factorial(num-1, acc * (num-1)) : acc
const fib = (num) => num > 2 ? fib(num-1) + fib(num-2) : 1
const def = x => typeof x !== 'undefined'
const isArray = x => Array.isArray(x)


const concat = ([x, ...xs]) => def(x)
    ? isArray(x)
        ? [...concat(x), ...concat(xs)]
        : [x, ...concat(xs)]
    : []
const swap = (arr, b, e) => {
    const beg = arr[b], end = arr[e]
    arr.map((a, i) => {
        if(i === b) arr[e] = beg
        if(i === e) arr[b] = end
    })
    return arr
}
const map = ([x, ...xs], fn) => def(x) ? [fn(x), ...map(xs, fn)]: []

//serverStyleCleanup()
//console.log(concat([1, [2, 2, [3]]]))
//console.log(swap([1,2,3,4], 0, 3))
console.log(map([1,2,3], x => x * 2))


