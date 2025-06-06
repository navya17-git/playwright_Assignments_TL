import {test } from "@playwright/test";

/* test ('launch red bus', async ({page}) => {

await page.goto("");
console.log("Print redbus");    
} ) */



test ('launch flipkart', async ({page}) => {
    

await page.goto("https://www.flipkart.com/");
console.log("Print flipkart");    
} )