// Your code here
class Polygon {
    constructor(array){
        this.sides= array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((acc, value) => acc + value)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides[0]+this.sides[1] <this.sides[2] || this.sides[1]+this.sides[2] <this.sides[0] || this.sides[0]+this.sides[2] <this.sides[2]){
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
        return (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3])
        } else {
            return false
        }
    }

    get area() {
        if (this.isValid){
            return this.sides[0]**2
        }
    }
}