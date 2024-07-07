export interface Starship {
  name: string;
  model: string;
  crew: string;
  manufacturer: string;
  max_atmosphering_speed: string;
}

interface APIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Starship[];
}

export class API_service {
  private baseUrl = 'https://swapi.dev/api/starships/';

  public async searchItems(searchTerm: string): Promise<Starship[] | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}?search=${searchTerm}`);
      const result: APIResponse = await response.json();
      return result.results;
    } catch (error) {
      console.error(error);
    }
  }
}
