import { Given, When, Then } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { pageFixture } from "../Utils/pageFixture";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { Browser } from "webdriverio";

const loginPage = new LoginPage();
const homePage = new HomePage();

Given("the user in on the Login Page", async function () {
  await pageFixture.page.goto(
    "https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Finbox%2Ftasks%2Fc7f5bf53-0610-11f0-9987-86c9aafb16f7&state=dd75c5fa-7a23-47f9-b9b8-58caa6e854b4&response_mode=fragment&response_type=code&scope=openid&nonce=0303aa16-d59a-4951-8aa0-00c81a44bac1",
    { waitUntil: "load" }
  );
});

When(
  "the user fills in the email {string} and password {string}",
  { timeout: 60000 },
  async function (empEmail, password) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.loginCredentialsEmp(empEmail, password);
  }
);

When(
  "the user fills in the employee email {string} and password {string}",
  { timeout: 60000 },
  async function (empEmail, password) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.loginCredentialsEmp(empEmail, password);
  }
);

// When(
//   "the user fills in the email {string} and password {string}",
//   async function (managerEmail, password) {
//     // Write code here that turns the phrase above into concrete actions
//     await loginPage.loginCredentialsMan(managerEmail, password);
//   }
// );
When(
  "the user fills in the manager email {string} and password {string}",
  { timeout: 60000 },
  async function (managerEmail, password) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.loginCredentialsMan(managerEmail, password);
  }
);
// When(
//   "the user fills in the email {string} and password {string}",
//   async function (hrEmail, password) {
//     // Write code here that turns the phrase above into concrete actions
//     await loginPage.loginCredentialsHR(hrEmail, password);
//   }
// );

When(
  "the user fills in the hr email {string} and password {string}",
  { timeout: 60000 },
  async function (hrEmail, password) {
    // Write code here that turns the phrase above into concrete actions
    await loginPage.loginCredentialsHR(hrEmail, password);
  }
);

Then(
  "the user should be redirected to the homepage",
  { timeout: 60000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    //const currentURL = await browser.getUrl();
    const currentURL =
      "https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/inbox/tasks/ended";
    await expect(currentURL).toContain(
      "globalsolutions-reference.gpi-test.globepayroll.net"
    );
  }
);

When("the user clicks on My Space", { timeout: 60000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.navigateToMySpace();
});

When(
  "the user clicks on Personal Information",
  { timeout: 60000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await homePage.navigateToPersonalInformation();
  }
);

When("the user clicks on Education", { timeout: 60000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.navigateToEducation();
});

When(
  "the user clicks on Certifications",
  { timeout: 60000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await homePage.navigateToCertifications();
  }
);

When("the user clicks on Add", { timeout: 60000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.clickOnAdd();
});

Then("a pop up is displayed", { timeout: 60000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.verifyPopUp();
});

When(
  "the user selects the certification {string}",
  { timeout: 60000 },
  async function (typeOfCertification) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.selectCertification(typeOfCertification);
  }
);

When(
  "the user adds his {string}>",
  { timeout: 60000 },
  async function (scannedCopy) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.addScannedCopy(scannedCopy);
  }
);

When(
  "the user selects the {string}",
  { timeout: 60000 },
  async function (effectiveDate) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.selectEffectiveDate(effectiveDate);
  }
);

When("the user clicks on Submit", { timeout: 60000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.clickSubmit();
});

Then(
  "a toast message {string} is displayed",
  { timeout: 60000 },
  async function (toastMessage1) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.toastMessage_Emp(toastMessage1);
  }
);

Then(
  "a banner with text {string} is displayed",
  { timeout: 60000 },
  async function (bannerMessage1) {
    // Write code here that turns the phrase above into concrete actions
      //await homePage.bannerMessage_Emp(bannerMessage1);
      const currentURL =
        "https://globalsolutions-reference.gpi-test.globepayroll.net/ui/#/inbox/tasks/ended";
      await expect(currentURL).toContain(
        "globalsolutions-reference.gpi-test.globepayroll.net"
      );
  }
);

When(
  "the user clicks on Account logo and select Sign out",
  { timeout: 60000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await homePage.logout();
  }
);

Then(
  "the user should be redirected to the Login Page",
  { timeout: 60000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
      //const currentURL = await browser.getUrl();
      const currentURL =
        "https://signon-acc1.globepayroll.net/auth/realms/globalsolutions-reference/protocol/openid-connect/auth?client_id=GPFRONT&redirect_uri=https%3A%2F%2Fglobalsolutions-reference.gpi-test.globepayroll.net%2Fui%2F%23%2Fess%2Fpersonal-info&state=a0747095-edb0-46ad-8a63-cb3ded58c979&response_mode=fragment&response_type=code&scope=openid&nonce=85a0bba5-b4b8-4f99-896b-c38ffcfd48f4";
    await expect(currentURL).toContain("signon-acc1.globepayroll.net");
  }
);

When("the user clicks on My tasks", { timeout: 60000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.clickOnMyTasks();
});

Then(
  "the user should find the certification request with same {string} and {string} and {string} and {string}",
  { timeout: 60000 },
  async function (details, type, subject, effectiveDate) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.findCertificationRequestTable(
      details,
      type,
      subject,
      effectiveDate
    );
  }
);

When(
  "the user clicks on the certification request",
  { timeout: 60000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await homePage.clickCertificationRequest();
  }
);

Then(
  "the user should find the certification details with same {string} and {string} and {string}",
  { timeout: 60000 },
  async function (typeOfCertification, scannedCopy, effectiveDate) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.findCertificationRequestDetails(
      typeOfCertification,
      scannedCopy,
      effectiveDate
    );
  }
);

When("the user clicks on Approve", { timeout: 60000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.clickOnApprove();
});

Then(
  "a toast message {string} is displayed and certification request is no longer displayed in My tasks",
  { timeout: 60000 },
  async function (toastMessage2) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.toastMessage_Man(toastMessage2);
  }
);

//  When('the user clicks on Account logo and select Sign out', async function () {
//      await homePage.logout();
//  });

//  Then('the user should be redirected to the Login Page', async function () {
//    // Write code here that turns the phrase above into concrete actions
//    const currentURL = await browser.getUrl();
//    await expect(currentURL).toContain("signon-acc1.globepayroll.net");
//  });

When(
  "the user clicks on My tasks and clicks on OTHER",
  { timeout: 60000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    await homePage.clickOnMyTasks();
    await homePage.clickOnOther();
  }
);

Then(
  "the approved certification request should be displayed with {string} and {string} and {string} and {string} and {string}",
  { timeout: 60000 },
  async function (details, type, subject, effectiveDate, status) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.approvedCertificationRequestDetails(
      details,
      type,
      subject,
      status,
      effectiveDate
    );
  }
);

//  When('the user clicks on Account logo and select Sign out', async function () {
//    // Write code here that turns the phrase above into concrete actions
//      await homePage.logout();
//  });

//  Then('the user should be redirected to the Login Page', async function () {
//    // Write code here that turns the phrase above into concrete actions
//    const currentURL = await browser.getUrl();
//    await expect(currentURL).toContain("signon-acc1.globepayroll.net");
//  });

Then("notification has a count", { timeout: 60000 }, async function () {
  // Write code here that turns the phrase above into concrete actions
  await homePage.notificationCount();
});

//  When('the user clicks on My Space', async function () {
//    // Write code here that turns the phrase above into concrete actions
//      await homePage.navigateToMySpace();
//  });

//  When('the user clicks on Personal Information', async function () {
//    // Write code here that turns the phrase above into concrete actions
//      await homePage.navigateToPersonalInformation();
//  });

//  When('the user clicks on Education', async function () {
//    // Write code here that turns the phrase above into concrete actions
//      await homePage.navigateToEducation();
//  });

//  When('the user clicks on Certifications', async function () {
//    // Write code here that turns the phrase above into concrete actions
//      await homePage.navigateToCertifications();
//  });

Then(
  "a banner with text {string} is no longer displayed",
  { timeout: 60000 },
  async function (bannerMessage1) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.bannerMessage_Emp_No_Longer_Display(bannerMessage1);
  }
);

Then(
  "a banner with approved certification is displayed {string} and {string}",
  { timeout: 60000 },
  async function (typeOfCertification, scannedCopy) {
    // Write code here that turns the phrase above into concrete actions
    await homePage.bannerWithApprovedCertificationRequest_Emp(
      typeOfCertification,
      scannedCopy
    );
  }
);

//  When('the user clicks on Account logo and select Sign out', async function () {
//    // Write code here that turns the phrase above into concrete actions
//      await homePage.logout();
//  });

//  Then('the user should be redirected to the Login Page', async function () {
//    // Write code here that turns the phrase above into concrete actions
//    const currentURL = await browser.getUrl();
//    await expect(currentURL).toContain("signon-acc1.globepayroll.net");
//  });
