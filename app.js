//Inch To Feet
// const btn = document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     const inputText = document.getElementById('inputText').value;
//     const inputNumber = parseFloat(inputText);
//     let total = inputNumber / 12;
//     document.getElementById('feetResult').innerText = total;
//     document.getElementById('inputText').value = '';
// });

// Leave Year 
// const btn = document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     const inputText = document.getElementById('inputText').value;
//     const inputNumber = parseFloat(inputText);
//     let result = inputNumber % 4;
//     if(result == 0){
//         document.getElementById('feetResult').innerText =`This Is a Leave Year: ${inputNumber}`, result;
//     }else{
//         document.getElementById('feetResult').innerText =`This Is not a Leave Year: ${inputNumber}`, result;
//     }
    
//     document.getElementById('inputText').value = '';
// });

//factorial Count
// const btn = document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     const inputText = document.getElementById('inputText').value;
//     const inputNumber = parseFloat(inputText);
//      let total = 1;
//     for (let i = 1; i <= inputNumber; i++) {
//         const element = [i];
//         total = total * element;  
//     }
//     document.getElementById('feetResult').innerText = total;
//     document.getElementById('inputText').value = '';
// });

// Recursive Factorial
// const btn = document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     const inputText = document.getElementById('inputText').value;
//     const inputNumber = parseFloat(inputText);
//     document.getElementById('feetResult').innerText = recursiveFactorial(inputNumber);
//     document.getElementById('inputText').value = '';
// });

// const recursiveFactorial = n =>{
//     if(n == 0){
//         return 1;
//     }else{
//         return n * recursiveFactorial(n-1);
//     }
// }

// //Fobinacchi Series
// const btn = document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     const inputText = document.getElementById('inputText').value;
//     const inputNumber = parseFloat(inputText);
//      let fibo = [0,1];
//     for (let i = 2; i <= inputNumber; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2];   
//     }
//     document.getElementById('feetResult').innerText = fibo;
//     document.getElementById('inputText').value = '';
// });

// //Fobinacchi  Recursive Way
// const btn = document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     const inputText = document.getElementById('inputText').value;
//     const inputNumber = parseFloat(inputText);
    
//     document.getElementById('feetResult').innerText = fiboNacchiRecursive(inputNumber);
//     document.getElementById('inputText').value = '';
// });

// function fiboNacchiRecursive(n){
//     if(n == 0){
//         return 0;
//     }
//     else if(n == 1){
//         return 0,1
//     }
//     else{
//         return fiboNacchiRecursive(n-1) + fiboNacchiRecursive(n-2);
//     }
// }

//Fobinacchi  Recursive Series
// const btn = document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     const inputText = document.getElementById('inputText').value;
//     const inputNumber = parseFloat(inputText);
    
//     document.getElementById('feetResult').innerText = fiboNacchiRecursiveSeries(inputNumber);
//     document.getElementById('inputText').value = '';
// });


// function fiboNacchiRecursiveSeries(n){
//     if(n == 0){
//         return [0];
//     }
//     else if(n == 1){
//         return [0,1]
//     }
//     else{
//         let fibo = fiboNacchiRecursiveSeries(n-1);
//         let newElement = fibo[n-1] + fibo[n-2];
//         fibo.push(newElement);
//         return fibo;
//     }
// }

//Check Prime Number
const btn = document.getElementById('btn').addEventListener('click', function (e) {
        e.preventDefault()
        const inputText = document.getElementById('inputText').value;
        const inputNumber = parseFloat(inputText);
        document.getElementById('feetResult').innerText = checkPrime(inputNumber);
        document.getElementById('inputText').value = '';
    });

function checkPrime(n){
    for (let i = 2; i < n; i++) {
        if(n % i == 0){
            return `This Is not a Prime Number: ${n}`
        }
    }
    return `This is a Prime Number: ${n}`
}