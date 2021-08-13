import {goToComponent, componentToMatchSnapshot, disableAnimations} from '../../../storybook';

describe('Card', () => {
    it('renders properly', async () => {
        await goToComponent('design-system-header--default-view', async (page) => {
            await disableAnimations(page);
            await componentToMatchSnapshot(page);
        });
    });
});