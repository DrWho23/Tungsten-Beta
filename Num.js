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

        if(typeof this.a === "undefined" || typeof this.b === "undefined"){
            return undefined
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
        let comDiv = this.gcd(this.a, this.b)

        let tempA = this.a / comDiv
        let tempB = this.b / comDiv

        if(tempB == 0){
            this.a = undefined
            this.b = undefined
        }
        else if(tempA == 0){
            this.a = tempA
            this.b = 1
        }else{
            this.a = tempA
            this.b = tempB
        }
    }

    gcd(x,y){
        x = Math.abs(x);
        y = Math.abs(y);

        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }

    toDecimal(){
        return this.a/this.b
    }
}