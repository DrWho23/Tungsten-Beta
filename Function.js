class Function{

    constructor(name,arr){
        this.type = "Function"
        this.name = name
        this.argument = arr
        this.parseArgument()
    }

    parseArgument(){
        this.argument = new PrepareData(this.argument).arr
    }

    eval(){
        let result
    
        if(this.name == "sqrt"){
            let simplify = eval(this.argument)
            let b = new Num(10)
            result = simplify.multiply(b)
        }
        
        return result
    }


}