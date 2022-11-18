let input = document.getElementById("data")
let print = document.getElementById("print")
let stepsLog = document.getElementById("steps")

function main(){
    let dataString = input.value
    
    if(isEmpty(dataString)){

        print.innerHTML = ""
        stepsLog.innerHTML = ""

    }else{

        let dataArr = new PrepareData(dataString).arr
        let data = new EvalData(dataArr)

        print.innerHTML = data.writeAnswer()
        stepsLog.innerHTML = data.logSteps()

    }    

    // let dataString = "sqrt(9+1)"
    // console.log(dataString)

    // new PrepareData(dataString)
}

function isEmpty(string){
    let data = string.replace(/\s/g, '')
    if(data == ""){
        return true
    }
    return false
}