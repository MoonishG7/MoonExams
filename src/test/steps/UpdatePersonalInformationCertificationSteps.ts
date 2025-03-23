import { Given, When, Then } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { pageFixture } from "../Utils/pageFixture";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { Browser } from "webdriverio";

const loginPage = new LoginPage();
const homePage = new HomePage();



         When('the user clicks on My Space', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.navigateToMySpace();
         });



         When('the user clicks on Personal Information', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.navigateToPersonalInformation(); 
         });

 

         When('the user clicks on Education', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.navigateToEducation();
         });



         When('the user clicks on Certifications', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.navigateToCertifications();
         });


         When('the user clicks on Add', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.clickOnAdd();
         });



         Then('a pop up is displayed', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.verifyPopUp();
         });


         When('the user selects the certification {string}', async function (typeOfCertification) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.selectCertification(typeOfCertification);
         });



         When('the user adds his {string}>', async function (scannedCopy) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.addScannedCopy(scannedCopy);
         });



         When('the user selects the {string}', async function (effectiveDate) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.selectEffectiveDate(effectiveDate);
         });



         When('the user clicks on Submit', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.clickSubmit();
         });



         Then('a toast message {string} is displayed', async function (toastMessage1) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.toastMessage_Emp(toastMessage1);
         });

 

         Then('a banner with text {string} is displayed', async function (bannerMessage1) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.bannerMessage_Emp(bannerMessage1);
         });



         When('the user clicks on Account logo and select Sign out', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.logout();
         });



         Then('the user should be redirected to the Login Page', async function () {
           // Write code here that turns the phrase above into concrete actions
           const currentURL = await browser.getUrl();
           await expect(currentURL).toContain('signon-acc1.globepayroll.net');
         });


         When('the user clicks on My tasks', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.clickOnMyTasks();
         });

         Then('the user should find the certification request with same {string} and {string} and {string} and {string}', async function (details, type, subject, effectiveDate) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.findCertificationRequestTable(details,type,subject,effectiveDate);
         });


         When('the user clicks on the certification request', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.clickCertificationRequest();
         });



         Then('the user should find the certification details with same {string} and {string} and {string}', async function (typeOfCertification, scannedCopy, effectiveDate) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.findCertificationRequestDetails(typeOfCertification,scannedCopy,effectiveDate);
         });


         When('the user clicks on Approve', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.clickOnApprove();
         });


         Then('a toast message {string} is displayed and certification request is no longer displayed in My tasks', async function (toastMessage2) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.toastMessage_Man(toastMessage2);
         });


         When('the user clicks on Account logo and select Sign out', async function () {
             await homePage.logout();
         });



         Then('the user should be redirected to the Login Page', async function () {
           // Write code here that turns the phrase above into concrete actions
           const currentURL = await browser.getUrl();
           await expect(currentURL).toContain("signon-acc1.globepayroll.net");
         });



         When('the user clicks on My tasks and clicks on OTHER', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.clickOnMyTasks();
             await homePage.clickOnOther();
         });



         Then('the approved certification request should be displayed with {string} and {string} and {string} and {string} and {string}', async function (details, type, subject, effectiveDate, status) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.approvedCertificationRequestDetails(details, type, subject, status, effectiveDate);
         });



         When('the user clicks on Account logo and select Sign out', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.logout();
         });



         Then('the user should be redirected to the Login Page', async function () {
           // Write code here that turns the phrase above into concrete actions
           const currentURL = await browser.getUrl();
           await expect(currentURL).toContain("signon-acc1.globepayroll.net");
         });



         Then('notification has a count', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.notificationCount();
         });

 

         When('the user clicks on My Space', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.navigateToMySpace();
         });



         When('the user clicks on Personal Information', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.navigateToPersonalInformation();
         });



         When('the user clicks on Education', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.navigateToEducation();
         });


         When('the user clicks on Certifications', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.navigateToCertifications();
         });



         Then('a banner with text {string} is no longer displayed', async function (bannerMessage1) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.bannerMessage_Emp_No_Longer_Display(bannerMessage1);
         });



         Then('a banner with approved certification is displayed {string} and {string}', async function (typeOfCertification, scannedCopy) {
           // Write code here that turns the phrase above into concrete actions
             await homePage.bannerWithApprovedCertificationRequest_Emp(typeOfCertification,scannedCopy);
         });



         When('the user clicks on Account logo and select Sign out', async function () {
           // Write code here that turns the phrase above into concrete actions
             await homePage.logout();
         });



         Then('the user should be redirected to the Login Page', async function () {
           // Write code here that turns the phrase above into concrete actions
           const currentURL = await browser.getUrl();
           await expect(currentURL).toContain("signon-acc1.globepayroll.net");
         });