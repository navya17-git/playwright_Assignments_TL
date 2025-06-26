//Test Case Name: Verify Lead Creation and Conversion to Opportunity

import {expect, test} from "@playwright/test";

test(`Verify Lead Creation and Conversion to Opportunity`, async({page})=>{

await page.goto("https://login.salesforce.com/");

   //Step3
    await page.locator(`#username`).fill(`vidyar@testleaf.com`);
    await page.locator(`//input[@id="password"]`).fill(`Sales@123`);
    await page.locator(`//input[@id="Login"]`).click();
    //step4
    await page.getByTitle("App Launcher",{exact:true}).click();
    //step5
    await page.waitForTimeout(6000);
    await page.locator(`//button[text()="View All"]`).click();
    //step6
    await page.locator(`//input[@placeholder="Search apps or items..."]`).fill('Marketing CRM Classic');
    await page.locator(`//mark[text()='Marketing CRM Classic']`).click();
    //step7
    await page.locator(`//span[text()='Leads']`).click();
    //step8
    await page.locator(`//div[@title='New']`).click();
    //step9
    await page.locator(`//button[@aria-label="Salutation"]`).click();
   await page.locator (`//span[text()="Mrs."]`).click();
     await page.locator(`//input[@placeholder="First Name"]`).fill("Navya");
     await page.locator(`//input[@placeholder="Last Name"]`).fill("Nadip");
      await page.locator(`//input[@name="Company"]`).fill("Testleaf");
    //step10
    await page.locator(`//button[text()="Save"]`).click();
    let toastMessage = await page.locator(`//span[contains(@class,"toastMessage")]`).innerText();
    console.log(toastMessage);
    
    

   //step11
    await page.waitForTimeout(6000);
   await page.waitForSelector(`(//span[text()="Show more actions"])[2]`);
  
   await page.locator(`(//span[text()="Show more actions"])[2]`).click();
   await page.locator(`//span[text()="Convert"]`).click();
   //step12
   await page.waitForTimeout(6000);
   await page.locator(`(//button[@class="slds-button transparentButton"])[3]`).click();
   await page.locator(`//span[text()="Opportunity Name"]//following::Input[1]`).fill("Testing");
   await page.locator(`//button[@class="slds-button slds-button_brand"]`).click();
   //ste13
   await page.locator(`//div[@class="title"]`); ///doubt
   //await page.locator(`//h2[text()="Your lead has been converted"]`); doubt
   //step14
   await page.locator(`//button[text()="Go to Leads"]`).click();
   //step15
   //await page.locator(`//input[@name="Lead-search-input"]`).fill("Testing");
   //await page.locator(`//span[text()="No items to display."]`); // doubt
   //step16

   await page.locator(`//span[text()="Opportunities"]`).click();
   await page.locator(`//input[@name="Opportunity-search-input"]`).fill("Testing");
   //step17
   await page.locator(`//input[@name="Opportunity-search-input"]`).press('Enter');
   const oppurtunityname="Testing";
   const locator = page.locator(`(//a[@title='${oppurtunityname}'])[1]`);
   await expect(locator).toBeVisible();
   









    



})