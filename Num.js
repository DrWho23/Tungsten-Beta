class Num{

    constructor(a,b){
        this.a
        this.b

        let aString = "" + a
        if(aString.includes(".")){
            this.fractionFromDecimal(aString)
        }else if(b == null){
            this.a = a
            this.b = 1
        }else{
            this.a = a
            this.b = b
        }

        this.simplify()
    }

    write(){
        if(this.b == 1){
            return this.a
        }
        return this.a + "/" + this.b
    }

    multiply(num){
        this.a *= num.a
        this.b *= num.b
        this.simplify()
    }

    divide(num){
        this.a *= num.b
        this.b *= num.a
        this.simplify()
    }

    add(num){
        let a1 = this.a
        let b1 = this.b

        let a2 = num.a
        let b2 = num.b

        let newA1 = a1*b2
        let newB1 = b1*b2

        let newA2 = a2*b1

        this.a = newA1 + newA2
        this.b = newB1

        this.simplify()
    }

    subtract(num){
        let a1 = this.a
        let b1 = this.b

        let a2 = num.a
        let b2 = num.b

        let newA1 = a1*b2
        let newB1 = b1*b2

        let newA2 = a2*b1

        this.a = newA1 - newA2
        this.b = newB1

        this.simplify()
    }

    fractionFromDecimal(a){
        let numArray = a.split(".")
        let decimalPlaces = numArray[1].length

        let up = a.replace(".","")
        let down = "1"

        for(let i = 0; i < decimalPlaces; i++){
            down += "0"
        }

        
        this.a = +up
        this.b = +down
    }

    simplify(){
        let comDiv = 1

        for(let i = 1; i <= this.a; i++){
            if(this.a % i == 0 && this.b % i == 0){
                comDiv = i
            }
        }

        let tempA = this.a / comDiv
        let tempB = this.b / comDiv

        if(tempB == 0){
            this.a = NaN
            this.b = NaN
        }
        else if(tempA == 0){
            this.a = tempA
            this.b = 1
        }
    }
}