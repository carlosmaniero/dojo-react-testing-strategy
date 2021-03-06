import nock from 'nock';
import { pokedex, updateCount } from './api';

describe('API', () => {
  const successResponse = [{
      "id": 1,
      "name": {
        "english": "Bulbasaur",
        "japanese": "フシギダネ",
        "chinese": "妙蛙种子",
        "french": "Bulbizarre"
      },
      "type": [
        "Grass",
        "Poison"
      ],
      "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 45
      }
    },
  ]

  it('returns the api response', async () => {
      nock('http://localhost:4200')
          .defaultReplyHeaders({
              'access-control-allow-origin': '*',
              'access-control-allow-credentials': 'true' 
          })
          .get('/')
          .reply(200, successResponse);

      expect(await pokedex()).toEqual(successResponse);
  });

  it('updates the cart', async () => {
    nock('http://localhost:4200')
        .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true' 
        })
        .post('/pokemon/1/updateCart', {count: 100})
        .reply(200, successResponse);

    expect(await updateCount(1, 100)).toEqual(successResponse);
  });
});