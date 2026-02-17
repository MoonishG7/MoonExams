import { Page } from "@playwright/test";

let page: Page;

export const pageFixture = {
  //@ts-ignore
  page: undefined as Page,
};

// pageFixture.page.setDefaultTimeout(30000);
