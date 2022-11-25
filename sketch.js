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
        print.innerHTML = data.steps[data.steps.length-1]

        // print.innerHTML = data.writeAnswer()
        
        // print.innerHTML = data.data[0].write()
        // stepsLog.innerHTML = data.logSteps()

    }   

    // let innerBrackets = [new Num(1), "+", new Num(2)]
    // let br = new Brackets(innerBrackets)
    // br.write()
    
}

function isEmpty(string){
    let data = string.replace(/\s/g, '')
    if(data == ""){
        return true
    }
    return false
}