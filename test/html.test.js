const puppeteer = require('puppeteer');

test('renders the index.html correctly', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:///C:/Users/olayi/OneDrive/Documents/Dev%20class/Final%20Project/index.html`);
  

// Example: Check if the title of the page is correct
const title = await page.title();
expect(title).toBe('WestJet')

// Example: Check if a specific element with ID exist
const header = await page.$('header');
expect(header).not.toBeNull;

const heading = await page.$('h1');
expect(heading).not.toBeNull;

const section = await page.$('section');
expect(section).not.toBeNull;

const nav = await page.$('nav');
expect(nav).toBeTruthy();

const div = await page.$('div');
expect(div).toBeTruthy();



//Additional checks can be added based on your HTML contents

await browser.close();
}, 30000)