class PrepareData{

    constructor(dataString){
        this.arr = []

        this.parseData(dataString)
        this.convertToNums()
    }

    parseData(dataString){
        let removeWhiteSpace = dataString.replace(/\s/g, '')
        this.arr = removeWhiteSpace.split(/(?=[-+*/(),])|(?<=[-+*/(),])/)
    }

    convertToNums(){
        for(let i = 0; i < this.arr.length; i++){
            if(isNaN(this.arr[i]) == false){
                if(this.arr[i-1] == "-"){

                    let number = new Num(+this.arr[i]*-1)
                    this.arr[i] = number

                    if(i > 1 && this.arr[i-2].type == "num"){
                        this.arr[i-1] = "+"
                    }else{
                        this.arr.splice(i-1,1)
                    }
                    i=0
                }else{
                    let number = new Num(+this.arr[i])
                    this.arr[i] = number
                }
                
            }
            
            if(this.arr[i].type == "num"){
                if(this.arr[i-1] == "-"){

                    this.arr[i].multiply(new Num(-1))

                    if(i > 1 && this.arr[i-2].type == "num"){
                        this.arr[i-1] = "+"
                    }else{
                        this.arr.splice(i-1,1)
                    }
                    i=0
                }
                
            }
        }

        //console.log(this.arr)
    }
}