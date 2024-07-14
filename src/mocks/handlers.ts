import { DefaultBodyType, http, HttpResponse, PathParams } from 'msw';
import { ApiResponse, Planet } from '../services/API_service';

export const handlers = [
  http.get<PathParams, DefaultBodyType, Planet>('https://swapi.dev/api/planets/1', () => {
    return HttpResponse.json({
      name: 'Tatooine',
      population: '200000',
      terrain: 'desert',
      orbital_period: '304',
      rotation_period: '23',
      surface_water: '1',
      gravity: '1 standard',
      diameter: '10465',
      climate: 'arid',
      url: 'https://swapi.dev/api/planets/1/'
    });
  }),
  http.get<PathParams, DefaultBodyType, ApiResponse>('https://swapi.dev/api/planets/', () => {
    return HttpResponse.json({
      count: 2,
      next: null,
      previous: null,
      results: [
        {
          name: 'Tatooine',
          population: '200000',
          terrain: 'desert',
          orbital_period: '304',
          rotation_period: '23',
          surface_water: '1',
          gravity: '1 standard',
          diameter: '10465',
          climate: 'arid',
          url: 'https://swapi.dev/api/planets/1/'
        },
        {
          name: 'Alderaan',
          population: '2000000000',
          terrain: 'grasslands, mountains',
          orbital_period: '364',
          rotation_period: '24',
          surface_water: '40',
          gravity: '1 standard',
          diameter: '12500',
          climate: 'temperate',
          url: 'https://swapi.dev/api/planets/2/'
        }
      ]
    });
  })
];
