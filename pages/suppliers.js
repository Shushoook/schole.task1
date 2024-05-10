export class Suppliers {
    constructor(page) {
        this.page = page;
        this.title = page.locator('[class $= MuiTypography-h4]');
    }
}