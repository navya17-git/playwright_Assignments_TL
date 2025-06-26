/*
Assignment Details:
Automate uploading and downloading a file on the web page without interacting with the Upload and Download button.
Preconditions:
- Use page fixture
- Load the URL (https://the-internet.herokuapp.com/upload)
- Load the URL (https://the-internet.herokuapp.com/download)
Assignment Requirements:
File Upload
- Upload a document without clicking the Upload button on the page
- Upload an image inside the red square area
- Assert that the file has been uploaded
File Download
- Download file.json from the list of files
- Assert that the file has been downloaded in the required path
Hints to Solve:
- Use setInputFiles(), fileChooser and waitForEvent() for the respective actions */

import {test} from "@playwright/test";
import path from "path";
test(`file uplaod`, async({page}) =>{

await page.goto(`https://the-internet.herokuapp.com/upload`);

const fileuploadpromise = page.waitForEvent('filechooser');

page.locator(`//div[@id="drag-drop-upload"]`).click();
const fileuploadpromiseresolve = await fileuploadpromise;
await fileuploadpromiseresolve.setFiles("Data/Test1.pdf");
await page.waitForTimeout(3000);


})

//import {test} from "@playwright/test";

 test(`FileDownload`, async({page}) =>{
await page.goto("https://the-internet.herokuapp.com/download");
const filedownloadpromise = page.waitForEvent('download');
//page.locator(`//div[@class="example"]/a[1]`).click();
page.locator(`//a[text()="example.json"]`).click();
const filedowloadpromiseresolve = await filedownloadpromise;
await filedowloadpromiseresolve.saveAs(path.join(__dirname,'../../Data',filedowloadpromiseresolve.suggestedFilename()))   //--? how to download 



})
