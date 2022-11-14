let input = document.getElementById("data")
let print = document.getElementById("print")
let stepsLog = document.getElementById("steps")

function main(){
    let dataArr = input.value.split(" ")
    
    
    let steps = eval(dataArr)
    print.innerHTML = dataArr[0]

    let stepString = ""
    for (let i = 0; i < steps.length; i++){
        stepString += steps[i] + "<br>"
    }
    stepsLog.innerHTML = stepString
}

function eval(arr){
    let steps = []

    console.log("Postup řešení:")
    steps.push(display(arr))

    for (let i = 0; i < arr.length; i++){
        if(isFunction(arr[i])){
            let ans = evalFunction(arr[i])
            arr[i] = ""+ans

            steps.push(display(arr))
        }
    }

    for (let i = 0; i < arr.length; i++){

        if(arr[i] == "*"){
            let ans = multiply(arr, i)
            arr.splice(i,i)
            arr.splice(i,i)
            arr[i-1] = ans
            i = 0

            steps.push(display(arr))
        }

        if(arr[i] == "/"){
            let ans = divide(arr, i)
            arr.splice(i,i)
            arr.splice(i,i)
            arr[i-1] = ans
            i = 0

            steps.push(display(arr))
        }

    }

    for (let i = 0; i < arr.length; i++){
        if(arr[i] == "+"){
            let ans = add(arr, i)
            arr.splice(i,i)
            arr.splice(i,i)
            arr[i-1] = ans
            i = 0

            steps.push(display(arr))
        }

        if(arr[i] == "-"){
            let ans = subtract(arr, i)
            arr.splice(i,i)
            arr.splice(i,i)
            arr[i-1] = ans
            i = 0

            steps.push(display(arr))
        }
    }

    return steps
}

function display(arr){
    let result = ""
    for(let i = 0; i < arr.length; i++){
        result += " " + arr[i]
    }
    console.log(result)
    return result
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

function isFunction(name){
    let data = name.split(/[()]+/)

    if(data[0] == "sqrt"){
        return true
    }
    if(data[0] == "power"){
        return true
    }
    if(data[0] == "sin"){
        return true
    }
    if(data[0] == "cos"){
        return true
    }

    return false
}

function evalFunction(name){
    let data = name.split(/[()]+/)
    let value = data[1]
    let result

    if(data[0] == "sqrt"){
        result = Math.sqrt(value)
    }
    if(data[0] == "power"){
        argument = data[1].split(",")
        let x = +argument[0]
        let exponent = +argument[1]

        result = Math.pow(x, exponent)

    }
    if(data[0] == "sin"){
        result = Math.sin(+data[1])
    }
    if(data[0] == "cos"){
        result = Math.cos(+data[1])
    }

    return result
}