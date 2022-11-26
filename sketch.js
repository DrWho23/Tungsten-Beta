let input = document.getElementById("data")
let print = document.getElementById("print")
let stepsLog = document.getElementById("steps")

//Taby
let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button")
let tabPanels = document.querySelectorAll(".tabContainer .tbaPanel")

function showPanel(panelIndex){
    tabButtons.forEach(function(node){
        node.style.backgroundColor = ""
        node.style.color = ""
    })
    tabButtons[panelIndex].style.color = "#c1b4b4"
    tabButtons[panelIndex].style.backgroundColor = "#181818"
    
    tabPanels.forEach(function(node){
        node.style.display = "none"
    })
    tabPanels[panelIndex].style.display = "block"
}
showPanel(0)
////

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