import { describe, expect, it } from 'vitest';
import { extractId } from './extractId';
import { replaceComma } from './replaceComma';

describe('helpers', () => {
  it('replaceComma is working correctly', () => {
    const incorrectData = ['Tat,ooine', '23', '10,465', 'arid', '1, standard', '1', '2000,00'];
    const correctData = ['Tatooine', '23', '10465', 'arid', '1 standard', '1', '200000'];
    expect(replaceComma(incorrectData)).toEqual(correctData);
  });

  it('extractId is working correctly', async () => {
    const links = [
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/35/',
      'https://swapi.dev/api/planets/24/'
    ];

    expect(extractId(links[0])).toBe('1');
    expect(extractId(links[1])).toBe('35');
    expect(extractId(links[2])).toBe('24');
  });
});
