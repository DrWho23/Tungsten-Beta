function isFunction(name){
    if(typeof name != "string"){
        return false
    }

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

function eval(data){

    for (let i = 0; i < data.length; i++){
        if(data[i].type == "Function"){
            let ans = data[i].eval()
            data[i] = ans
        }
    }

    for (let i = 0; i < data.length; i++){

        if(data[i] == "*"){
            let a = data[i-1]
            let b = data[i+1]
            a.multiply(b)
            let ans = a

            data.splice(i,2)
            data[i-1] = ans
            i = 0
        }

        if(data[i] == "/"){
            let a = data[i-1]
            let b = data[i+1]
            a.divide(b)
            let ans = a

            data.splice(i,2)
            data[i-1] = ans
            i = 0
        }

    }

    for (let i = 0; i < data.length; i++){
        if(data[i] == "+"){
            let a = data[i-1]
            let b = data[i+1]
            a.add(b)
            let ans = a

            data.splice(i,2)
            data[i-1] = ans
            i = 0
        }

        if(data[i] == "-"){
            let a = data[i-1]
            let b = data[i+1]
            a.subtract(b)
            let ans = a

            data.splice(i,2)
            data[i-1] = ans
            i = 0
        }
    }

    return data[0]
}
