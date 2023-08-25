const { Circle, Triangle, Square } = require("./shapes");

test("Circle should render correctly", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test("Triangle should render correctly", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    expect(triangle.render()).toEqual('<polygon points="150,30 120,150 180,150" fill="red" />');
});

test("Square should render correctly", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect x="80" y="30" width="140" height="140" fill="green" />');
});
