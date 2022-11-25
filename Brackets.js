class Brackets{
    constructor(data){
        this.type = "brackets"
        this.data = data
    }

    write(){
        let result = "( " + this.writeRecursive(this.data) + " )"
        console.log(result)
        return result
    }

    writeRecursive(arr){
        let result = ""

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
            let result = this.writeRecursive(arr[indexOfBrackets].data)
            arr[indexOfBrackets] = result
        }
    
        for(let i = 0; i < this.data.length; i++){
            if(typeof arr[i] == "object" && arr[i].type == "num"){
                result += " " + arr[i].write()
            }else{
                result += " " + arr[i]
            }
            
        }
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