import { Component, ReactNode } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { API_service, Starship } from './services/API_service';
import { Loader } from './components/Loader/Loader';

export class App extends Component {
  private api = new API_service();
  state: { items: Starship[]; searchTerm: string; isLoading: boolean } = {
    items: [],
    searchTerm: '',
    isLoading: false
  };

  async componentDidMount(): Promise<void> {
    const prevSearchTerm = localStorage.getItem('dialecticallaw-search-term') || '';
    this.setState({ isLoading: true });
    this.setState({ items: await this.api.searchItems(prevSearchTerm), searchTerm: prevSearchTerm });
    this.setState({ isLoading: false });
  }

  async componentDidUpdate(
    _prevProps: Readonly<typeof this.props>,
    prevState: Readonly<typeof this.state>
  ): Promise<void> {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.setState({ isLoading: true });
      const items = await this.api.searchItems(this.state.searchTerm);
      this.setState({ items, isLoading: false });
    }
  }

  render(): ReactNode {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <>
        <Search initialSearchTerm={this.state.searchTerm} changeState={this.setState.bind(this)} />
        <Results items={this.state.items} />
      </>
    );
  }
}
