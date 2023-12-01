const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf8')

getNumbersFromData(data)
function getNumbersFromData(data) {
   const lines = data.split('\n')
   let total = 0
   let duo = ''
   const reference = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
   }

   const numberArrays = []
    lines.forEach((line) => {
        let newLine = line

        const oneLine = newLine.split('')
        const numbers = []

        for (let i = 0; i < oneLine.length; i++) {
          if (!Number.isNaN(Number(oneLine[i]))) {
             numbers.push(Number(oneLine[i]))
          }
          for(let number in reference) {
              if (oneLine.join('').slice(i).startsWith(reference[number])) {
                numbers.push(number)
            }
          }
            
        }
        numberArrays.push(numbers)
  
    })
    numberArrays.forEach((array) => {
        if(array.length === 0) {
            total += 0
        }
        if (array.length === 1) {
            duo += array[0]
            duo += array[0]
            total += Number(duo)
            duo = ''
        } 
        if (array.length > 1) {
            duo += array[0]
            duo += array.pop()
            total += Number(duo)
            duo = ''
        }
    })
  console.log(total)

}
