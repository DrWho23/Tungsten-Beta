let input = document.getElementById("data")
let print = document.getElementById("print")

function main(){
    let dataArr = input.value.split(" ")
    
    eval(dataArr)

    print.innerHTML = dataArr[0]
}

function eval(arr){
    for (let i = 0; i < arr.length; i++){
        
        if(arr[i] == "*"){
            console.log(arr)
            let ans = multiply(arr, i)
            arr.splice(i,i)
            arr.splice(i,i)
            arr[i-1] = ans
            i = 0
            console.log(arr)
        }

        if(arr[i] == "/"){
            console.log(arr)
            let ans = divide(arr, i)
            arr.splice(i,i)
            arr.splice(i,i)
            arr[i-1] = ans
            i = 0
            console.log(arr)
        }
    }

    for (let i = 0; i < arr.length; i++){
        
        if(arr[i] == "+"){
            console.log(arr)
            let ans = add(arr, i)
            arr.splice(i,i)
            arr.splice(i,i)
            arr[i-1] = ans
            i = 0
            console.log(arr)
        }

        if(arr[i] == "-"){
            console.log(arr)
            let ans = subtract(arr, i)
            arr.splice(i,i)
            arr.splice(i,i)
            arr[i-1] = ans
            i = 0
            console.log(arr)
        }
    }
}

function add(arr, i){
    let a = +arr[i-1]
    let b = +arr[i+1]
    return a + b
}

function subtract(arr, i){
    let a = +arr[i-1]
    let b = +arr[i+1]
    return a - b
}

function multiply(arr, i){
    let a = +arr[i-1]
    let b = +arr[i+1]
    return a * b
}

function divide(arr, i){
    let a = +arr[i-1]
    let b = +arr[i+1]
    return a / b
}