import {goToComponent, componentToMatchSnapshot} from '../../../storybook';


describe('Counter', () => {
    it('renders min disabled properly', async () => {
        await goToComponent('design-system-counter-counter--min-disabled', async (page) => {
            await componentToMatchSnapshot(page);
        });
    });

    it('renders all enabled properly', async () => {
        await goToComponent('design-system-counter-counter--all-enabled', async (page) => {
            await componentToMatchSnapshot(page);
        });
    });

    it('renders max disabled properly', async () => {
        await goToComponent('design-system-counter-counter--max-disabled', async (page) => {
            await componentToMatchSnapshot(page);
        });
    });
});