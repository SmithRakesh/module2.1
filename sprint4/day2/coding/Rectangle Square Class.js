class Rectangle {
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }

    getRecArea() {
        return this.length * this.breadth
    }

    getSqrArea() {
        return this.length * 4
    }
}

const rec = new Rectangle(15,10)

class Square extends Rectangle {
    constructor(length){
        super(length)
    }
}

const sqr = new Square(28)

console.log(sqr.getSqrArea())
