class Var{
    constructor(name){
        this.typ = "var"
        this.name = name
        this.coefficient = 1
    }

    write(){
        return this.name
    }
}