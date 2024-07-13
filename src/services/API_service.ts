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

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

const BASE_URL = 'https://swapi.dev/api/planets/';

export async function searchItems(searchTerm: string, page: number | null): Promise<ApiResponse | undefined> {
  try {
    const response = await fetch(`${BASE_URL}?search=${searchTerm}${page ? `&page=${page}` : ''}`);
    const result: ApiResponse = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
