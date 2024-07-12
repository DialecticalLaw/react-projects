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

export class API_service {
  private baseUrl = 'https://swapi.dev/api/planets/';

  public async searchItems(searchTerm: string): Promise<Planet[] | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}?search=${searchTerm}`);
      const result: APIResponse = await response.json();
      return result.results;
    } catch (error) {
      console.error(error);
    }
  }
}
