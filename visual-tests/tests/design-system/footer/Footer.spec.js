import {goToComponent, componentToMatchSnapshot, disableAnimations} from '../../../storybook';

describe('Footer', () => {
    it('renders properly', async () => {
        await goToComponent('design-system-footer--default-view', async (page) => {
            await componentToMatchSnapshot(page);
        });
    });
});