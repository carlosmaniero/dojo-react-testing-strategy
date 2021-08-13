import {goToComponent, componentToMatchSnapshot} from '../../../storybook';


describe('Counter', () => {
    it('renders min disabled properly', async () => {
        await goToComponent('design-system-counter-counter--min-disabled', async (page, document) => {
            await componentToMatchSnapshot(page);
        });
    });
});