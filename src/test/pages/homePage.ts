import { Locator, Page, expect } from "@playwright/test";
import { pageFixture } from "../Utils/pageFixture";

export class HomePage {
  private Elements = {
    email_loc: '//input[@id = "username"]]',
    password_loc: '//input[@id = "password"]',
  };

  async loginCredentials(email: string, password: string) {
    await pageFixture.page.locator(this.Elements.email_loc).fill(email);
    await pageFixture.page.locator(this.Elements.password_loc).fill(password);
  }
}
