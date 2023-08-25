class Shape {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // To be implemented by child classes
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,30 120,150 180,150" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="80" y="30" width="140" height="140" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };