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
        
    }
}