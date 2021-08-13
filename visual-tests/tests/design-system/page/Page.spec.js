import {goToComponent, componentToMatchSnapshot, disableAnimations} from '../../../storybook';

describe('Page', () => {
    it('renders properly', async () => {
        await goToComponent('design-system-page--default-view', async (page) => {
            await disableAnimations(page);
            await componentToMatchSnapshot(page);
        });
    });
});