//window handling

import {test} from "@playwright/test";

test.only(`Handling multiple windows in concurrent way`, async ({context, page}) => {

    await page.goto(`https://leafground.com/window.xhtml`);

    const [multiplePage] = await Promise.all([ //run both action pararllely --> waits for pagr open and click
    (context.waitForEvent('page'), 
    page.getByText(`Open Multiple`,{exact:true}).click())]) // as soon as we click this button our event listener should be ready to listen to the click and act accordingly

    /* Option2 :
    const [newPage1, newPage2] = await Promise.all([
        context.waitForEvent('page'),
        context.waitForEvent('page'),
        page.getByText('Open Multiple', { exact: true }).click()
    ]); */
     const allPages = context.pages();

    console.log(allPages.length);    
    await allPages[0].title();

    for(let pg of allPages){
        console.log(page.url());
        console.log(await page.title());
    }
    })
    