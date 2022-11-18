class EvalData{

    constructor(dataArr){
        this.data = dataArr
        this.steps = []

        eval(this.data)

    }

    display(){
        let result = ""
        for(let i = 0; i < this.data.length; i++){
            if(typeof this.data[i] == "object"){
                result += " " + this.data[i].write()
            }else{
                result += " " + this.data[i]
            }
        }
        console.log(result)
        return result
    }

    // evalFunction(name){
    //     let data = name.split(/[()]+/)
    //     let value = data[1]
    //     let result
    
    //     if(data[0] == "sqrt"){
    //         result = Math.sqrt(value)
    //     }
    //     if(data[0] == "power"){
    //         let argument = value.split(",")
    //         let x = +argument[0]
    //         let exponent = +argument[1]
    
    //         result = Math.pow(x, exponent)
    
    //     }
    //     if(data[0] == "sin"){
    //         result = Math.sin(+data[1])
    //     }
    //     if(data[0] == "cos"){
    //         result = Math.cos(+data[1])
    //     }
        
    //     let toNum = new Num(result)
    //     return toNum
    // }

    logSteps(){
        
        let stepString = ""
        for (let i = 0; i < this.steps.length; i++){
           stepString += this.steps[i] + "<br>"
        }
        return stepString
    }

    writeAnswer(){
        let result = this.display()
        if(this.data.length == 1 && this.data[0].b != 1 && typeof this.data[0].b !== "undefined"){
            result += "<br><label class = \"titles\">alternativně</label><br>" + this.data[0].toDecimal()
        }
        return result
    }
}