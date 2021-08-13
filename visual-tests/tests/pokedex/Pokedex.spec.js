import { goToComponent, componentToMatchSnapshot } from '../../storybook';

describe('Pokecard', () => {
    it('renders properly', async () => {
        await goToComponent('pokedex-pokedex--default-view', async (page) => {
            await componentToMatchSnapshot(page);
        });
    });

    it('shows a loading', async () => {
        await goToComponent('pokedex-pokedex--loading-view', async (page) => {
            await componentToMatchSnapshot(page);
        });
    });
})