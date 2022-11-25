class PrepareData{

    constructor(dataString){
        this.arr = []

        this.parseData(dataString)
        this.convertToNums()
        this.convertToVar()
        this.convertSigns()

        while((this.arr.includes(")") || this.arr.includes("(")) && this.validBracketsInput()){
            this.convertToBracket()
        }

        console.log(this.arr)
    }

    parseData(dataString){
        let removeWhiteSpace = dataString.replace(/\s/g, '')
        this.arr = removeWhiteSpace.split(/(?=[-+*/(),])|(?<=[-+*/(),])/)
    }

    convertToNums(){
        for(let i = 0; i < this.arr.length; i++){
            if(isNaN(this.arr[i]) == false){
                    let number = new Num(+this.arr[i])
                    this.arr[i] = number
                }
                
        }
    }

    convertToVar(){
        for(let i = 0; i < this.arr.length; i++){
            if(typeof this.arr[i] == "string" && this.arr[i].match(/[a-z]/i)){
                let variable = new Var(this.arr[i])
                this.arr[i] = variable
            }
        }
    }

    convertSigns(){
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i].type == "num"){
                if(this.arr[i-1] == "-"){

                    this.arr[i].multiply(new Num(-1))

                    // if(i > 1 && this.arr[i-2].type == "num")
                    if(i > 1 && typeof this.arr[i-2] == "object"){
                        this.arr[i-1] = "+"
                    }else{
                        this.arr.splice(i-1,1)
                    }

                }

                if(this.arr[i-1] == "+"){

                    // if(i > 1 && this.arr[i-2].type == "num")
                    if(i > 1 && typeof this.arr[i-2] == "object"){
                        this.arr[i-1] = "+"
                    }else{
                        this.arr.splice(i-1,1)
                        
                    }
                }
                
            }
        }
    }

    validBracketsInput(){
        let result = false

        let start = -1
        let end = -1

        for(let i=0; i<this.arr.length; i++){
            if(this.arr[i] == "("){
                start = i

                for(let j = i+1; j < this.arr.length; j++){
                    if(this.arr[j] == "("){
                        start = j
                        i = j-1
                        break
                    }

                    if(this.arr[j] == ")"){
                        end = j
                        break
                    }
                }
            }

            if(start >= 0 && end >= 0){
                result = true
                break
            }

        }

        if(start < 0){
            console.error("Cannot find the beginning of a bracket")
            result = false
        }else if(start >= 0 && end < 0){
            console.error("Cannot find the end of a bracket")
            result = false
        }

        
        if(start == end-1){
            console.error("Empty brackets")
            result = false
        }

        return result
    }

    convertToBracket(){

        //Finding indecies of the finst inned bracket
        let start = -1
        let end = -1

        for(let i=0; i<this.arr.length; i++){
            

            if(this.arr[i] == "("){
                start = i

                for(let j = i+1; j < this.arr.length; j++){
                    if(this.arr[j] == "("){
                        start = j
                        i = j-1
                        break
                    }

                    if(this.arr[j] == ")"){
                        end = j
                        break
                    }
                }
            }

            if(start >= 0 && end >= 0){
                break
            }

        }

        if(start < 0){
            console.error("Cannot find the beginning of a bracket")
            return
        }else if(start >= 0 && end < 0){
            console.error("Cannot find the end of a bracket")
            return
        }else{
            // console.log(start + "__" + end)
        }

        //Creating an instance of the Brackets class and modifying this.arr
        let dist = end - start
        let innerExp = this.arr.splice(start+1, dist-1)

        if(innerExp.length == 0){
            console.error("Empty brackets")
            return
        }

        let brackets = new Brackets(innerExp)
        this.arr[start+1] = brackets
        this.arr.splice(start,1)

    }
}