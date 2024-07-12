export interface Film {
  title: string;
  director: string;
  release_date: string;
  opening_crawl: string;
  producer: string;
}

interface APIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
}

export class API_service {
  private baseUrl = 'https://swapi.dev/api/films/';

  public async searchItems(searchTerm: string): Promise<Film[] | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}?search=${searchTerm}`);
      const result: APIResponse = await response.json();
      return result.results;
    } catch (error) {
      console.error(error);
    }
  }
}
