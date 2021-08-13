import {goToComponent, componentToMatchSnapshot, disableTransitions} from '../../../storybook';


describe('Card', () => {
    it('renders properly', async () => {
        await goToComponent('design-system-card-card--default-view', async (page, document) => {
            await componentToMatchSnapshot(page);
            const component = await document.getByText('Hello You');

            await disableTransitions(component);
            await component.hover();

            await componentToMatchSnapshot(page);
        });
    });
});