import { Component, ReactNode } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { API_service, Starship } from './services/API_service';

export class App extends Component {
  private api = new API_service();
  state: { items: Starship[] } = { items: [] };

  async componentDidMount(): Promise<void> {
    this.setState({ items: await this.api.getItems(1) });
  }

  render(): ReactNode {
    return (
      <>
        <Search />
        <Results items={this.state.items} />
      </>
    );
  }
}
