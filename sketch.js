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
        let data = new EvalData(dataArr).data

        // print.innerHTML = data.writeAnswer()
        // print.innerHTML = data.steps[data.steps.length-1]
        print.innerHTML = data[0].write()
        // stepsLog.innerHTML = data.logSteps()

    }   

    // let dataString = "2+2"
    // console.log(dataString)
    // let dataArr = new PrepareData(dataString).arr
    // let data = new EvalData(dataArr)
    // console.log(data)
    
}

function isEmpty(string){
    let data = string.replace(/\s/g, '')
    if(data == ""){
        return true
    }
    return false
}