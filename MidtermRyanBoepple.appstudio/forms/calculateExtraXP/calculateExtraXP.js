/*function calcAvgSquare(num1, num2, num3) {
   return  ((num1 + num2 + num3)/3) * num1 * num1
}
function randomMultiply(num4, num5) {
   return  num4 * num5
}
functionWanted=prompt('Please enter "a" for an average function or "b" for a random multiply function.') 

switch(functionWanted) {

case 'a':
  let num1=Number(prompt('Please enter your first number.'))
  let num2=Number(prompt('Please enter your second number.'))
  let num3=Number(prompt('Please enter your third number.'))
  let avgSquare=calcAvgSquare(num1, num2, num3)
  alert(`The result of the function was ${avgSquare}.`)
break
case 'b':
  let num4=Number(prompt('Please enter your first number (your second number will be randomly generated between 1 and 10).'))
  let num5=Math.floor(Math.random() * 10)
  let randomAnswer=randomMultiply(num4,num5)
  alert(`The result of the function was ${randomAnswer}.`)
break
default:
  alert('Please enter "a" or "b" to call a function.')
}*/