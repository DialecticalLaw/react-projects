export interface Planet {
  name: string;
  population: string;
  terrain: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  gravity: string;
  diameter: string;
  climate: string;
}

interface APIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

const BASE_URL = 'https://swapi.dev/api/planets/';

export async function searchItems(searchTerm: string): Promise<Planet[]> {
  try {
    const response = await fetch(`${BASE_URL}?search=${searchTerm}`);
    const result: APIResponse = await response.json();
    return result.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
