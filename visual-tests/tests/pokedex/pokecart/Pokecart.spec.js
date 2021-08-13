import { goToComponent, componentToMatchSnapshot } from '../../../storybook';

describe('Pokecard', () => {
    it('renders properly', async () => {
        await goToComponent('pokedex-pokecard--default-view', async (page) => {
            await componentToMatchSnapshot(page);
        });
    });
})