//Preconditions:
/* - Use page fixture
- Load the URL (https://login.salesforce.com/)
- Enter the username and password
Assignment Requirements:
- Click on the "Learn More” button under Mobile Publisher
- Capture the title of the new window that opens
- Click the ‘Confirm’ button on the page
- Assert the title and url of the page
Hints to Solve:
- Handle the windows using Promise.all and waitForEvent() method */

import {expect,test} from "@playwright/test";
test(`windowhandling`, async ({context,page})=>{

await page.goto("https://login.salesforce.com/");

 await page.fill("#username","vidyar@testleaf.com");
    await page.fill("#password","Sales@123");
    await page.click("#Login");
   const [newPagemobilepublisher]= await Promise.all([context.waitForEvent('page'),page.locator(`//button[text()="Learn More"]`).click()]);
   //const childPageresult= await newPagemobilepublisher.click();
   const newresult=await newPagemobilepublisher.title()
   //await page.locator(`//[text()="You’re being redirected to an external URL. We’re just making sure that’s what you want."]`);
   await newPagemobilepublisher.locator(`//button[text()="Confirm"]`).click();
    expect (newresult).toContain("testleaf");
   


})
