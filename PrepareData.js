class PrepareData{

    constructor(dataString){
        this.arr = []

        if(typeof dataString === 'string'){
            this.parseData(dataString)
        }else{
            this.arr = dataString
        }
        
        this.convertToNums()
        this.convertToFunctions()

        console.log(this.arr)
    }

    parseData(dataString){
        let removeWhiteSpace = dataString.replace(/\s/g, '')
        //this.arr = removeWhiteSpace.split(/([- + * / ( )])/)
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

    convertToFunctions(){

        for(let i = 0; i < this.arr.length; i++){
            if(isFunction(this.arr[i])){
                let start = i+1
                let end = -1

                let count = 1
                for(let j = start; j < this.arr.length; j++){
                    if(this.arr[j] == "("){
                        count++
                    }

                    if(this.arr[j] == ")" && count != 1){
                        count--
                    }

                    if(count == 1 && this.arr[j] == ")"){
                        end = j
                        break
                    }
                }

                console.log(start + " " + end)

                let interval = end - start
                let part = this.arr.splice(start+1, interval-1)
                console.log(part)


                let fun = new Function(this.arr[i],part)
                this.arr[i] = fun
                this.arr.splice(start,2)

            }
        }

        
    }
}