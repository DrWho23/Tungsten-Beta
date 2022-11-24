class EvalData{

    constructor(dataArr){
        this.data = dataArr
        this.steps = []

        this.eval()

    }
    
    eval(){
        let data = this.data
        this.steps.push(this.display())
        console.log("Postup řešení:")
    
        for (let i = 0; i < data.length; i++){
            if(this.isFunction(data[i])){
                let ans = this.evalFunction(data[i])
                data[i] = ans
    
                this.steps.push(this.display())
            }
        }

        for (let i = 0; i < data.length; i++){
            if(data[i].type == "num"){
                if(data[i-1] == "-"){

                    data[i].multiply(new Num(-1))

                    if(i > 1 && data[i-2].type == "num"){
                        data[i-1] = "+"
                    }else{
                        data.splice(i-1,1)
                    }
                    i = 0
                    this.steps.push(this.display())
                }
                
                
            }
        }
    
        for (let i = 0; i < data.length; i++){
    
            if(data[i] == "*"){
                
                let ans = this.multiply(i)
                data.splice(i,2)
                data[i-1] = ans
                i = 0
    
                this.steps.push(this.display())
            }
    
            if(data[i] == "/"){
                let ans = this.divide(i)
                data.splice(i,2)
                data[i-1] = ans
                i = 0
    
                this.steps.push(this.display())
            }
    
        }
    
        for (let i = 0; i < data.length; i++){
            if(data[i] == "+"){
                let ans = this.add(i)
                data.splice(i,2)
                data[i-1] = ans
                i = 0
    
                this.steps.push(this.display())
            }
    
            if(data[i] == "-"){
                let ans = this.subtract(i)
                data.splice(i,2)
                data[i-1] = ans
                i = 0
    
                this.steps.push(this.display())
            }
        }
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

    add(i){
        if( this.data[i-1] == undefined){
            console.error("^+ Invalid expression")
            return null
        }else if( this.data[i+1] == undefined){
            console.error("+^ Invalid expression")
            return null
        }else{
            let a = this.data[i-1]
            let b = this.data[i+1]
            a.add(b)
            return a
        }
    }
    
    subtract(i){
        if( this.data[i-1] == undefined){
            console.error("^- Invalid expression")
            return null
        }else if( this.data[i+1] == undefined){
            console.error("-^ Invalid expression")
            return null
        }else{
            let a = this.data[i-1]
            let b = this.data[i+1]
            a.subtract(b)
            return a
        }
    }

    
    multiply(i){
        if( this.data[i-1] == undefined){
            console.error("^? Invalid expression")
            return null
        }else if( this.data[i+1] == undefined){
            console.error("?^ Invalid expression")
            return null
        }else{
            let a = this.data[i-1]
            let b = this.data[i+1]
            a.multiply(b)
            return a
        } 
    }
    
    divide(i){
        if( this.data[i-1] == undefined){
            console.error("^/ Invalid expression")
            return null
        }else if( this.data[i+1] == undefined){
            console.error("/^ Invalid expression")
            return null
        }else{
            let a = this.data[i-1]
            let b = this.data[i+1]
            a.divide(b)
            return a
        }
    }

    evalFunction(name){
        let data = name.split(/[()]+/)
        let value = data[1]
        let result
    
        if(data[0] == "sqrt"){
            result = Math.sqrt(value)
        }
        if(data[0] == "power"){
            let argument = value.split(",")
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
        
        let toNum = new Num(result)
        return toNum
    }

    isFunction(name){
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