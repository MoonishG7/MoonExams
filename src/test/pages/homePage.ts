import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { pageFixture } from "../Utils/pageFixture";

export class HomePage {
  private Elements = {
    certificationType_loc: '//ng-select[@test-id="CertificationType"]',
    scannedCopy_loc: '//input[@test-id="CertificationScannedCopy"]',
    effectiveDate_loc: '//input[@placeholder="YYYY-MM-DD"]',
    accountLogo_loc: '//span[@class="nav-link dropdown-toggle clear"]',
    approveButton_loc: '//button[@test-id="Approve"]',
    otherButton_loc: '//button[@class="btn btn-sm m-l-sm workflow-other"]',
  };

  async navigateToMySpace() {
    await pageFixture.page.getByLabel("My space").click();
  }
  async navigateToPersonalInformation() {
    await pageFixture.page.getByLabel("Personal Information").click();
  }
  async navigateToEducation() {
    await pageFixture.page.getByLabel("Education").click();
  }
  async navigateToCertifications() {
    await pageFixture.page.getByLabel("Certifications").click();
  }

  async clickOnAdd() {
    await pageFixture.page.getByLabel("Add").click();
  }

  async verifyPopUp() {
    await expect(pageFixture.page.getByLabel("Certifications")).toHaveText(
      "Certifications"
    );
  }

  async selectCertification(typeOfCertification: string) {
    await pageFixture.page
      .locator(this.Elements.certificationType_loc)
      .first()
      .click();
    await pageFixture.page
      .getByRole("link", { name: `${typeOfCertification}` })
      .click();
    //await pageFixture.page.getByLabel(typeOfCertification).click();
  }

  async addScannedCopy(scannedCopy: string) {
    await pageFixture.page.locator(this.Elements.scannedCopy_loc).click();
    await pageFixture.page
      .locator(this.Elements.scannedCopy_loc)
      .setInputFiles("certification_1.jpg");
  }

  async selectEffectiveDate(effectiveDate: string) {
    //2025-03-22
    await pageFixture.page
      .locator(this.Elements.effectiveDate_loc)
      .fill(effectiveDate);
  }

  async clickSubmit() {
    await pageFixture.page.getByRole("button", { name: "Submit" }).click();
  }

  async toastMessage_Emp(toastMessage1: string) {
    //"Your request was recorded.";
    await expect(pageFixture.page.locator("#toast-container")).toContainText(
      toastMessage1
    );
  }

  async bannerMessage_Emp(bannerMessage1: string) {
    //"Your request is in the process of being validated."
    await expect(pageFixture.page.locator("gp-contract-data")).toHaveText(
      bannerMessage1
    );
  }
  async logout() {
    await pageFixture.page.locator(this.Elements.accountLogo_loc).click();
    await pageFixture.page.getByText("Sign out").click();
  }
  // const currentURL = await browser.getUrl();
  // await expect(currentURL).toContain('signon-acc1.globepayroll.net');

  async clickOnMyTasks() {
    await pageFixture.page.getByLabel(" My tasks ").click();

    const firstCell = await $$("#table thead tbody tr td"); // Adjust the selector based on your table's structure
    const firstCellText = await firstCell[0].getText();
    const SecondCellText = await firstCell[1].getText();
    await expect(firstCellText).toContain("Update personal info");
    await expect(SecondCellText).toContain("Certifications");
  }

  async findCertificationRequestTable(
    details: string,
    type: string,
    subject: string,
    effectiveDate: string
  ) {
    const firstCell = await $$("#table thead tbody tr td"); // Adjust the selector based on your table's structure
    const typeCellText = await firstCell[0].getText();
    const detailsCellText = await firstCell[1].getText();
    const subjectCellText = await firstCell[3].getText();
    const effectiveDateCellText = await firstCell[5].getText();
    await expect(typeCellText).toContain(type);
    await expect(detailsCellText).toContain(details);
    await expect(subjectCellText).toContain(subject);
    await expect(effectiveDateCellText).toContain(effectiveDate);
  }

  async clickCertificationRequest() {
    const firstCell = await $$("#table thead tbody tr td"); // Adjust the selector based on your table's structure
    await firstCell[0].click(); // Click the first cell
  }

  async findCertificationRequestDetails(
    typeOfCertification: string,
    scannedCopy: string,
    effectiveDate: string
  ) {
    expect(
      pageFixture.page.locator(
        '//div[@test-id="Type of certification"]//child::span'
      )
    ).toContainText(typeOfCertification);

    expect(
      pageFixture.page.locator('//div[@test-id="Scanned copy"]//child::span')
    ).toContainText(scannedCopy);

    //const paragraph = await pageFixture.page.locator("#gp-taskDescription"); // Replace with the correct selector for your paragraph
    //const paragraphText = await paragraph.getText();

    expect(pageFixture.page.locator("#gp-taskDescription")).toContainText(
      effectiveDate
    );
  }

  async clickOnApprove() {
    await pageFixture.page.locator(this.Elements.approveButton_loc).click();
  }

  async toastMessage_Man(toastMessage2: string) {
    //'You successfully completed the task.';
    await expect(pageFixture.page.locator("#toast-container")).toContainText(
      toastMessage2
    );

    const firstCell = await $$("#table thead tbody tr td"); // Adjust the selector based on your table's structure
    const typeCellText = await firstCell[0].getText();
    const detailsCellText = await firstCell[1].getText();
    const subjectCellText = await firstCell[2].getText();
    const effectiveDateCellText = await firstCell[3].getText();
    await expect(typeCellText).not.toBeTruthy();
    await expect(detailsCellText).not.toBeTruthy();
    await expect(subjectCellText).not.toBeTruthy();
    await expect(effectiveDateCellText).not.toBeTruthy();
  }

  async clickOnOther() {
    await pageFixture.page.locator(this.Elements.otherButton_loc).click();
  }

    async approvedCertificationRequestDetails(details: string, type: string, subject: string, effectiveDate: string, status: string) {
      
    const firstCell = await $$("#table thead tbody tr td"); // Adjust the selector based on your table's structure
    const typeCellText = await firstCell[0].getText();
    const detailsCellText = await firstCell[1].getText();
        const subjectCellText = await firstCell[3].getText();
        const statusCellText = await firstCell[4].getText();
    const effectiveDateCellText = await firstCell[6].getText();
    await expect(typeCellText).toContain(type);
    await expect(detailsCellText).toContain(details);
        await expect(subjectCellText).toContain(subject);
        await expect(statusCellText).toContain(status);
    await expect(effectiveDateCellText).toContain(effectiveDate);
  }
  
    async notificationCount() {
        await expect(pageFixture.page.locator("gp-navbar")).toContainText("1");
    }

    async bannerMessage_Emp_No_Longer_Display(bannerMessage1: string) {
        //"Your request is in the process of being validated."
        await expect(pageFixture.page.locator("gp-contract-data")).not.toHaveText(
            bannerMessage1
        );
    }

    async bannerWithApprovedCertificationRequest_Emp(typeOfCertification: string,scannedCopy: string) { 
        await expect(pageFixture.page.locator('gp-contract-data')).toContainText(typeOfCertification);
  await expect(pageFixture.page.locator('gp-contract-data')).toContainText(scannedCopy);
    }


  //   async clickSubmit() {}
  //   async clickSubmit() {}
  //   async clickSubmit() {}
  //   async clickSubmit() {}
}
