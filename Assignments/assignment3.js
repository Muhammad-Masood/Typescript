import inquirer from "inquirer";
//Task 03
async function discount() {
    async function inputs() {
        const inp = await inquirer.prompt([{
                type: 'input',
                name: 'price',
                message: "Input price"
            },
            {
                type: 'input',
                name: 'discount',
                message: "Enter discount %"
            }]);
        if (inp.discount >= 50) {
            console.error("Discount percentage is invalid!");
        }
        else {
            const discAmount = inp.price * (inp.discount / 100);
            const finalPrice = inp.price - discAmount;
            console.log(` Original Price = ${inp.price} \n Discount Percentage = ${inp.discount}%
        \n Discount Amount = ${discAmount} \n Final Price = ${finalPrice} \n`);
        }
    }
    await inputs();
}
discount();
