class PrepareData{

    constructor(dataString){
        this.arr = []

        this.parseData(dataString)
        this.convertToNums()
    }

    parseData(dataString){
        let removeWhiteSpace = dataString.replace(/\s/g, '')
        this.arr = removeWhiteSpace.split(/([- + * /])/)
    }

    convertToNums(){
        for(let i = 0; i < this.arr.length; i++){
            if(isNaN(this.arr[i]) == false){
                let number = new Num(+this.arr[i])
                this.arr[i] = number
            }
        }

        console.log(this.arr)
    }
}