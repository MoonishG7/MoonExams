import { Locator, Page, expect } from "@playwright/test";
import { pageFixture } from "../Utils/pageFixture";

export class LoginPage {
  private Elements = {
    email_loc: '//input[@id = "username"]',
    password_loc: '//input[@id = "password"]',
    signOn_loc: '//input[@value = "Sign In"]',
  };

  async loginCredentialsEmp(empEmail: string, password: string) {
    await pageFixture.page.locator(this.Elements.email_loc).fill(empEmail);
    await pageFixture.page.locator(this.Elements.password_loc).fill(password);
    await pageFixture.page.locator(this.Elements.signOn_loc).click();
  }

  async loginCredentialsMan(managerEmail: string, password: string) {
    await pageFixture.page.locator(this.Elements.email_loc).fill(managerEmail);
    await pageFixture.page.locator(this.Elements.password_loc).fill(password);
    await pageFixture.page.locator(this.Elements.signOn_loc).click();
  }

  async loginCredentialsHR(hrEmail: string, password: string) {
    await pageFixture.page.locator(this.Elements.email_loc).fill(hrEmail);
    await pageFixture.page.locator(this.Elements.password_loc).fill(password);
    await pageFixture.page.locator(this.Elements.signOn_loc).click();
  }
}
