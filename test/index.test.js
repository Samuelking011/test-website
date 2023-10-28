const puppeteer = require('puppeteer');

describe('Full HTML Page Test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Title is correct', async () => {
        await page.goto('file://C:/Users/olayi/OneDrive/Documents/Dev class/Final Project/index.html');
        const title = await page.title();
        expect(title).toBe('WestJet');
    }, 30000);

    test('Header is present', async () => {
        await page.goto('file://C:/Users/olayi/OneDrive/Documents/Dev class/Final Project/index.html');
        const header = await page.$('header');
        expect(header).not.toBeNull;
    });

    test('Heading is present', async () => {
        await page.goto('file://C:/Users/olayi/OneDrive/Documents/Dev class/Final Project/index.html');
        const heading = await page.$('h1');
        expect(heading).not.toBeNull;
    });

    test('Section is present', async () => {
        await page.goto('file://C:/Users/olayi/OneDrive/Documents/Dev class/Final Project/index.html');
        const section = await page.$('section');
        expect(section).not.toBeNull;
    });

    test('Nav is present', async () => {
        await page.goto('file://C:/Users/olayi/OneDrive/Documents/Dev class/Final Project/index.html');
        const nav = await page.$('nav');
        expect(nav).toBeTruthy();
        //expect(nav).not.toBeNull;
    });

    test('Div element is present', async () => {
        await page.goto('file://C:/Users/olayi/OneDrive/Documents/Dev class/Final Project/index.html');
        const div = await page.$('div');
        expect(div).not.toBeNull;
    });

    // Add more tests for your HTML page as needed
}, 30000);

/*test('renders the index.html correctly', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://C:/Users/olayi/OneDrive/Documents/Dev class/Final Project/index.html');
    
    // Example: Check if the title of the page is correct
    const title = await page.title();
    expect(title).toBe('WestJet')

    // Example: Check if a specific element with ID "heading" exist
    const div = await page.$('div');
    expect(div).toBeTruthy();

    //Additional checks can be added based on your HTML contents

    await browser.close();
}, 30000)*/