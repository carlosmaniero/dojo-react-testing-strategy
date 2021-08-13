const getStorybookHost = () => process.env.STORYBOOK_HOST || 'http://localhost:6006/';


const getComponentPage = (component) =>
    `${getStorybookHost()}iframe.html?id=${component}`


module.exports.goToComponent = async (component, fn) => {
    const page = await browser.newPage();
    await page.goto(getComponentPage(component));

    await fn(page, await page.getDocument());
}

module.exports.componentToMatchSnapshot = async (page, padding = 20) => {
    const rootElement = await page.$('#root');

    await page.evaluate((padding) => {
        document.querySelector('#root').style.display = 'inline-block';
        document.querySelector('#root').style.padding = `${padding}px`;
    }, padding);

    const screenshot = await rootElement.screenshot();
    expect(screenshot).toMatchImageSnapshot();
}

module.exports.disableTransitions = async (page, element) => {
    await page.evaluate((element) => {
        if (element) {
            element.style.transition = 'none';
            return;
        }
        document.querySelectorAll('*').forEach(element => {
            element.style.animation = 'none';
        });
    }, element)
}

module.exports.disableAnimations = async (page, element) => {
    await page.evaluate((element) => {
        if (element) {
            element.style.animation = 'none';
            return;
        }
        document.querySelectorAll('*').forEach(element => {
            element.style.animation = 'none';
        });
    }, element)
}

module.exports.runWithViewports = async (page, viewports, fn) => {
    for (const viewport of viewports) {
        page.setViewport(viewport);
        await fn();
    }
}