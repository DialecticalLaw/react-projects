import { Component, ReactNode } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { API_service, Starship } from './services/API_service';

export class App extends Component {
  private api = new API_service();
  state: { items: Starship[]; searchTerm: string } = { items: [], searchTerm: '' };

  async componentDidMount(): Promise<void> {
    this.setState({ items: await this.api.getItems(1) });
  }

  async componentDidUpdate(
    _prevProps: Readonly<typeof this.props>,
    prevState: Readonly<typeof this.state>
  ): Promise<void> {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.setState({ items: await this.api.searchItems(this.state.searchTerm) });
    }
  }

  render(): ReactNode {
    return (
      <>
        <Search changeState={this.setState.bind(this)} />
        <Results items={this.state.items} />
      </>
    );
  }
}
