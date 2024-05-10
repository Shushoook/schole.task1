export class SiteBar {
    constructor(page) {
        this.page = page;
        this.body = page.locator('div[class$=MuiDrawer-paperAnchorLeft]');
        this.suppliersOption = page.locator('[data-qa="suppliers-link"]');

    }
}