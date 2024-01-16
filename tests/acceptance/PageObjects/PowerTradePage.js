const path = require('path');
const baseUrl = path.dirname(__filename) + '/../../../htmlFile'; // same as __dirname

class PowerTradePage {
    constructor() {
        // this.UOMConversionSelector = `//input[@value="Kw"]`
        this.powerTradeUrl = baseUrl + '/powerTrade_1.html';
        this.companyNameSelector = `//input[@value="KBS Energy"]`
        this.addressSelector = `//input[@name="addr"]`
        this.traderSelector = `//select[@name="trader"]`
        this.tradeDateSelector = `//input[@name="tDate"]`
        this.deliveryDateFromSelector = `input[name="dfDate"]`
        this.deliveryDateToSelector = `//input[@name="dtDate"]`
        this.volumeSelector = `//input[@name="vol"]`
        this.submitButtonSelector = `//input[@value="Submit"]`
    }


    async openForm() {
        await page.goto(this.powerTradeUrl);
    }

    async fillingForm(dataTable) {
        const formDetails = []
        for (const formData of dataTable.raw()) {
            formDetails.push(formData[1])
        }
        await page.fill(this.addressSelector, formDetails[0]);
        await page.locator(this.traderSelector).selectOption(formDetails[1]);
        await page.locator(this.tradeDateSelector).fill(formDetails[2]);
        await page.getByRole('radio').first().check();
        await page.locator(this.deliveryDateFromSelector).fill(formDetails[3]);
        await page.locator(this.deliveryDateToSelector).fill(formDetails[4]);
        await page.locator(this.volumeSelector).fill('100');
        await page.locator('#freq').selectOption('Hourly');
        await page.click(this.submitButtonSelector);
    }

}
module.exports = PowerTradePage