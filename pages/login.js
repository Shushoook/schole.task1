export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_textbox = page.locator('[data-qa=username-field]');
        this.password_textbox = page.locator('[data-qa=password-field]');
        this.login_button = page.locator('[data-qa=login-button]');

    }

    async goToLoginPage(){
        await this.page.goto('https://sushi-14659-anon.k8s.sushi-dev.net/');
    }

   async login(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
   }
}