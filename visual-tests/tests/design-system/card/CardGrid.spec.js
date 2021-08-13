import {goToComponent, componentToMatchSnapshot, disableTransitions, runWithViewports} from '../../../storybook';


describe('Card', () => {
    const viewports = [
        {
            width: 1920,
            height: 1080
        },
        {
            width: 1200,
            height: 980
        },
        {
            width: 980,
            height: 768
        },
        {
            width: 720,
            height: 1024
        },
        {
            width: 480,
            height: 920
        }
    ];

    it('renders properly', async () => {
        await goToComponent('design-system-card-cardgrid--default-view', async (page, document) => {
            await runWithViewports(page, viewports, async () => {
                await componentToMatchSnapshot(page);
            });
        });
    });
});