export class Header{
    constructor(page){
            this.page = page;
            this.body = page.locator('[data-qa="top-menu"]');
            this.burgerMenu = page.locator('[data-qa="drawer-button"]');
    }
}