const { expect } = require("playwright/test");
class PowerTradePage {
    constructor() {
        // this.UOMConversionSelector = `//input[@value="Kw"]`
        this.baseUrl = `${process.cwd()}` + `/htmlFIle`;
        this.powerTradeUrl = this.baseUrl + '/powerTrade_1.html';
        this.companyNameSelector = `//input[@value="KBS Energy"]`;
        this.addressSelector = `//input[@name="addr"]`;
        this.traderSelector = `//select[@name="trader"]`;
        this.tradeDateSelector = `//input[@name="tDate"]`;
        this.deliveryDateFromSelector = `input[name="dfDate"]`;
        this.deliveryDateToSelector = `//input[@name="dtDate"]`;
        this.volumeSelector = `//input[@name="vol"]`;
        this.submitButtonSelector = `//input[@value="Submit"]`;
    }


    async openForm() {
        await page.goto(this.powerTradeUrl);
    }

    async fillingForm(dataTable) {
        const formDetails = [];
        for (const formData of dataTable.raw()) {
            formDetails.push(formData[1])
        }
        await page.fill(this.addressSelector, formDetails[0]);
        await page.locator(this.traderSelector).selectOption(formDetails[1]);
        await page.locator(this.tradeDateSelector).fill(formDetails[2]);
        await page.getByRole('radio').first().check();
        await page.locator(this.deliveryDateFromSelector).fill(formDetails[3]);
        await page.locator(this.deliveryDateToSelector).fill(formDetails[4]);
        await page.locator(this.volumeSelector).fill(formDetails[6]);
        await page.locator('#freq').selectOption('Hourly');
        await page.click(this.submitButtonSelector);
    }
    async verifyAllFieldsEmpty() {
        // Get the values of each field using page.$eval
        const address = await page.$eval(this.addressSelector, el => el.value);
        const trader = await page.$eval(this.traderSelector, el => el.value);
        const tradeDate = await page.$eval(this.tradeDateSelector, el => el.value);
        const deliveryDateFrom = await page.$eval(this.deliveryDateFromSelector, el => el.value);
        const deliveryDateTo = await page.$eval(this.deliveryDateToSelector, el => el.value);
        const volume = await page.$eval(this.volumeSelector, el => el.value);
        const frequency = await page.$eval('#freq', el => el.value);
        // Check if all fields are empty
        expect(address).toBe('');
        expect(trader).toBe('');
        expect(tradeDate).toBe('');
        expect(deliveryDateFrom).toBe('');
        expect(deliveryDateTo).toBe('');
        expect(volume).toBe('');
        expect(frequency).toBe('');
    }
}
module.exports = PowerTradePage;