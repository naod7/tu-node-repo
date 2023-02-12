
const number = 12

if(number < 12){
    console.log('small number!')
}else{
    console.log('large number!')
}

console.log('my first node app!')

////////////////////////////////////


const names = require('./names')
const greeting = require('./utils')

console.log(names)
greeting('naod')
greeting(names.john)
greeting(names.peter)
//////////////////////////////

// sync file



const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


writeFileSync('./content/result.txt', `Hello this is result ${first}, ${second}`)