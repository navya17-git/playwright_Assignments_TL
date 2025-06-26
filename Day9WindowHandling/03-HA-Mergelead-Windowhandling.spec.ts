//Assignment Details: Your task is to merge the leads created 
// Precondition: - 
// Launch Chromium in non-headless mode - 
// Use required fixtures - Navigate to http://leaftaps.com/opentaps/control/main

import {test,expect} from "@playwright/test";
test (`Handle multiple browsers create merge lead`, async ({context,page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    //Enter the username
    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
    // Enter the password
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    //Click the Login button. 
    await page.locator(`//input[@class='decorativeSubmit']`).click();

    await page.waitForTimeout(2000);

    //Click CRM/SFA
    await page.locator(`//a[contains(text(),"CRM")]`).click();

    //Click Leads
    await page.locator(`//a[text()="Leads"]`).click();
    await page.waitForTimeout(3000);
    //Click Merge Leads
    await page.locator(`//a[text()="Merge Leads"]`).click();

    //Event Listner for windowhandling

    const [multiplePage] = await Promise.all([context.waitForEvent('page'), page.locator(`(//img[@alt="Lookup"])[1]`).click()]);
    await multiplePage.waitForLoadState('load');
    await multiplePage.waitForTimeout(3000);
    await multiplePage.bringToFront();
    
    await multiplePage.locator(`//div[text()='Lead ID']/following::tr[1]/td[1]//a`).waitFor({state:'visible'});
    await multiplePage.locator(`//div[text()='Lead ID']/following::tr[1]/td[1]//a`).click();

    await multiplePage.close();
    /* const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.locator("(//img[@alt='Lookup'])[1]").click()]); */

   //resolve promise
   //const resolvepromise=await multiplePage

   await page.bringToFront();    
   await page.waitForTimeout(3000);
   
   //Click To Lead widget - - 
    const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//span[text()='To Lead']//following::img`).click()]);
    await newPage.waitForLoadState('load');
    await newPage.waitForTimeout(3000);
    //const resolvepromiseToLead = await newPage
    await newPage.bringToFront();
        //Select the second resulting lead id
    await newPage.locator(`//div[text()='Lead ID']/following::tr[3]/td[1]//a`).waitFor({state:'visible'});
    await newPage.locator(`//div[text()='Lead ID']/following::tr[3]/td[1]//a`).click();
    await newPage.close();
    await page.bringToFront();
    //Click Merge button

    // alert handle
    
    page.on('dialog',(dialog)=>{

        const msg=dialog.message();
        console.log(msg);
        
        const typeofalert=dialog.type();
        console.log(typeofalert);
        dialog.accept();

    })

    
    await page.locator(`//a[text()='Merge']`).click();
    await page.waitForTimeout(3000);
    //Get the message and type of the alert


   await expect(page).toHaveTitle("View Lead | opentaps CRM");
    

    //Click From Lead widget  
    //await page.locator(`(//img[@alt="Lookup"])[1]`).click

})