class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.isEquilateral;
        this.isIsosceles;
        this.isScalene;
    }

    get isEquilateral() {
        return this.side1 === this.side2 && this.side2 === this.side3;
    }

    get isIsosceles() {
        return this.side1 === this.side2 && this.side1 !== this.side3
            || this.side2 === this.side3 && this.side2 !== this.side1
            || this.side1 === this.side3 && this.side1 !== this.side2;
    }

    get isScalene() {
        return this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3;
    }
}

let equilateralPara = document.getElementById("equilateral");
equilateralPara.textContent = new Triangle(57, 57, 57).isEquilateral;

let isoscelesPara = document.getElementById("isosceles");
isoscelesPara.textContent = new Triangle(57, 57, 157).isIsosceles;

let scalenePara = document.getElementById("scalene");
scalenePara.textContent = new Triangle(57, 60, 157).isScalene;




