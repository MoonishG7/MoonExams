import { Given, When, Then } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { pageFixture } from "../Utils/pageFixture";
import { LoginPage } from "../pages/loginPage";
import { Browser } from "webdriverio";

const loginPage = new LoginPage();

         Given('the user in on the Login Page', async function () {
           await pageFixture.page.goto("https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Finbox%2Ftasks%2Fc7f5bf53-0610-11f0-9987-86c9aafb16f7&state=dd75c5fa-7a23-47f9-b9b8-58caa6e854b4&response_mode=fragment&response_type=code&scope=openid&nonce=0303aa16-d59a-4951-8aa0-00c81a44bac1", { waitUntil: "load" });
           
         });

         When('the user fills in the email {string} and password {string}', async function (email, password) {
           // Write code here that turns the phrase above into concrete actions
             await loginPage.loginCredentials(email, password);
         });


         Then('the user should be redirected to the homepage', async function () {
             // Write code here that turns the phrase above into concrete actions
            const currentURL = await browser.getUrl();
             await expect(currentURL).toContain('globalsolutions-reference.gpi-test.globepayroll.net');
         });