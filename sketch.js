let input = document.getElementById("data")
let print = document.getElementById("print")
let stepsLog = document.getElementById("steps")

function main(){
    let dataString = input.value

    let dataArr = new PrepareData(dataString).arr
    let data = new EvalData(dataArr)

    print.innerHTML = data.data

    stepsLog.innerHTML = data.logSteps()
    
}