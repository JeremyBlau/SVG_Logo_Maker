const { Circle, Triangle, Square } = require("./shapes");

test("Circle should render correctly", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

// Similar tests for Triangle and Square classes