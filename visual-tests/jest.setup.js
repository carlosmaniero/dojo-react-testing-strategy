require('pptr-testing-library/extend');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
const puppeteer = require('puppeteer');

beforeAll(async () => {
    global.browser = await puppeteer.launch();
});

afterAll(async () => {
    browser.close();
})

expect.extend({ toMatchImageSnapshot });