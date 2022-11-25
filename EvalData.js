class EvalData{
    constructor(data){
        this.data = data
        this.steps

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
        }

       
        let numData = new EvalNumberData(arr)
        let result = numData.data[0]
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
   
}