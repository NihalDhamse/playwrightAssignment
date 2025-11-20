const BasePage=require('./BasePage');
class LoginPage extends BasePage{
  constructor(page){
    super(page);
    this.username='#user-name';
    this.password='#password';
    this.loginBtn='#login-button';
    this.title='.title';
  }
  async open(){await this.page.goto('https://www.saucedemo.com');}
  async login(u,p){await this.page.fill(this.username,u);await this.page.fill(this.password,p);await this.page.click(this.loginBtn);}
  async getTitle(){return this.page.textContent(this.title);}
}
module.exports=LoginPage;
