const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

const examples = {
    Circle: "examples/circle.svg",
    Triangle: "examples/triangle.svg",
    Square: "examples/square.svg"
};

async function generateLogo() {
    const shapeChoices = ["Circle", "Triangle", "Square"];
    const userInput = await inquirer.prompt([
        { name: "text", message: "Enter up to three characters:" },
        { name: "textColor", message: "Enter text color (keyword or hex):" },
        { name: "shapeChoice", message: "Choose a shape:", type: "list", choices: shapeChoices },
        { name: "shapeColor", message: "Enter shape color (keyword or hex):" },
    ]);

    const shape = userInput.shapeChoice === "Circle"
        ? new Circle()
        : userInput.shapeChoice === "Triangle"
            ? new Triangle()
            : new Square();

    shape.setColor(userInput.shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="100" font-size="24" fill="${userInput.textColor}" text-anchor="middle">${userInput.text}</text>
</svg>
`;

    const exampleFilePath = examples[userInput.shapeChoice];
    const logoFilePath = "logo.svg";
    fs.writeFileSync(exampleFilePath, svgContent);
    fs.writeFileSync(logoFilePath, svgContent);

    console.log(`Generated ${userInput.shapeChoice} example: ${exampleFilePath}`);
    console.log(`Generated logo: ${logoFilePath}`);
}

generateLogo();
