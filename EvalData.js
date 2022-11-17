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
        let a = this.data[i-1]
        let b = this.data[i+1]
        a.add(b)
        return a
    }
    
    subtract(i){
        let a = this.data[i-1]
        let b = this.data[i+1]
        a.subtract(b)
        return a
    }
    
    multiply(i){
        let a = this.data[i-1]
        let b = this.data[i+1]
        a.multiply(b)
        return a
        
    }
    
    divide(i){
        let a = this.data[i-1]
        let b = this.data[i+1]
        a.divide(b)
        return a
    }

    evalFunction(name){
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
}