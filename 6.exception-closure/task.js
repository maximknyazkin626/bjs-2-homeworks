function parseCount(str) {
    if (isNaN(Number.parseFloat(str))) {
        throw new Error ("Невалидное значение");
    } else {
        return Number.parseFloat(str);
    }
}

function validateCount(str) {
    try {
        return parseCount(str);
    } catch (error) {
        return error.message;
    } 
}

class Triangle {
    constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } 
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const areaValue = Math.sqrt( p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(areaValue.toFixed(3));
    } 
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}