const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

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

    fs.writeFileSync("logo.svg", svgContent);
    console.log("Generated logo.svg");
}

generateLogo();