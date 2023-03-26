import inquirer from "inquirer";
//Task 04
async function factorial() {
    async function inputNumber() {
        const n = await inquirer.prompt([{
                type: 'input',
                name: 'number',
                message: "Enter number to find factorial"
            }]);
        let numb = n.number;
        for (let i = numb - 1; i != 1; --i) {
            numb *= i;
        }
        console.log(`factorial of ${n.number} = ${numb}`);
    }
    await inputNumber();
}
factorial();
