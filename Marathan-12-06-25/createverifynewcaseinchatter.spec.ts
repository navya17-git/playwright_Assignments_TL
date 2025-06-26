// Create and verify a New Case in Chatter

   import {expect, test} from "@playwright/test";
   test(`create and verify a New Case in Chatter`, async({page})=>{


   //step2
   await page.goto("https://login.salesforce.com/");

   //Step3
    await page.locator(`#username`).fill(`vidyar@testleaf.com`);
    await page.locator(`//input[@id="password"]`).fill(`Sales@123`);
    await page.locator(`//input[@id="Login"]`).click();
    //step4
    await page.getByTitle("App Launcher",{exact:true}).click();
    //step5
    await page.locator(`//button[text()="View All"]`).click();
    //step6
    await page.locator(`//input[@placeholder="Search apps or items..."]`).fill('Service');
    await page.locator(`(//p[contains(text(),"Manage customer service with accounts")]//preceding::mark[text()='Service'])`).last().click();// doubt 1 of 8 for service?
    //step7
    await page.locator(`//span[text()="Cases"]`).click();
    //step8
    await page.locator(`//div[text()="New"]`).click();
    //step9
    await page.locator(`//input[@placeholder="Search Contacts..."]`).click();
    //step10
    await page.getByTitle("New Contact",{exact:true}).click();
    //step11
    await page.locator(`button[name="salutation"]`).click();
    await page.locator(`//span[text()="Dr."]`).click();
     await page.locator(`//input[@placeholder="First Name"]`).fill("Testleaf");
      await page.locator(`//input[@placeholder="Last Name"]`).fill("Playwright");
     // await page.pause();
      //step12
      await page.waitForTimeout(3000);
      await page.locator(`//button[text()="Save"]`).last().click({timeout:20000,force:true});

      //step13 Click Search Accounts input field in Account Name and click on the New Account link
      //Expected Result: A list menu with New Account link should appear and a form to input details for the new account should display
     // await page.locator(`//div[@class="forceVisualMessageQueue"]`);
 await page.waitForTimeout(3000);
 await page.locator(`//input[@placeholder="Search Accounts..."]`).click();
 await page.locator(`//span[text()="New Account"]`).click();
      //step14

    //  await page.locator(`//a[@title="Accounts"]`).click();
     // await page.locator(`//div[@title="New"]`).click();
      await page.locator(`(//label[text()="Account Name"])[2]//following::input[1]`).fill("Savings")
      await page.locator(`//input[@name="AccountNumber"]`).fill("123456789");
      //step15
      await page.locator(`//button[@aria-label="Rating"]`).click();
      await page.waitForTimeout(3000);
      await page.locator(`//span[text()="Hot"]`).click();
      //step16
      //await page.locator(`//button[@class="slds-button slds-button_brand"]`).click();
      await page.locator(`//button[text()="Save"]`).last().click({timeout:20000,force:true});
     // await page.locator(`//span[text()="Account"]`);//displayed(); // toast message is displayed
      //step17
     /*  await page.locator(`//a[@title="Cases"]`).click();
      await page.locator(`//div[@title="New"]`).click();
      await page.locator(`//button[@aria-label="Status"]`).click();
      await page.locator(`//button[@data-value="New"]`).click(); */
      //step18
      await page.locator(`//button[@aria-label="Priority"]`).click();
      await page.locator(`//span[@title="High"]`).click();
      //step19
      await page.locator(`//button[@aria-label="Case Origin"]`).click();
      await page.locator(`//span[@title="Email"]`).click();
      //step20
      await page.locator(`//input[@name="Subject"]`).fill("Product Return Request");
      await page.locator(`(//textarea[@class="slds-textarea"])[1]`).fill("Requesting a return for a defective product");
      //step21
      await page.locator(`//button[text()="Save"]`).click();
      await page.locator(`//span[@data-aura-class="forceActionsText"]`);//displayed(); //toast message is diplayed
      //step22
      await page.locator(`//button[@title="Edit Status"]`).click();
      // await page.waitForTimeout(3000);

      await page.locator(`//button[@aria-label="Status"]`).click();
       await page.waitForTimeout(3000);
      await page.locator(`//div[@aria-label='Status']//span[@title='Escalated']`).click();
      await page.locator(`//button[@aria-label="Case Origin"]`).click();
      await page.locator(`//span[@title="Email"]`).click();
      //step23
      await page.locator(`//button[text()="Save"]`).click();
      await page.waitForTimeout(3000);
      //step24
      //Step: Enter a valid data in the Share an Update input field and click on the Share button
      //Expected Result: The update should appear under All Updates category
      await page.locator(`//button[@title="Share an update..."]`).click();
      await page.waitForTimeout(3000);
      await page.locator(`//div[@class='messageBodyWrapper']//p`).fill("test");
      await page.locator(`//button[text()="Share"]`).click();
      await page.locator(`//span[text()="Your update was shared."]`); //;displayed(); //toast message is displayed
      await page.locator(`(//span[text()="Just now"]//following::*[local-name()='svg' and @data-key="down"])[1]`).click();
      //await page.locator(`(//span[@class="slds-assistive-text"])[31]`).click(); //doubt how to take xpath
      //await page.locator(`//span[text()="Just now"]).first().click({timeout:20000,force:true}`);
      //step25
      //step: Click on the dropdown icon and choose the Like on Chatter option.
      //Expected Result: A confirmation message ‘Post was liked’ should appear and verify the same.
      await page.locator(`//span[text()='Like on Chatter']`).click();
      let liked= page.locator(`//span[text()="Post was liked."]`)
      await expect(liked).toBeVisible();
       //toat msg displayed
      //step26
      await page.locator(`//span[text()="Chatter"]`).click();
      await page.locator(`text()="(//span[@title="Unlike"])[3]"`);  // appear();

 










})