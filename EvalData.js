class EvalData{
    constructor(data){
        this.data = data
        this.steps = []

        this.eval(data)

        console.log(data)
    }

    eval(arr){
        while(this.containsBrackets(arr)){
            let indexOfBrackets = -1
            for(let i = 0; i < arr.length; i++){
                if(arr[i].type == "brackets"){
                    indexOfBrackets = i
                    break
                }
            }
            if(indexOfBrackets == -1){
                console.error("Something went wrong")
                return
            }
            let result = this.eval(arr[indexOfBrackets].data)
            arr[indexOfBrackets] = result
            this.steps.push(this.display(this.data))
        }

       
        let numData = new EvalNumberData(arr)
        let result = numData.data[0]
        this.steps.push(this.display(this.data))
        return result
    }

    containsBrackets(arr){
        let result = false
        for(let i=0; i<arr.length; i++){
            if(arr[i].type == "brackets"){
                result = true
            }
        }
        return result
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

    logSteps(){
        
        let stepString = ""
        for (let i = 0; i < this.steps.length; i++){
           stepString += this.steps[i] + "<br>"
        }
        return stepString
    }
   
}