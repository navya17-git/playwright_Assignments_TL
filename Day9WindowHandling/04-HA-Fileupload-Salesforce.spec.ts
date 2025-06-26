// Home Assignment: File Upload



import { expect, test } from "@playwright/test";
test (`salesforce CreateIndividuals`, async({page}) =>{

    await page.goto("https://login.salesforce.com");

    await page.locator(`#username`).fill(`vidyar@testleaf.com`);
    await page.locator(`//input[@id="password"]`).fill(`Sales@123`);
    await page.locator(`//input[@id="Login"]`).click();

    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.locator(`//button[text()="View All"]`).click();
    await page.locator(`//input[@placeholder="Search apps or items..."]`).fill('Accounts');
    await page.waitForTimeout(3000);
    await page.locator(`//mark[text()="Accounts"]`).click();
    //Click New 
    await page.locator(`//div[text()="New"]`).click();
    // Enter Account Name
     await page.locator(`//input[@name="Name"]`).fill("NavyaN");
    //  Select Warm from the Rating dropdown
     
     await page.locator(`//button[@aria-label="Rating"]`).click();
      await page.waitForTimeout(3000);
      await page.locator(`//span[text()="Warm"]`).click();
    // Select Prospect from the Type dropdown
    await page.locator(`//button[@aria-label="Type"]`).click();
    await page.locator(`//span[text()="Prospect"]`).click();
    // Select Banking from the Industry dropdown
    await page.locator(`//button[@aria-label="Industry"]`).click();
    await page.locator(`//span[text()="Banking"]`).click();
    // Select Public from the Ownership dropdown
     await page.locator(`//button[@aria-label="Ownership"]`).click();
    await page.locator(`(//span[text()="Banking"])[1]`).click();
    // Click Save
    await page.locator(`//button[text()="Save"]`).click();
    //Assert the Account created
    let toastmsg= await page.locator(`//span[@class="toastMessage slds-text-heading--small forceActionsText"]`).innerText();

     expect(toastmsg).toBe("Account NavyaN was created");                        
    
     //await expect(page.locator('h1')).toContainText('Welcome');
     //const element = await page.locator('h1');
     //const textContent = await element.textContent();




   


})