import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { Header } from '../pages/components/header';
import { SiteBar } from '../pages/components/siteBar';
import { Suppliers } from '../pages/suppliers';

test.describe("Test e2e flows", () => {
    test("Check navigation to suppliers page, after cloosing suppliers option in site bar", async ({ page }) => {
        const login = new LoginPage(page);
        const header = new Header(page);
        const siteBar = new SiteBar(page);
        const suppliers = new Suppliers(page);

        await test.step("Check successful login", async () => {
            await login.goToLoginPage();
            await login.login('buyer2020', 'C@tfo0d!');
            await header.body.waitFor();
        });

        await test.step("Open SideBar", async () => {
            await header.burgerMenu.click();
            await siteBar.body.waitFor();

        });

        await test.step("Choose Suppliers option", async () => {
            await siteBar.suppliersOption.click();
            await suppliers.title.waitFor();
        });

        await test.step("Check the Suppliers section title", async () => {
            await expect(suppliers.title).toHaveText('Suppliers');
        });
    });
});