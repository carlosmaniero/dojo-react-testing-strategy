import {goToComponent, componentToMatchSnapshot, disableTransitions} from '../../storybook';


describe('SmallButton', () => {
    it('renders properly', async () => {
        await goToComponent('design-system-smallbutton--default-view', async (page, document) => {
            await componentToMatchSnapshot(page);
            const component = await document.getByText('+');

            await disableTransitions(component);
            await component.hover();

            await componentToMatchSnapshot(page);
        });
    });
});